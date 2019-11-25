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
import Axios from 'axios'
import Header from '../components/header'
import Form from '../components/form'
const { height, width } = Dimensions.get('window')
const color1 = '#ecf0f1'

class Edit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: this.props.navigation.getParam('data'),
            formData: {
                name: this.props.navigation.getParam('data').name,
                email: this.props.navigation.getParam('data').email,
                nip: this.props.navigation.getParam('data').nip,
                gender: this.props.navigation.getParam('data').gender,
                divisi: this.props.navigation.getParam('data').divisi

            },
        }
    }

    handleSubmit = () => {
        const data = this.state.formData
        Axios.patch(`http://192.168.100.150:3000/data/${this.state.data.id}`, data)
            .then(res => {
                alert('data berhasil di ubah')
                this.props.navigation.navigate('MainMenu')
            })
            .catch(err => {
                console.log(err)
            })
    }

    handleChange = (name, value) => {
        let newFormData = { ...this.state.formData }
        newFormData[name] = value
        this.setState({
            formData: newFormData
        })
    }
    render() {
        const { data } = this.state
        return (
            <LinearGradient
                colors={['#4c669f', '#3b5998', '#192f6a']}
                style={{ flex: 1 }}>
                <StatusBar backgroundColor='#192f6a' translucent={true} />
                <Header title='Edit Data' />

                <Form data={data} title='Edit Data' onchange={this.handleChange} onsubmit={this.handleSubmit} />
            </LinearGradient>

        )
    }
}

export default Edit;
