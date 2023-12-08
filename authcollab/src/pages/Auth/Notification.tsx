import { Link } from "react-router-dom";

const NotificationCard = () => {
  return (
    <div className="h-[100vh] w-[100%] flex justify-center items-center bg-blue-700">
      <div className="h-[500px] w-[35%] bg-blue-600">
        <div className="h-[200px] w-[100%]">
          <h1 className="font-bold text-3xl text-white text-center pt-8">
            Verify Code 🚀🚀
          </h1>
          <p className="font-bold text-white text-center pt-3">
            We just sent a four digit verification code to
            Ayomideadisa83@gmail.com
          </p>
          <p className="font-bold text-white text-center pt-3">
            Enter the code in the box below to continue
          </p>
        </div>
        <div className="h-[100px] w-[100%] flex justify-center items-center gap-9">
          <input
            type="text"
            className="h-[40px] w-[40px] border rounded-lg pl-3 border-none outline-none"
          />
          <input
            type="text"
            className="h-[40px] w-[40px] border rounded-lg pl-3 border-none outline-none"
          />
          <input
            type="text"
            className="h-[40px] w-[40px] border rounded-lg pl-3 border-none outline-none"
          />
          <input
            type="text"
            className="h-[40px] w-[40px] border rounded-lg pl-3 border-none outline-none"
          />
        </div>
        <p className="font-bold text-white text-center">
          Did'nt recieve a code?
          <span className="text-yellow-500"> Resend the code</span>
        </p>
        <div className="flex justify-center items-center">
          <Link to="/signin">
            <button className="h-[50px] w-[150px] bg-blue-500 mt-12">
              Continue
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotificationCard;
