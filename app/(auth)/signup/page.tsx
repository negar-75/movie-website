"use client";


import WordBetweenLines from "@/app/components/wordBetweenLines";
import { ChangeEvent, useState } from "react";
import SocialMedias from "@/app/components/socialMedias";
import {
  handleInputChange,
  handleSubmit,
} from "@/helpers/formActions";
import { registerInputsList } from "../../../data/registerInputsList";
import RegistrationForm from "../../components/registrationForm";
import { registerFormValidationScheme } from "../../../types/forms";
import { UserRegister } from "@/types/user";
import { useProfile } from "../../../context/context";
import { UserContextApi } from "@/types/user";

function SignUpPage() {
  const [user, setUser] = useState<UserRegister>({
    username: "",
    password: "",
    repeatPassword: "",
    email: "",
  });
  const [errors, setErrors] = useState<Partial<UserRegister>>({});
  const context: Partial<UserContextApi> = useProfile();
  
  return (
    <div className="w-full flex flex-col items-center">
    <RegistrationForm
          onSubmit={(event: React.FormEvent) => {
            if (context.register) {
              handleSubmit(
                event,
                registerFormValidationScheme,
                user,
                context.register,
                setErrors
              );
            }
          }}
          onInputChange={(event: ChangeEvent<HTMLInputElement>) => {
            handleInputChange(event, setUser);
          }}
          errors={errors}
          inputsList={registerInputsList}
          buttonText="submit"
        />
        <WordBetweenLines word="OR" />
        <SocialMedias />
      </div>
        
    
  );
}

export default SignUpPage;
