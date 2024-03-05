import { FormEvent, useRef } from "react";

const error = (msg: string) => {
  throw new Error(msg);
};

type CustomFormExtraType = {
  handleData: (data: Record<string, unknown>) => void;
}

const CustomForm = ({
  action,
  children,
  method,
  handleData,
  ...props
}: CustomFormExtraType & React.DetailedHTMLProps<
  React.FormHTMLAttributes<HTMLFormElement>,
  HTMLFormElement
>) => {
  const formRef = useRef<HTMLFormElement>(null);
  const SubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    const formEl = formRef.current ?? error("Form Ref is INVALID!");
    formEl.checkValidity();
    formEl.reportValidity();
    e.preventDefault();

    const data = Object.fromEntries(new FormData(formEl).entries());

    fetch(action ?? error('Action is null, No URL to use.'), { 
      body: JSON.stringify(data),
      method: method,
      headers: {
        'Content-Type':'application/json'
      },
      credentials: "include"
     })
      .then(r => r.json())
      .then(json => handleData(json))
  };
  return (
    <form ref={formRef} onSubmit={SubmitHandler} {...props}>
      {children}
    </form>
  );
};

export default CustomForm;
