import React, { Component } from 'react'
import { View, Text } from 'react-native';
import { deviceWidth } from '../../constants/constant_values';

class Progress extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: deviceWidth * 0.05, marginTop: deviceWidth * 0.005 }}>
                <Text style={{ color: 'white', fontSize: deviceWidth * 0.03 }}>{this.props.point}</Text>
                <View style={{ marginHorizontal: deviceWidth * 0.03, backgroundColor: '#3E3F43', height: deviceWidth * 0.03, width: deviceWidth * 0.6, borderRadius: deviceWidth * 0.05 }}>
                    <View style={{ width: this.props.progressPercent, height: deviceWidth * 0.03, borderRadius: deviceWidth * 0.05, backgroundColor: '#00A273' }}>

                    </View>
                </View>
            </View>
        )
    }
};

export default Progress;