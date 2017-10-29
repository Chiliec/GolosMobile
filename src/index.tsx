import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    Alert,
    Image
} from 'react-native';

interface Props {

}

interface State {

}

export default class GolosMobile extends Component<Props, State> {
    _openAuthorize() {
        Alert.alert("WoW!!!");
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    Добро пожаловать в Golos!
                </Text>
                <Image source={require('../images/golos_logo.png')} style={styles.image} />
                <View style={styles.button}>
                    <Button onPress={this._openAuthorize} title="Авторизоваться" color="#FFFFFF" />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

    text: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },

    button: {
        backgroundColor: '#000000',
        borderRadius: 10,
        padding: 10,
        marginTop: 50,
    },

    image: {
        resizeMode: 'center',
        height: 200,
    },
});
