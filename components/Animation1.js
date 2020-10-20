import React, { useRef, useEffect } from 'react'
import { StyleSheet, Text, View, Animated } from 'react-native'

const Animation1 = () => {

    const animation1 = useRef(new Animated.Value(0)).current

    useEffect(() => {
        Animated.timing(
            animation1,
            {
                toValue: 1,         // from Value "0" to toValue "1"
                duration: 1000,      // Time it takes from 0 to 1
                useNativeDriver: true
            }
        ).start()                   // must start
    }, [])

    return (
        <Animated.View style={{ opacity: animation1 }}>
            <Text style={styles.text}>Animation 1</Text>
        </Animated.View>
    )
}

export default Animation1

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        textAlign: 'center'
    }
})
