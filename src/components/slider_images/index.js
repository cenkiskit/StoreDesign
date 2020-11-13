import React, { Component } from 'react'
import { View, Text, Image } from 'react-native';
import { deviceWidth } from '../../constants/constant_values';

class SliderImages extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <View style={{ marginRight: deviceWidth * 0.03, overflow: 'hidden', width: deviceWidth * 0.22, height: deviceWidth * 0.4, borderRadius: deviceWidth * 0.03 }}>
                <Image style={{ resizeMode: 'stretch', width: '100%', height: '100%' }}
                    source={this.props.image} />
            </View>
        )
    }
};

export default SliderImages;