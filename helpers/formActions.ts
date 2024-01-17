import * as yup from "yup";
import { ValidationForm, HandleInputChange, HandleSubmit } from "@/types/forms";
import { UserRegister } from "@/types/user";
const handleInputChange: HandleInputChange<UserRegister> = (
  event,
  setState
) => {
  setState((pre) => {
    return {
      ...pre,
      [event.target.name]: event.target.value,
    };
  });
};

const handleSubmit: HandleSubmit<UserRegister> = async (
  event,
  schema,
  inputs,
  callApiFunc,
  setErrors
) => {
  event.preventDefault();
  console.log('onsubmit called')
  const validationError = await validationForm(schema, inputs);
  setErrors(validationError);
  
  if (!Object.keys(validationError).length) {
    delete inputs.repeatPassword;
    
    await callApiFunc(inputs);
  } else {
    console.log("validating error");
  }
};

const validationForm: ValidationForm<UserRegister> = async (schema, inputs) => {
  let errors = {};
  try {
    await schema.validate(inputs, { abortEarly: false });
  } catch (err) {
    if (err instanceof yup.ValidationError) {
      errors = err.inner.reduce(
        (allErrors, currentError) => ({
          ...allErrors,
          [currentError.path as string]: currentError.message,
        }),
        {}
      );
    }
  }
  return errors;
};

export { handleInputChange, validationForm, handleSubmit };
