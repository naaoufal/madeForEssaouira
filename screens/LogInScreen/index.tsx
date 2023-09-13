import { useState } from "react";
import React, {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TextInput,
    Image,
    TouchableOpacity,
} from "react-native";

const maxWidth = Dimensions.get("window").width;
const maxHeight = Dimensions.get("window").height;

import Icon from "react-native-vector-icons/Feather";

const LogIn = ({ navigation }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const connect = () => {
        console.log(email, password);
    };

    return (
        <View style={styles.container}>
            {/* logo image : */}
            <View style={styles.header}>
                <Image style={styles.logoImage} source={require("../../assets/images/essaouira-background.png")} />
                {/* <Text style={styles.headerText}>Login to your</Text> */}
                {/* <Text>Account</Text> */}
            </View>
            {/* inputs field : */}
            <View style={styles.subInputs}>
                <View style={styles.fullTextInput}>
                    <Image style={styles.inputIconStyle} source={require("../../assets/icons/email.png")} />
                    <TextInput onChangeText={(text: any) => setEmail(text)} style={styles.inputStyle} placeholder="Email" />
                </View>
                <View  style={styles.fullTextInput}>
                    <Image style={styles.inputIconStyle} source={require("../../assets/icons/password.png")} />
                    <TextInput onChangeText={(text: any) => setPassword(text)} style={styles.inputStyle} placeholder="Mot de passe" />
                </View>
            </View>
            {/* button : */}
            <View style={styles.subBtn}>
                <TouchableOpacity onPress={connect} style={styles.btn}>
                    <Text style={styles.btnText}>Connexion</Text>
                </TouchableOpacity>
            </View>
            {/* social networks : */}
            <View style={styles.links}>
                <View style={styles.divider}></View>
                <Text style={styles.linksText}>ou continuez avec</Text>
                <View style={styles.divider}></View>
            </View>
            {/*  */}
            <View style={styles.subLinks}>
                <TouchableOpacity style={styles.linksBtn}>
                    {/* <Icon name="mail" size={30} /> */}
                    <Image style={styles.iconImage} source={require("../../assets/icons/facebook.png")} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.linksBtn}>
                    {/* <Icon name="mail" size={30} /> */}
                    <Image style={styles.iconImage} source={require("../../assets/icons/google.png")} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.linksBtn}>
                    {/* <Icon name="mail" size={30} /> */}
                    <Image style={styles.iconImage} source={require("../../assets/icons/apple.png")} />
                </TouchableOpacity>
            </View>
            {/* don t have an account : */}
            <View style={styles.signUp}>
                <Text style={styles.signUpTextRight}>
                    vous n'avez pas un compte ?
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                    <Text style={styles.signUpTextLeft}>Insciption</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        width: maxWidth,
        paddingTop: maxHeight / 12,
    },
    inputIconStyle: {
        width: maxWidth / 24,
        height: maxWidth / 24,
        // tintColor: "#7210ff"
    },
    fullTextInput: {
        flexDirection: "row",
        alignItems: "center",
        width: maxWidth / 1.3,
        backgroundColor: "#fafafa",
        borderRadius: 8,
        height: maxHeight / 16,
        marginTop: 10,
        marginBottom: 10,
        paddingLeft: 18,
        borderColor: "#7210ff", //"#7210ff",
        borderWidth: 1,
    },
    headerText: {
        fontSize: 30,
        color: "#000"
    },
    logoImage: {
        width: maxWidth / 2,
        height: maxHeight / 4.4,
        resizeMode: "contain",
        tintColor: "#7210ff"
    },
    subInputs: {
        padding: 10,
    },
    inputStyle: {
        // width: maxWidth / 1.3,
        // backgroundColor: "#fafafa",
        // borderRadius: 8,
        // height: maxHeight / 16,
        // marginTop: 10,
        // marginBottom: 10,
        paddingLeft: 10,
        // borderColor: "#7210ff", //"#7210ff",
        // borderWidth: 1,
    },
    subBtn: {
        marginTop: 20,
    },
    btn: {
        backgroundColor: "#7210ff",
        width: maxWidth / 1.3,
        borderRadius: maxHeight / 2,
        height: maxHeight / 18,
        justifyContent: "center",
    },
    btnText: {
        color: "#fff",
        textAlign: "center",
        fontSize: 14,
        fontWeight: "bold",
    },
    links: {
        paddingTop: maxHeight / 14,
        flexDirection: "row",
        justifyContent: "space-around",
        width: maxWidth / 1.3,
        alignSelf: "center",
        alignItems: "center",
        paddingBottom: maxHeight / 24,
    },
    linksText: {
        fontSize: 14,
        fontWeight: "bold",
    },
    divider: {
        borderColor: "#000",
        borderWidth: 0.5,
        width: maxWidth / 5,
    },
    iconImage: {
        width: maxWidth / 14,
        height: maxWidth / 14,
    },
    subLinks: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: maxWidth / 1.5,
        paddingBottom: maxHeight / 24,
    },
    linksBtn: {
        borderColor: "#7210ff",
        borderWidth: 0.8,
        padding: 12,
        borderRadius: 8,
    },
    signUp: {
        flexDirection: "row",
        justifyContent: "center",
        width: maxWidth / 1.3,
    },
    signUpTextRight: {
        fontSize: 14,
    },
    signUpTextLeft: {
        color: "#7210ff",
        paddingLeft: 6,
    },
});

export default LogIn;