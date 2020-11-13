import React, { Component } from 'react'
import { View, Text, ScrollView, TouchableOpacity, Image, Linking } from 'react-native';
import CommendCard from '../../components/comment_card';
import { styles } from './style';
import DownloadGame from '../../components/download_game';
import GameCard from '../../components/game_card';
import GameInfo from '../../components/game_info';
import GameTag from '../../components/game_tag';
import Progress from '../../components/progress';
import SliderImages from '../../components/slider_images';
import { defaultMargin, deviceWidth, googleGray, googleGreen } from '../../constants/constant_values';


class GooglePlay extends Component {
    constructor(props) {
        super(props)
        this.state = {
            comments: [
                { name: "Cenk İSKİT", image: require('../../assets/gameIcon.jpg'), date: "13.11.2020", star: 5, comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
                { name: "Uğur ÇAKMAKÇIOĞLU", image: require('../../assets/slider1.png'), date: "13.11.2020", star: 3, comment: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." }]

        }
    }

    renderComments() {
        return this.state.comments.map((value) => {
            return (
                <CommendCard
                    comment={value.comment}
                    commentOwner={value.name}
                    image={value.image}
                    date={value.date}
                    star={value.star}
                />
            )
        })
    }

    renderStar() {
        var gameStar = 4
        var array = []
        for (let index = 0; index < gameStar; index++) {
            array[index] = (
                <View style={styles.starContainer}>
                    <Image style={styles.image}
                        source={require('../../assets/star.png')} />
                </View>
            )
        }

        if (gameStar < 5) {
            for (let index = 0; index < 5 - gameStar; index++) {
                array[5 - index] = (
                    <View style={styles.starContainer}>
                        <Image style={styles.image}
                            source={require('../../assets/blankStar.png')} />
                    </View>
                )
            }
        }
        return array
    }

    renderSliderImages() {
        var images = [
            require('../../assets/slider1.webp'),
            require('../../assets/slider2.webp'),
            require('../../assets/slider3.webp'),
            require('../../assets/slider4.webp'),
            require('../../assets/slider5.webp'),
            require('../../assets/slider6.webp')]

        return images.map((value) => {
            return (
                <SliderImages image={value} />
            )
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={{ paddingBottom: deviceWidth * 0.05 }}>
                    {/* TOP BAR STARTING */}
                    <View style={{ flexDirection: 'row', height: 70 }}>
                        <View style={{ flex: 0.02 }} />
                        <View style={{ flex: 0.78, alignItems: 'center', flexDirection: 'row' }}>
                            <TouchableOpacity style={styles.topBarContent}>
                                <Image style={styles.topBarImages}
                                    source={require('../../assets/backCopy.png')} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginLeft: deviceWidth * 0.06, width: deviceWidth * 0.25, height: deviceWidth * 0.065 }}>
                                <Image style={styles.topBarImages}
                                    source={require('../../assets/googlePlayLogo.png')} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 0.1, justifyContent: 'center' }}>
                            <TouchableOpacity style={styles.topBarContent}>
                                <Image style={styles.topBarImages}
                                    source={require('../../assets/search.png')} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 0.1, justifyContent: 'center' }}>
                            <TouchableOpacity style={styles.topBarContent}>
                                <Image style={styles.topBarImages}
                                    source={require('../../assets/options.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    {/* TOP BAR ENDING */}
                    {/* GAME INFO STARTING */}
                    <View>
                        {/* MAIN CARD STARTING */}
                        <GameCard
                            gameIcon={require('../../assets/gameIcon.webp')}
                            gameName={"Basketball Stars"}
                            website={"Miniclip.com"} />
                        {/* MAIN CARD ENDING */}
                        {/* COMMENTS ETC.  */}
                        <View style={{ height: 80, marginVertical: deviceWidth * 0.03 }}>
                            <ScrollView
                                showsHorizontalScrollIndicator={false}
                                horizontal
                                contentContainerStyle={{ paddingLeft: deviceWidth * 0.06, alignItems: 'center', paddingRight: deviceWidth * 0.01 }}>
                                <GameInfo
                                    commentCounter={"161 B"}
                                    gameSize={"149 MB"}
                                    downloaded={"5 Mn+"}
                                />
                            </ScrollView>

                        </View>
                        <DownloadGame gameId={"com.miniclip.basketballstars"} />
                    </View>
                    {/* GAME INFO ENDING */}

                    {/* SLIDER STARTING */}
                    <View style={{ height: deviceWidth * 0.55 }}>
                        <ScrollView horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{ alignItems: 'center', paddingLeft: deviceWidth * 0.06, paddingRight: deviceWidth * 0.03 }}>
                            {this.renderSliderImages()}
                        </ScrollView>
                    </View>
                    {/* SLIDER ENDING */}
                    {/* ABOUT GAME STARTING */}
                    <View>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flex: 0.87, justifyContent: 'center', paddingLeft: defaultMargin }}>
                                <Text style={{ color: 'white', fontSize: deviceWidth * 0.04 }}>Bu oyun hakkında</Text>
                            </View>
                            <View style={{ flex: 0.13 }}>
                                <TouchableOpacity style={{ width: deviceWidth * 0.065, height: deviceWidth * 0.065, justifyContent: 'center', alignItems: 'center' }}>
                                    <Image style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
                                        source={require('../../assets/nextCopy.png')} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ marginLeft: defaultMargin, marginTop: deviceWidth * 0.02 }}>
                            <Text style={{ color: googleGray }}>Futbol Oyununun Doruğu</Text>
                        </View>
                        <View>
                            <ScrollView horizontal
                                style={{ marginTop: deviceWidth * 0.05 }}
                                contentContainerStyle={{ marginLeft: defaultMargin, paddingRight: deviceWidth * 0.05 }}
                                showsHorizontalScrollIndicator={false}>
                                <GameTag tag={"Spor"} />
                                <GameTag tag={"Basketbol"} />
                                <GameTag tag={"Stilize"} />
                            </ScrollView>
                        </View>
                    </View>
                    {/* ABOUT GAME ENDING */}

                    {/* RATING STARTING */}

                    <View style={{ flexDirection: 'row', marginTop: deviceWidth * 0.05 }}>
                        <View style={{ flex: 0.87, alignItems: 'center', paddingLeft: defaultMargin, flexDirection: 'row' }}>
                            <Text style={{ color: 'white', fontSize: deviceWidth * 0.04 }}>Kullanıcı oyları ve yorumlar</Text>
                            <TouchableOpacity style={{ marginTop: deviceWidth * 0.01, marginLeft: deviceWidth * 0.01, width: deviceWidth * 0.05, height: deviceWidth * 0.05, justifyContent: 'center', alignItems: 'center' }}>
                                <Image style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
                                    source={require('../../assets/info.png')} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 0.13 }}>
                            <TouchableOpacity style={{ width: deviceWidth * 0.065, height: deviceWidth * 0.065, justifyContent: 'center', alignItems: 'center' }}>
                                <Image style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
                                    source={require('../../assets/nextCopy.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>


                    <View style={{ flexDirection: 'row', marginLeft: defaultMargin }}>
                        <View>
                            <Text style={{ color: 'white', fontSize: deviceWidth * 0.16 }}>4,3</Text>
                            <View style={{ marginVertical: deviceWidth * 0.005, marginLeft: -deviceWidth * 0.01, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                {this.renderStar()}
                            </View>
                            <Text style={{ color: googleGray, fontSize: deviceWidth * 0.025 }}>161.285</Text>
                        </View>

                        <View style={{ marginTop: deviceWidth * 0.03 }}>
                            <Progress point={5} progressPercent={deviceWidth * 0.45} />
                            <Progress point={4} progressPercent={deviceWidth * 0.15} />
                            <Progress point={3} progressPercent={deviceWidth * 0.06} />
                            <Progress point={2} progressPercent={deviceWidth * 0.03} />
                            <Progress point={1} progressPercent={deviceWidth * 0.1} />
                        </View>
                    </View>

                    <View style={{ flex: 1, height: deviceWidth * 0.2, flexDirection: 'row' }}>
                        <View style={{ flex: 0.05 }} />
                        <View style={styles.gamePoints}>
                            <Text style={{ color: googleGray }}>Gameplay  </Text>
                            <Text style={{ color: 'white' }}>4,3</Text>
                        </View>
                        <View style={styles.gamePoints}>
                            <Text style={{ color: googleGray }}>Graphics  </Text>
                            <Text style={{ color: 'white' }}>4,4</Text>
                        </View>
                        <View style={styles.gamePoints}>
                            <Text style={{ color: googleGray }}>Control  </Text>
                            <Text style={{ color: 'white' }}>4,3</Text>
                        </View>
                        <View style={{ flex: 0.05 }} />
                    </View>
                    {/* RATING ENDING */}
                    {/* COMMENTS STARTING */}
                    {this.renderComments()}

                    <TouchableOpacity style={{ marginLeft: defaultMargin }}>
                        <Text style={{ color: googleGreen, fontWeight: 'bold' }}>Tüm yorumları göster</Text>
                    </TouchableOpacity>

                    {/* COMMENTS ENDING */}

                </ScrollView>
            </View>
        )
    }
};

export default GooglePlay;