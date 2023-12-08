import { Link, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { createAccount } from "../../api/api";
import { useForm } from "react-hook-form";
import { useState } from "react";

const Login = () => {
  const [isChecked2, setIsChecked2] = useState(false);
  const handleCheckboxChange2 = () => {
    setIsChecked2(!isChecked2);
  };
  const navigate = useNavigate();
  const schema = yup.object({
    userName: yup.string().required("Must be filled"),
    email: yup.string().email().required("Must be filled"),
    password: yup.string().required("Must be filled"),
    confirm: yup.string().oneOf([yup.ref("password")]),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSubmitNow = handleSubmit((data: any) => {
    console.log(data);
    createAccount(data).then(() => {
      navigate("/");
    });
  });
  return (
    <div>
      <div className="h-[100vh] w-full relative flex justify-center items-center bg-indigo-800">
        <div className="h-[70%] w-[27%] bg-white flex justify-center items-center bxs rounded-[20px]">
          <div className="h-[85%] w-[90%]">
            <div className=" w-full flex justify-center mb-[30px]">
              <div className="text-[25px] font-semibold text-indigo-900">
                User Login
              </div>
            </div>

            <form action="" onSubmit={handleSubmitNow}>
              <div className="mb-5">
                <div>
                  <label htmlFor="">Email or Username</label>
                </div>
                <input
                  type="text"
                  className="w-[100%] h-[40px] bg-white border pl-2"
                  placeholder="email"
                  {...register("email")}
                />
                {errors.email?.message && (
                  <div className="text-red-700 text-[12px] text-right ">
                    {errors.email?.message}
                  </div>
                )}
              </div>
              <div className="mb-5">
                <div>
                  <label htmlFor="" className="w-[100%]">
                    Password
                  </label>
                </div>
                <input
                  type="password"
                  className="w-[100%] h-[40px]  bg-white border pl-2"
                  placeholder="input your password"
                  {...register("password")}
                />
                {errors.password?.message && (
                  <div className="text-red-700 text-[12px] text-right ">
                    {errors.password?.message}
                  </div>
                )}
              </div>
              <div className="flex justify-between w-[100%] mb-8">
                <div className="flex">
                  <div className="mr-9 mb-3">
                    <input
                      type="checkbox"
                      id="myCheckbox2"
                      checked={isChecked2}
                      onChange={handleCheckboxChange2}
                      className="hidden"
                    />
                    <label
                      htmlFor="myCheckbox2"
                      className={`${
                        isChecked2
                          ? "bg-blue-500 border-white"
                          : "bg-transparent border-blue-500"
                      } border-2 w-8 h-8 flex items-center justify-center cursor-pointer`}
                    >
                      {isChecked2 && (
                        <span className="text-white">&#10003;</span>
                      )}
                    </label>
                  </div>
                  <div className="mr-12 mt-1">Stay signed in</div>
                </div>
                <div className="text-red-600">Forgot Password?</div>
              </div>
              <div className="mb-[10px]">
                <button className="w-[100%] h-[40px] rounded-[5px] bg-indigo-800 text-white cursor-pointer">
                  Sign in
                </button>
              </div>
              <div className="flex justify-center items-center mb-[40px]">
                <div className="flex justify-center items-center text-gray-200">
                  _____
                </div>
                <div className="mt-4 mx-3">or</div>
                <div className="flex justify-center items-center text-gray-200">
                  _______
                </div>
              </div>
              <div className="mb-[20px] flex justify-center">
                <div>
                  <Link to="/signup">
                    <span className="text-[#7695f2] cursor-pointer">
                      Create Account here →
                    </span>{" "}
                    instead?
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
