import React, { Component } from 'react'
import { View, Text, Image } from 'react-native';
import { deviceWidth, googleGray, googleGreen } from '../../constants/constant_values';

class GameCard extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <View style={{ flexDirection: 'row', marginLeft: deviceWidth * 0.06 }}>
                <View style={{ borderRadius: deviceWidth * 0.05, borderWidth: 1, width: deviceWidth * 0.2, height: deviceWidth * 0.2, overflow: 'hidden', }}>
                    <Image style={{ resizeMode: 'contain', overflow: 'hidden', width: '100%', height: '100%' }} source={this.props.gameIcon} />
                </View>
                <View style={{ justifyContent: 'center', marginLeft: deviceWidth * 0.06 }}>
                    <Text style={{ color: 'white', fontSize: deviceWidth * 0.06, fontWeight: '600' }}>{this.props.gameName}</Text>
                    <Text style={{ color: googleGreen, fontSize: deviceWidth * 0.032, marginVertical: deviceWidth * 0.002 }}>{this.props.website}</Text>
                    <Text style={{ color: googleGray, fontSize: deviceWidth * 0.03 }}>Reklam içerir • Uygulama içi satın alma</Text>
                </View>
            </View>
        )
    }
};

export default GameCard;