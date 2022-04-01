import { render } from '../utils/rtl-wrapper.util';
import '@testing-library/jest-dom';
import App from '../App';

describe('<App />', () => {
  let component: any;
  it('renders correctly', () => {
    component = render(<App />);
    expect(component).toBeDefined();
  });
});
