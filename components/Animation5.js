import React, { useRef } from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback,
    Animated
} from 'react-native'

const Animation5 = () => {
    const animation = useRef(new Animated.Value(1)).current

    const inAnimation = () => {
        Animated.spring(animation, {
            toValue: 0.8,
            useNativeDriver: true
        }).start()
    }

    const outAnimation = () => {
        Animated.spring(animation, {
            toValue: 1,
            friction: 4,    // * The lowest the more it rebota
            tesion: 30,
            useNativeDriver: true
        }).start()
    }

    const animationStyle = {
        transform: [{ scale: animation }]
    }
    return (
        <View style={styles.viewContainer}>
            <TouchableWithoutFeedback
                onPressIn={() => inAnimation()}
                onPressOut={() => outAnimation()}
            >
                <Animated.View style={[styles.btn, animationStyle]}>
                    <Text style={styles.text}>Sign In</Text>
                </Animated.View>
            </TouchableWithoutFeedback>
        </View>
    )
}

export default Animation5

const styles = StyleSheet.create({
    viewContainer: {
        alignItems: 'center'
    },
    btn: {
        backgroundColor: 'cornflowerblue',
        width: 280,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: '#FFF',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 28
    }
})
