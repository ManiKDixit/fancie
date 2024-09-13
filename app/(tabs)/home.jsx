

// // export default Home #e6d4aa #edeab9


// import { View, Text, Image, FlatList, Pressable, TextInput, TouchableOpacity, ScrollView, Touchable } from 'react-native';
// import React from 'react';
// import { StatusBar } from 'expo-status-bar';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { MagnifyingGlassIcon } from 'react-native-heroicons/solid';
// import { DataFlat } from '../../constants/DataFlat';
// import { NewItemsFlat } from '../../constants/DataFlat';
// import { useNavigation } from 'expo-router';

// const Home = () => {
//   const navigation = useNavigation()

//   return (
//     <SafeAreaView className='bg-[#e6d8b8] flex-1'>  
//       <ScrollView>
//         <View className='flex flex-row justify-between h-30 '>
//           <Text className='m-6 mb-3 left-[4%] top-[4%] text-3xl font-light'>Let's make your fashion</Text>
//           <Image
//             source={require('../../assets/images/profile1.webp')}
//             className='h-[50%] w-[17%] rounded-full m-5 mt-12'
//           />
//         </View>
//         <View className='flex flex-row border rounded-full  m-6  h-12 items-center px-4'>
//           <TextInput
//             className='flex-1'
//             placeholder="Search anything here"
//           />
//           <MagnifyingGlassIcon color='black' size={22} style={{
//             position: 'absolute',
//             right: 16
//           }} />
//         </View>
//         <View className='mt-1 h-29'>
//           <View className='flex flex-row justify-between m-3'>
//             <Text className='text-2xl'>Categories</Text>
//             <TouchableOpacity>
//               <Text className='text-base text-gray-500 font-light'>See All</Text>
//             </TouchableOpacity>
//           </View>
//           <FlatList
//             data={DataFlat}
//             showsHorizontalScrollIndicator={false}
//             keyExtractor={(item) => item.id.toString()}
//             renderItem={({ item }) => (
//               <TouchableOpacity>
//                 <View className='h-30 rounded-md mr-4'>
//                   <Image
//                     source={item.image}
//                     resizeMode='cover'
//                     className='w-14 h-14 rounded-full'
//                   />
//                   <Text>{item.title}</Text>
//                 </View>
//               </TouchableOpacity>
//             )}
//             horizontal
//             contentContainerStyle={{ paddingHorizontal: 16 }}
//           />
//         </View>
//         <View className='h-96'>
//           <Text className='mt-3 ml-5 mb-2 text-2xl'>New Items</Text>
         
//           <FlatList
//           data={NewItemsFlat}
//           showsHorizontalScrollIndicator={false}
//           keyExtractor={(item) => item.id.toString()}
//           renderItem={({ item }) => (
//             <>
//               <View className=' h-60 w-40 mr-4'>
//                 <TouchableOpacity onPress={() => { navigation.navigate('item' , {
//                   id , 
//                   image,
//                   title,
//                   price
//                 }) }}>
//                   <Image 
//                     source={item.image}
//                     resizeMode='cover'
//                     className='w-full h-full rounded-2xl'
//                   />
//                 </TouchableOpacity>
               
//               </View>

//               <View className='items-center absolute left-4 bottom-[25%] '>
//                 <TouchableOpacity className='bg-black rounded-full  h-12 w-32 items-center justify-center' >
//                   <Text className='text-white  flex'>Add to Cart</Text>
//                 </TouchableOpacity>              
//               </View>
              
//               <Text className='ml-14 absolute items-center justify-center flex bottom-[17%]'>{item.title}</Text>
//                <Text className='ml-10 absolute mt-1 text-2xl font-semibold bottom-[7%]'><Text className='text-gray-400 font-bold'>$</Text> {item.price}</Text>
              
//               </>
           
//           )}

          

//           horizontal
//           contentContainerStyle={{ paddingHorizontal: 16 }}
//         />

        

          
//         </View>
//       </ScrollView>

//       <StatusBar style='auto' />
//     </SafeAreaView>
//   );
// }

// export default Home;



import { View, Text, Image, FlatList, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MagnifyingGlassIcon } from 'react-native-heroicons/solid';
import { DataFlat, NewItemsFlat } from '../../constants/DataFlat';
import { useNavigation } from 'expo-router';

const Home = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView className='bg-[#e6d8b8] flex-1'>
      <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
        <View className='flex flex-row justify-between h-30 '>
          <Text className='m-6 mb-3 left-[4%] top-[4%] text-3xl font-light'>Let's make your fashion</Text>
          <Image
            source={require('../../assets/images/profile1.webp')}
            className='h-[50%] w-[17%] rounded-full m-5 mt-12'
          />
        </View>
        <View className='flex flex-row border rounded-full m-6 h-12 items-center px-4'>
          <TextInput
            className='flex-1'
            placeholder="Search anything here"
          />
          <MagnifyingGlassIcon color='black' size={22} style={{
            position: 'absolute',
            right: 16
          }} />
        </View>
        <View className='mt-1 h-29'>
          <View className='flex flex-row justify-between m-3'>
            <Text className='text-2xl'>Categories</Text>
            <TouchableOpacity>
              <Text className='text-base text-gray-500 font-light'>See All</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={DataFlat}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity>
                <View className='h-30 rounded-md mr-4'>
                  <Image
                    source={item.image}
                    resizeMode='cover'
                    className='w-14 h-14 rounded-full'
                  />
                  <Text>{item.title}</Text>
                </View>
              </TouchableOpacity>
            )}
            horizontal
            contentContainerStyle={{ paddingHorizontal: 16 }}
          />
        </View>
        <View className='h-96'>
          <Text className='mt-3 ml-5 mb-2 text-2xl'>New Items</Text>
          <FlatList
            data={NewItemsFlat}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View className='h-60 w-40 mr-4'>
                <TouchableOpacity onPress={() => navigation.navigate('item', { item })}>
                  <Image 
                    source={item.image}
                    resizeMode='cover'
                    className='w-full h-full rounded-2xl'
                  />
                </TouchableOpacity>
                {/* <View className='items-center absolute left-4 bottom-[25%]'>
                  <TouchableOpacity className='bg-black rounded-full h-12 w-32 items-center justify-center'>
                    <Text className='text-white flex'>Add to Cart</Text>
                  </TouchableOpacity>              
                </View> */}

                <View className='items-center relative bottom-[12%] '>
                <TouchableOpacity className='bg-black rounded-full  h-12 w-32 items-center justify-center' >
                  <Text className='text-white  flex'>Add to Cart</Text>
                 </TouchableOpacity>              
                </View>
                <Text className='relative bottom-[10%] w-full text-center'>{item.title}</Text>
                <Text className='relative bottom-[10%] w-full text-center text-2xl font-semibold'>
                  <Text className='text-gray-400 font-bold'>$</Text> {item.price}
                </Text>
              </View>
            )}
            horizontal
            contentContainerStyle={{ paddingHorizontal: 16 }}
          />
        </View>
      </ScrollView>
      <StatusBar style='auto' />
    </SafeAreaView>
  );
}

export default Home;
