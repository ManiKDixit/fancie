import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import React, { useLayoutEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { BasketIcon, ArrowLeftIcon } from 'react-native-heroicons/solid';
import { SafeAreaView } from 'react-native-safe-area-context';
//import { ArrowLeftIcon } from 'react-native-heroicons/micro';

const Item = () => {
  const navigation = useNavigation();
  const { params: { item } } = useRoute();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  // State to manage the selected size
  const [selectedSize, setSelectedSize] = useState(null);

  // Function to handle size button press
  const handlePress = (size) => {
    // Set the selected size
    setSelectedSize(size);
  };

  return (
    <SafeAreaView className='bg-[#e6d8b8] flex-1'>
      <ScrollView>
        <View className='relative'>
          <TouchableOpacity onPress={navigation.goBack}
            className='absolute p-1 ml-4 mt-4 bg-[e6d8b8] border rounded-full'>
            <ArrowLeftIcon size={25} color='black' />
          </TouchableOpacity>
        </View>
        <View className='items-center justify-center mt-3'>
          <Text className='text-2xl'>Details</Text>
        </View>
        <Image
          source={item.image}
          resizeMode='cover'
          className='items-center justify-center h-96 w-64 ml-14 mt-11 rounded-2xl'
        />
        <View className='relative m-3'>
          <Text className='text-3xl font-medium mb-2'>{item.title}</Text>
          <Text className='text-xs text-gray-800 font-light'>{item.description}</Text>
        </View>
        <Text className='ml-3 text-sm font-semibold'>Size</Text>
        <View className='flex flex-row justify-between'>
          {['S', 'M', 'L', 'XL'].map((size) => (
            <TouchableOpacity
              key={size}
              className='rounded-full border m-3 h-9 w-14 p-1 border-gray-500 items-center justify-center'
              onPress={() => handlePress(size)}
              style={[
                { backgroundColor: selectedSize === size ? '#fdafa2' : '#e6d8b8' },
                selectedSize === size && { borderColor: '#fdafa2' } // Remove border when pressed
              ]}
            >
              <Text style={[{ color: selectedSize === size ? '#fff' : '#000' }]}>{size}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View className='flex flex-row justify-between'>
          <Text className='text-3xl text-gray-700 mb-4 m-3'>
            <Text className='text-gray-500'>${' '}</Text>{item.price}
          </Text>
          <Text className='absolute m-3 mt-12 ml-7 text-gray-600 font-light'>/item</Text>
          <TouchableOpacity className='bg-black rounded-full h-12 w-32 items-center justify-center mt-6 m-3'>
            <Text className='text-white'>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Item;


          
//       </ScrollView>
//     </SafeAreaView>

//     // <SafeAreaView>
//     //     <BasketIcon color={'#FDAFA2'} />
        
//     // <ScrollView>
//     //   <View className="relative">
        
//     //      <TouchableOpacity onPress={navigation.goBack} 
//     //      className='absolute top-14 left-5 p-2 bg-gray-100 rounded-full'>
//     //         <ArrowLeftIcon size={20} color='#00CCBB'/>
//     //      </TouchableOpacity>
//     //   </View>
//     //     </ScrollView>
//     // </SafeAreaView>
//   );
// }

// export default Item;
