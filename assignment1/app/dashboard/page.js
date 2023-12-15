import Detail from "@/components/detail";
import Image from "next/image";
import logo2 from "../../public/logo2.png";
import Result from "@/components/result";
import GradeReport from "@/components/GradeReport";
import PageTitle from "@/components/PageTitle";
import Link from "next/link";
import Footer from "@/components/Footer";
function Dashboard() {
  return (
    <div>
      <nav className="bg-gray-800 p-4 ">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-white">
            <Image
              src={logo2}
              className="w-[10] h-[10]"
              width={60}
              height={60}
              alt="logo"
            />
          </div>

          <div className="space-x-4">
            <Link href="/grade" className="text-white hover:text-gray-300">
              Grades
            </Link>
            <Link href="/contact" className="text-white hover:text-gray-300">
              Contact Us
            </Link>
            <Link href="/help" className="text-white hover:text-gray-300">
              Help
            </Link>
            <Link
              href="/login"
              className="text-black rounded-xl cursor-pointer bg-white p-3 "
            >
              Logout
            </Link>
          </div>
        </div>
      </nav>
      <Detail />
      <PageTitle pagename={"CURRENT RESULT"} />
      <Result />
      <GradeReport />
      <Footer />
    </div>
  );
}

export default Dashboard;
