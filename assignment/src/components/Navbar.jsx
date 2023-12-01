const  Nav = () => {
    return ( 
        <div className="shadow-md w-full fixed top-0 left-0">
            <div className="md:flex bg-white py-4 md:px-10 px-7">
                <div className="font-bold text-2xl cursor-pointer items-center font-sans text-blue-700">
                     <span className="text-3xl text-black mr-1 pt-2">
                     <ion-icon name="library-outline"></ion-icon>
                </span>
                    Welcome
                    </div>

            </div>
        </div>
     );
}
 
export default Nav ;