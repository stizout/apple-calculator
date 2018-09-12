import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


export default Button = ({value, style, styleText, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container} style={style}>
                <Text style={styleText}>{value}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    // container: {
    //     backgroundColor: 'gray',
    //     height: 80,
    //     width: 80,
    //     borderRadius: 40,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    // },
    // value: {
    //     fontSize: 40,
    //     fontWeight: '500',
    // }

  });