import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Image,
    FlatList,
    TouchableOpacity
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { withNavigation } from 'react-navigation'

const { height, width } = Dimensions.get('window')
class Card extends Component {

    render() {
        const { data } = this.props
        return (
            <View style={{ flex: 1, marginTop: 10 }}>
                <FlatList
                    style={data.length > 1 ? { alignSelf: 'center' } : { alignSelf: 'flex-start' }}
                    data={data}
                    numColumns={2}
                    keyExtractor={(item) => item.id}
                    onEndReachedThreshold={0.2}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity style={styles.card} onPress={() => { this.props.navigation.navigate('Profile', { item }) }}>
                                <View style={{ alignItems: 'flex-end', paddingHorizontal: 10 }}>
                                    <Image
                                        style={{ width: 25, height: 25 }}
                                        source={{ uri: 'https://digitaloasis.co.id/wp-content/uploads/2019/10/logo-slider-1.png' }} />
                                </View>
                                <LinearGradient
                                    colors={['#4c669f', '#3b5998', '#192f6a']}
                                    style={styles.wrapperImage}>
                                    <Image
                                        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXvQ5KGUac7-7VQl1VnvV3KuSWC4wRX8Ycz1URjAFoo8gPJNgQvw&s' }}
                                        style={styles.image}
                                    />
                                </LinearGradient>

                                <View style={styles.wrapperName}>
                                    <Text style={styles.textName}>{item.name}</Text>
                                    <Text style={styles.textJabatan}>{item.divisi}</Text>
                                </View>

                                <View style={styles.wrapperDetail}>
                                    <View style={styles.detail}>
                                        <Text style={styles.textDetail}>Nip</Text>
                                        <Text style={styles.textDetail}>{item.nip}</Text>
                                    </View>


                                    <View style={styles.detail}>
                                        <Text style={styles.textDetail}>gender</Text>
                                        <Text style={styles.textDetail}>{item.gender}</Text>
                                    </View>

                                </View>
                                <LinearGradient
                                    colors={['#4c669f', '#3b5998', '#192f6a']}
                                    style={styles.bottomColor}></LinearGradient>
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>
        )
    }
}

export default withNavigation(Card)
const styles = StyleSheet.create({
    card: {
        height: height / 3,
        backgroundColor: '#fff',
        width: width / 2.4,
        borderRadius: 5,
        elevation: 5,
        margin: 10,
    },
    wrapperImage: {
        backgroundColor: 'tomato',
        height: height / 13,
        width: '70%',
        borderTopRightRadius: 25,
        borderBottomRightRadius: 25,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingRight: 10
    },
    image: {
        width: 35,
        height: 35,
        borderRadius: 35 / 2,
        borderColor: '#fff',
        borderWidth: 2
    },
    wrapperName: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5
    },
    bottomColor: {
        height: '10%',
        borderTopLeftRadius: 90,
        borderBottomRightRadius: 15,
        marginLeft: 10
    },
    textName: {
        fontSize: 15,
        fontWeight: '700',
    },
    textJabatan: {
        fontSize: 12,
        color: '#3498db'
    },
    wrapperDetail: {
        flex: 1,
        paddingHorizontal: 10,
        marginTop: 5,
        justifyContent: 'center',
        // alignItems: 'center'
    },
    detail: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textDetail: {
        fontSize: 11,
        color: 'grey'
    }
})