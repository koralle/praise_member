import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainRoutes from './Main';

const AppRoutes = () => {
  return (
    <NavigationContainer>
      <MainRoutes />
    </NavigationContainer>
  );
}

export default AppRoutes;
