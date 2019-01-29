import React from 'react';
import {StyleSheet, View,Image,Text} from 'react-native';
const styles = StyleSheet.create({
   card:{
   paddingLeft:5,
   paddingRight:5,
   paddingTop:10,
   paddingBottom:10
   },
   image:{
    alignSelf: 'center',
    height: 220,
    width: 180,
    borderWidth: 3,
    borderColor:'#f9f9f9'
    // borderRadius: 75

   }
})
function ImageCard(props) {
    let Image_Http_URL ={ uri: 'https://tinyjpg.com/images/social/website.jpg'};
    return (
        <View style={styles.card} >
            <Image style={styles.image} source={{
                uri: props.url
            }} />
        </View>
    );
}

export default ImageCard;