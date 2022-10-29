import * as React from 'react'
import * as ReactNative from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function Add() {
    const navigation = useNavigation()
    return (
        <ReactNative.View style={styles.container}>
            <ReactNative.Text>Ini adalah halaman Add </ReactNative.Text>
        </ReactNative.View>  
    )
}

const styles = ReactNative.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    }
})