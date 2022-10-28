import * as React from 'react'
import * as ReactNative from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function Add() {
    const navigation = useNavigation()
    return (
        <>
        <ReactNative.Text>Ini adalah halaman Add </ReactNative.Text>
        <ReactNative.Button title='menuju ke menu Home' onPress={() => navigation.navigate('Home')} />
        </>
    )
}