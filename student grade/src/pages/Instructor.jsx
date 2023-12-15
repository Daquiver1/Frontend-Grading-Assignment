import React from "react";
import Layout from "../layouts";
import aziz from '../assets/images/aziz.jpeg'
import soli from '../assets/images/soli.webp'
import paul from '../assets/images/paul.jpeg'
import mam from '../assets/images/mam.jpeg'
import ghansah from '../assets/images/ghansah.jpeg'

const InstructorPage = () => {
    return(
        <Layout>
            <main style={{marginLeft: '30px', marginRight: '30px'}}>
            <div>
            <h2 className="text-2xl font-bold mb-4 text-center">Course Instructors</h2>
            <div className="flex" id="year-container">
                <div>
                    <form>
                        <select className="p-2 w-40" defaultValue="" required>
                            <option value="" disabled hidden>Select a Year</option>
                            <option>Year 1</option>
                            <option>Year 2</option>
                            <option>Year 3</option>
                            <option>Year 4</option>
                        </select>
                    </form>
                </div>
                <div className="semester" style={{marginLeft:'900px'}}>
                    <p>First Semester</p>
                </div>
            </div>
            <hr className="my-4" />
            <section>
                <div className="grid grid-cols-4 instructor-container gap-4">
                    <p className="font-bold">Image</p>
                    <p className="font-bold">Instructor</p>
                    <p className="font-bold">Course</p>
                    <p className="font-bold">Email</p>
                    <img src={aziz} alt="Aziz" class="rounded-full w-16 h-16"/>
                    <p>Mr. Aziz </p>
                    <p>DCIT 101</p>
                    <p>aziz@gmail.com</p>
                    <img src={soli} alt="Aziz" class="rounded-full w-16 h-16"/>
                    <p>Mr. Soli</p>
                    <p>DCIT 102</p>
                    <p>soli@gmail.com</p>
                    <img src={mam} alt="Aziz" class="rounded-full w-16 h-16"/>
                    <p>Mr. Mark Mensah</p>
                    <p>DCIT 103</p>
                    <p>markatta@gmail.com</p>
                    <img src={paul} alt="Aziz" class="rounded-full w-16 h-16"/>
                    <p>Mr. Paul </p>
                    <p>DCIT 104</p>
                    <p>paul@gmail.com</p>
                    <img src={ghansah} alt="Aziz" class="rounded-full w-16 h-16"/>
                    <p>Mr. Ghansah</p>
                    <p>ECON 101</p>
                    <p>ghansah@gmail.com</p>
                </div>
            </section>
            <hr className="my-4" />
            <div className="grid grid-cols-2 message-container">
                <p>
                    <label htmlFor="message">Message</label>
                </p>
                <p className="text-right">
                    <label htmlFor="instructor" >Choose Instructor</label>
                </p>
                <p>
                    <textarea id="message" rows={6} placeholder="Input Message" className="w-full p-2 border border-gray-400 rounded"></textarea>
                </p>
                <p className="text-right">
                    <select className="instructors w-60 h-20">
                        <option  value="" disabled selected> Select an Instructor mail</option>
                        <option>markatta@gmail.com</option>
                        <option>ghansah@gmail.com</option>
                        <option>paul@gmail.com</option>
                    </select>
                </p>
            </div>
            <hr className="my-4" />
            <div className="text-center">
                <button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded transition duration-300">Submit</button>
            </div>
            </div>
            </main>
        </Layout>
    )
}
export default InstructorPage