import { Box } from '@mui/material';
import useStyles from './App.styled';
import Game from './containers/game/game.component';

function App() {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Game />
    </Box>
  );
}

export default App;
