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
			textPosition: new Animated.Value(50)
		};
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.saving !== nextProps.saving && nextProps.saving) {
			const
				// Animate text properties in parallel
				parallelAnimation = Animated.parallel([
					Animated.timing(this.state.textOpacity, { toValue: 1, duration: 550 }),
					Animated.timing(this.state.textPosition, { toValue: 0, duration: 550, easing: Easing.in(Easing.bounce) })
				]),
				// Stagger animation of icon and text
				staggeredAnimation = Animated.stagger(150, [
					Animated.timing(this.state.iconSize, { toValue: 72, duration: 550, easing: Easing.in(Easing.bounce) }),
					parallelAnimation
				]);

			// Animate overlay opacity, icon size, and text position
			Animated.sequence([
				Animated.timing(this.state.overlayOpacity, { toValue: 1, duration: 150 }),
				Animated.delay(50),
				staggeredAnimation,
				Animated.delay(1500)
			])
			// Navigate back after animation completes
			.start(() => this.props.goBack());
		}
	}

    render() {
    	const
    		AnimatedIcon = Animated.createAnimatedComponent(Icon),
    		overlayOpacity = { opacity: this.state.overlayOpacity },
    		iconSize = { fontSize: this.state.iconSize },
    		textOpacity = { opacity: this.state.textOpacity },
    		textPosition = { transform: [{ translateY: this.state.textPosition }] },
    		boldText = AnimatedSaveViewStyles['text--bold'],
    		coloredText = AnimatedSaveViewStyles[`text--${this.props.listType}`];

        return (
			<Animated.View
				pointerEvents="none"
				style={[AnimatedSaveViewStyles.container, overlayOpacity]}
			>
				<AnimatedIcon name="check-circle" style={[AnimatedSaveViewStyles.icon, iconSize]} />
				<Animated.Text style={[AnimatedSaveViewStyles.text, textOpacity, textPosition]}>
					<Text style={boldText}>{this.props.taskName} </Text>
					has been saved to your
					<Text style={[boldText, coloredText]}> {this.props.listType.toUpperCase()} </Text>
					list
				</Animated.Text>
			</Animated.View>
        );
    }
}
