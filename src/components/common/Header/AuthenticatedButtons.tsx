import { makeStyles } from '@material-ui/core';
import React from 'react';
import SignOut from '../../../auth/SignOut';
import OpenWorkSpace from '../../CodeEditior/OpenWorkSpace/OpenWorkSpace';

const useStyles = makeStyles({
  root: {
    display: 'flex',
  },
});

const AuthenticatedButtons = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <OpenWorkSpace />
      <SignOut />
    </div>
  );
};

export default AuthenticatedButtons;
