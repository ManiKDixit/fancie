
import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import LottieView from 'lottie-react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation, useRouter } from 'expo-router';

const {width , height} = Dimensions.get('window')

const OnboardingScreen = () => {
  const router = useRouter()

  const handleDone = () => {
    router.push('/home');
  }

  const doneButton = ({...props}) => {
    return (
      <TouchableOpacity {...props} className='p-[20px] bg-white rounded-bl-full rounded-tl-full'>
        <Text>Done</Text>
      </TouchableOpacity>
    )
  }
  return (
    <View className='flex-1 #FCF7EA'>
      <Onboarding
      onDone={handleDone}
      onSkip={handleDone}x
      // DoneButtonComponent={doneButton}
        containerStyles={{ paddingHorizontal: 15 }}
        pages={[
          {
            backgroundColor: '#FCF7EA',
            image: (
              <View className='h-[300px] w-[400px]'>
                <LottieView
                  source={require('../assets/animations/Animation1.json')}
                  autoPlay
                  loop
                  style={{ height: 300, width: 400 }}
                />
              </View>
            ),
           
            title: 'Welcome',
            subtitle: 'Get ready to Dive into the multiverse of home grown labels and aesthetic modern outfits',
          },
          {
            backgroundColor: '#F9E6E1', //'#dff5e1', //'#ECB3A5',
            image: (
              <View className='h-[300px] w-[380px]'>
                <LottieView
                  source={require('../assets/animations/Animation2.json')}
                  autoPlay
                  loop
                  style={{ height: 300, width: 400 }}
                />
                {/* <Text>Page 2 of Onboarding</Text> */}
              </View>
            ),
            title: 'Best Offers',
            subtitle: 'Shop your heart out with the huge variety of options we have got ',
          },
          {
            backgroundColor: '#FEE6F6',
            image: (
              <View className='h-[300px] w-[380px]'>
                <LottieView
                  source={require('../assets/animations/Animation3.json')}
                  autoPlay
                  loop
                  style={{ height: 300, width: 400 , fontWeight:'bold' }}
                />
                {/* <Text>Page 3 of OnBoarding</Text> */}
              </View>
            ),
            title: 'Shop with a Tap',
            subtitle: 'Explore , Shortlist and Buy items in a tap with our smooth layout',
          },
        ]}
      />
      <StatusBar  style='dark' />
    </View>
  );
}

export default OnboardingScreen;
