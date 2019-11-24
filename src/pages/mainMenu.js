import React, { Component } from 'react'
import { View, Text, StyleSheet, StatusBar, Dimensions, ImageBackground, TextInput, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import FAB from 'react-native-fab'
import Card from '../components/card'
import axios from 'axios'

const { height, width } = Dimensions.get('window')
const color1 = '#ecf0f1'
class mainMenu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    componentDidMount = async () => {
        await axios.get('http://192.168.43.64:9000/data') // change ip address
            .then(res => {
                console.warn(res, 'data');

                this.setState({
                    data: res.data
                })
            })
            .catch(err => {
                console.log(err)
            })
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