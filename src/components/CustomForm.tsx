import { FormEvent, useRef } from "react";

const error = (msg: string) => {
  throw new Error(msg);
};

type CustomFormExtraType = {
  handleData: (data: Record<string, unknown>, el: HTMLFormElement) => void;
};

const CustomForm = ({
  action,
  children,
  method,
  handleData,
  ...props
}: CustomFormExtraType &
  React.DetailedHTMLProps<
    React.FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  >) => {
  const formRef = useRef<HTMLFormElement>(null);
  const SubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    const formEl = formRef.current ?? error("Form Ref is INVALID!");
    formEl.checkValidity();
    formEl.reportValidity();
    e.preventDefault();

    const data = new FormData(formEl);

    fetch(action ?? error("Action is null, No URL to use."), {
      body: data,
      method: method,
      credentials: "include",
    })
      .then((r) => r.json())
      .then((json) => handleData(json, formEl));
  };
  return (
    <form ref={formRef} onSubmit={SubmitHandler} {...props}>
      {children}
    </form>
  );
};

export default CustomForm;
