import { Link, Navigate, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../../contexts/AuthContext";
import useToastify from "../../../hooks/ToastHook";
import useUserDetails from "../../../hooks/UserDetailsHook";
import { PagePaths } from "../../pages";

const RegisterPage = () => {
  const { signUp } = useUserAuth();
  const notify = useToastify();
  const navigate = useNavigate();
  const { user } = useUserAuth();

  if (user) {
    return <Navigate to={PagePaths.LANDING} />;
  }

  const onSubmit = async (e) => {
    try {
      e.preventDefault();

      const email = e.target.email.value;
      const username = e.target.username.value;
      const password = e.target.password.value;
      const confirmPassword = e.target.confirmPassword.value;

      if (password !== confirmPassword) {
        notify("error", "Passwords do not match!");
        return;
      }

      await signUp(email, password, username);

      notify("success", "Register succesfully");
      // navigate(PagePaths.LOGIN);
    } catch (err) {
      notify("error", `${err}`);
    }
  };

  return (
    <div className="my-10 flex flex-col items-center justify-center font-mono">
      <div>
        <div
          className="
          flex flex-col
          bg-secondary
          shadow-md
          px-4
          sm:px-6
          md:px-8
          lg:px-10
          py-8
          rounded-3xl
          w-50
          max-w-md
        "
        >
          <div className="font-medium self-center text-xl sm:text-3xl text-accent">
            Create an account
          </div>
          <div className="mt-4 self-center text-xl sm:text-sm text-accent">
            Enter your information to register
          </div>

          <div className="mt-10">
            <form onSubmit={onSubmit}>
              {/* USERNAME */}
              <div className="flex flex-col mb-5">
                <label
                  htmlFor="username"
                  className="mb-1 text-xs tracking-wide text-accent"
                >
                  Username:
                </label>
                <div className="relative">
                  <div
                    className="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-accent
                  "
                  >
                    <i className="fas fa-at text-primary"></i>
                  </div>

                  <input
                    id="username"
                    type="text"
                    name="username"
                    className="
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    rounded-2xl
                    border border-accent
                    w-full
                    py-2
                    focus:outline-none focus:border-blue-400
                  "
                    placeholder="Username"
                  />
                </div>
              </div>

              {/* EMAIL */}
              <div className="flex flex-col mb-5">
                <label
                  htmlFor="email"
                  className="mb-1 text-xs tracking-wide text-accent"
                >
                  E-Mail Address:
                </label>
                <div className="relative">
                  <div
                    className="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-accent
                  "
                  >
                    <i className="fas fa-at text-primary"></i>
                  </div>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    rounded-2xl
                    border border-accent
                    w-full
                    py-2
                    focus:outline-none focus:border-blue-400
                  "
                    placeholder="E-mail"
                  />
                </div>
              </div>

              {/* PASSWORD */}
              <div className="flex flex-col mb-6">
                <label
                  htmlFor="password"
                  className="mb-1 text-xs sm:text-sm tracking-wide text-accent"
                >
                  Password:
                </label>
                <div className="relative">
                  <div
                    className="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-accent
                  "
                  >
                    <span>
                      <i className="fas fa-lock text-primary"></i>
                    </span>
                  </div>

                  <input
                    id="password"
                    type="password"
                    name="password"
                    className="
                    text-sm
                    placeholder-accent
                    pl-10
                    pr-4
                    rounded-2xl
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-accent
                  "
                    placeholder="Password"
                  />
                </div>
              </div>

              {/* CONFIRM PASSWORD */}
              <div className="flex flex-col mb-6">
                <label
                  htmlFor="confirmPassword"
                  className="mb-1 text-xs sm:text-sm tracking-wide text-accent"
                >
                  Confirm password:
                </label>
                <div className="relative">
                  <div
                    className="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-accent
                  "
                  >
                    <span>
                      <i className="fas fa-lock text-primary"></i>
                    </span>
                  </div>

                  <input
                    id="confirmPassword"
                    type="password"
                    name="confirmPassword"
                    className="
                    text-sm
                    placeholder-accent
                    pl-10
                    pr-4
                    rounded-2xl
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-accent
                  "
                    placeholder="Confirm password"
                  />
                </div>
              </div>

              <div className="flex w-full">
                <button
                  type="submit"
                  className="
                  flex
                  mt-2
                  items-center
                  justify-center
                  focus:outline-none
                  text-white text-sm
                  sm:text-base
                  bg-accent
                  hover:bg-primary
                  rounded-2xl
                  py-2
                  w-full
                  transition
                  duration-150
                  ease-in
                "
                >
                  <span className="mr-2 uppercase">Register</span>
                  <span>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24">
                      <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="flex justify-center items-center mt-6">
          <div
            className="
            inline-flex
            items-center
            text-accent
            font-medium
            text-xs text-center
          "
          >
            <span className="ml-2">
              Already have an account?
              <Link to={PagePaths.LOGIN}>
                <label className="text-xs ml-2 text-primary font-semibold cursor-pointer">
                  Login now
                </label>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
