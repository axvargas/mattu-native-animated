import React, { useRef, useEffect } from 'react'
import { Animated, StyleSheet, Text, View } from 'react-native'

const Animation4 = () => {
    const animation4 = useRef(new Animated.Value(14)).current

    useEffect(() => {
        Animated.timing(animation4, {
            toValue: 360,
            duration: 1000,
            useNativeDriver: false
        }).start()
    }, [])

    const interpolation = animation4.interpolate({
        inputRange: [0, 360],
        outputRange: ['0deg', '360deg']
    })

    const animationStyle = {
        transform: [{ rotate: interpolation }]
    }
    return (
        <View>
            <Animated.View
                style={[styles.box, animationStyle]}
            >
            </Animated.View>
        </View>
    )
}

export default Animation4

const styles = StyleSheet.create({
    box: {
        width: 100,
        height: 100,
        backgroundColor: 'cornflowerblue'
    }
})