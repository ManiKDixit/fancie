import { View, Text } from 'react-native';
import React from 'react';
import { Stack, Tabs } from 'expo-router';
//  import { ShoppingCartIcon , HomeIcon , UserIcon  } from 'react-native-heroicons/solid';
import {ShoppingCartIcon ,  HomeIcon , UserIcon, VideoCameraIcon} from 'react-native-heroicons/micro'

const TabsLayout = () => {
  return (
    <>
   
      <Tabs
      screenOptions={{
        tabBarShowLabel:true,
        //tabBarActiveTintColor:'black',
        tabBarActiveTintColor: '#FDAFA2', // Change this color to set the selected color
          tabBarInactiveTintColor: '#e6d8b8' , //'#edeab9' ,//'#FCF7EA', // Change this color to set the unselected color
        tabBarStyle: {
            backgroundColor:'#000000',
            borderTopWidth: 1,
            borderTopColor:'#FDAFA2',
            height:57,
           
            
        }
      }}
      >
        <Tabs.Screen 
          name="home"
          options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <HomeIcon color={color} size={25} />
            ),
          }}
        />

    <Tabs.Screen 
          name="cart"
          options={{
            title: 'Cart',
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <ShoppingCartIcon color={color} size={25} />
            ),
          }}
        />

        <Tabs.Screen 
          name="studio"
          options={{
            title: 'studio',
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <VideoCameraIcon color={color} size={25} />
            ),
          }}
        />

            <Tabs.Screen 
          name="profile"
          options={{
            title: 'Profile',
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <UserIcon color={color} size={25} />
            ),
          }}
        />

      </Tabs>
      

     
    </>
  );
}

export default TabsLayout;
 /**<Tabs.Screen 
          name="profile"
          options={{
            title: 'Profile',
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <HomeIcon color='blue' size={30} />
            ),
          }}
        /> */