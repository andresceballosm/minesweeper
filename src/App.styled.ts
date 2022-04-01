import { makeStyles } from '@mui/styles';
import theme from './theme/theme';

const useStyles = makeStyles({
  container: {
    minHeight: '100vh',
    backgroundColor: theme.palette.primary.dark,
    padding: 20
  },
});

export default useStyles;
