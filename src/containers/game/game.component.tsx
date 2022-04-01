import { Fragment, useEffect, useMemo, useState } from 'react';
import { Box, SelectChangeEvent } from '@mui/material';
import Board from '../../components/board/board.components';
import HeaderComponent from '../../components/header/header.component';
import { useAppDispatch, useAppSelector, useSocket } from '../../store/hooks/hooks';
import useStyles from './game.styled';
import { initGame, startGame } from '../../store/actions/game.actions';
import { mapSelector, statusSelector } from '../../store/reducers/game.slice';

const GameComponent = () => {
  const classes = useStyles();
  const [level, setLevel] = useState<string>('new 1');
  const status = useAppSelector(statusSelector);
  const map = useAppSelector(mapSelector);
  const socket = useSocket();
  const dispatch = useAppDispatch();


  useEffect(() => {
    dispatch(initGame(socket));
  }, []);

  const handleLevel = (e: SelectChangeEvent) => setLevel(e.target.value);

  const handleStart = () => dispatch(startGame(socket, level));

  const message = useMemo(() => {
    switch (status) {
      case 'OK':
        return 'Good Luck!!';
      case 'You lose':
        return 'You lose!!, Press START button to play again!';
      default:
        return 'Press START button to play!';
    }
  }, [status]);

  return (
    <Fragment>
      <HeaderComponent
        handleLevel={handleLevel}
        handleStart={handleStart}
        level={level}
        message={message}
      />
      <Box className={classes.container}>
        <Board map={map} />
      </Box>
    </Fragment>
  );
};

export default GameComponent;
