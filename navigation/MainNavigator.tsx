import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Navigation from '../screens/Navigation'
import Podcasts from '../screens/Podcasts'
import Profile from '../screens/Profile'
import Playlist from '../screens/Playlist'

const MainStack = createStackNavigator()

const MainNavigator: React.FC = () => {
  const { Navigator, Screen } = MainStack

  return (
    <Navigator headerMode="none"  > 

        <Screen name="Navigation" component={Navigation} />
        <Screen name="Podcasts" component={Podcasts} />
    
    </Navigator>
  )
}

export default MainNavigator
