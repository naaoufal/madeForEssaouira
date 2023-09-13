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
import { Filter } from "../../utils/datas/filter";
import { MONUMENTS } from "../../utils/datas/monuments";

const maxWidth = Dimensions.get("window").width;
const maxHeight = Dimensions.get("window").height;

const MonumentsScreen = ({ navigation }: any) => {
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
                        data={MONUMENTS}
                        renderItem={({item}: any) => (
                            <View style={styles.monumentContainer}>
                                <Image style={styles.imageMonument} source={require("../../assets/images/essaouira-monument-1.png")} />
                                <View style={styles.textField}>
                                    <Text style={styles.headerTitle}>
                                        {item?.name}
                                    </Text>
                                    <Text style={styles.textDesc} numberOfLines={3}>
                                        {item?.description}
                                    </Text>
                                    <TouchableOpacity style={styles.plusBtn}>
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
        // backgroundColor: "#7210ff",
        marginTop: 6,
        marginBottom: 6,
        flexDirection: "row",
        // borderColor: "#000",
        // borderWidth: 1,
        borderRadius: 20,
        padding: 6,
        // put shadow here :
    },
    monumentTotal: {
        // width: maxWidth / 2,
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
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
        width: "20%",
    },
    plusBtn: {
        backgroundColor: "#fff",
        width: maxWidth / 6,
        padding: 2,
        borderRadius: 20,
        alignItems: "center",
        borderColor: "#7210ff",
        borderWidth: 1,
    },
    plusText: {
        color: "#7210ff",
        fontWeight: "bold",
    },
});

export default MonumentsScreen;