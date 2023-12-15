import React from 'react'
import Header  from '../Components/header';

const MissingGradeReport = () => {
  return (
    <>
      <Header></Header>
      <section id="banner">
        <header>
            <h2>Report missing grade</h2>
            <p>Tell us what you think about our little operation.</p>
          </header></section>
        <section id="main" class="container xlarge">
          <div class="box">
            <form method="post" action="#">
              <div class="row gtr-50 gtr-uniform">
                <div class="col-6 col-12-mobilep">
                  <input type="text" name="name" id="name" value="" placeholder="Student ID" />
                </div>
                <div class="col-6 col-12-mobilep">
                  <input type="email" name="email" id="email" value="" placeholder="Lecturers Name" />
                </div>
                <div class="col-12">
                  <input type="text" name="subject" id="subject" value="" placeholder="Course Code" />
                </div>
                <div class="col-12">
                  <textarea name="message" id="message" placeholder="Enter your message" rows="6"></textarea>
                </div>
                <div class="col-12">
                  <ul class="actions special">
                    <li><input type="submit" value="Send Message" /></li>
                  </ul>
                </div>
              </div>
            </form>
          </div>
        </section>
  </>
  )
}

export default MissingGradeReport
