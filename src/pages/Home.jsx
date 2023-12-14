import { Link } from "react-router-dom";

export default function Homepage(){
    return (
        <div className="homepage">
                {/* circles */}
                <div className="w-2/4 h-max -z-10 flex gap-10 justify-center absolute flex-wrap items-center">

                <div className="bg-pink-400 w-[200px] h-[200px] rounded-full blur-3xl opacity-30"></div>
                <div className="bg-purple-400 w-[200px] h-[200px] rounded-full blur-3xl opacity-30"></div>
                <div className="bg-orange-400 w-[200px] h-[200px] rounded-full blur-3xl opacity-30"></div>
                
                </div>
                {/* END OF CIRLCES */}

            <div className="w-1/4 ring-1 ring-gray-200 ringinset rounded-full items-center py-2 px-2 flex">
                <button className="p-2 text-slate-50 bg-purple-800 rounded-full px-4 font-[600]">This's new</button>
                <p className="ml-2 font-[600] text-gray-600">Read more </p>
            </div>

            <div className="flex flex-col items-center mt-10">
                
                <h1 className="font-[600] text-7xl w-3/4 text-center leading-[65px]">
                    Are you dubious about your grades?
                </h1>

                <p className="text-gray-600 w-3/4 text-center mt-6 text-lg tracking-[0.2px]">This platform helps students view their academic records and sumbit a formal complaint is they are not satisfied with theri grades </p>
                <Link to={"/SignIn"} className="p-2 text-slate-50 bg-purple-800 rounded-full px-4 font-[600] mt-4 ">Sign In Now</Link>
            </div>
            
        </div>
    )
    
}

