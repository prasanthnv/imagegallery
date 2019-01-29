import React, { Component } from 'react';
import {connect} from 'react-redux'
import ImageCard from '../../Components/ImageCard';
import Navbar from '../../Components/Navbar';
import { StyleSheet, View ,ScrollView,StatusBar,Button} from 'react-native';
import {fetchImages} from '../../Redux/Modules/Gallery/action'
const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
      justifyContent:'space-around',
      alignItems:'flex-start',
      alignContent:'space-between',
      flexGrow:1

    },
    card: {
        backgroundColor: 'powderblue',
        flexGrow: 1
    },
    btnLoad:{
        backgroundColor:'#e73745',
    }
})
class GalleryContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount(){
       this.props.fetchImages();
    }
    listImages = () => {
        let images = [];
        console.log(this.props.images)
        this.props.images.forEach((image,index)=>{
            console.log(image)
            images.push(
                <ImageCard style={styles.card} key={index} url={image.urls.thumb} />
            )
        })
        // for (let i = 0; i < 15; i++) {
        //     images.push(
        //         <ImageCard style={styles.card} key={i} url="https://loading.io/spinners/rolling/lg.curve-bars-loading-indicator.gif" />
        //     )
        // }
        return images;
    }

    render() {
        return (
            <React.Fragment>
                 
                <Navbar />
                <ScrollView>
                    <View style={styles.wrapper}>
                        {this.listImages()}
                    </View>

                 {this.props.images.length > 0 && <Button title="Load More Images" onPress={()=>{this.props.fetchImages()}} color="#e73745" style={styles.btnLoad}></Button>}
                </ScrollView>
            </React.Fragment>
        );
    }
}
const mapStateToProps = state => ({
    images: state.gallery.images,
    errors: state.gallery.errors,
    isLoading: state.loader.showing
})
export default connect(mapStateToProps,{
    fetchImages
})(GalleryContainer);