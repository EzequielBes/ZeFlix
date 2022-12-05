import { createContext, useContext, useState } from "react";

interface NameProps {
  title: string;
  

}

interface MovieContextProps {
  setName: React.Dispatch<React.SetStateAction<NameProps | undefined>>;
  name?: NameProps
}

const loginNameContext = createContext({} as  MovieContextProps);

export function MovieContext({children}: any) {
  const [name, setName] = useState<NameProps>();
  return <loginNameContext.Provider value={{setName,name}}>{children}</loginNameContext.Provider>
};

export const useNameContextHook = () => {
  const context = useContext(loginNameContext)
  return context;
}