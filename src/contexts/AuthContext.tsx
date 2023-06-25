import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState
} from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  UserCredential,
  User
} from 'firebase/auth';
import { auth } from '../firebase';

interface AuthProps {
  createUser: (email: string, password: string) => Promise<UserCredential>;
  user: User | null;
  login: (email: string, password: string) => Promise<UserCredential>;
  logout: () => Promise<void>;
}

interface AuthContextProviderProps {
  children?: ReactNode;
}

const UserContext = createContext({} as AuthProps);

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [user, setUser] = useState<User | null>({} as User);

  const createUser = async (email: string, password: string) => {
    return await createUserWithEmailAndPassword(auth, email, password);
  };

  const login = async (email: string, password: string) => {
    return await signInWithEmailAndPassword(auth, email, password);
  };

  const logout = async () => {
    return await signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const contextValues = {
    createUser,
    user,
    logout,
    login
  };

  return (
    <UserContext.Provider value={contextValues}>
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
