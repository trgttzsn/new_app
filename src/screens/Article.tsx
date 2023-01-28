import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { WebView } from 'react-native-webview';

import { AppState } from '../store';
import { getArticle } from '../store/actions/articleActions';

const Article = ({route, navigation}:any) => {

    const { itemId, otherParam } = route.params;

    const dispatch = useDispatch<any>();
    
    useEffect(()=>{
        dispatch(getArticle(otherParam));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    const loading = useSelector( (state: AppState) => state.article.loading);
    const articleDetails = useSelector((state:AppState) => state.article.data.makale);

    return(
        loading ? <Text>Loading</Text> :
        <View style={{flex: 1, flexDirection: 'column', padding: 10, backgroundColor: '#fff'}}>
            <Text style={{ fontSize: 20, fontWeight: 'bold'}}>{ articleDetails && articleDetails.baslik}</Text>
            { articleDetails ? <WebView style={{ flex:1}} source={ { html: articleDetails.icerik } }  /> : <Text>'yok'</Text> }
        </View>
    )
}

export default Article;