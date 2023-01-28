import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#fff'
    },
    banner: {
      height:50,
      flexDirection: 'row',
      flexWrap: 'wrap',
      backgroundColor: '#181f23'
    },
      logo: {
        flex: 2,
        height: '100%',
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
        
      },
      logoImg:{
        width: '50%',
        height: '80%'
      },
      title: {
        flex: 6,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
      },
      titleText: {
        color: '#fff',
        fontSize: 20
      },
      menuButton: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
      },
    slider: {
      marginTop:10,
      marginBottom:10,
      minHeight: 170
    },
    content: {
      padding:10
    },
      lastArticles: {
        
      },
      lastArticle: {
        height: 80,
        flexDirection: 'row',
        flexWrap: 'wrap'
      },
        lastArticleImg: {
          flex:2,
          flexDirection: 'row',
          height: 80,
          alignItems: 'center'
        },
        lastArticleTitle: {
          flex: 4,
          flexDirection: 'row',
          height: 80,
          alignItems: 'center'
        }
  });

export default styles;