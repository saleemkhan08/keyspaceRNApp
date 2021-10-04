import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import React, {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';

interface ContextType {
  user: FirebaseAuthTypes.User | null;
  isLoading: boolean;
}
export const AuthContext = React.createContext({} as ContextType);

interface Props {
  children: React.ReactNode;
}
export default function AuthProvider(props: Props) {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const onAuthStateChanged = (newUser: FirebaseAuthTypes.User | null) => {
    setUser(newUser);
    setIsLoading(false);
  };

  useEffect(() => {
    const subscribe = auth().onAuthStateChanged(onAuthStateChanged);
    return subscribe;
  }, []);

  return (
    <AuthContext.Provider value={{user, isLoading}}>
      {props.children}
    </AuthContext.Provider>
  );
}
