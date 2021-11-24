import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView, Pressable } from 'react-native';
import { StackedScreens } from '../helpers/types';
import { Picker } from '@react-native-picker/picker';
import { Feather, Foundation } from '@expo/vector-icons';

export const EditItemScreen: React.FC<NativeStackScreenProps<StackedScreens, 'EditItemScreen'>> = (props) => {
    const [disabled, setDisabled] = useState(false);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [type, setType] = useState();

    useEffect(() => {
        // const notNumb = isNaN(parseFloat(price));
        setDisabled(name.length === 0 || isNaN(parseFloat(price)));
    }, [name, price]);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.mainView}>
                <Text style={styles.titleTextBig}>Create New Product</Text>
            </View>
            <View style={styles.loginView}>
                <TextInput
                    placeholder='Name'
                    onChangeText={setName}
                    style={[styles.width80, styles.marigin10, styles.textInputText]} />
                <TextInput
                    placeholder='Price'
                    onChangeText={setPrice}
                    keyboardType='numeric'
                    style={[styles.width80, styles.marigin10, styles.textInputText]} />
                <Picker
                    selectedValue={type}
                    onValueChange={(itemValue, itemIndex) => { setType(itemValue) }}
                    style={[styles.width80, styles.marigin10, styles.textInputText]}>
                    <Picker.Item label='Integrated' value='Integrated' />
                    <Picker.Item label='Peripheral' value='Peripheral' />
                </Picker>
                <View style={styles.buttonsArea}>
                    <Pressable
                        disabled={disabled}
                        style={styles.saveButton}
                        onPress={() => { }}>
                        <Text style={styles.saveButtonText}>SAVE</Text>
                        <Feather name="download" size={48} color="white" style={{ flex: 1, }} />
                    </Pressable>
                    <Pressable
                        disabled={disabled}
                        style={styles.cancelButton}
                        onPress={() => { }}>
                        <Text style={styles.cancelButtonText}>CANCEL</Text>
                        <Foundation name="prohibited" size={48} color="white" style={{ flex: 1, }} />
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f9f9f9',
        height: '100%',
    },
    textInputText: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 6,
        padding: 2,
        height: 80,
        marginTop: 25,
        color: 'grey',
        fontSize: 20,
        fontWeight: '500',
        backgroundColor: '#eaeeea',
        paddingStart: 15,
    },
    width80: {
        width: '95%',
    },
    marigin10: {
        margin: 10,
    },
    mainView: {
        marginTop: 15,
        alignItems: 'center',
    },
    loginView: {
    },
    titleTextBig: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    buttonsArea: {
        flexDirection: 'row',
    },
    saveButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '45%',
        borderRadius: 15,
        backgroundColor: '#008000ff',
        marginStart: 10,
        marginTop: 10,
        padding: 2,
    },
    saveButtonDissad: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '40%',
        borderRadius: 15,
        backgroundColor: '#00800022',
        marginStart: 10,
        marginTop: 10,
        padding: 2,
    },
    cancelButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '45%',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 15,
        backgroundColor: '#eaeeea',
        marginStart: 10,
        marginTop: 10,
        padding: 2,
    },
    saveButtonText: {
        flex: 1,
        textAlign: 'right',
        fontSize: 22,
        color: 'white',
        fontWeight: '500',
        paddingRight: 10,
    },
    cancelButtonText: {
        flex: 1,
        textAlign: 'right',
        fontSize: 22,
        fontWeight: '500',
        color: 'black',
        paddingHorizontal: 20,
    },
});

