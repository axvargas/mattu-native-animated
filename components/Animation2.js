import React, { useRef, useEffect } from 'react'
import { Animated, StyleSheet, Text, View } from 'react-native'

const Animation2 = () => {
    const animation2 = useRef(new Animated.Value(0)).current

    useEffect(() => {
        Animated.timing(animation2, {
            toValue: 450,
            duration: 1000,
            useNativeDriver: false
        }).start()
    }, [])
    return (
        <Animated.View style={[styles.box, { width: animation2, height: animation2 }]}>
        </Animated.View>
    )
}

export default Animation2

const styles = StyleSheet.create({
    box: {
        width: 100,
        height: 100,
        backgroundColor: 'cornflowerblue'
    }
})
