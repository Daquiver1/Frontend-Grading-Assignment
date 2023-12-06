const Footer = () => {
    return ( 
        <div className="">
            <div className="footer w-full pb-6 bg-[#f39c12]">
                <div className=" text-center pb-2"><h2 className=" uppercase font-bold text-4xl">contact us</h2></div>
                
                <div className="flex px-8 w-[65%] mx-auto justify-between">
                    <div className="left space-y-4">
                        {/* one */}
                        <div className="one flex items-center gap-x-2">
                            {/* icon */}
                            <div className="w-12 h-12 bg-black rounded-full">

                            </div>
                            {/* text */}
                            <div className="">
                                <h2>+233 25 364 3547/ +233 59 573 4637</h2>
                            </div>
                        </div>

                         {/* one */}
                         <div className="one flex items-center gap-x-2">
                            {/* icon */}
                            <div className="w-12 h-12 bg-black rounded-full">

                            </div>
                            {/* text */}
                            <div className="">
                                <h2>missingradetrackerug@gmail.com</h2>
                            </div>
                        </div>
                    </div>
                    <div className="right space-y-4">
                         {/* one */}
                         <div className="one flex items-center gap-x-2">
                            {/* icon */}
                            <div className="w-12 h-12 bg-black rounded-full">

                            </div>
                            {/* text */}
                            <div className="">
                                GW-8945-9678
                            </div>
                        </div>

                         {/* one */}
                         <div className="one flex items-center gap-x-2">
                            {/* icon */}
                            <div className="w-12 h-12 bg-black rounded-full">

                            </div>
                            {/* text */}
                            <div className="">
                                @missingradetrackerug
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;