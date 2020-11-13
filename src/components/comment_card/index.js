import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { defaultMargin, deviceWidth, googleGray } from '../../constants/constant_values';
import { styles } from './style';

class CommendCard extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    renderStars = () => {
        var array = []
        for (let index = 0; index < this.props.star; index++) {
            array[index] = (
                <View style={styles.starContainer}>
                    <Image style={styles.imageStyle}
                        source={require('../../assets/star.png')} />
                </View>
            )

        }
        if (this.props.star < 5) {
            for (let index = 0; index < 5 - this.props.star; index++) {
                array[5 - index] = (
                    <View style={styles.starContainer}>
                        <Image style={styles.imageStyle}
                            source={require('../../assets/blankStar.png')} />
                    </View>
                )

            }
        }

        return array;
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={styles.userImage}>
                        <Image style={{ width: '100%', height: '100%', resizeMode: 'cover' }}
                            source={this.props.image} />
                    </View>
                    <View style={{ marginLeft: deviceWidth * 0.03 }}>
                        <Text style={{ color: 'white' }}>{this.props.commentOwner}</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: deviceWidth * 0.03 }}>
                    {this.renderStars()}
                    <View><Text style={styles.dateText}>{this.props.date}</Text></View>
                </View>
                <View>
                    <Text style={styles.commentText}>
                        {this.props.comment}
                    </Text>
                </View>

                <View style={{ flex: 1, flexDirection: 'row', height: deviceWidth * 0.1, alignItems: 'center' }}>
                    <View style={{ flex: 0.7 }}>
                        <Text style={{ color: googleGray, fontSize: deviceWidth * 0.028 }}>
                            Bu yorum faydalı oldu mu?
                                </Text>
                    </View>
                    <View style={{ flex: 0.4, flexDirection: 'row' }}>
                        <TouchableOpacity style={styles.commentYes}>
                            <Text style={styles.commentReportText}>Evet</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.commentNo}>
                            <Text style={styles.commentReportText}>Hayır</Text>
                        </TouchableOpacity>
                    </View>
                </View>



            </View>
        )
    }
};

export default CommendCard;