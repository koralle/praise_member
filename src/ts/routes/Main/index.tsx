import React from 'react';
import { NavigationContainer, useNavigation, DrawerActions } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HOME, ADDMEMBER, PRAISE } from '../../constants/path';
import { Home, AddMember, Praise } from '../../components/pages';

const Drawer = createDrawerNavigator();

const DrawerRoutes = () => {
  return (
    <Drawer.Navigator initialRouteName={HOME} >
      <Drawer.Screen name={HOME} component={Home} />
      <Drawer.Screen name={ADDMEMBER} component={AddMember} />
      <Drawer.Screen name={PRAISE} component={Praise} />
    </Drawer.Navigator>
  );
};

export default DrawerRoutes;
