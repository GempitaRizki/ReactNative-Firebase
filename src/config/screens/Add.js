import * as React from 'react'
import * as ReactNative from 'react-native'

export default function Home() {
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
        alignItems: 'center'
    }
})

//Nilai styles untuk mengatur menu yang ada pada container 
