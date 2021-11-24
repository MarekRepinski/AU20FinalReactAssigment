import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import { StackedScreens } from '../helpers/types'

export const EditItemScreen: React.FC<NativeStackScreenProps<StackedScreens, 'EditItemScreen'>> = (props) => {
    return (
        <View>
            <Text>this is the page edit the items</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: 'snow',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        height: '100%',
    },
    textInputText: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        padding: 2,
    },
    width80: {
        width: '90%',
    },
    marigin10: {
        margin: 10,
    },
    mainView: {
        alignItems: 'center',
    },
    loginView: {
        marginTop: 60,
        marginBottom: 100,
    },
    imageView: {
        width: 240,
        height: 180,
        resizeMode: 'center',
    },
    titleTextBig: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    titleTextSmall: {
        fontSize: 20,
    },
});

