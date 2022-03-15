import {NavigationProp, ParamListBase} from '@react-navigation/native';

// I created these interfaces for future use

export interface BaseRoute {
  key: string;
  name: string;
  params: any; // this will be set on the related page
  path: string;
}

export interface BaseNavigationProps {
  navigation: NavigationProp<ParamListBase>;
  route: BaseRoute;
}
