import React, { Component } from 'react'
import { View, Text, StyleSheet, StatusBar, Dimensions, ImageBackground, TextInput, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import FAB from 'react-native-fab'
import Card from '../components/card'

const { height, width } = Dimensions.get('window')
const color1 = '#ecf0f1'
class mainMenu extends Component {
    state = {
        data: [
            {
                id: 1,
                name: 'Pandri',
                nip: 1234567890,
                gender: 'Male',
                jabatan: 'React Native Developer',
                email: 'pandrir23@gmail.com'
            },
            {
                id: 2,
                name: 'jhon thor',
                nip: 1234567890,
                gender: 'Male',
                jabatan: 'Android Developer',
                email: 'jhon@gmail.com'
            },
            {
                id: 3,
                name: 'Areidra',
                nip: 1234567890,
                gender: 'Male',
                jabatan: 'Backend Developer',
                email: 'arey@gmail.com'
            },
            {
                id: 4,
                name: 'jhon doe',
                nip: 1234567890,
                gender: 'Male',
                jabatan: 'UI UX Designer',
                email: 'jhonDoe@gmail.com'
            }
        ]
    }
    render() {
        return (
            <View style={styles.container}>
                <StatusBar translucent={true} barStyle='dark-content' />
                {/* header content */}
                <ImageBackground style={styles.header} source={require('../assets/index.png')}></ImageBackground>

                {/* search content */}
                <View style={styles.wrapperInput}>
                    <TextInput
                        placeholder='Search ...'
                        style={styles.inputSearch}
                    />
                    <Icon name='md-search' size={20} color='grey' style={styles.icon} />
                </View>

                {/* data content */}
                <Card data={this.state.data} />

                <FAB buttonColor="#192f6a" iconTextColor="#FFFFFF" onClickAction={() => { this.props.navigation.navigate('add') }} visible={true} iconTextComponent={<Icon name="md-add" size={24} />} />
            </View>
        );
    }
}

export default mainMenu;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: 'blue',
        height: height / 4,
    },
    wrapperInput: {
        paddingHorizontal: 10
    },
    inputSearch: {
        borderColor: color1,
        borderWidth: 1,
        height: height / 17,
        padding: 0,
        marginTop: 10,
        paddingLeft: 30,
        borderRadius: 25,
        position: 'relative',
        justifyContent: 'center'
    },
    icon: {
        position: 'absolute',
        top: 18,
        left: 20,
    }
})