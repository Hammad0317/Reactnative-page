import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  ActivityIndicator,
  
  
} from 'react-native';
import {BallIndicator} from 'react-native-indicators';

// export default function App() {
//     return (
//       <View style={styles.container} >
//         <Image style={styles.image} resizeMode="contain" source={require('./images/back.jpg')}>
//   </Image>

//   <View>
//   <Text style={styles.birth}>B I R T H D A Y</Text>
//   </View>
//   <View>
//   <Text style={styles.photo}>Photo On Cake</Text>
//   </View>
//        <StatusBar/>
//   </View>
      
        
//     );

// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor:'white',
    
//   },
//   image: {
//     width: 300, 
//     height: 300,
//     marginTop:150,
//     alignSelf:'center',
//   },
//   birth:{
//     color:'#eb4c3d',
//     fontWeight:'bold',
//     alignSelf:'center',
//     fontSize:42,
//     marginTop:45,

//   },
//   photo:{
//     color:'gray',
//     fontWeight:'bold',
//     alignSelf:'center',
//     fontSize:24,
//     marginTop:5,

//   },
 
// });









import Icon from 'react-native-vector-icons/Ionicons';


export default function App() {
  return (
         
    <View>
          <View style={styles.Appbar}>
          {/* <Image style={{height:37,width: 37,backgroundColor:'#e6eff8',borderRadius:100}} source={require('./images/arrow.png')}/>  */}
          <Icon style={{backgroundColor:'#e6eff8',borderRadius:100,width:27}} name="chevron-back-outline" size={25} />
              <Text style={styles.Title}>CUSTOMIZE</Text>
              <Text style={styles.Button1}>DONE</Text>
          </View>

          <ScrollView>

         

          <View>
            <Text style={styles.text1}>YOUR LINKS</Text>
          </View>

          <View>
            <Text style={styles.text2}>Add and order your 6 favorite categories to appers on the Homescreen</Text>
          </View>

          <View style={styles.Maincard}>

          <View style={styles.card1}>
          <View style={styles.imageview}>
          <Image style={{height:65,width: 100,alignSelf:'center',borderRadius:10}} source={require('./images/image1.jpg')}/> 
          
          <Text style={{fontSize:10,textAlign:'center',marginTop:5,color:'black',fontWeight:'bold'}}>{`Al Resario\nHealing Spa`}</Text>
          <View style={styles.circl}>
          <Icon style={{color:"white",alignSelf:'center'}} name="remove-outline" size={19}  />
          </View>

          </View>
          </View>

           <View style={styles.card2}>

           <View style={styles.imageview}>
          <Image style={{height:65,width: 100,alignSelf:'center',borderRadius:10}} source={require('./images/image2.jpg')}/> 
          <Text style={{fontSize:10,textAlign:'center',marginTop:5,color:'black',fontWeight:'bold'}}>{`Fox Fitness\nClub`}</Text>
          <View style={styles.circl}>
          <Icon style={{color:"white",alignSelf:'center'}} name="remove-outline" size={19}  />
          </View>
          </View>
          </View>    
              
          <View style={styles.card3}>
          <View style={styles.imageview}>
          <Image style={{height:65,width: 100,alignSelf:'center',borderRadius:10}} source={require('./images/image3.jpg')}/> 
          <Text style={{fontSize:10,textAlign:'center',marginTop:5,color:'black',fontWeight:'bold'}}>{`Fox Fitness\nClub`}</Text>
          <View style={styles.circl}>
          <Icon style={{color:"white",alignSelf:'center'}} name="remove-outline" size={19}  />
          </View>

          </View>
          </View>

          </View>


          <View style={styles.Maincard}>

     <View style={styles.card1}>
    <View style={styles.imageview}>
     <Image style={{height:65,width: 100,alignSelf:'center',borderRadius:10}} source={require('./images/image4.jpg')}/> 

     <Text style={{fontSize:10,textAlign:'center',marginTop:5,color:'black',fontWeight:'bold'}}>{`Alpha Sports\nFaculty`}</Text>
     <View style={styles.circl}>
     <Icon style={{color:"white",alignSelf:'center'}} name="remove-outline" size={19}  />
          </View>

     </View>
     </View>

     <View style={styles.card2}>
     <View style={styles.imageview}>
      <Image style={{height:65,width: 100,alignSelf:'center',borderRadius:10}} source={require('./images/image5.jpg')}/> 

      <Text style={{fontSize:10,textAlign:'center',marginTop:5,color:'black',fontWeight:'bold'}}>{`Barber & co.\n`}</Text>
      <View style={styles.circl}>
      <Icon style={{color:"white",alignSelf:'center'}} name="remove-outline" size={19}  />
          </View>
      </View>
      </View>    
    
     <View style={styles.card3}>
      <View style={styles.imageview}>
       <Image style={{height:65,width: 100,alignSelf:'center',borderRadius:10}} source={require('./images/image6.jpg')}/> 

<       Text style={{fontSize:10,textAlign:'center',marginTop:5,color:'black',fontWeight:'bold'}}>{`Veterinary\nHospital`}</Text>
        <View style={styles.circl}>
        <Icon style={{color:"white",alignSelf:'center'}} name="remove-outline" size={19}  />
          </View>
          
         </View>
         </View>

         </View>
         <View>
            <Text style={styles.text3}>MORE LINKS</Text>
          </View>

          <View>
            <Text style={styles.text4}>Search a Faciltiy To add your link </Text>
          </View>

          <View style={styles.search}>
          <Icon style={{color:"black",alignSelf:'center',paddingLeft:10}} name="search-outline" size={25}  />
          
            <Text style={{alignSelf:"center",marginVertical:10,paddingLeft:15,color:"black"}}>Hospital</Text>
          </View>


          <View style={styles.Maincard}>

     <View style={styles.card1}>
    <View style={styles.imageview}>
     <Image style={{height:65,width: 100,alignSelf:'center',borderRadius:10}} source={require('./images/image4.jpg')}/> 

     <Text style={{fontSize:10,textAlign:'center',marginTop:5,color:'black',fontWeight:'bold'}}>{`Alpha Sports\nFaculty`}</Text>
     <View style={styles.circ2}>
     <Icon style={{color:"white",alignSelf:'center'}} name="add-outline" size={18}  />
          </View>

     </View>
     </View>

     <View style={styles.card2}>
     <View style={styles.imageview}>
      <Image style={{height:65,width: 100,alignSelf:'center',borderRadius:10}} source={require('./images/image5.jpg')}/> 

      <Text style={{fontSize:10,textAlign:'center',marginTop:5,color:'black',fontWeight:'bold'}}>{`Barber & co.\n`}</Text>
      <View style={styles.circ2}>
      <Icon style={{color:"white",alignSelf:'center'}} name="add-outline" size={18}  />
          </View>
      </View>
      </View>    
    
     <View style={styles.card3}>
      <View style={styles.imageview}>
       <Image style={{height:65,width: 100,alignSelf:'center',borderRadius:10}} source={require('./images/image6.jpg')}/> 

<       Text style={{fontSize:10,textAlign:'center',marginTop:5,color:'black',fontWeight:'bold'}}>{`Veterinary\nHospital`}</Text>
        <View style={styles.circ2}>
        <Icon style={{color:"white",alignSelf:'center'}} name="add-outline" size={18}  />
          </View>
          
         </View>
         </View>

         </View>

         <View style={styles.Maincard1}>

     <View style={styles.card1}>
    <View style={styles.imageview}>
     <Image style={{height:65,width: 100,alignSelf:'center',borderRadius:10}} source={require('./images/image4.jpg')}/> 

     <Text style={{fontSize:10,textAlign:'center',marginTop:5,color:'black',fontWeight:'bold'}}>{`Alpha Sports\nFaculty`}</Text>
     <View style={styles.circ2}>
     <Icon style={{color:"white",alignSelf:'center'}} name="add-outline" size={18}  />
          </View>

     </View>
     </View>

     <View style={styles.card2}>
     <View style={styles.imageview}>
      <Image style={{height:65,width: 100,alignSelf:'center',borderRadius:10}} source={require('./images/image5.jpg')}/> 

      <Text style={{fontSize:10,textAlign:'center',marginTop:5,color:'black',fontWeight:'bold'}}>{`Barber & co.\n`}</Text>
      <View style={styles.circ2}>
      <Icon style={{color:"white",alignSelf:'center'}} name="add-outline" size={18}  />
          </View>
      </View>
      </View>    
    
     <View style={styles.card3}>
      <View style={styles.imageview}>
       <Image style={{height:65,width: 100,alignSelf:'center',borderRadius:10}} source={require('./images/image6.jpg')}/> 

<       Text style={{fontSize:10,textAlign:'center',marginTop:5,color:'black',fontWeight:'bold'}}>{`Veterinary\nHospital`}</Text>
        <View style={styles.circ2}>
        <Icon style={{color:"white",alignSelf:'center'}} name="add-outline" size={18}  />
          </View>
         </View>
         

         </View>
         </View>
         
         <View>
         <BallIndicator  style={{alignSelf:'center' , marginBottom:100}} size={30} color='gray'/>

         
         </View>

         </ScrollView>
      </View>
      
  );


  

}

