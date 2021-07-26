import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack'
import {
    SafeAreaView,ScrollView,Text,Image,View,StyleSheet
} from 'react-native';
import { Params, TopNavigatorParamsList } from '../types';
import pods from './ListInfo';



export interface SplashProps {
  navigation: StackNavigationProp<TopNavigatorParamsList, 'Navigation'>
}


const Playlist:  React.FC<SplashProps> = ({ navigation }) => {
    return (
      <SafeAreaView>


        <TouchableOpacity onPress={()=>navigation.navigate('Podcasts')}>
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.sview}
          >
            {pods.map((pod: Params) => {
              return (
              
                <View style={styles.parent1}>

                  <View style={styles.parent2}>
                  <Text
                    style={styles.txt}
                  >
                    {pod.name}
                  </Text>
                  </View>
                  <View style={styles.parent3}>
                        <Image source={pod.image} style={styles.img1}/>       
          </View>
                  
             </View>  

              )
            })}

          </ScrollView>
              </TouchableOpacity>

     </SafeAreaView>
    );
}

export default Playlist;


const styles = StyleSheet.create({
  
  parent1:{ flexDirection:"row",padding:8},
  parent2:{flex:2},
  parent3:{flex:1,justifyContent:"center"},
  txt:{textAlign: 'left',
  fontSize: 14,
  color: '#000000',
  padding:10},
  img1:{width: 10,
    height: 10,paddingBottom:10,
    alignSelf: 'flex-end'},
  sview:{marginHorizontal: 24, paddingTop: 20}  

});