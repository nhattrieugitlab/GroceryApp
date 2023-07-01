import { Modal, View } from "react-native"
import AnimatedLottieView from "lottie-react-native"
import { AppAnimation } from "../../constant/IconPath"
import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"

const LoadingModal = () => {
    const isShowLoading: any = useSelector<RootState>(state => state.loading.isShowLoading)
    return <Modal visible={isShowLoading} transparent>
        <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)', }}>
            <AnimatedLottieView autoPlay loop source={AppAnimation.Loading} />
        </View>
    </Modal>
}
export default LoadingModal