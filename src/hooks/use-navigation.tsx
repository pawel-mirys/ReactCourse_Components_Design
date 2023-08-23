import { useContext } from 'react';
import { NavigationContext } from '../context/NavigationContext';

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  return context;
};
