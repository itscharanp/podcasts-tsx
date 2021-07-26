import React from "react";
import { StyleSheet, Text, View,SafeAreaView ,Image,Button,ScrollView, TouchableOpacity} from "react-native";
import { icons, images} from '../constants';
import { Params, TopNavigatorParamsList } from '../types';
import pods from './ListInfo';

import { useNavigation } from '@react-navigation/native';
import Playlist from "./Playlist";
import { StackNavigationProp } from "@react-navigation/stack";


export interface SplashProps {
  navigation: StackNavigationProp<TopNavigatorParamsList, 'Podcasts'>
}



const Podcasts: React.FC<SplashProps> = ({navigation}) => {

    
  return (
    <SafeAreaView style={styles.container}>
  <View style={styles.parent1} >
      <View style={styles.child1} ><TouchableOpacity onPress={() => navigation.push('Navigation') } ><Text style={styles.child2}>Back</Text></TouchableOpacity></View>
      
      
      <View style={styles.child3}>
        <View style={styles.child4}></View>
        <View style={styles.inchild1}><Image 
                        source={images.gma}
                        resizeMode="contain"
                        style={styles.img2} /></View>
        <View style={styles.inchild2}></View>
      </View>
      


      <View style={styles.child5}>
       <View style={styles.inchild5} ><Image 
                        source={images.option}
                        resizeMode="contain"
                        style={styles.img} /></View>
       <View style={styles.inchild3} ><Text style={styles.txt1}> Good Morning America</Text><Text style={styles.txt2}> Mike o conel</Text></View>
        <View style={styles.inchild4} ><Image 
                        source={images.play}
                        resizeMode="contain"
                        style={styles.img} /></View>
      </View>
      
      <View style={styles.child6} ></View> 
      </View>

      <View style={styles.parent2} >
          <View style={styles.list} >  
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.sview}
          >
            {pods.map((boat: Params) => {
              return (
              
                <View style={styles.parent5}>

                <View style={styles.parent6}>
                <Text
                  style={styles.txt3}
                >
                  {boat.name}
                </Text>
                </View>
                <View style={styles.parent7}>
                      <Image source={boat.image} style={styles.img3}/>       
        </View>
                
           </View>  

              )
            })}

          </ScrollView>
          </View> 
       </View>      
      </SafeAreaView>
    
    
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor:"white",
    flexDirection: "column"
  },
  parent1:{
    flex: 1.5, backgroundColor: "#3399FF" 
  },
  child1:{flex: 1, backgroundColor:"#3399FF",paddingHorizontal:10,justifyContent:"center",color:"white"},
  child2:{fontSize:12,color:"white"},
  child3:{flex: 3, backgroundColor: "#3399FF",flexDirection:"row"},
  child4:{ flex: 1, backgroundColor: "#3399FF"},
  child5:{flex: 1, flexDirection:"row", backgroundColor: "#3399FF"},
  child6:{flex: 1, flexDirection:"row", backgroundColor: "#3399FF"},
  inchild1:{flex: 2.6, backgroundColor: "#3399FF",justifyContent:"flex-start"},
  inchild2:{flex: 1, backgroundColor: "#3399FF"},
  inchild3:{flex: 3, backgroundColor: "#3399FF",justifyContent:"center",paddingHorizontal:25},
  inchild4:{flex: 2, backgroundColor: "#3399FF",justifyContent:"center"},
  inchild5:{flex: 2, backgroundColor: "#3399FF"},
  txt1:{fontSize:13,color:"white"},
  txt2:{fontSize:9,paddingHorizontal:40,margin:"2%",color:"white"},
  img:{ width: 50,
    height: 50,
    borderRadius:10,
    paddingHorizontal:50},
  img2:{ width: 220,
    height: 170,
    borderRadius:10},  
  parent2:{flex: 1.3, backgroundColor: "#3399FF" },
  list:{
    flex: 1, backgroundColor: "#F5F5F5",borderTopLeftRadius:20, borderTopRightRadius:20
  },
  sview:{marginHorizontal: 24, paddingTop: 20},
  parent5:{flexDirection:"row",padding:8},
  parent6:{flex:2},
  txt3:{ textAlign: 'left',
  fontSize: 14,
  color: '#000000',
  padding:10},
  img3:{width: 10,
    height: 10,paddingBottom:10,
    alignSelf: 'flex-end'},
    parent7:{flex:1,justifyContent:"center"}

});

export default Podcasts;