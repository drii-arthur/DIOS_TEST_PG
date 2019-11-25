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

    emailRegex = (email) => {
        //One or more after '@' and minimum domain 2 character
        let emailRegex = /^[\d\w\._-]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/
        return emailRegex.test(email)
    }

    handleSubmit = () => {
        const data = this.state.formData
        if (data.name == '') {
            alert('nama tidak boleh kosong')
        }
        else if (!this.emailRegex(data.email)) {
            alert('email tidak valid')
        }
        else if (data.gender == "") {
            alert('gender tidak boleh kosong')
        }
        else if (data.nip == "") {
            alert('nip tidak boleh kosong')
        }
        else if (data.divisi == '') {
            alert('divisi tidak boleh kosong')
        }

        else {
            Axios.post(`http://192.168.100.150:3000/data`, data) // change host with your ip address
                .then(res => {
                    alert('data berhasil di tambah')
                    this.props.navigation.navigate('MainMenu')
                })
                .catch(err => {
                    console.log(err)
                })
        }
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
