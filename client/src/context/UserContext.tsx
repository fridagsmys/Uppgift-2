import { PropsWithChildren, createContext, useContext, useEffect, useState } from "react";

export interface IUser {
  id: string;
  name: string;
  email: string;
}

export interface UserContextType {
  userData: IUser;
  updateData: (newUserData: IUser) => void;
}

const initialData = {
  id: "",
  name: "",
  email: "",
};

export const UserContext = createContext<UserContextType>({
  userData: initialData,
  updateData: () => {},
});

const UserProvider = ({ children }: PropsWithChildren) => {
  const [userData, setUserData] = useState<IUser>(initialData);

  // useEffect(() => {
  //   localStorage.setItem('user', JSON.stringify(userData))
  // }, [])
  
  const updateData = (newUserData: IUser) => {
    setUserData(newUserData);
  };
  // localStorage.setItem('user', JSON.stringify(userData))

  return (
    <UserContext.Provider value={{ userData, updateData }}>
      {children}
    </UserContext.Provider>
  );
};

const useUserContext = () => {
  return useContext(UserContext);
};

export default UserProvider;
export { useUserContext };
