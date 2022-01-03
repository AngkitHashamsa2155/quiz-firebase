import { useAuthProvider } from "../Context/authContext";
import { useEffect } from "react";
const Alert = () => {
  const { isError, setError } = useAuthProvider();
  useEffect(() => {
    let timeout = setTimeout(() => {
      setError({ status: false, msg: "" });
    }, 3000);
    return () => clearTimeout(timeout);
  }, [isError.msg]);
  return (
    <div className={`bg-red-300 text-center text-red-600 rounded-md`}>
      {isError.msg} !
    </div>
  );
};

export default Alert;
