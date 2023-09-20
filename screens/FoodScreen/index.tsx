import { useState } from "react";
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
import { Suggestion } from "../../utils/datas/suggestions";
import { Filter } from "../../utils/datas/filter";

const maxWidth = Dimensions.get("window").width;
const maxHeight = Dimensions.get("window").height;

const FoodScreen = () => {

    const [data, setData] = useState({});
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <View style={styles.container}>
            {/* filter field : */}
            <View style={styles.filterField}>
                <FlatList 
                    horizontal
                    data={Filter}
                    renderItem={({item}: any) => (
                        <TouchableOpacity style={{
                            backgroundColor: item?.status ? "#7210ff" : "#fff",
                            // height: maxWidth / 8,
                            justifyContent: "center",
                            padding: 7,
                            marginLeft: 8,
                            borderRadius: maxWidth / 2,
                            borderColor: "#7210ff",
                            borderWidth: 1.4,
                            alignSelf: "center",
                        }}>
                            <Text style={{
                                color: item?.status ? "#fff" : "#7210ff",
                                textAlign: "center",
                                fontSize: 16,
                                fontWeight: "bold",
                            }}>
                                {item?.name}
                            </Text>
                        </TouchableOpacity>
                    )}
                    contentContainerStyle={styles.filterContainer}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => item?.id}
                />
            </View>
            {/* <Text>this is monument screen</Text> */}
            {/* monuments view : */}
            <ScrollView>
                <View style={styles.monumentTotal}>
                    <FlatList
                        data={Suggestion}
                        renderItem={({item}: any) => (
                            <View style={styles.monumentContainer}>
                                <Image style={styles.imageMonument} source={require("../../assets/images/meal.jpg")} />
                                <View style={styles.textField}>
                                    <Text style={styles.headerTitle}>
                                        {item?.name}
                                    </Text>
                                    <Text style={styles.textDesc} numberOfLines={3}>
                                        {item?.desc}
                                    </Text>
                                    <TouchableOpacity style={styles.plusBtn} onPress={() => {
                                        setData(item);
                                        setModalOpen(true);
                                    }}>
                                        <Text style={styles.plusText}>Lire plus</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )}
                        contentContainerStyle={styles.monumentField}
                        keyExtractor={item => item?.id}
                    />
                </View>
            </ScrollView>
            <Modal
                transparent
                animationType="slide"
                visible={modalOpen}
                onRequestClose={() => setModalOpen(false)}
                onDismiss={() => setModalOpen(false)}
            >
                <View style={styles.modalContaier}>
                    {/* modal header : */}
                    <View style={styles.headerModal}>
                        <TouchableOpacity onPress={() => setModalOpen(false)}>
                            <Image style={styles.imageModal} source={require("../../assets/icons/back.png")} />
                        </TouchableOpacity>
                        <Text style={styles.titleModal}>
                            {data?.name}
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
                                {data?.desc}
                            </Text>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        height: maxHeight,
    },
    filterField: {
        width: maxWidth / 1.02,
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        alignSelf: "center",
    },
    filterBtn: {
        backgroundColor: "#7210ff",
        height: maxWidth / 10,
        justifyContent: "center",
        padding: 10,
        width: maxWidth / 4,
    },
    filterText: {
        color: "#fff"
    },
    filterContainer: {
        marginTop: 10,
        marginBottom: 10,
        // justifyContent: "center"
    },
    monumentContainer: {
        width: maxWidth / 1.1,
        // backgroundColor: "#fff",
        marginTop: 6,
        marginBottom: 6,
        flexDirection: "row",
        // borderColor: "#000",
        // borderWidth: 1,
        borderRadius: 20,
        padding: 2,
        // put shadow here :
        elevation: 1,
        // shadowOpacity: 0.20,
        // shadowRadius: 1.84,
        shadowColor: "#fff",
        // shadowOffset: {
        //     width: 0,
        //     height: 1,
        // },
    },
    monumentTotal: {
        // width: maxWidth / 2,
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        marginBottom: maxWidth / 3,
    },
    monumentField: {
        marginBottom: 10,
        // marginTop: 10,
    },
    imageMonument: {
        width: maxWidth / 4,
        height: maxWidth / 4,
        borderRadius: 18,
    },
    textField: {
        marginLeft: 12,
        // backgroundColor: "red",
        justifyContent: "space-between",
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#000",
    },
    textDesc: {
        width: maxWidth / 2,
    },
    plusBtn: {
        backgroundColor: "#fff",
        width: maxWidth / 6,
        padding: 2,
        borderRadius: 20,
        alignItems: "center",
        borderColor: "#7210ff",
        borderWidth: 1,
        marginTop: 6,
    },
    plusText: {
        color: "#7210ff",
        fontWeight: "bold",
        fontSize: 12,
    },
    modalContaier: {
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

export default FoodScreen;