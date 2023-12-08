import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-[100%] h-[70px] p-4 flex justify-between items-center relative">
      <div className="h-[50px] w-[200px] text-black flex justify-center items-center">
        <h1 className="font-bold pl-8 text-2xl">Ayo</h1>
      </div>
      <div className="h-[40px] w-[40%] flex justify-around items-center">
        <nav className="font-bold cursor-pointer">Home</nav>
        <nav className="font-bold cursor-pointer">Shop</nav>
        <nav className="font-bold cursor-pointer">Pages</nav>
        <nav className="font-bold cursor-pointer">Contact</nav>
      </div>
      <div className="h-[40px] w-[20%] flex justify-around items-center gap-6">
        <div className="h-[40px] w-[100px] flex justify-center items-center font-bold">
          <Link to="/signup">
            <button className="h-[50px] w-[100px] bg-blue-500">Sign Up</button>
          </Link>
        </div>
        <div className="h-[40px] w-[100px] flex justify-center items-center font-bold">
          <Link to="/signin">
            <button className="h-[50px] w-[100px] bg-blue-500">Sign in</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
