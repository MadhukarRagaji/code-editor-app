import { withAuthenticationRequired } from '@auth0/auth0-react';
import React, { PropsWithChildren } from 'react';
import { ComponentType } from 'react';
import { Route } from 'react-router-dom';
import Loading from '../components/common/Loading/Loading';

const ProtectedRoutes = (props: PropsWithChildren<{ [key: string]: any }>) => {
  const { children, ...args } = props;
  return (
    <Route
      component={withAuthenticationRequired(children as ComponentType, { onRedirecting: () => <Loading /> })}
      {...args}
    />
  );
};

export default ProtectedRoutes;
