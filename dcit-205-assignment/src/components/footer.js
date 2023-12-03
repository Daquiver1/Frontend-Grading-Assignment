export const Footer = () => {
    return(
        <footer classNAme="footer w-auto sticky bottom-0 left-0 right-0">
            <div classNAme="flex flex-col ">
                <input id="submit" placeholder="Write your email here" className="p-1 border-emerald-100 border-solid border-4 focus:border-red-100
                focus:outline-none hover:cursor-pointer"></input>
                <label for="submit">Submit</label>
                
            </div>
            <div className="bg-red-400 inline-flex justify-center m-auto gap-2">
                <p>Time</p>
                <p>Date</p>
            </div>
        </footer>
    );
};
export default Footer;