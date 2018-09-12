import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export default Output = ({total}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{total}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        height: 300,
        width: '100%',
    },
    text: {
        paddingRight: 10,
        marginTop: 180,
        position: 'absolute',
        right: 1,
        color: 'white',
        height: 100,
        fontSize: 100,
        fontWeight: '200',
    }
  });