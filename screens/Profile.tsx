import * as React from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView ,Image,Button,ScrollView,Switch} from "react-native";
import { icons, images, SIZES, COLORS, FONTS} from '../constants';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export interface Props { }
export interface State { }

const Profile = () => {
    return (
        <SafeAreaView style={styles.container}>
    
    
        <View style={styles.parent1}><Text>  Back </Text></View>
  
              <View style={styles.parent2} >
              
              <View style={styles.achild}><Image 
                          source={images.pimage}
                          resizeMode="contain"
                          style={styles.img1} /></View>
              <View style={styles.achild2}><Text style={{fontWeight:"bold"}}> Charan </Text><Text style={styles.txt2}> @91Charan </Text></View>
              <View style={styles.achild3} ><Image 
                          source={images.edit}
                          resizeMode="contain"
                          style={styles.img2} /></View> 
              
        </View>   
  
  
        <View style={styles.parent3}>
  
          <View style={styles.bchild1}><Text style={styles.txt1}>    Most Listened </Text></View>
  
          <View style={styles.bchild2}>
                          
               <ScrollView horizontal={true}>
                 <View style={styles.bchild3}>
                      <View style={styles.fx}>
                           <Image source={images.gma} style={styles.img3}/> 
                      </View>
                 </View>
  
                 <View style={styles.bchild4}>
                      <View style={styles.fx}>
                           <Image source={images.univer} style={styles.img3}/> 
                      </View>
                 </View>
  
                 <View style={styles.bchild5}>
                      <View style={styles.fx}>
                           <Image source={images.daily} style={styles.img3}/> 
                      </View>
                 </View>
  
  
  
                 
  
  
  
                 
  
               </ScrollView>           
  
          </View>
  
          <View style={styles.bchild6}>
                          
                          <ScrollView horizontal={true}>
                            <View style={styles.bchild7}>
                                 <View style={styles.fx}>
                                      <Image source={images.baloons} style={styles.img3}/> 
                                 </View>
                            </View>
             
                            <View style={styles.bchild8}>
                                 <View style={styles.fx}>
                                      <Image source={images.diver} style={styles.img3}/> 
                                 </View>
                                
                            </View>
             
                            <View style={styles.bchild9}>
                                 <View style={styles.fx}>
                                      <Image source={images.stories} style={styles.img3}/> 
                                 </View>
                            </View>
             
                            
             
                            
             
                          </ScrollView>           
             
                     </View>
      </View>
  
  
  
  
      <View style={styles.parent4}>
   
          <View style={styles.cchild1}><Text style={styles.ftxt}>    Notifications </Text></View>
          
       <View style={styles.cchild2}>
            <View style={styles.dchild1}><Text>New Episodes</Text></View><View style={styles.dchild2}><Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          ios_backgroundColor="#3e3e3e"
        /></View>
            </View>
  
        <View style={styles.cchild3}><View style={styles.dchild3}><Text>Follow requests</Text></View><View style={styles.dchild4}><Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          ios_backgroundColor="#3e3e3e"
        /></View></View>
  
        <View style={styles.cchild4}><View style={styles.dchild5}><Text>New app features</Text></View><View style={styles.dchild6}><Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          ios_backgroundColor="#3e3e3e"
        /></View></View>
  
  
     </View>   
        
  
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      margin:10,
      backgroundColor:"white",
      flexDirection: "column"
    },
    parent1:{ flex: 1,margin:"5%"},
    parent2:{flex: 2, backgroundColor: "#F5F5F5",margin:4,borderRadius:100,flexDirection: "row"},
    parent3:{flex: 7, backgroundColor: "#F5F5F5",margin:4,borderRadius:100},
    parent4:{flex: 6, backgroundColor: "#DCDCDC" , margin:4 , borderRadius:10,justifyContent:"center" },
    achild:{flex: 1, backgroundColor: "#F5F5F5",borderRadius:5,justifyContent:"center",paddingHorizontal:10},
    achild2:{flex: 3, backgroundColor: "#F5F5F5",justifyContent:"center"},
    achild3:{flex: 2, borderRadius:5,backgroundColor: "#F5F5F5",direction:"rtl",justifyContent:"center",paddingHorizontal:30},
    bchild1:{flex: 2, backgroundColor: "#F5F5F5",justifyContent:"center",borderRadius:5 ,paddingHorizontal:25},
    bchild2:{flex: 6, backgroundColor: "#F5F5F5",margin:1,borderRadius:0 },
    bchild3:{height:80,width:80,marginLeft:30,marginTop:10},
    bchild4:{height:80,width:80,marginLeft:20,marginTop:10},
    bchild5:{height:80,width:80,marginLeft:20,marginTop:10},
    bchild6:{flex: 6, backgroundColor: "#F5F5F5",margin:0,borderRadius:0 },
    bchild7:{height:80,width:80,marginLeft:30,marginTop:10},
    bchild8:{height:80,width:80,marginLeft:20,marginTop:10},
    bchild9:{height:80,width:80,marginLeft:20,marginTop:10},
    cchild1:{flex: 1, backgroundColor: "#F5F5F5",margin:1,borderRadius:3,justifyContent:"center" },
    cchild2:{flex: 1,flexDirection:"row", backgroundColor: "#F5F5F5",margin:1,borderRadius:3,justifyContent:"center" },
    cchild3:{flex: 1,flexDirection:"row", backgroundColor: "#F5F5F5",margin:1,borderRadius:3,justifyContent:"center" },
    cchild4:{flex: 1, flexDirection:"row",backgroundColor: "#F5F5F5",margin:1,borderRadius:3,justifyContent:"center" },
    dchild1:{flex:1,justifyContent:"center",paddingHorizontal:20},
    dchild2:{flex:1,direction:"rtl",justifyContent:"center",paddingHorizontal:20},
    dchild3:{flex:1,justifyContent:"center",paddingHorizontal:20},
    dchild4:{flex:1,direction:"rtl",justifyContent:"center",paddingHorizontal:20},
    dchild5:{flex:1,justifyContent:"center",paddingHorizontal:20},
    dchild6:{flex:1,direction:"rtl",justifyContent:"center",paddingHorizontal:20},
    img1:{    width: 40,
       height: 40},
    img2:{width: 60,
       height: 60},
    img3:{flex:1,width:80,height:100,resizeMode:'cover',borderRadius:15},
    fx:{flex:2},
    img5:{},
    img6:{},   
     txt1:{fontWeight: "bold",fontSize:15},
     txt2:{fontSize:10}, 
     ftxt:{fontWeight: "bold"}

  });

export default Profile;