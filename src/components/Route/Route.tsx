import { useNavigation } from '../../hooks/use-navigation';

type RouteProps = { path: string; children: React.ReactNode };

export const Route = ({ path, children }: RouteProps) => {
  const navigationContext = useNavigation();

  if (path === navigationContext?.currentPath) {
    return <>{children}</>;
  }
  return null;
};
