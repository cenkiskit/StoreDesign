import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import { defaultMargin, deviceWidth } from '../../constants/constant_values';

class DownloadGame extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <TouchableOpacity
                onPress={() => { Linking.openURL(`market://details?id=${this.props.gameId}`); }}
                activeOpacity={0.5}
                style={{ marginHorizontal: defaultMargin, borderRadius: deviceWidth * 0.01, justifyContent: 'center', alignItems: 'center', height: deviceWidth * 0.09, backgroundColor: '#00A273' }}>
                <Text>Yükle</Text>
            </TouchableOpacity>
        )
    }
};

export default DownloadGame;