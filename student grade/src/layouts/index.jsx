import React from "react";
import Header from "../components/Header";
import Footer from "../components/footer";

const Layout = ({children}) => {
    return(
        <div className="flex flex-col justify-between h-screen">
            <Header />
                    <main>{children}</main>
            <Footer/>
        </div>
    )
}

export default Layout