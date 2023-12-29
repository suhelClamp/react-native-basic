import React from 'react'
import {View, Text} from 'react-native'

import styles from './popularjobs.style'
import useFetch from "../../../hook/useFetch";

const Popularjobs = () => {
    const {data, error, isLoading} = useFetch()
    return (
        <View>
            <Text>{data?.setup}</Text>
            <Text>{data?.delivery}</Text>
        </View>
    )
}

export default Popularjobs