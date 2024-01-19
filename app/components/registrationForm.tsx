import Input from "./input";
import Button from "./button";
import { InputType, RegistrationFormProps } from "@/types/forms";
import { UserRegister } from "@/types/user";



function RegistrationForm({
  onSubmit,
  onInputChange,
  errors,
  inputsList,
  buttonText,
}: RegistrationFormProps<UserRegister>) {
  return (
    <form
      className=" md:w-[65%] md:mt-[5em] space-y-2 flex flex-col items-center mb-5"
      onSubmit={onSubmit}
    >
      {inputsList.map((input:InputType) => (
        <Input
          label={input.label}
          name={input.name}
          isPassword={input.isPassword}
          onChange={onInputChange}
          message={errors?.[input.name] || input.message}
        />
      ))}
      <Button
        text={`${buttonText}`}
        type={"submit"}
        width={"w-[150px]"}
        height={"h-[35px]"}
        margin={"mt-3"}
      />
    </form>
  );
}

export default RegistrationForm;
