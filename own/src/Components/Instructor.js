import React from 'react'
import './Instructor.css'

const Instructor = () => {
  return (
    <div className="edum">

      <div className="staff-main">Staff Directory</div>
      <div className="staff-maina">*please enter name of the Staff you are searching for:</div>

<div className="searching">
<input className="search-input" type="text" value="name" placeholder='search'/> <button className="buttonn">search</button>
</div>

<div className="holes">

<div className="hole1">
<h3 className="profs">ABDUL-RAHMAN IDDRISU</h3>
<span className="profs-span">SNR. SPORTS ORGANIZER - SPORTS DIRECT</span>
</div>

<div className="hole1">
<h3 className="profs">MR.ABDUL AZIZ</h3>
<span className="profs-span">HARDWARE FOR STUDENTS MASTER/LECTURER</span>
</div>

<div className="hole1">
<h3 className="profs">ABDULAI IDDRISU</h3>
<span className="profs-span">SENIOR HEADMAN</span>
</div>

<div className="hole1">
<h3 className="profs">ABDULAI SHAIBU IDDRISU</h3>
<span className="profs-span">DRUMMER GRADE I</span>
</div>

</div>


<div className="holes">

<div className="hole1">
<h3 className="profs">MARK ATTA MENSAH</h3>
<span className="profs-span">COMPUTER SCIENCE DEPARTMENT BOSS</span>
</div>

<div className="hole1">
<h3 className="profs">ADUSEI-POKU MILDRED ASUMAMAA</h3>
<span className="profs-span">MESSENGER/CLEANER - ARAC/TSITO</span>
</div>

<div className="hole1">
<h3 className="profs">ANANE-OPOKU SANDRA</h3>
<span className="profs-span">SENIOR ACCOUNTING ASSISTANT</span>
</div>

<div className="hole1">
<h3 className="profs">AKPOR SANDRA</h3>
<span className="profs-span">SENIOR NURSING OFFICER</span>
</div>



</div>


    </div>
  )
}

export default Instructor
