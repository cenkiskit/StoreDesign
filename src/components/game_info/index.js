import React, { Component } from 'react'
import { View, Text, Image } from 'react-native';
import { deviceWidth, googleGray } from '../../constants/constant_values';

class GameInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <View style={{flexDirection:'row'}}>
                <View style={{ justifyContent: 'center', alignItems: 'center', width: deviceWidth * 0.23 }}>
                    <View style={{ justifyContent: 'center', height: deviceWidth * 0.06 }}>
                        <Text style={{ color: 'white', fontWeight: '600' }}>4,3</Text>
                    </View>
                    <Text style={{ color: googleGray }}>{this.props.commentCounter} yorum</Text>
                </View>
                <View style={{ marginLeft: deviceWidth * 0.02, width: 2, height: deviceWidth * 0.06, backgroundColor: '#8B8E91' }} />

                <View style={{ justifyContent: 'center', alignItems: 'center', width: deviceWidth * 0.23 }}>
                    <View style={{ width: deviceWidth * 0.06, height: deviceWidth * 0.06, justifyContent: 'center', alignItems: 'center' }}>
                        <Image style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
                            source={require('../../assets/mb.png')} />
                    </View>
                    <Text style={{ color: googleGray }}>PEGI 3</Text>
                </View>
                <View style={{ marginLeft: deviceWidth * 0.02, width: 2, height: deviceWidth * 0.06, backgroundColor: '#8B8E91' }} />
                <View style={{ justifyContent: 'center', alignItems: 'center', width: deviceWidth * 0.23 }}>
                    <View style={{ width: deviceWidth * 0.06, height: deviceWidth * 0.06, justifyContent: 'center', alignItems: 'center' }}>
                        <Image style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
                            source={require('../../assets/pegi.png')} />
                    </View>
                    <Text style={{ color: googleGray }}>{this.props.gameSize}</Text>
                </View>
                <View style={{ marginLeft: deviceWidth * 0.02, width: 2, height: deviceWidth * 0.06, backgroundColor: '#8B8E91' }} />
                <View style={{ justifyContent: 'center', alignItems: 'center', width: deviceWidth * 0.23 }}>
                    <View style={{ justifyContent: 'center', height: deviceWidth * 0.06 }}>
                        <Text style={{ color: 'white' }}>{this.props.downloaded}</Text>
                    </View>
                    <Text style={{ color: googleGray }}>İndirme</Text>
                </View>
            </View>
        )
    }
};

export default GameInfo;