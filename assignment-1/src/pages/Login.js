import Footer from "../components/Footer";
import Header from "../components/Header";


export default function Login(){
    return(
        <>
            <Header />
            <main>
                <section>
                    <h2 className="text-center text-ugBlue mb-4">Login</h2>
                    <div className="w-fit m-auto p-8 bg-slate-100 rounded-2xl">
                        <form className="flex flex-col gap-6 items-center m-auto">
                            <input type="text" pattern="[0-9]*" maxLength={8} minLength={8} className="w-[250px] h-[42px] rounded-full pl-4 text-ugBlue bg-white" placeholder="Student ID" required/>
                            <input type="text" pattern="[0-9]*" maxLength={5} minLength={5} className="w-[250px] h-[42px] rounded-full pl-4 text-ugBlue bg-white" placeholder="Student Pin" required/>
                            <button className="primary-button !w-full duration-150">Access Dashboard</button>
                        </form>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}