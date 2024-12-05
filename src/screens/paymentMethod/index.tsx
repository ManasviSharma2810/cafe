import React, { useState } from 'react';
import { Button, View, Text } from 'react-native';
import { CardField, useStripe } from '@stripe/stripe-react-native';

const PaymentScreen: React.FC = () => {
  const { confirmPayment, createPaymentMethod } = useStripe();
  const [cardDetails, setCardDetails] = useState<CardField.CardDetails | null>(null);
  const [paymentStatus, setPaymentStatus] = useState<string | null>(null);

  
  const createPaymentIntent = async (paymentMethodId: string) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          clientSecret: 'dummyClientSecret123456', // Simulated client secret
          amount: 2000, // Simulated amount in cents (e.g., $20)
          currency: 'usd',
        });
      }, 1000); // Simulate a backend delay
    });
  };

  const handlePayPress = async () => {
    if (!cardDetails?.complete) {
      setPaymentStatus('Please enter valid card details');
      return;
    }
  
    try {
      // Create a payment method using the card details
      const { paymentMethod, error } = await createPaymentMethod({
        type: 'Card', // Ensure this is set to 'Card'
        card: cardDetails,
      });
  
      if (error) {
        console.error(error);
        setPaymentStatus('Error creating payment method');
        return;
      }
  
      // Simulate a backend call to get the PaymentIntent client secret
      const paymentIntentData = await createPaymentIntent(paymentMethod.id);
  
      // Confirm the payment using the client secret from the "backend"
      const { error: confirmError } = await confirmPayment(paymentIntentData.clientSecret, {
        type: 'Card', // Provide the correct payment method type
        paymentMethodId: paymentMethod.id,
      });
  
      if (confirmError) {
        console.error(confirmError);
        setPaymentStatus('Payment failed');
      } else {
        setPaymentStatus('Payment successful!');
      }
    } catch (error) {
      console.error(error);
      setPaymentStatus('An error occurred');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18, marginBottom: 20 }}>Stripe Payment</Text>

      <CardField
        postalCodeEnabled={true} // Enable postal code field
        placeholders={{
          number: '4242 4242 4242 4242', // Test card number
        }}
        cardStyle={{
          backgroundColor: '#FFFFFF',
          textColor: '#000000',
          borderWidth: 1,
          borderColor: '#000000',
          borderRadius: 10,
        }}
        style={{
          width: '100%',
          height: 50,
          marginVertical: 30,
        }}
        onCardChange={(cardDetails) => setCardDetails(cardDetails)} // Update card details
      />

      <Button onPress={handlePayPress} title="Pay Now" />

      {paymentStatus && (
        <Text style={{ marginTop: 20, textAlign: 'center', fontSize: 16 }}>
          {paymentStatus}
        </Text>
      )}
    </View>
  );
};

export default PaymentScreen;