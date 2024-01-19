
import { NextRequest, NextResponse} from 'next/server';
import  firebaseApp  from "../../../firebase/firebaseInit";
import { getDatabase, ref,  set } from 'firebase/database';
import { v4 as uuidv4 } from 'uuid';
import { hashPassword } from '@/helpers/passwordUtils';
import jwt from 'jsonwebtoken'
const database = getDatabase(firebaseApp);




export async function POST (req:NextRequest){
const user = await req.json();
user.state='active'
const userId = uuidv4();
user.password = await hashPassword(user.password);

try{
    const dataRef = ref(database, 'users/'+ userId);
    set(dataRef,user)
    const token = jwt.sign(user, process.env.SECRET_KEY as jwt.Secret,{expiresIn:'7200'});
    return NextResponse.json({ username: user.username,email:user.email,jwt:token });
    
}catch(err){
    throw('error has occured')
}
}