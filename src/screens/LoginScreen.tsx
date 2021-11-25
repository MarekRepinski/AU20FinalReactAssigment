/*******************************************************************/
/*  Screen for login (with an animated GIF!)                       */
/*******************************************************************/
import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, View, Image, Text, SafeAreaView } from 'react-native'
import { TextInput, Button } from "@react-native-material/core";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackedScreens } from '../helpers/types';
import { AuthContext } from '../context/AuthContext';
// Username: "test@test.com"
// Password: "test1234"

const LoginScreen: React.FC<NativeStackScreenProps<StackedScreens, 'LoginScreen'>> = (props) => {
    const [disabled, setDisabled] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const authContext = useContext(AuthContext);

    useEffect(() => {
        setDisabled(username.length === 0 || password.length === 0);
    }, [username, password]);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.mainView}>
                <Text style={styles.titleTextBig}>Final Assignment</Text>
                <Text style={styles.titleTextSmall}>AU20 React Native, TypeScript</Text>
            </View>
            <View style={styles.mainView}>
                <Image
                    style={styles.imageView}
                    source={{ uri: 'https://i.gifer.com/origin/ca/cae92018f016fbc1c579fb4b80b4abf1.gif' }}
                />
            </View>
            <View style={styles.loginView}>
                <Text>Please log in:</Text>
                <TextInput
                    label='Email'
                    onChangeText={setUsername}
                    style={[styles.width80, styles.marigin10, styles.textInputText]} />
                <TextInput
                    label='Password'
                    secureTextEntry
                    onChangeText={setPassword}
                    style={[styles.width80, styles.marigin10, styles.textInputText]} />
                <Button
                    color={disabled ? '#00800077' : '#008000FF'}
                    tintColor='white'
                    title='Login'
                    disabled={disabled}
                    style={[styles.width80, styles.marigin10]}
                    onPress={() => { authContext?.login(username, password) }} />
            </View>
        </SafeAreaView>
    )
}

export default LoginScreen

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
