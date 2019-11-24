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

class Edit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            formData: {
                name: '',
                email: '',
                nip: '',
                gender: '',

            },
        }
    }

    handleChange = (name, value) => {
        let newFormData = { ...this.state.formData }
        newFormData[name] = value
        this.setState({
            formData: newFormData
        })
    }
    render() {
        console.warn(this.state.formData.name)
        const data = this.props.navigation.getParam('data')
        return (
            <LinearGradient
                colors={['#4c669f', '#3b5998', '#192f6a']}
                style={{ flex: 1 }}>
                <StatusBar backgroundColor='#192f6a' translucent={true} />
                <Header title='Edit Data' />

                <Form data={data} title='Edit Data' onchange={this.handleChange} />
            </LinearGradient>

        )
    }
}

export default Edit;
