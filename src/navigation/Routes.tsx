
import { NavigationContainer  } from '@react-navigation/native';
import { createNativeStackNavigator  } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Category from '../screens/Category';
import Article from "../screens/Article";
import Main from "../screens/Main";
import Contact from '../screens/Contact';
import DrawerMenuContent from '../components/DrawerMenuContent';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator ();

const StackMenu = () => {
    return(
            <Stack.Navigator initialRouteName="Main">
                <Stack.Screen name="Main" component={Main} options={{ headerShown: false }} />
                <Stack.Screen name="Article" component={Article} options={{ title: 'Makale İçeriği', headerShown: true, headerStyle: { backgroundColor: '#181f23'}, headerTintColor: '#fff' }} />
                <Stack.Screen name="Category" component={Category} options={{ title: 'Kategori İçeriği', headerShown: true, headerStyle: { backgroundColor: '#181f23'}, headerTintColor: '#fff'  }} />
                <Stack.Screen name="Contact" component={Contact} options={{ title: 'İletişim', headerShown: true, headerStyle: { backgroundColor: '#181f23'}, headerTintColor: '#fff'  }} />
            </Stack.Navigator>
    )
}

const DrawerMenu = () => {
    return(
            <Drawer.Navigator
            screenOptions={{ headerShown: false }}
            drawerContent={(props) => <DrawerMenuContent {...props} />}
            >
            <Drawer.Screen
                name="StackMenu"
                component={StackMenu}
                options={{
                drawerItemStyle: { height: 0 }
                }}
            />
            <Drawer.Screen
                name="Main"
                component={Main}
            />
            </Drawer.Navigator>
    )
}


const Routes = () => {
    return(
        <NavigationContainer>
            <DrawerMenu />
        </NavigationContainer>
    )
}

export default Routes;