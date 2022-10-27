import * as React from 'react'
import * as ReactNative from 'react-native'
import EmojiPicker from 'rn-emoji-keyboard'

export default function Home() {
    const [isOpen, setIsOpen] = React.useState(true)
    const [ newItem, setNewItem] = React.useState({
        emoji: '😎',
        name : '',
        price: 0,
        isSold: false,
        createAt: new Date()
    })

    const handlePick = (emojiObject) => {
        setNewItem({
            ...newItem,
            emoji: emojiObject.emoji
        })
    }

    return (
        <ReactNative.View style={styles.container}>
            <ReactNative.Text>Jual Product Baru</ReactNative.Text>
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
        alignItems: 'center'
    }
})

//Nilai styles untuk mengatur menu yang ada pada container 
