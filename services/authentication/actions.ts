import Cookies from 'js-cookie';
import {UserDataContext} from '@/types/user'



export const registerUser = async (user:Object):Promise<UserDataContext>  => {
    try{
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
       
        body: JSON.stringify(user),
      })
     
      const data = await res.json();
      Cookies.set('jwt', data.jwt, { expires: 7, secure: true });
      return {
        username:data.username,
        email:data.email
      };
    }catch(error){
      console.error('Registration error:', error);
      throw error
    }
} 