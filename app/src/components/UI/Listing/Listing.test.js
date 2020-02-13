/**
 * EXTERNAL DEPENDENCIES.
 */
import React from 'react';
import { shallow } from 'enzyme';

/**
 * COMPONENTS.
 */
import Listing from './Listing';

/**
 * INITIALIZE.
 */
describe('<Listing />', () => {
    describe('with mock data', () => {
        const mockListing = { title: 'title', description: 'description' };
        let wrapper = null;

        beforeEach(() => {
            wrapper = shallow(<Listing listing={mockListing} />);
        });

        it('should render title', () => {
            expect(wrapper.find('Title').text()).toEqual('title');
        });

        it('should render description', () => {
            expect(wrapper.find('Description').text()).toEqual('description');
        });
    });
});


