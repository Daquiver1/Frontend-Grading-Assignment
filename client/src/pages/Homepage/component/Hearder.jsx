import "../css/index.css"

const Hearder = () => {
  return (
    // <div className="home">Hearder</div>

    <nav className="header-nav">
      <div className="inner_header"> 
<div className="logo">
<h1>myLogo </h1>
</div>
            <ul className="navigation">
               <a><li>Home</li></a>
               <a><li>About</li></a>
               <a><li>Dashboard</li></a>
               <a><li>Contact</li></a>
             </ul>
      </div>
    </nav>
  )
}

export default Hearder