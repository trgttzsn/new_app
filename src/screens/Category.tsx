import moment from 'moment';
import { useEffect } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../store';
import { getCategory } from '../store/actions/categoryActions';
import styles from '../styles/MainStyle';

const Category = ({route, navigation}:any) => {
    
    const { itemId, otherParam } = route.params;

    const dispatch = useDispatch<any>();
    
    useEffect(()=>{
        dispatch(getCategory(otherParam));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const loading = useSelector( (state: AppState) => state.category.loading);
    const makaleler = useSelector( (state:AppState) => state.category.data.makaleler);
    const kategori = useSelector( (state: AppState) => state.category.data.kategori);

    return(
        <ScrollView style={styles.content}>
        <View style={styles.lastArticles}>
            <>
                {
                    (kategori) && 
                    Object.entries(kategori).map(([key, name], i) => { 
                        <Text style={{ fontSize: 20, color: '#181f23', fontWeight:'bold'}}>{name.baslik}</Text> 
                    })
                }
                </>
                <>
                {
                    (loading) ? <Text>Loading</Text> :
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
                                    <Text style={{ fontSize: 12 }}>{article.description}</Text>
                                    <Text style={{ fontSize: 10, textAlign: 'right'}}>{ moment(article.eklenme_tarihi).locale('tr').startOf('day').fromNow() }</Text>
                                </View>
                            </View>
                        
                        )
                    })
                }
            </>
            
        </View>
        </ScrollView>
    )
}

export default Category;