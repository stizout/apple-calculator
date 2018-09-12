import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Button from './Button';

export default ButtonContainer = (props) => {
    return (
        <View>
            <View style={styles.container}>
                <Button value={'AC'} style={styles.buttonOther} styleText={styles.textOther} onPress={props.reset}/>
                <Button value={'+/-'} style={styles.buttonOther} styleText={styles.textOther} />
                <Button value={'%'} style={styles.buttonOther} styleText={styles.textOther}/>
                <Button value={'/'} style={styles.operator} styleText={styles.textOperator} onPress={props.divide}/>
            </View>
            <View style={styles.container}>
                <Button value={'7'} style={styles.button} styleText={styles.textNumbers} onPress={props.seven}/>
                <Button value={'8'} style={styles.button} styleText={styles.textNumbers} onPress={props.eight}/>
                <Button value={'9'} style={styles.button} styleText={styles.textNumbers} onPress={props.nine}/>
                <Button value={'X'} style={styles.operator} styleText={styles.textOperator} onPress={props.multiply}/>
            </View>
            <View style={styles.container}>
                <Button value={'4'} style={styles.button} styleText={styles.textNumbers} onPress={props.four}/>
                <Button value={'5'} style={styles.button} styleText={styles.textNumbers} onPress={props.five}/>
                <Button value={'6'} style={styles.button} styleText={styles.textNumbers} onPress={props.six}/>
                <Button value={'-'} style={styles.operator} styleText={styles.textOperator} onPress={props.minus}/>
            </View>
            <View style={styles.container}>
                <Button value={'1'} style={styles.button} styleText={styles.textNumbers} onPress={props.one}/>
                <Button value={'2'} style={styles.button} styleText={styles.textNumbers} onPress={props.two}/>
                <Button value={'3'} style={styles.button} styleText={styles.textNumbers} onPress={props.three}/>
                <Button value={'+'} style={styles.operator} styleText={styles.textOperator} onPress={props.plus}/>
            </View>
            <View style={styles.container}>
                <Button value={'0'} style={styles.buttonZero} styleText={styles.textNumbers} onPress={props.zero}/>
                <Button value={'.'} style={styles.button} styleText={styles.textNumbers}/>
                <Button value={'='} style={styles.operator} styleText={styles.textOperator} onPress={props.equals}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // height: 300,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
        padding: 9,
    },
    operator: {
        backgroundColor: '#e39127',
        height: 80,
        width: 80,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#383838',
        height: 80,
        width: 80,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonOther: {
        backgroundColor: '#9c9c9c',
        height: 80,
        width: 80,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textOperator: {
        color: 'white',
        fontSize: 40,
    },
    textNumbers: {
        color: 'white',
        fontSize: 40
    },
    textOther: {
        fontSize: 40
    },
    buttonZero: {
        backgroundColor: '#383838',
        height: 80,
        width: 170,
        borderRadius: 40,
        justifyContent: 'center',
        // alignItems: 'center',
        paddingLeft: 29,
    }


  });