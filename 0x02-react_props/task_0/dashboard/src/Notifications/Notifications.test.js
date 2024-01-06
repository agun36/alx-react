import { shallow } from 'enzyme';
import Notifications from '../Notifications/Notifications';

test('Notifications renders without crashing', () => {
    shallow(<Notifications />);
});

test('Notifications renders three list items', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('li').length).toBe(3);
});

test('Notifications renders the text Here is the list of notifications', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.text()).toContain('Here is the list of notifications');
});
