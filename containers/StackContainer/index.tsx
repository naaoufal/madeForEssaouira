import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../../screens/HomeScreen';
import LogIn from '../../screens/LogInScreen';
import DrawerContainer from '../DrawerContainer';

import Icon from 'react-native-vector-icons/FontAwesome5';
import SignUp from '../../screens/SignUpScreen';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import MonumentsScreen from '../../screens/MonumentsScreen';
import FoodScreen from '../../screens/FoodScreen';

const maxWidth = Dimensions.get("window").width;
const maxHeight = Dimensions.get("window").height;

const Stack = createStackNavigator();

const StackContainer = () => {
    return (
        <Stack.Navigator initialRouteName="Tabs">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen options={{
                headerShown: false,
            }} name="Tabs" component={DrawerContainer} />
            {/* screens : */}
            <Stack.Screen options={{
                headerShown: false,
            }} name="LogIn" component={LogIn} />
            {/* signUp screen */}
            <Stack.Screen options={{
                headerShown: false,
            }} name="SignUp" component={SignUp} />
            {/* monuments screen */}
            <Stack.Screen options={{
                headerBackground: () => (
                    <View style={styles.homeScreen}></View>
                ),
                headerTintColor: "#fff",
            }} name="Monuments" component={MonumentsScreen} />
            {/* food screen */}
            <Stack.Screen options={{
                headerBackground: () => (
                    <View style={styles.homeScreen}></View>
                ),
                headerTintColor: "#fff",
            }} name="Food" component={FoodScreen} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    homeScreen: {
        backgroundColor: "#7210ff",
        height: maxWidth / 6.6,
    },
});

export default StackContainer;