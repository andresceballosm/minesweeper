//Components
import { Box } from '@mui/material';
import CellComponent from '../cell/cell.component';
//Styled
import useStyles from './board.styled';

interface IBoardProps {
  map: string[];
}
const Board: React.FC<IBoardProps> = ({ map }) => {
  const classes = useStyles();
  return (
    <Box>
      {map.map((row: string, rowIndex: number) => (
        <Box className={classes.row} key={`board-${rowIndex}`} data-testid='board-map'>
          <CellComponent row={row} rowIndex={rowIndex} />
        </Box>
      ))}
    </Box>
  );
};

export default Board;
