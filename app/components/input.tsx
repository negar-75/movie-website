
import {InputType} from '../../types/forms'



function Input({label,isPassword,name,onChange,message}:InputType) {
  return (
    <div className='flex flex-col w-full '>
        <label htmlFor={name} className='text-[1.2rem] text-neutral-100 mb-2'>{label}</label>
        <input
        type={isPassword ? 'password' : 'text'}
        name = {name}
        id = {name}
        className = 'rounded-md h-[35px] px-2 font-sans text-black'
        onChange={onChange}

        />
      <span className='text-red-600 text-sm'>{message}</span>
    </div>
  )
}

export default Input