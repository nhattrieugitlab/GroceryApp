import AnimatedLottieView from "lottie-react-native"
import { Modal, Text, View } from "react-native"
import { AppAnimation } from "../../constant/IconPath"
import React from "react"

const ThankModal: React.FC<{ show: boolean }> = ({ show }) => {
    return <Modal transparent visible={show} >
        <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 1, flex: 1 }}>
            <AnimatedLottieView autoPlay loop source={AppAnimation.Thank} />
        </View>
    </Modal>
}
export default ThankModal