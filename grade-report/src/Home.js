import Nav from './Nav';

const Home = () => {
    return (
        <main className="home-body">
            <Nav />
            <div className="home-container">
                <div className="article">
                    <h1>Welcome To The Grade Report</h1>
                    <a href="http://localhost:3000/Login" className="btn">Log In To Continue</a>
                </div>
            </div>
            
        </main>
    )
}

export default Home