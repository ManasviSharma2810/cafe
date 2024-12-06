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
          clientSecret: 'dummyClientSecret123456', 
          amount: 2000, 
          currency: 'usd',
        });
      }, 1000); 
    });
  };

  const handlePayPress = async () => {
    if (!cardDetails?.complete) {
      setPaymentStatus('Please enter valid card details');
      return;
    }
  
    try {
  
      const { paymentMethod, error } = await createPaymentMethod({
        type: 'Card'
        card: cardDetails,
      });
  
      if (error) {
        console.error(error);
        setPaymentStatus('Error creating payment method');
        return;
      }
  
      
      const paymentIntentData = await createPaymentIntent(paymentMethod.id);
  
      
      const { error: confirmError } = await confirmPayment(paymentIntentData.clientSecret, {
        type: 'Card', 
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
        postalCodeEnabled={true} 
        placeholders={{
          number: '4242 4242 4242 4242', 
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
        onCardChange={(cardDetails) => setCardDetails(cardDetails)} 
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