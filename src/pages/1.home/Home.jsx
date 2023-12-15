const Home = () => {
  return (
    <div>
    <div className="min-h-screen"
    style={{
      backgroundImage:'url(src/assets/unsplash1.jpg)',
      backgroundSize:'cover',
      backgroundPosition:'center',
    }}
    >

      <h1 className=" text-center text-3xl p-4">Missing Grade System</h1>
      <p className="ml-8 mt-16  p-4 pb-44">
      <p className=" text-center text-3xl p-4">Welcome to the Missing Grade Reporting System. This system is designed to help students track and report grades that are not recorded in their academic profiles. Please login to access the system.</p>
      </p>
      <button >LOGIN</button>
      
    </div>
    </div>
  );
};

export default Home;
