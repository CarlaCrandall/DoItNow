import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import * as Utils from '../../../jest/utils.js';
import { AppTabNavigator } from '../';

describe('AppTabNavigator', () => {

    const shallowRender = props => {
        const renderer = new ShallowRenderer();
        renderer.render(<AppTabNavigator {...props} />);

        return {
            instance: renderer.getMountedInstance(),
            output: renderer.getRenderOutput()
        };
    };


    it('creates a Navigator', () => {
        const component = shallowRender().output;
        expect(Utils.isComponentOfType(component, 'Navigator')).toEqual(true);
    });

    it('creates the tab for the Now route', () => {
        const navigation = {
            state: { routeName: 'Now' }
        };

        const
            component = shallowRender().output,
            nowRoute = component.type.routeConfigs.Now,
            nowTab = nowRoute.navigationOptions({navigation}).tabBarLabel({focused: true});

        expect(nowTab.props.children.props.children).toEqual(navigation.state.routeName.toUpperCase());
    });

    it('creates the tab for the Later route', () => {
        const navigation = {
            state: { routeName: 'Later' }
        };

        const
            component = shallowRender().output,
            laterRoute = component.type.routeConfigs.Later,
            laterTab = laterRoute.navigationOptions({navigation}).tabBarLabel({focused: true});

        expect(laterTab.props.children.props.children).toEqual(navigation.state.routeName.toUpperCase());
    });

    it('creates the tab for the Someday route', () => {
        const navigation = {
            state: { routeName: 'Someday' }
        };

        const
            component = shallowRender().output,
            somedayRoute = component.type.routeConfigs.Someday,
            somedayTab = somedayRoute.navigationOptions({navigation}).tabBarLabel({focused: true});

        expect(somedayTab.props.children.props.children).toEqual(navigation.state.routeName.toUpperCase());
    });
});
