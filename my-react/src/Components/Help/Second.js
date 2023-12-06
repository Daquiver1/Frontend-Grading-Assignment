const Second = () => {

    let faq=[{
        title:'How does the Missing Grade Reporting System work?',text:'The Missing Grade Reporting System allows students to report any missing grades for assignments, exams, or projects. Simply fill out the form on the "Report Missing Grade" page with the necessary details'
    },{
        title:'What information is required to report a missing grade?',text:''
    },{
        title:'Is there a deadline for reporting missing grades?',text:''
    },{
        title:'How will I be notified about the resolution of my missing grade report?',text:''
    },{
        title:'Can I report missing grades for multiple courses simultaneously?',text:''
    },{
        title:'What should I do if I made an error in my missing grade report?',text:''
    }];

    return (  
        <div className="py-12">
            <div className="w-full flex">
                <div className="left w-2/4">

                </div>
                <div className="right w-2/4">
                    <div className="container  space-y-4 w-[70%] ml-12">
                    {faq.map((faq)=>(
                        <div key={faq.title} className=" bg-[#0E1555] px-6 py-4 rounded-lg text-white">
                            <h2>{faq.title}</h2>
                            <p className="text-[10px]">{faq.text}</p>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Second;