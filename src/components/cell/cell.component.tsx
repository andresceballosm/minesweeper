import { Fragment } from 'react';
import useStyles from './cell.styled';
import { useSocket } from '../../store/hooks/hooks';

interface CellProps {
  row: string;
  rowIndex: number;
}

const CellComponent = ({ row, rowIndex }: CellProps) => {
  const classes = useStyles();
  const ws = useSocket();
  const handleOnClick = (col: number, row: number) => ws.send(`open ${col} ${row}`);
  const getId = (row: number, col: number) => `cell-${row}-${col}`;

  return (
    <Fragment>
      {row.split('').map((cell: string, col: number) =>
        cell === '□' ? (
          <div
            key={getId(rowIndex, col)}
            className={`${classes.cell} ${classes.hideCell}`}
            onClick={() => handleOnClick(col, rowIndex)}
            data-testid={getId(rowIndex, col)}
          />
        ) : (
          <div
            key={getId(rowIndex, col)}
            className={`${classes.cell} ${classes.openedCell}`}
            onClick={() => handleOnClick(col, rowIndex)}
            data-testid={getId(rowIndex, col)}
          >
            <p className={cell === '*' ? classes.wrongCell : classes.successCell}>{cell}</p>
          </div>
        )
      )}
    </Fragment>
  );
};

export default CellComponent;
