import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';

import {images} from '../../assets/images';
import {styles} from './styles';

const tutorialSteps = [
  {
    id: 1,
    title: 'Welcome to Decafe',
    description:
      'Discover your favorite coffee blends and get them delivered fresh!',
    image: images.coffeeCup,
  },
  {
    id: 2,
    title: 'Order in Seconds',
    description: 'Choose your coffee and customize it just the way you like.',
    image: images.orderCoffee,
  },
  {
    id: 3,
    title: 'Stay Updated',
    description: 'Never miss our exclusive offers and discounts!',
    image: images.coffeeOffers,
  },
];

const TutorialScreen = ({navigation}: any) => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < tutorialSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      navigation.replace('SignUp');
    }
  };

  const renderDots = () => {
    return (
      <View style={styles.dotContainer}>
        {tutorialSteps.map((_, index) => (
          <View
            key={index}
            style={[styles.dot, currentStep === index && styles.activeDot]}
          />
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Image source={tutorialSteps[currentStep].image} style={styles.image} />
      <Text style={styles.title}>{tutorialSteps[currentStep].title}</Text>
      <Text style={styles.description}>
        {tutorialSteps[currentStep].description}
      </Text>
      {renderDots()}
      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
        <Text style={styles.nextButtonText}>
          {currentStep === tutorialSteps.length - 1 ? 'Done' : 'Next'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TutorialScreen;
