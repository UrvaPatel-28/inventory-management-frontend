import { FormEvent, useRef, useState } from "react";
import ErrorHolder from "./ErrorHolder";

const throwErr = (msg: string) => {
  throw new Error(msg);
};

type ApiResponse =
  | {
      success: true;
      data: unknown;
    }
  | {
      success: false;
      message: string;
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
  const [error, setError] = useState<
    string[] | string | null | Record<string, unknown>
  >(null);
  const formRef = useRef<HTMLFormElement>(null);
  const SubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    const formEl = formRef.current ?? throwErr("Form Ref is INVALID!");
    formEl.checkValidity();
    formEl.reportValidity();
    e.preventDefault();

    const data = new FormData(formEl);
    const urlEncoded = new URLSearchParams(data);

    fetch(action ?? throwErr("Action is null, No URL to use."), {
      body: urlEncoded,
      method: method,
      credentials: "include",
    })
      .then((r) => r.json())
      .then((json: ApiResponse) => {
        if (json.success) {
          handleData(json, formEl);
          setError(null)
        } else {
          setError(json.message);
        }
      });
  };
  return (
    <form ref={formRef} onSubmit={SubmitHandler} {...props}>
      {children}

      {error && <ErrorHolder errors={error} />}
    </form>
  );
};

export default CustomForm;
