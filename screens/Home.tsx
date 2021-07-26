import React from "react";
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList,
    ScrollView,
    TextInput
} from "react-native";
import { Params, TopNavigatorParamsList } from '../types';
import pods from './ListInfo';



import { icons, images, SIZES, COLORS, FONTS } from '../constants'
import Playlist from "./Playlist";
import { StackNavigationProp } from "@react-navigation/stack";


export interface SplashProps {
  navigation: StackNavigationProp<TopNavigatorParamsList, 'Navigation'>
}





function renderHeader() {
    return (
        <View style={styles.header1}>
            <View style={styles.header2}>
                <TextInput
                    placeholder="Search..."
                    placeholderTextColor={COLORS.black}
                    style={styles.header3}
                />
            </View>
        </View>

    )
}












function renderMainCategories() {
    return (
        <View style={styles.main1}>
            <Text style={styles.main2}>Podcasts</Text>
            <Text style={styles.main3}>Discover</Text>
        </View>
    )
}    







const Home : React.FC<SplashProps> = ({navigation}) => {
  

    return(
        <SafeAreaView>
                {renderMainCategories()}
                {renderHeader()}

               <TouchableOpacity onPress={() => navigation.push('Podcasts') }>
                <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.sview}
          >
            {pods.map((boat: Params) => {
              return (  
                
                <View style={styles.parent1}>

                <View style={styles.parent2}>
                <Text
                  style={styles.txt}
                >
                  {boat.name}
                </Text>
                </View>
                <View style={styles.parent3}>
                      <Image source={boat.image} style={styles.img5}/>       
        </View>
                
           </View>  

              )
            })}

          </ScrollView>
          </TouchableOpacity> 
        </SafeAreaView>
        
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray4
    },

    item: {
        fontSize:20,
        padding: 4,
        marginVertical: 8,
        marginHorizontal: 16,
      },

    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    },
    header1:{
      flexDirection: 'row', 
      height: 50
    },
    header2:{
      flex: 1,
       alignItems: 'center',
      justifyContent: 'center' 
    },
    header3:{
      width: '90%',
      height: "80%",
      backgroundColor: COLORS.thrid,
      alignItems: 'center',
      justifyContent: 'center',
      textAlign:'center',
      borderRadius: SIZES.radius
    },
    main1:{
      padding: SIZES.padding * 2 
    },
    main2:{
      ...FONTS.h1
    },
    main3:{
      ...FONTS.h1 , color:COLORS.blue,marginTop:5
    },
    flist:{
      marginTop:20,fontSize:20
    },
    img5:{ width: 10,
      height: 10,
      alignSelf: 'flex-end'},
  parent1:{ flexDirection:"row",padding:7},
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
})


export default Home;