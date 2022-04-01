import Board from '../board.components';
import { render } from '../../../utils/rtl-wrapper.util';

const map: string[] = ['□□□□□□□□□□', '□□□□□□□□□□', '□□□□□□□□□□', '□□□□□□□□□□'];

describe('<Board />', () => {
  it('should render map correctly', () => {
    const { queryAllByTestId } = render(<Board map={map} />);
    expect(queryAllByTestId('board-map')).toHaveLength(4);
  });
});
