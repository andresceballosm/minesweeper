import { useSelector } from 'react-redux';
// components
import { Select, MenuItem, SelectChangeEvent } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
// constants
import { LEVELS } from '../../constants/app.constants';
// styles
import useStyles from './header.styled';
// types
import { RootState } from '../../store/store';

interface HeaderProps {
  handleLevel: (e: SelectChangeEvent) => void;
  handleStart: () => void;
  level: string;
  message: string;
}

const HeaderComponent = ({ handleLevel, handleStart, level, message }: HeaderProps) => {
  const loading = useSelector((state: RootState) => state.app.loading);
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <h2 className={classes.title}>Minesweeper</h2>

      <div className={classes.selectContainer}>
        <Select className={classes.select} value={level} label="Level" onChange={handleLevel}>
          {LEVELS.map((item) => (
            <MenuItem key={item.value} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
      </div>
      <LoadingButton
        color="secondary"
        variant="outlined"
        data-testid="btn-start"
        onClick={handleStart}
        loadingIndicator="Loading..."
        disabled={loading}
        loading={loading}
      >
        Start
      </LoadingButton>
      <p className={classes.message}>{message}</p>
    </div>
  );
};

export default HeaderComponent;
