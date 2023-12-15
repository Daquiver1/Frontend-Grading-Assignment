import LoginSection from "@/components/LoginSection";
import Image from "next/image";
import Img from "../../public/Login_cover.jpeg";
function Login() {
  return (
    <>
      <div className="bg-gray-300 flex  justify-center items-center">
        <div>
          <LoginSection />
        </div>
        <div>
          <Image src={Img} className=" h-full opacity-2" />
        </div>
      </div>
    </>
  );
}

export default Login;
