import { Link, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
// import cardphoto from "../../assets/citypexels.jpeg";
import { createAccount } from "../../api/api";

const SignUp = () => {
  const navigate = useNavigate();
  const schema = yup.object({
    name: yup.string().required("Must be filled"),
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
      navigate("/notify");
    });
  });

  return (
    <div>
      <div className="h-[100vh] w-full relative flex justify-center items-center bg-indigo-800">
        <div className="h-[80%] w-[30%] bg-white flex justify-center items-center bxs rounded-lg">
          <div className="h-[85%] w-[90%]">
            <div className=" w-full flex justify-center mb-[30px]">
              <div className="text-[22px] font-bold text-indigo-900">
                Create your Account
              </div>
            </div>
            <form action="" onSubmit={handleSubmitNow}>
              <div className="mb-5">
                <div>
                  <label htmlFor="">Name</label>
                </div>
                <input
                  type="text"
                  className="w-[100%] h-[35px] bg-white border pl-2"
                  placeholder="userName"
                  {...register("name")}
                />
                {errors.name?.message && (
                  <div className="text-red-700 text-[12px] text-right ">
                    {errors.name?.message}
                  </div>
                )}
              </div>
              <div className="mb-5">
                <div>
                  <label htmlFor="">Email</label>
                </div>
                <input
                  type="text"
                  className="w-[100%] h-[35px] bg-white border pl-2"
                  placeholder="Email"
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
                  className="w-[100%] h-[35px]  bg-white border pl-2"
                  placeholder="input your password here"
                  {...register("password")}
                />
                {errors.password?.message && (
                  <div className="text-red-700 text-[12px] text-right ">
                    {errors.password?.message}
                  </div>
                )}
              </div>
              <div className="flex justify-end w-[100%] mb-7">
                <div className="text-red-600">Forgot Password?</div>
              </div>
              <div className="mb-[10px]">
                <button className="w-[100%] h-[40px] rounded-[5px] font-medium bg-indigo-900 text-white cursor-pointer">
                  Sign Up
                </button>
              </div>
              <div className="flex justify-center items-center mb-[20px]">
                <div className="flex justify-center items-center text-gray-200">
                  _____________
                </div>
                <div className="mt-4 mx-3">or</div>
                <div className="flex justify-center items-center text-gray-200">
                  _________________
                </div>
              </div>
              <div className="mb-[20px] flex justify-center">
                <div>
                  <Link to="/signin">
                    <span className="text-blue-500 cursor-pointer">
                      Login here →
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

export default SignUp;
