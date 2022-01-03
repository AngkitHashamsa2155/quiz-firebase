import React from "react";
import { useAuthProvider } from "../Context/authContext";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import Alert from "../component/Alert";
const Login = () => {
  const {
    formInput,
    handleFormInput,
    isHiddenPass,
    setIsHiddenPass,
    handleLogIn,
    isError,
    isLoading,
  } = useAuthProvider();
  return (
    <main className="bg-gradient-to-tr from-sky-200 to-sky-500">
      <section
        id="login"
        className="p-4 flex flex-col justify-center page-height max-w-md mx-auto"
      >
        <div className="p-6 bg-sky-100 rounded shadow-md">
          <div className="flex items-center justify-center text-4xl font-black text-sky-900 m-3">
            <h1 className="tracking-wide">Log In</h1>
          </div>
          <form
            id="login_form"
            className="flex flex-col justify-center"
            onSubmit={(e) => handleLogIn(e)}
          >
            {isError.status && <Alert />}
            <section>
              <label className="text-sm font-medium">Email</label>
              <input
                className="mb-3  py-1.5
          mt-1 block w-full px-2  border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
          focus:outline-none
          focus:border-sky-500
          focus:ring-1
          focus:ring-sky-500
          focus:invalid:border-red-500 focus:invalid:ring-red-500"
                type="email"
                name="email"
                placeholder="@email.com"
                required
                value={formInput.email}
                onChange={(e) => handleFormInput(e)}
              />
            </section>
            <section className="relative">
              <label className="text-sm font-medium">Password</label>
              {isHiddenPass ? (
                <input
                  className="mb-3 px-2 py-1.5
          mt-1 block w-full border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
          focus:outline-none
          focus:border-sky-500
          focus:ring-1
          focus:ring-sky-500
          focus:invalid:border-red-500 focus:invalid:ring-red-500"
                  type="text"
                  name="password"
                  placeholder="password"
                  required
                  value={formInput.password}
                  onChange={(e) => handleFormInput(e)}
                />
              ) : (
                <input
                  className="mb-3 px-2 py-1.5
          mt-1 block w-full border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
          focus:outline-none
          focus:border-sky-500
          focus:ring-1
          focus:ring-sky-500
          focus:invalid:border-red-500 focus:invalid:ring-red-500"
                  type="password"
                  name="password"
                  placeholder="password"
                  required
                  value={formInput.password}
                  onChange={(e) => handleFormInput(e)}
                />
              )}
              <button
                className="absolute bottom-5 right-2"
                onClick={() => setIsHiddenPass(!isHiddenPass)}
                type="button"
              >
                {isHiddenPass ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </button>
            </section>
            <button
              className="px-4 py-1.5 rounded-md shadow-lg bg-sky-600 font-medium text-gray-100 block hover:bg-sky-700 transition duration-300"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <span
                  className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-green-500"
                  role="status"
                ></span>
              ) : (
                "Log In"
              )}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Login;
