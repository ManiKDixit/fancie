import { StatusBar } from 'expo-status-bar';
import { Image, View, StyleSheet, useWindowDimensions, Text } from 'react-native';
import CustomButton from '../components/CustomButton';
import { router } from 'expo-router';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // Ensures the background image fills the container
  },
  appPic: {
    position: 'absolute',
    width: '100%', // Fills the container's width
    height: '65%', // Sets the app-pic image height to 60%
    top: '0%', // Positions the app-pic image 20% from the top
  },
});

export default function App() {
  const { height } = useWindowDimensions();

  return (
    
    <View style={styles.container}>
      <Image blurRadius={22}
        source={require('../assets/images/cream1.jpg')}
        style={styles.backgroundImage}
      />
      <Image source={require('../assets/images/app-pic.png')} style={styles.appPic} />
      <StatusBar style="auto" />

      <View className='absolute  bottom-[10%] w-full h-[25%]'>
        <Text className='mt-5 text-4xl font-medium pl-3'>100+ local brand support</Text>
        <Text className='mt-5 pl-3 text-gray-600 text-base '>Local brands that already have perfect quality and are not inferior to foreign brands</Text>
        
      </View>

      <CustomButton 
        title='Get Started'
        handlePress={() => router.push('/onboarding')}
        containerStyles='absolute w-40 bottom-[2%] right-[2%]'
        />
    </View>
  );
}
