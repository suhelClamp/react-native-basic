import React from 'react'
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native'

import styles from './welcome.style'
import {useRouter} from "expo-router";
import {icons} from "../../../constants";

const Welcome = () => {
    const router = useRouter()
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.userName}>Hello Suhel</Text>
                <Text style={styles.welcomeMessage}>Welcome to your dashboard</Text>
                <View style={styles.searchContainer}>
                    <View style={styles.searchWrapper}>
                        <TextInput
                            style={styles.searchInput}
                            value={""}
                            placeholder={"Search"}
                            onChange={() => {
                            }}
                        />
                        {/*<TouchableOpacity style={styles.searchBtn} onPress={() => {*/}
                        {/*}}>*/}
                        {/*    <Image source={icons.search} resizeMethod="scale" style={styles.searchBtnImage}/>*/}
                        {/*</TouchableOpacity>*/}
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Welcome