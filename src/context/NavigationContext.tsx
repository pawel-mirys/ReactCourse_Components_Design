import { createContext, useEffect, useState } from 'react';

type NavigationContextProps = {
  children: JSX.Element;
};

export const NavigationContext = createContext<{
  navigate: (to: string) => void;
  currentPath: string;
} | null>(null);

export const NavigationContextProvider = ({
  children,
}: NavigationContextProps) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handler = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handler);
    return () => {
      window.removeEventListener('popstate', handler);
    };
  }, []);

  const navigate = (to: string) => {
    window.history.pushState({}, '', to);
    setCurrentPath(to);
  };

  return (
    <NavigationContext.Provider value={{ navigate, currentPath }}>
      {children}
    </NavigationContext.Provider>
  );
};
