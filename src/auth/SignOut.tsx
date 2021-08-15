import { useAuth0 } from '@auth0/auth0-react';
import { Button, makeStyles } from '@material-ui/core';
import React from 'react';
import { commonColors } from '../theme/color';

const useStyles = makeStyles({
  button: {
    color: commonColors.white,
  },
});

const SignOut = () => {
  const classes = useStyles();

  const { logout } = useAuth0();

  const onSignOut = () => {
    logout({
      returnTo: window.location.origin,
    });
  };

  return (
    <Button className={classes.button} onClick={onSignOut}>
      Sign Out
    </Button>
  );
};

export default SignOut;
