import logo from '../logo.svg'
export const Header = () => {
    return (
      <header>
        <nav className="flex flex-row justify-between p-3 items-center fixed top-0 left-0 right-0 bg-red-700">
          <div className="">
            <img src={logo} alt={"this is a logo"} className="w-3/12" />
          </div>
          <button className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opac ml-4"
          >
            Hello
          </button>
          <button className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opac ml-4">Show</button>
        </nav>
      </header>
    );
};
export default Header;