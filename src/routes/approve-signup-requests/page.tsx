import { useEffect, useState } from "react";

export const ApproveSignupRequests = () => {
  const [approvableRequests, setApprovableRequests] = useState(null);

  const getApprovableRequests = async () => {
    const response = await (await fetch(`http://localhost:3000/auth/signup/get-approvable-requests`, {
      credentials: 'include',
    })).json()
    console.log(response);
  }

  useEffect(() => {
    getApprovableRequests()
  }, []);
  return (
    <>approve req</>
  );
}