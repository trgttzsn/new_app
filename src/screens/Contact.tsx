import { SafeAreaView, Text, TextInput, Button, View, ScrollView} from 'react-native';

const Contact = () => {

    const sendMessage = () => {
        console.log("message");
    }

    return(
        <SafeAreaView>
            <ScrollView>
                <View style={{padding:10}}>
                    <Text>Adınız: </Text>
                    <TextInput style={{flex:1, borderBottomWidth:1, backgroundColor: '#fff'}} />
                    
                    <Text>Soyadınız: </Text>
                    <TextInput style={{flex:1, borderBottomWidth:1, backgroundColor: '#fff'}} />
                    
                    <Text>E-Posta Adresiniz: </Text>
                    <TextInput style={{flex:1, borderBottomWidth:1, backgroundColor: '#fff'}} />
                    
                    <Text>Konu: </Text>
                    <TextInput style={{flex:1, borderBottomWidth:1, backgroundColor: '#fff'}} />
                    
                    <Text>Mesajınız: </Text>
                    <TextInput multiline={true} numberOfLines={4} style={{flex:1, borderBottomWidth:1, backgroundColor: '#fff'}} />
                
                    <Button title="Send your message" onPress={() => sendMessage()} />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Contact;