import React, { Component } from 'react'
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    StatusBar,
    Image, ScrollView
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Header from '../components/header'
import Form from '../components/form'
const { height, width } = Dimensions.get('window')
const color1 = '#ecf0f1'

class add extends Component {
    state = {}
    render() {
        return (
            <LinearGradient
                colors={['#4c669f', '#3b5998', '#192f6a']}
                style={{ flex: 1 }}>
                <StatusBar backgroundColor='#192f6a' translucent={true} />
                <Header title='Add Data' />

                <Form title='Add Data' data='' />
            </LinearGradient>

        )
    }
}

export default add;
