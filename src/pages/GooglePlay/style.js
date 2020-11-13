import { deviceWidth } from "../../constants/constant_values";

export const styles = {
    starContainer: { width: deviceWidth * 0.035, height: deviceWidth * 0.035, justifyContent: 'center', alignItems: 'center' },
    image: { width: '100%', height: '100%', resizeMode: 'contain' },
    container: { width: '100%', height: '100%', backgroundColor: '#202125' },
    topBarContent: { width: deviceWidth * 0.065, height: deviceWidth * 0.065 },
    topBarImages:{ resizeMode: 'stretch', width: '100%', height: '100%' },
    gamePoints:{ flex: 0.3, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }
}