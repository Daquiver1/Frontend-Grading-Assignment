const Dash = () => {
   let courses =['DCIT201','DCIT203','DCIT205','DCIT207','DCIT209','CBAS 210'];

    return ( 
        
        <>
        <div className="pt-[85px]">
        <h1 className="text-3xl font-sans font-bold px-9 pb-2 "> Current Courses</h1>
        <div className="grid grid-cols-3 bg-gray-300 gap-x-4 gap-y-10 p-10 pt-10 ">
      {courses.map((courses) =>(
        <button className="bg-blue-700 rounded-lg shadow-xl min-h-[40px] text-center py-2 font-bold text-white hover:bg-white hover:text-blue-700 cursor-pointer duration-75">{courses}</button>
        
       
      )
      )}
        </div>
        </div>
       
        </>
     );
}
 
export default Dash;