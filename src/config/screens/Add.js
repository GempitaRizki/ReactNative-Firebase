import * as React from 'react'
import * as ReactNative from 'react-native'
import * as EmojiPicker from 'rn-emoji-keyboard'

export default function Add() {
    const [ isOpen, setIsOpen ] = React.useState(true) 
    const [ newItem, setNewItem ] = React.useState({
        emoji: '👾',
        name: '',
        harga: 0,
        terjual: false,
        createAt: new Date(),
    })
    return (
        <ReactNative.View style={styles.container}>
            
            <ReactNative.Text>Ini adalah halaman Add </ReactNative.Text>
            <ReactNative.Text>{newItem.emoji}</ReactNative.Text>
            <EmojiPicker
                onEmojiSelected={handlePick}
                open={isOpen}
                onClose={() => setIsOpen(false)}
            />
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