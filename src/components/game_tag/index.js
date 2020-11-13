import React, { Component } from 'react'
import { View, Text } from 'react-native';
import { deviceWidth, googleGray } from '../../constants/constant_values';

class GameTag extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <View style={{ marginRight: deviceWidth * 0.03, borderColor: googleGray, borderRadius: deviceWidth * 0.5, paddingHorizontal: deviceWidth * 0.05, height: deviceWidth * 0.085, borderWidth: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: googleGray }}>{this.props.tag}</Text>
            </View>
        )
    }
};

export default GameTag;