import React, { useRef, useEffect } from 'react'
import { StyleSheet, Animated, View } from 'react-native'

const Animation7 = () => {
    const animation1 = useRef(new Animated.Value(0)).current
    const animation2 = useRef(new Animated.Value(1)).current

    useEffect(() => {
        Animated.sequence([
            Animated.timing(animation1, {
                toValue: 300,
                duration: 1000,
                useNativeDriver: true
            }),
            Animated.spring(animation2, {
                toValue: 10,
                useNativeDriver: true
            }),
            Animated.spring(animation2, {
                toValue: 1,
                useNativeDriver: true
            }),
            Animated.timing(animation1, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true
            }),
        ]).start()
    }, [])

    const animationStyle = {
        transform: [
            { translateY: animation1 },
            { scale: animation2 }
        ]
    }

    return (
        <View>
            <Animated.View
                style={[
                    styles.box,
                    animationStyle
                ]}
            >

            </Animated.View>
        </View>
    )
}

export default Animation7

const styles = StyleSheet.create({
    box: {
        width: 100,
        height: 100,
        backgroundColor: 'cornflowerblue'
    }
})
