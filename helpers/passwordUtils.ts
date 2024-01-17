import bcrypt from 'bcrypt';

const hashPassword= async(plainPassword:string):Promise<string>  => {
   try{
     const hashedPass:string = await bcrypt.hash(plainPassword,10)
     return hashedPass
   }catch(err){
   return ('error has occured')
   }
}
export {
    hashPassword
}