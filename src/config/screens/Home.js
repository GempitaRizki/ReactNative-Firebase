import * as React from 'react'
import * as ReactNative from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function Home() {
    const navigation = useNavigation()
    return (
        <>
        <ReactNative.Text>Ini adalah halaman home </ReactNative.Text>
        <ReactNative.Button title='menuju ke menu Add' onPress={() => navigation.navigate('Add')} />
        </>
    )
}