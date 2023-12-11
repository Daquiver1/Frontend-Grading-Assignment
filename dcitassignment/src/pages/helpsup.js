import React from 'react'
import '../styles/helpsup.css';

function Helpsup() {
  return (
    <div>
      <div className='helpheader'>CONTACT FORM FOR SUPPORT</div>
      <form>
        <div>
          <div className='contactsmaindiv'>
            <label className='helpscoursename' for='helpscoursename' >Course name:</label>
            <input className='helpcoursenameform' id='helpcoursename'></input>
          </div>
          <div className='studentemaildiv'>
            <label className='helpstudentemail' for='helpstudentemail'>Student E-mail:</label>
            <input className='helpstudentemailform' type='email' id='helpstudentemail' placeholder='@st.ug.edu.gh'></input>
          </div>
          <button className='helpsubmit'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Helpsup