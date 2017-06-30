import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import * as Utils from '../../../jest/utils.js';
import { SwipeButton } from '../';

describe('SwipeButton', () => {
    let globalProps,
        component;

    const shallowRender = props => {
        const renderer = new ShallowRenderer();
        renderer.render(<SwipeButton {...props} />);

        return {
            instance: renderer.getMountedInstance(),
            output: renderer.getRenderOutput()
        };
    };

    beforeAll(() => {
        globalProps = {
            icon: 'check',
            type: 'complete'
        };

        component = shallowRender(globalProps).output;
    });

    it('renders the icon and text', () => {
        const
            Icon = Utils.findAllWithType(component, 'Icon'),
            Text = Utils.findAllWithType(component, 'Text');

        expect(Icon.length).toEqual(1);
        expect(Text.length).toEqual(1);
        expect(Text[0].props.children).toEqual('Complete');
    });
});
