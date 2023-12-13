import Logo from "../assets/images/logo.png";
import { LabelInput } from "../components/inputs/InputLabel";

function LoginPage() {
  return (
    <div className="w-full justify-center flex items-center h-screen py-20 overflow-y-auto bg-primary_blue">
      <form className=" py-10 px-10 w-full 450px:w-[11cm] flex justify-center items-center flex-col bg-white rounded-md">
        <div className="h-[2.2cm] w-[2.2cm] border-2 border-secondary p-4 rounded-full">
          <img src={Logo} alt="logo" className="h-full w-full" />
        </div>
        <p className=" uppercase font-bold mt-3 text-primary_blue">
          Student Portal
        </p>
        <div className="w-full flex flex-col gap-5 mt-10">
          <LabelInput label={"Student ID"} isRequired={true} />
          <LabelInput label={"PIN"} isRequired={true} />
          <button
            type="submit"
            className=" w-full bg-primary_blue py-2 font-medium text-white  rounded-md"
          >
            Login
          </button>
        </div>
        <p className=" uppercase font-semibold text-[12px] text-primary_blue underline mt-10">
          Have issues logging in
        </p>
      </form>
    </div>
  );
}

export default LoginPage;
232559;
