import { Text, View, TouchableOpacity} from 'react-native';


const DrawerMenuContent = ({ navigation }: any) => {
    return (
        <View>
            <View><TouchableOpacity onPress={() => { navigation.navigate('Main') }} style={{ backgroundColor:'#181f23', margin:10, padding:5, height:40, borderBottomColor: '#ccc', justifyContent: 'center' }}><Text style={{color:'#fff'}}>Anasayfa</Text></TouchableOpacity></View>
            <View><TouchableOpacity onPress={() => { navigation.navigate('Category', {
                                                    itemId: 0,
                                                    otherParam: '/kategori/blog'
                                                }) }} style={{ backgroundColor:'#181f23', margin:10, padding:5, height:40, borderBottomColor: '#ccc', justifyContent: 'center' }}><Text style={{color:'#fff'}}>Blog</Text></TouchableOpacity></View>
            <View><TouchableOpacity onPress={() => { navigation.navigate('Category', {
                                                    itemId: 0,
                                                    otherParam: '/kategori/php'
                                                }) }}  style={{ backgroundColor:'#181f23', margin:10, padding:5, height:40, borderBottomColor: '#ccc', justifyContent: 'center' }}><Text style={{color:'#fff'}}>PHP</Text></TouchableOpacity></View>
            <View><TouchableOpacity onPress={() => { navigation.navigate('Contact') }} style={{ backgroundColor:'#181f23', margin:10, padding:5, height:40, borderBottomColor: '#ccc', justifyContent: 'center' }}><Text style={{color:'#fff'}}>İletişim</Text></TouchableOpacity></View>
        </View>
    )
}

export default DrawerMenuContent;