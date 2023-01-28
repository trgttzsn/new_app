import React, { useEffect } from 'react';
import { Image, Text, View, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';

import { AppState } from '../store';
import { getMain } from '../store/actions/mainActions';
import styles from '../styles/MainStyle';


import IconMI from 'react-native-vector-icons/MaterialIcons';
import PageSlider from '../components/PageSlider';
import moment from 'moment';
import { ScrollView } from 'react-native-gesture-handler';


const Main = ({ navigation }: any) => {

const dispatch = useDispatch<any>();
useEffect(() => {
    dispatch(getMain());
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

const loading = useSelector( (state: AppState) => state.main.loading );
const header = useSelector( (state: AppState) => state.main.data.header);
const slider = useSelector( (state: AppState) => state.main.data.slider);
const makaleler = useSelector( (state:AppState) => state.main.data.makaleler );
const onecikan = useSelector( (state:AppState) => state.main.data.onecikan );

    return(

        (loading) ? <Text>Loading</Text> : 
        
        <SafeAreaView style={styles.container}>
            <ScrollView>
            <View style={styles.banner}>
                <View style={styles.logo}>
                    { header && <Image style={styles.logoImg} source={{ uri: header.icon }} /> }
                </View>
                <View style={styles.title}>
                    <Text style={styles.titleText}>{header && header.title}</Text>
                </View>
                <View style={styles.menuButton}>
                    <IconMI onPress={() => navigation.openDrawer()} name="menu" size={30} color='#fff'  />   
                </View>
            </View>


            <View style={styles.slider}>                
                { slider && PageSlider(slider) }
            </View>

            <View style={styles.content}>
                <View style={styles.lastArticles}>
                    <Text style={{ fontSize: 20, color: '#181f23', fontWeight:'bold'}}>Son Makaleler</Text>
                    {
                        makaleler && makaleler.map((article) => {
                            return(
                                <View key={article.id}>
                                    <View style={styles.lastArticle}>
                                        <View style={styles.lastArticleImg}>
                                            <Image style={{width:100, height:50}} source={{ uri : 'https://optikfare.com.tr/documents/makaleler/'+ article.sayfa_tag + '/' + article.kapak_adres}} />
                                        </View>
                                        <View style={styles.lastArticleTitle}>
                                            <Text onPress={() => {
                                                navigation.navigate('Article', {
                                                    itemId: article.id,
                                                    otherParam: article.sayfa_tag
                                                })
                                            }} style={{fontSize:15, fontWeight: 'bold'}}>{article.baslik}</Text>
                                        </View>
                                    </View>
                                    
                                    <View>
                                        <Text style={{ fontSize: 12 }}>{article.makale_aciklama}</Text>
                                        <Text style={{ fontSize: 10, textAlign: 'right'}}>{ moment(article.eklenme_tarihi).locale('tr').startOf('day').fromNow() }</Text>
                                    </View>
                                </View>
                            
                            )
                        })
                    }
                </View>
            </View>

            

            <View style={styles.content}>
                <View style={styles.lastArticles}>
                    <Text style={{ fontSize: 20, color: '#181f23', fontWeight:'bold'}}>Öne Çıkan Makaleler</Text>
                    {
                        onecikan && onecikan.map((article) => {
                            return(
                                <View key={article.id}>
                                    <View style={styles.lastArticle}>
                                        <View style={styles.lastArticleImg}>
                                            <Image style={{width:100, height:50}} source={{ uri : 'https://optikfare.com.tr/documents/makaleler/'+ article.sayfa_tag + '/' + article.kapak_adres}} />
                                        </View>
                                        <View style={styles.lastArticleTitle}>
                                            <Text onPress={() => {
                                                navigation.navigate('Article', {
                                                    itemId: article.id,
                                                    otherParam: article.sayfa_tag
                                                })
                                            }} style={{fontSize:15, fontWeight: 'bold'}}>{article.baslik}</Text>
                                        </View>
                                    </View>
                                    
                                    <View>
                                        <Text style={{ fontSize: 12 }}>{article.makale_aciklama}</Text>
                                        <Text style={{ fontSize: 10, textAlign: 'right'}}>{ moment(article.eklenme_tarihi).locale('tr').startOf('day').fromNow() }</Text>
                                    </View>
                                </View>
                            
                            )
                        })
                    }
                </View>
            </View>


            </ScrollView>
        </SafeAreaView>
    )
}

export default Main;