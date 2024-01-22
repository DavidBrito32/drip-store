import { useState, ChangeEvent } from "react";

type HookData<DataType> = {
  form: DataType;
  changeForm: (event: ChangeEvent<HTMLInputElement>) => void;
  clearInputs: () => void;
};

export const useForm = <DataType>(initial: DataType): HookData<DataType> => {
  const [form, setForm] = useState<DataType>(initial);

  const changeForm = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const clearInputs = () => {
    setForm(initial);
  };

  return { form, changeForm, clearInputs };
};
