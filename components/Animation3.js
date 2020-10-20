import React, { useRef, useEffect } from 'react'
import { Animated, StyleSheet, Text, View } from 'react-native'

const Animation3 = () => {
    const animation3 = useRef(new Animated.Value(14)).current

    useEffect(() => {
        Animated.timing(animation3, {
            toValue: 40,
            duration: 1000,
            useNativeDriver: false
        }).start()
    }, [])
    return (
        <View>
            <Animated.Text
                style={[styles.text, { fontSize: animation3 }]}
            >
                Animation 3
            </Animated.Text>
        </View>
    )
}

export default Animation3

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        textAlign: 'center'
    }
})
