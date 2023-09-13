import React, {View, Text, StyleSheet, Dimensions} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../screens/HomeScreen';
import LogIn from '../../screens/LogInScreen';

import Icon from 'react-native-vector-icons/FontAwesome5';

const maxWidth = Dimensions.get("window").width;
const maxHeight = Dimensions.get("window").height;


const Drawer = createDrawerNavigator();

const DrawerContainer = () => {
    return (
        // <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen options={{
                    drawerIcon: ({ focused, size }) => (
                        <Icon
                            name="home"
                            size={size}
                            // color={focused ? 'red' : 'black'}
                        />
                    ),
                    headerBackground: () => (
                        <View style={styles.homeScreen}></View>
                    ),
                    headerTitleStyle: {
                        color: "#fff"
                    },
                    // drawerActiveBackgroundColor: "#7210ff",
                    drawerActiveTintColor: "#7210ff",
                    headerTintColor: "#fff",
                }} name="Accueil" component={HomeScreen} />
                <Drawer.Screen name="test" component={LogIn} />
            </Drawer.Navigator>
        // </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    homeScreen: {
        backgroundColor: "#7210ff",
        height: maxWidth / 6.6,
    },
});

export default DrawerContainer;