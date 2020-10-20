import React, { useEffect, useRef } from 'react'
import { Animated, StyleSheet, View } from 'react-native'

const Animation6 = () => {
    const animation1 = useRef(new Animated.Value(0)).current
    const animation2 = useRef(new Animated.Value(-50)).current

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(animation2, {
                    toValue: -30,
                    duration: 0,
                    useNativeDriver: true
                }),
                Animated.timing(animation1, {
                    toValue: 60,
                    duration: 250,
                    useNativeDriver: true
                }),
                Animated.timing(animation2, {
                    toValue: 30,
                    duration: 250,
                    useNativeDriver: true
                }),
                Animated.timing(animation1, {
                    toValue: 0,
                    duration: 250,
                    useNativeDriver: true
                }),
                Animated.timing(animation2, {
                    toValue: -30,
                    duration: 250,
                    useNativeDriver: true
                })
            ])
        ).start()
    }, [])

    const animationStyle = {
        transform: [
            { translateY: animation1 },
            { translateX: animation2 }
        ]
    }

    return (
        <View style={{ alignItems: 'center', marginTop: 50 }}>
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

export default Animation6

const styles = StyleSheet.create({
    box: {
        width: 10,
        height: 10,
        backgroundColor: 'cornflowerblue'
    }
})
