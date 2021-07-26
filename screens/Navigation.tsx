import * as React from 'react';
import {Image,StyleSheet,Text,View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Playlist from './Playlist';
import Podcasts from './Podcasts';
import Profile from './Profile';
import { COLORS, icons } from "../constants";
import Home from './Home'; 




const Tab = createBottomTabNavigator();

interface TabContainerProps {
  label?: string
  focused?: boolean
}




const Navigation = () => {

  const { Navigator, Screen } = Tab
  return(

    <Navigator>
    <Screen  options={{

                     
      tabBarIcon:({focused}) =>(
          <Image 
          source={icons.list}
          resizeMode="contain"
          style={[styles.container,{tintColor: focused ? COLORS.black : COLORS.secondary}]}

      />   )
      }} 
    name="Playlist" component={Playlist} />

    <Screen  options={{
                    tabBarIcon:({focused}) =>(
                        <Image 
                        source={icons.search}
                        resizeMode="contain"
                        style={[styles.container,{tintColor: focused ? COLORS.black : COLORS.secondary}]}
                    
                    />   )
               }}  name="Discover" component={Home} />


    <Screen name="Profile"   options={{
                    tabBarIcon:({focused}) =>(
                        <Image 
                        source={icons.user}
                        resizeMode="contain"
                        style={[styles.container,{tintColor: focused ? COLORS.black : COLORS.secondary}]}
                    
                    />   )
               }} 
               component={Profile} />

  </Navigator>

  )
  
}


  const styles = StyleSheet.create({
    container: {
        width: 25,
        height: 25
    },
  });


  export default Navigation;