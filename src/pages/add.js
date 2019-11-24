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
import Axios from 'axios'
const { height, width } = Dimensions.get('window')
const color1 = '#ecf0f1'

class add extends Component {
    constructor(props) {
        super(props)
        this.state = {
            formData: {
                name: '',
                email: '',
                nip: '',
                gender: '',
                divisi: ''
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

    handleSubmit = () => {
        const data = this.state.formData
        Axios.post(`http://192.168.43.64:9000/data`, data)
            .then(res => {
                console.log(res)
                alert('cuuk')
            })
            .catch(err => {
                console.log(err)
            })
    }
    render() {
        return (
            <LinearGradient
                colors={['#4c669f', '#3b5998', '#192f6a']}
                style={{ flex: 1 }}>
                <StatusBar backgroundColor='#192f6a' translucent={true} />
                <Header title='Add Data' />

                <Form title='Add Data' data='' onchange={this.handleChange} onsubmit={this.handleSubmit} />
            </LinearGradient>

        )
    }
}

export default add;
