import { defaultMargin, deviceWidth, googleGray } from "../../constants/constant_values";

export const styles = {
    imageStyle: { width: '100%', height: '100%', resizeMode: 'cover' },
    starContainer: { width: deviceWidth * 0.035, height: deviceWidth * 0.035, justifyContent: 'center', alignItems: 'center' },
    container: { height: deviceWidth * 0.5, marginHorizontal: defaultMargin },
    userImage: { overflow: 'hidden', backgroundColor: 'red', borderRadius: deviceWidth * 0.1, width: deviceWidth * 0.1, height: deviceWidth * 0.1, justifyContent: 'center', alignItems: 'center' },
    commentYes: { justifyContent: 'center', alignItems: 'center', borderColor: googleGray, borderRadius: deviceWidth * 0.05, width: deviceWidth * 0.13, height: deviceWidth * 0.06, borderWidth: 1 },
    commentNo: { marginLeft: deviceWidth * 0.02, justifyContent: 'center', alignItems: 'center', borderColor: googleGray, borderRadius: deviceWidth * 0.05, width: deviceWidth * 0.13, height: deviceWidth * 0.06, borderWidth: 1 },
    commentReportText: { color: googleGray, fontSize: deviceWidth * 0.03 },
    commentText: { color: googleGray, fontSize: deviceWidth * 0.03, marginTop: deviceWidth * 0.02, lineHeight: deviceWidth * 0.045 },
    dateText: { color: googleGray, marginLeft: deviceWidth * 0.02, fontSize: deviceWidth * 0.03 }
}