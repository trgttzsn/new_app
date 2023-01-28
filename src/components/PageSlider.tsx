import { Image, Text, View, Dimensions } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { Slider } from "../types/Main";

const PageSlider = (sliderItems: Slider[]) => {
    const width = Dimensions.get('window').width;

    const slideArray = Array();
    const makeSlideArray = (slides: Slider[]) => {
        Object.entries(slides).map( ([key, name], i) => {
            slideArray.push({id:i, title:name.baslik, link:name.link, img:name.resim})
        })
    }

    makeSlideArray(sliderItems);

    return(
        <View style={{flex:1}}>
            <Carousel
                loop
                width={width}
                height={width/2}
                autoPlay={true}
                data={slideArray}
                scrollAnimationDuration={1000}
                renderItem={
                   ( data ) =>  (
                    <View style={{ flex:1, justifyContent:'center'}}>
                        
                        <Image style={{width:'100%', height:'100%'}} source={{ uri: 'https://optikfare.com.tr/images/ana-slider/'+ data.item.img}} />
                        
                    </View>
                   ) 
                }
                />
        </View>
    )
}

export default PageSlider;