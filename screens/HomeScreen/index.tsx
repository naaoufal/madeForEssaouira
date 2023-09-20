import { useEffect, useState } from "react";
import React, {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    Image,
    TextInput,
    FlatList,
    ScrollView,
    Modal,
} from "react-native";
import { DATA } from "../../utils/datas/data";
import { MONUMENTS } from "../../utils/datas/monuments";
import { Suggestion } from "../../utils/datas/suggestions";
import Realm from "realm";

const maxWidth = Dimensions.get("window").width;
const maxHeight = Dimensions.get("window").height;

const app = new Realm.App({ id: "realm-zaqqb" });
const credentials = Realm.Credentials.anonymous();


const HomeScreen = ({ navigation }: any) => {

    const [modalOpen, setModalOpen] = useState(false);
    const [modalSugg, setModalSugg] = useState(false);
    const [suggData, setSuggData] = useState({});

    useEffect(() => {
        console.log(credentials);
    }, []);

    return (
        <>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.subContainer}>
                    <View style={styles.searchField}>
                        <Image style={styles.inputIcon} source={require("../../assets/icons/search.png")} />
                        <TextInput style={styles.inputText} placeholder="Rechercher" />
                    </View>
                </View>
                {/* <Text>this is home screen</Text> */}
                {/* <TouchableOpacity onPress={() => {
                    navigation.navigate("LogIn")
                }}>
                    <Text>Go to Login</Text>
                </TouchableOpacity> */}
                {/* monuments */}
                <View style={styles.monumentsField}>
                    <View style={styles.headerField}>
                        <Text style={styles.rightHeader}>Monuments</Text>
                        <TouchableOpacity onPress={() => navigation.navigate("Monuments")}>
                            <Text style={styles.lefttHeader}>Voir plus</Text>
                        </TouchableOpacity>
                    </View>
                    {/* carousel field : */}
                    <View style={styles.carouselField}>
                        <FlatList 
                            data={MONUMENTS}
                            showsHorizontalScrollIndicator={false}
                            horizontal
                            renderItem={({item}: any) => (
                                <TouchableOpacity style={styles.monumentView}>
                                    <Image style={styles.monumentImage} source={require("../../assets/images/essaouira-monument-1.png")} />
                                    <Text style={styles.monumentTitle}>
                                        {item?.name}
                                    </Text>
                                </TouchableOpacity>
                            )}
                            contentContainerStyle={styles.monumentFlat}
                            keyExtractor={item => item?.id}
                        />
                    </View>
                </View>
                {/* services */}
                <View style={styles.serviceField}>
                    <View style={styles.headerField}>
                        <Text style={styles.rightHeader}>Services</Text>
                        <TouchableOpacity onPress={() => setModalOpen(true)}>
                            <Text style={styles.lefttHeader}>Voir plus</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <FlatList 
                            data={DATA}
                            renderItem={({item}: any) => (
                                <View style={styles.categoryField}>
                                    <TouchableOpacity style={styles.categories}>
                                        <View style={styles.subCategories}>
                                            <Image style={styles.imageCategory} source={require("../../assets/icons/assistance.png")} />
                                        </View>
                                    </TouchableOpacity>
                                    <Text style={styles.textCategory}>{item.title}</Text>
                                </View>
                            )}
                            numColumns={4}
                            contentContainerStyle={styles.flatContainer}
                            keyExtractor={item => item?.id}
                        />
                    </View>
                </View>
                <View style={styles.suggestionField}>
                    {/* Suggestion header */}
                    <View style={styles.headerField}>
                        <Text style={styles.rightHeader}>Suggestions</Text>
                        <TouchableOpacity onPress={() => navigation.navigate("Food")}>
                            <Text style={styles.lefttHeader}>Voir plus</Text>
                        </TouchableOpacity>
                    </View>
                    {/* Suggestions body */}
                    <View style={{
                        // marginBottom: 200,
                        marginTop: 10,
                        // flex: 1,
                    }}>
                        {/* {Suggestion?.map((item: any) => (
                            <View>
                                <Text>
                                    {item?.name}
                                </Text>
                            </View>
                        ))} */}
                        <FlatList 
                            data={Suggestion}
                            renderItem={({item}: any ) => (
                                <TouchableOpacity style={styles.suggestionContainer} onPress={() => {
                                    setSuggData(item);
                                    setModalSugg(true);
                                }}>
                                    <Image style={styles.imgSuggestion} source={require("../../assets/images/meal.jpg")} />
                                    <View style={{
                                        marginBottom: 10,
                                        marginTop: 10,
                                    }}>
                                        <Text style={styles.textSugg}>
                                            {item?.name}
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            )}
                            numColumns={2}
                            contentContainerStyle={styles.suggestionFlat}
                            keyExtractor={item => item?.id}
                        />
                    </View>
                </View>
            </ScrollView>
            {/* modals : */}
            <Modal 
                transparent
                animationType="slide"
                visible={modalOpen}
                onRequestClose={() => setModalOpen(false)}
                // presentationStyle="formSheet"
            >
                <View style={styles.modalCategories}>
                    <View style={styles.headerModal}>
                        <TouchableOpacity onPress={() => setModalOpen(false)}>
                            <Image style={styles.imageModal} source={require("../../assets/icons/back.png")} />
                        </TouchableOpacity>
                        <Text style={styles.titleModal}>Tous les categories</Text>
                    </View>
                    <View>
                        <FlatList 
                            data={DATA}
                            renderItem={({item}: any) => (
                                <View style={styles.categoryField}>
                                    <TouchableOpacity style={styles.categories}>
                                        <View style={styles.subCategories}>
                                            <Image style={styles.imageCategory} source={require("../../assets/icons/assistance.png")} />
                                        </View>
                                    </TouchableOpacity>
                                    <Text style={styles.textCategory}>{item.title}</Text>
                                </View>
                            )}
                            numColumns={4}
                            contentContainerStyle={styles.flatContainer}
                            keyExtractor={item => item?.id}
                        />
                    </View>
                </View>
            </Modal>
            {/* Sugg Modal : */}
            <Modal
                transparent
                animationType="slide"
                visible={modalSugg}
                onRequestClose={() => setModalSugg(false)}
                onDismiss={() => setModalSugg(false)}
            >
                <View style={styles.modalSuggContainer}>
                    {/* modal header : */}
                    <View style={styles.headerModal}>
                        <TouchableOpacity onPress={() => setModalSugg(false)}>
                            <Image style={styles.imageModal} source={require("../../assets/icons/back.png")} />
                        </TouchableOpacity>
                        <Text style={styles.titleModal}>
                            {suggData?.name}
                        </Text>
                    </View>
                    {/* modal body : */}
                    <View style={styles.modalBody}>
                        {/* image view : */}
                        <View style={styles.imgModalContainer}>
                            <Image style={styles.imageMonumentModal} source={require("../../assets/images/meal.jpg")} />
                        </View>
                        {/* description field : */}
                        <View style={styles.textModalContainer}>
                            <Text style={styles.textMonumentModal}>
                                {suggData?.desc}
                            </Text>
                        </View>
                    </View>
                </View>
            </Modal>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        // height: maxHeight,
        alignItems: "center",
    },
    subContainer: {
        width: maxWidth / 1.1,
        alignItems: "center",
    },
    monumentImage: {
        width: maxWidth / 1.5,
        height: maxHeight / 4.5,
        resizeMode: "contain",
        // overflow: "hidden",
        borderRadius: 20,
    },
    monumentView: {
        // width: maxWidth / 1.08,
        height: maxHeight / 4.5,
        marginRight: 10,
        // backgroundColor: "red"
    },
    monumentFlat: {
        // width: maxWidth / 1.08,
        // overflow: "hidden"
    },
    monumentTitle: {
        position: "absolute",
        bottom: 12,
        marginLeft: 12,
        color: "#7210ff",
        fontSize: 22,
        fontWeight: "bold",
    },
    searchField: {
        flexDirection: "row",
        backgroundColor: "#f5f5f5",
        alignItems: "center",
        borderRadius: 8,
        marignBottom: maxWidth / 20,
        marginTop: maxWidth / 20,
        width: maxWidth / 1.08,
    },
    inputIcon: {
        width: maxWidth / 18,
        height: maxWidth / 18,
        marginLeft: 10,
    },
    inputText: {
        marginLeft: 10,
    },
    monumentsField: {
        width: maxWidth / 1.08,
        // marginBottom: maxWidth / 2,
        marginTop: maxWidth / 22,
    },
    headerField: {
        flexDirection: "row",
        justifyContent: "space-between",
        // backgroundColor: "green",
        alignItems: "center",
    },
    rightHeader: {
        fontSize: 20,
        color: "#242424",
        fontWeight: "bold",
    },
    lefttHeader: {
        color: "#7210ff",
        fontSize: 14,
        fontWeight: "bold",
    },
    carouselField: {
        // width: maxWidth / 1.08,
        // height: maxHeight / 4.5,
        // backgroundColor: "#7210ff",
        marginBottom: maxWidth / 22,
        marginTop: maxWidth / 22,
        borderRadius: 20,
    },
    serviceField: {
        width: maxWidth / 1.08,
        // backgroundColor: "green",
    },
    suggestionField: {
        width: maxWidth / 1.08,
    },
    categories: {
        width: maxWidth / 6,
        // padding: 10,
        // margin: 6,
        height: maxWidth / 6,
        borderColor: "#f4ecff",
        borderWidth: 2,
        borderRadius: maxWidth / 2,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f4ecff",
    },
    subCategories: {
        // alignSelf: "center",
        // justifyContent: "space-around",
        // alignItems: "center",
        // backgroundColor: "#f4ecff",
    },
    categoryField: {
        alignItems: "center",
        // backgroundColor: "yellow",
        // width: maxWidth / 1.08,
        padding: 8,
        margin: 6,
    },
    imageCategory: {
        width: maxWidth / 10,
        height: maxWidth / 10,
    },
    flatContainer: {
        justifyContent: "center",
        alignItems: "center",
        // paddingTop: maxWidth / 100,
    },
    textCategory: {
        fontSize: 14,
        fontWeight: "bold",
        marginTop: 10,
    },
    modalCategories: {
        height: maxHeight / 1.3,
        backgroundColor: "#fff",
        bottom: 0,
        position: "absolute",
        width: maxWidth,
        borderTopEndRadius: 20,
        borderTopStartRadius: 20,
        // margin: 10,
        borderColor: "#000",
        borderWidth: 2
    },
    headerModal: {
        flexDirection: "row",
        margin: 12,
        paddingLeft: 10,
        paddingRight: 10,
        alignItems: "center",
    },
    imageModal: {
        height: maxWidth / 14,
        width: maxWidth / 14,
    },
    titleModal: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#000",
        paddingLeft: 12,
    },
    suggestionFlat: {
        paddingBottom: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    suggestionContainer: {
        margin: 4,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        alignContent: "center",
    },
    imgSuggestion: {
        width: maxWidth / 2.2,
        height: maxWidth / 3.2,
        borderRadius: 12,
    },
    textSugg: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#000",
    },
    modalSuggContainer: {
        height: maxHeight / 1.24,
        backgroundColor: "#f1f1f1",
        bottom: 0,
        position: "absolute",
        width: maxWidth,
        borderTopEndRadius: 20,
        borderTopStartRadius: 20,
        // margin: 10,
        // borderColor: "red",
        // borderWidth: 2
    },
    modalBody: {
        // backgroundColor: "red",
        marginTop: 8,
    },
    imgModalContainer: {
        // backgroundColor: "red",
        // alignContent: "center",
        // justifyContent: "center",
        alignItems: "center",
    },
    imageMonumentModal: {
        width: maxWidth / 1.08,
        height: maxWidth / 2,
        borderRadius: 12,
    },
    textModalContainer: {
        width: maxWidth / 1.1,
        // alignItems: "center",
        // backgroundColor: "red",
        // justifyContent: "center",
        // alignContent: "center",
        alignSelf: "center",
        marginTop: maxWidth / 16,
    },
    textMonumentModal: {
        // textAlign: "center",
        fontSize: 14,
        fontWeight: "bold",
    },
});

export default HomeScreen;