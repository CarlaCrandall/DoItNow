import React, { Component } from 'react';
import { Animated, Easing, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AnimatedSaveViewStyles } from '../styles/components';


export default class AnimatedSaveView extends Component {

	constructor(props: OverlayType) {
		super(props);

		this.state = {
			overlayOpacity: new Animated.Value(0),
			iconSize: new Animated.Value(0),
			textOpacity: new Animated.Value(0),
			textPosition: new Animated.Value(25)
		};
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.saving !== nextProps.saving && nextProps.saving) {
			const
				textOpacityAnimation = Animated.timing(this.state.textOpacity, { toValue: 1, duration: 150 }),
				textPositionAnimation = Animated.timing(this.state.textPosition, { toValue: 0, duration: 150, easing: Easing.bounce });

			// Animate overlay opacity, icon size, and text position
			Animated.sequence([
				Animated.timing(this.state.overlayOpacity, { toValue: 0.85, duration: 150 }),
				Animated.timing(this.state.iconSize, { toValue: 72, duration: 150, easing: Easing.bounce }),
				Animated.delay(200),
				Animated.parallel([textOpacityAnimation, textPositionAnimation]),
				Animated.delay(1500)
			])
			// Navigate back after animation completes
			.start(() => this.props.goBack());
		}
	}

    render() {
    	const
    		AnimatedIcon = Animated.createAnimatedComponent(Icon)
    		overlayOpacity = { opacity: this.state.overlayOpacity },
    		iconSize = { fontSize: this.state.iconSize },
    		textOpacity = { opacity: this.state.textOpacity },
    		textPosition = { transform: [{ translateY: this.state.textPosition }] };

        return (
			<Animated.View
				pointerEvents="none"
				style={[AnimatedSaveViewStyles.container, overlayOpacity]}
			>
				<AnimatedIcon name="check-circle" style={[AnimatedSaveViewStyles.icon, iconSize]} />
				<Animated.Text style={[AnimatedSaveViewStyles.text, textOpacity, textPosition]}>
					{this.props.taskName} has been saved to your {this.props.listType.toUpperCase()} list
				</Animated.Text>
			</Animated.View>
        );
    }
}
