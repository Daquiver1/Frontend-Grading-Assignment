const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Scholar Grade Support</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="Login">Login</a>
        <a href="Dashboard">Dashboard</a>
        <a href="Grade Report page">Grade Report</a>
        
        <a href="/create" style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }}>New Blog</a>
      </div>
    </nav>
  );
}
 
export default Navbar;