const styles = StyleSheet.create({
  Appbar:{
    paddingTop:30,
    paddingBottom:10,
    paddingLeft:20,
    paddingRight:20,
    flexDirection:'row',
    
},
Button1:{
    marginTop:5,
    width: 50,          
    color:'#000000',
    textAlign:'center',
    fontSize:12,
},
Title:{
    marginTop:5,
    color:'#000000',
    textAlign:'center',
    fontWeight:'bold',
    flex:1,                
},
text1:{
  color:'black',
  fontWeight:'bold',
  paddingLeft:20,
  marginTop:5,

},
text2:{
  color:'gray',
  paddingLeft:20,
  marginTop:15,

},
Maincard:{
  marginTop:20,
  flexDirection:'row',
  paddingLeft:10,
  paddingRight:10,
  
},
Maincard1:{
  marginTop:20,
  marginBottom:50,
  flexDirection:'row',
  paddingLeft:10,
  paddingRight:10,
  
},
card1:{
  height:125,
  width:120,
  backgroundColor:'#e6eff8',
  borderRadius:15,
  

},
card2:{
  height:125,
  width:120,
  backgroundColor:'#e6eff8',
  borderRadius:15,
  marginLeft:15,

},
card3:{
  height:125,
  width:120,
  backgroundColor:'#e6eff8',
  borderRadius:15,
  marginLeft:15,

},
 imageview:{
  marginHorizontal:10,
  marginVertical:10,
  borderRadius:20,

 },
 circl:{
  marginTop:5,
  alignSelf:'center',
  height:20,
  width:20,
  borderRadius:50,
  backgroundColor:'#e73b41',
 },
 circ2:{
  marginTop:5,
  alignSelf:'center',
  height:20,
  width:20,
  borderRadius:50,
  backgroundColor:'#1276bb',
 },
 text3:{
  color:'black',
  fontWeight:'bold',
  paddingLeft:13,
  marginTop:30,

},
text4:{
  color:'gray',
  paddingLeft:15,
  marginTop:5,

},
search:{
  justifyContent: "flex-start",
  flexDirection:'row',
  height:50,
  width: '93%',
  backgroundColor:'#e6eff8',
  marginTop:10,
  marginHorizontal:15,
  borderRadius:10,

},
});

