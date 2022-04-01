import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  header: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#FFFFFF',
  },
  selectContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  select: {
    width: 300,
    backgroundColor: '#FFFFFF'
  },
  message: {
    textAlign: 'center',
    color: '#FFFFFF',
  },
});

export default useStyles;
