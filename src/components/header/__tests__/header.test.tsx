import { render } from '../../../utils/rtl-wrapper.util';
import '@testing-library/jest-dom';
import HeaderComponent from '../header.component';
import { SelectChangeEvent } from '@mui/material';

let props = {
  handleLevel: (e: SelectChangeEvent) => {},
  handleStart: () => {},
  level: '1',
  message: 'Good Luck!!',
};

test('renders a header title correctly', () => {
  const { getByText } = render(<HeaderComponent {...props} />);
  expect(getByText('Minesweeper')).toBeInTheDocument();
});

test('renders a button to start game', () => {
  const { getByText } = render(<HeaderComponent {...props} />);
  expect(getByText('Start')).toBeInTheDocument();
});
