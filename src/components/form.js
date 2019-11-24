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
import Icon from 'react-native-vector-icons/Ionicons'
import ImagePicker from 'react-native-image-picker'

import Header from '../components/header'
const { height, width } = Dimensions.get('window')
const color1 = '#ecf0f1'

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            foto: 'https://png.pngtree.com/png-vector/20190307/ourmid/pngtree-vector-edit-profile-icon-png-image_780604.jpg',
            isSave: false
        }
    }
    _handleCamera = () => {
        const options = {
            storageOptions: {
                skipBackup: true,
                path: 'images',
            }
        }
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
            // if (response.uri) {
            //     this.setState({
            //         foto: response.uri,
            //         isSave: true
            //     })
            // }
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = { uri: response.uri };

                // You can also display the image using data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    foto: source,
                });
            }
        });
    }
    render() {
        const { data } = this.props

        return (

            <ScrollView style={{ flex: 1, margin: 25, backgroundColor: '#fff', overflow: 'hidden', elevation: 5, borderRadius: 10 }}>
                <LinearGradient
                    colors={['#0fbcf9', '#575fcf']}
                    style={styles.wrapperImage}
                >
                    <View style={styles.imageBox}>
                        <Image
                            style={styles.image}
                            source={{ uri: `${this.state.foto}` }} />
                        <TouchableOpacity
                            onPress={() => { this._handleCamera() }}
                            style={{ position: 'absolute', bottom: 0, right: 10, width: 25, height: 25, backgroundColor: '#575fcf', justifyContent: 'center', alignItems: 'center', borderRadius: 25 / 2 }}>
                            <Icon name='md-camera' size={16} color='#fff' />
                        </TouchableOpacity>
                    </View>

                </LinearGradient>

                <View style={{ paddingHorizontal: 15 }}>
                    <Text style={{ color: '#0fbcf9' }}>Nama</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Masukan Nama'
                        onChangeText={(text) => { this.props.onchange('name', text) }}
                    >
                        <Text>{data.name}</Text>
                    </TextInput>

                    <Text style={{ color: '#0fbcf9' }}>Email</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType="email-address"
                        placeholder='Masukan Email'
                        onChangeText={(text) => { this.props.onchange('email', text) }}
                    >
                        <Text>{data.email}</Text>
                    </TextInput>

                    <Text style={{ color: '#0fbcf9' }}>Gender</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Masukan Gender'
                        onChangeText={(text) => { this.props.onchange('gender', text) }}

                    >
                        <Text>{data.gender}</Text>
                    </TextInput>

                    <Text style={{ color: '#0fbcf9' }}>Nip</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Masukan Nip'
                        onChangeText={(text) => { this.props.onchange('nip', text) }}
                    >
                        <Text>{data.nip}</Text>
                    </TextInput>

                    <Text style={{ color: '#0fbcf9' }}>Divisi</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Masukan Divisi'
                        onChangeText={(text) => { this.props.onchange('divisi', text) }}
                    >
                        <Text>{data.divisi}</Text>
                    </TextInput>
                </View>


                <LinearGradient
                    style={{ width: 100, justifyContent: 'center', alignItems: 'center', padding: 10, alignSelf: 'flex-end', marginTop: 20, borderTopLeftRadius: 25, borderBottomLeftRadius: 25 }}
                    colors={['#0fbcf9', '#575fcf']}>
                    <TouchableOpacity style={{ width: 100, justifyContent: 'center', alignItems: 'center' }}
                        onPress={() => { this.props.onsubmit() }}
                    >

                        <Text style={{ color: '#fff', fontWeight: '700' }}>{this.props.title}</Text>

                    </TouchableOpacity>
                </LinearGradient>


            </ScrollView>
        )
    }
}

export default Form;

const styles = StyleSheet.create({
    wrapperImage: {
        borderBottomRightRadius: 150,
        borderBottomLeftRadius: 150,
        transform: [{ scaleX: 1.5 }],
        height: height / 4.2,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageBox: {
        height: 100,
        width: 100,
        transform: [{ scaleX: 0.7 }],
        position: 'relative'
    },
    image: {
        width: undefined,
        height: undefined,
        flex: 1,
        borderRadius: 100 / 2
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: color1,
        height: 30,
        padding: 0,
        paddingLeft: 10,
        marginBottom: 5
    }
})