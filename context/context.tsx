'use client';
import { createContext, useContext, useState} from "react";
import { UserDataContext,UserContextApi } from "@/types/user";
import { registerUser } from "@/services/authentication/actions";
export const ProfileContext = createContext<Partial<UserContextApi>>({});


export const useProfile = () => {
  return useContext(ProfileContext)
}


const ProfileProvider = ({ children }:{children:React.ReactNode}) => {
  const [userData, setUserData] = useState<Partial<UserDataContext>>({});
   


  const register = async (user:Object) => {
    try{
      const response: UserDataContext = await registerUser(user)
      setUserData((pre) =>({
        ...pre,
        ...response
      }))
    }catch(error){
      console.error('Registration error:', error);
    }
   
  }




  return (
    <ProfileContext.Provider value={{register,userData}}>
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileProvider;