import { PanResponder } from 'react-native';
import Swipeout from 'react-native-swipeout';

export default class SwipeoutExtended extends Swipeout {

	componentWillMount() {
		this._panResponder = PanResponder.create({
			onStartShouldSetPanResponder: (event, gestureState) => true,
			onMoveShouldSetPanResponder: (event, gestureState) =>
				Math.abs(gestureState.dx) > this.props.sensitivity &&
				Math.abs(gestureState.dy) > this.props.sensitivity,
			onPanResponderGrant: () => this._handlePanResponderGrantOverride(),
			onPanResponderMove: this._handlePanResponderMove,
			onPanResponderRelease: this._handlePanResponderEnd,
			onPanResponderTerminate: this._handlePanResponderEnd,
			onShouldBlockNativeResponder: (event, gestureState) => true
		});
	}

	_handlePanResponderGrantOverride(e: Object, gestureState: Object) {
		if (!this.state.openedLeft && !this.state.openedRight) {
			this.props.onOpen && this.props.onOpen(this.props.sectionID, this.props.rowID);
		} else {
			this.props.onClose && this.props.onClose(this.props.sectionID, this.props.rowID);
		}

		this.refs.swipeoutContent.measure((ox, oy, width, height) => {
			// Override Swipeout to provide a custom button width prop
			const buttonWidth = this.props.buttonWidth || (width / 5);
			this.setState({
				btnWidth: buttonWidth,
				btnsLeftWidth: this.props.left ? buttonWidth * this.props.left.length : 0,
				btnsRightWidth: this.props.right ? buttonWidth * this.props.right.length : 0,
				swiping: true,
				timeStart: (new Date()).getTime()
			});
		});
	}
}
