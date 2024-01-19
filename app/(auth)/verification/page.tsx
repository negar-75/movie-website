import Button from "@/app/components/button";
import Input from "@/app/components/input";
function Verification() {
  return <div className="flex flex-col items-center  w-[70%]">

    <Input label="Enter your vetification code" isPassword  ={false} name = {'code'}/>
    <Button text={'Submit'} type ={'button'} width ={'w-[150px]'} height = {'h-[35px]'} margin={'mt-6'} />
  </div>;
}

export default Verification;
