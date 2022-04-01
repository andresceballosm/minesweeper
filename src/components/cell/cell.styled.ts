import { makeStyles } from '@mui/styles';
import theme from '../../theme/theme';

const useStyles = makeStyles({
  cell: {
    display: 'flex',
    minWidth: 25,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  openedCell: {
    border: `.5px solid ${theme.palette.secondary.dark}`,
    backgroundColor: theme.palette.secondary.main,
  },
  hideCell: {
    'borderTop': '.5px solid',
    'borderRight': '.5px solid gray',
    'borderLeft': '.5px solid',
    'borderBottom': '.5px solid gray',
    'backgroundColor': theme.palette.primary.main,

    '&:hover': { backgroundColor: theme.palette.secondary, cursor: 'pointer' },
  },
  successCell: {
    color: '#FFFFFF',
  },
  wrongCell: {
    color: theme.palette.error.main,
  },
});

export default useStyles;
