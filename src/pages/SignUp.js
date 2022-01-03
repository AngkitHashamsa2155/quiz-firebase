import { useAuthProvider } from "../Context/authContext";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import Alert from "../component/Alert";
const SignUp = () => {
  const {
    formInput,
    handleFormInput,
    isHiddenPass,
    setIsHiddenPass,
    handleSingUp,
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
            <h1 className="tracking-wide">Sign up</h1>
          </div>
          <form
            id="login_form"
            className="flex flex-col justify-center"
            onSubmit={(e) => handleSingUp(e)}
          >
            {isError.status && <Alert />}
            <section>
              <label className="text-sm font-medium">User Name</label>
              <input
                className=" px-2 py-1.5
          mb-3 mt-1 block w-full border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
          focus:outline-none
          focus:border-sky-500
          focus:ring-1
          focus:ring-sky-500
          focus:invalid:border-red-500 focus:invalid:ring-red-500"
                type="text"
                name="userName"
                placeholder="UserName"
                required
                value={formInput.userName}
                onChange={(e) => handleFormInput(e)}
              />
            </section>
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
            >
              <span id="login_process_state" className="hidden">
                Checking ...
              </span>
              <span id="login_default_state">Sign up</span>
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default SignUp;
