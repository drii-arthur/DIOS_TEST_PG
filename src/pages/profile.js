import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    Image,
    ScrollView,
    StatusBar
} from 'react-native'
import Header from '../components/header'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/Ionicons'
import Axios from 'axios'

const color1 = '#ecf0f1'
const { height, width } = Dimensions.get('window')
class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: this.props.navigation.getParam('item')
        }
    }

    handleDelete = () => {
        Axios.delete(`http://192.168.43.64:9000/data/${this.state.data.id}`)
            .then(() => {
                alert('data berhasil di hapus')
                this.props.navigation.navigate('MainMenu')
            })
            .catch(err => {
                console.log(err)
            })
    }
    render() {
        const { data } = this.state
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor='#192f6a' translucent={true} />
                <LinearGradient
                    colors={['#3c40c6', '#575fcf', '#0fbcf9']}
                    style={styles.header}
                >
                    <Header title='profile' />

                    <LinearGradient
                        colors={['#3c40c6', '#0fbcf9']}
                        style={styles.wrapperImage}>
                        <Image
                            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXvQ5KGUac7-7VQl1VnvV3KuSWC4wRX8Ycz1URjAFoo8gPJNgQvw&s' }}
                            style={styles.image}
                        />
                    </LinearGradient>

                    <LinearGradient
                        colors={['#3c40c6', '#0fbcf9']}
                        style={styles.wrapperText}>
                        <Text style={{ color: '#fff' }}>{data.name}</Text>
                    </LinearGradient>

                </LinearGradient>

                <View style={styles.banner}>
                    <TouchableOpacity style={styles.btn} onPress={() => { this.props.navigation.navigate('Edit', { data }) }}>
                        <Icon name='ios-create' size={25} color='#0be881' />
                        <Text style={styles.textBtn}>Edit</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn}
                        onPress={() => { this.handleDelete() }}
                    >
                        <Icon name='md-trash' size={25} color='red' />
                        <Text style={styles.textBtn}>Delete</Text>
                    </TouchableOpacity>
                </View>


                <View style={{ flex: 1, backgroundColor: '#fff', borderRadius: 5, marginTop: 0, paddingHorizontal: 10 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={styles.cardDetail}>
                            <Icon name='ios-mail' size={24} color='#3c40c6' />
                            <Text style={{ color: 'grey' }} >{data.email}</Text>
                        </View>
                        <View style={styles.cardDetail}>
                            <Icon name='ios-briefcase' size={24} color='#3c40c6' />
                            <Text style={{ color: 'grey' }} > {data.divisi}</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={styles.cardDetail}>
                            <Icon name='ios-barcode' size={24} color='#3c40c6' />
                            <Text style={{ color: 'grey' }} > {data.nip}</Text>
                        </View>
                        <View style={styles.cardDetail}>
                            <Icon name='ios-male' size={24} color="#3c40c6" />
                            <Text style={{ color: 'grey' }} > {data.gender}</Text>
                        </View>
                    </View>

                </View>

            </View >
        )
    }
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        height: height / 3
    },
    banner: {
        height: height / 9,
        backgroundColor: '#fff',
        margin: 15,
        flexDirection: 'row',
        borderRadius: 5,
        elevation: 3,
        alignItems: 'center',
        paddingHorizontal: 20,
        justifyContent: 'space-between'
    },
    btn: {
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: color1,
        paddingVertical: 5,
        borderRadius: 10
    },
    textBtn: {
        color: 'grey',
        fontSize: 14,
        fontWeight: '700'
    },
    wrapperImage: {
        height: height / 10,
        width: width / 3,
        backgroundColor: 'red',
        borderTopRightRadius: 35,
        borderBottomRightRadius: 35,
        marginTop: 10,
        alignItems: 'flex-end'
    },
    wrapperImage: {
        backgroundColor: 'tomato',
        height: height / 10,
        width: width / 3,
        borderTopRightRadius: 35,
        borderBottomRightRadius: 35,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingRight: 10,
        marginTop: 10
    },
    image: {
        width: 45,
        height: 45,
        borderRadius: 45 / 2,
        borderColor: '#fff',
        borderWidth: 2
    },

    wrapperText: {
        height: height / 15,
        width: width / 2,
        marginTop: 10,
        borderTopRightRadius: 25,
        borderBottomRightRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardDetail: {
        flex: 1,
        backgroundColor: '#fff',
        height: height / 7,
        margin: 5,
        elevation: 5,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'

    }

})