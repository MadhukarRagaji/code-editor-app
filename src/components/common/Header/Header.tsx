import { useAuth0 } from '@auth0/auth0-react';
import { AppBar, makeStyles, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import { toggleDarkMode } from '../../../store/reducers/dark-mode/reducer';
import { useAppDispatch, useAppSelector } from '../../../store/hook';
import DarkModeIcon from '@material-ui/icons/Brightness2';
import { Switch } from '@material-ui/core';
import AuthenticatedButtons from './AuthenticatedButtons';
import UnAuthenticatedButtons from './UnAuthenticatedButtons';

const useStyles = makeStyles({
  title: {
    flex: 1,
  },
});

const Header = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const darkMode = useAppSelector((state) => state.darkMode);
  const { isAuthenticated } = useAuth0();

  const onChangeDarkMode = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography className={classes.title} variant="h6">
          Code Editor App
        </Typography>
        <DarkModeIcon />
        <Switch onChange={onChangeDarkMode} color="default" checked={darkMode} />
        {isAuthenticated ? <AuthenticatedButtons /> : <UnAuthenticatedButtons />}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
