import { render } from '@testing-library/react';
import Cell from '../cell.component';

describe('CellComponent', () => {
  it('should render correctly', () => {
    const row = '1';
    const rowIndex = 1;
    const component = render(<Cell row={row} rowIndex={rowIndex} />);
    expect(component).toBeDefined();
  });
});
