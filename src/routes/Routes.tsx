import { useAuth0 } from '@auth0/auth0-react';
import { makeStyles } from '@material-ui/core';
import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import ProtectedRoutes from '../auth/ProtectedRoutes';
import Header from '../components/common/Header/Header';
import Loading from '../components/common/Loading/Loading';
import CodeEditor from '../pages/CodeEditor/CodeEditor';
import Home from '../pages/Home/Home';
import routesCollection from './routesCollection';

const useStyles = makeStyles(() => ({
  main: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  page: {
    height: '100%',
  },
}));

const Routes = () => {
  const classes = useStyles();
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <Loading />;

  // const CodeEditor = () => {
  //   return <div>Code Editor</div>;
  // };

  return (
    <div className={classes.main}>
      <Header />
      <div className={classes.page}>
        <Switch>
          <ProtectedRoutes exact path={routesCollection.codeEditor}>
            {/* {CodeEditor} */}
            {CodeEditor}
          </ProtectedRoutes>
          <Route exact path={routesCollection.home}>
            {isAuthenticated ? <Redirect to={routesCollection.codeEditor} /> : <Home />}
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Routes;
