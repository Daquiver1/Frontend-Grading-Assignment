import React from "react";

const Landing = () => {
  return (
    <footer className="bg-[#4c4c4e] w-[1350px] mt-4 p-3 -ml-9 text-[13pt] text-white">
      <div className="flex">
        {/* Location (left column) */}
        <div style={{textAlign:"left"}}className="footer-column">
          <img style={{  width: "80px", height: "80px",borderRadius: "60px",objectFit: "cover"}} src="https://i.pinimg.com/564x/0d/22/a2/0d22a2af910b53ca13497d6b09504c42.jpg" alt="University Logo" />
          <div>
            <p className="font-bold text-[14pt]">Location:</p>
            <p>
              University of Ghana, Legon<br />
              Opposite the Mathematics department,<br />
              Adjacent to the RIPS building.
                                          
            </p>
          </div>
        </div>

        {/* Contact Us (middle column) */}
        <div className="footer-column1">
          <div className="contact-info">
            <p className="font-bold text-[14pt]">Contact Us:</p>
            <p>&#128222;: +233 501 382 035</p>
            <p>&#128222;: +233 559 145 698</p>
            <p>&#x2709;: <a href="mailto:dcs@ug.edu.gh">dcs@ug.edu.gh</a></p>
          </div>
        </div>

        {/* Follow Us (right column) */}
        <div style={{textAlign:"right",marginRight:"50px"}}className="footer-column2">
          <div className="follow-us">
            <p className="font-bold text-[14pt]">Follow Us:</p>
            <div className="flex">
              <a href="https://www.facebook.com/dcsug/"><img style={{width: "40px", height: "60px",borderRadius: "60px",objectFit: "cover"}} className="h-[50px] ml-[5px] mr-[10px] mt-[11px] rounded-[50%]" src="https://cdn4.iconfinder.com/data/icons/social-icon-4/842/facebook-512.png" alt="Facebook" /></a><br />
              <a href="https://twitter.com/dcs_ug"><img style={{width: "40px", height: "40px",borderRadius: "60px",objectFit: "cover"}} className="h-[50px] ml-[5px] mr-[10px] mt-[11px] rounded-[50%]" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAkFBMVEX///8AAAAREiSOjo4AAAv5+fns7Ozh4eHx8fHDw8NhYWGHh4cmJiZ1dXXk5OT09PSpqanLy8toaGggICB8fHw2NjaysrJTU1Obm5vU1NTb29tERERZWVlNTU2ioqJubm4VFRUNDQ0HCB5LTFYtLS0fIC4YGCg9PUkAABYAABEzMzx9foV1dXxZWV8lJjJoZ3BgnzSzAAAE+ElEQVR4nO2aC3eqOBDHSy3hJSAoD0F5qHvrbnX7/b/dYplggAQvGHI9Z/NrT49CE/4kM5PJ4+1NIpFIJBKJRCKRSCQSiUTyMqiujpCTbD3PoOB528RBSHdVcYqSMPZT5TFlmsdhIkIRWqWn3xDUcEpXaGZJyWKMIMxi1uZaLadoUpTlajZJyJwm6YY5Ux+i3XRNihLNosoJyGcEe9PP7YpNhUVSfb9dz30zapfQZhBFtFOUeQlyHxVwdc3LyFL8o5aF6y42zphyaLHGJTe8NXm45tQbW3Qb4bIGZ1E4YO6nFMZeu+aryYBqzUl2oeZQPOSpCde6HufX7tarC6gQdH2etp4UU940vPW5pd8+QkuXW46iVuDUD8NASxN4xu2zC2aVcRQVTagSYd9YEQoDjqLAokY1/hYHAvv2zQGr4qcJPX5NFTkOaplxE9n8n6+QFfIba+Cld6z7SWb7+zTdm3Z2z5y0diC3ecfPrK4wpt50VoVCUGbQGCrIUOpRKRyqYwqLgYCQ9ZLjZVx3IwpI74CgYHETZTGbPll3Jd0oao9QY3OXYyPSyL7kKKrvfFlJ01T1Yb+XEG9RNmkcBDFdEtV2QFTOTRSMfN2Br6Up2O9bieaCLsrnJsqnijIaAYVpOLrr6o5h3j2xY4EgalqaQUE1aaKcZrplExFR2+Cr6/ZkT4wo/PSiEylC3Fh267JeChCFh7b+gLjFTdhKnIWIgmslJaIa9fPbw5JezC9qC51EHTZgWCrIptKX84uC5zJSkXVfsQBROJNk5Mcw+u6ITFWAKFT33omRHmlBr4QAUU59hTk7gTGA0CxAFKSVzEQEkh0iqgsQ9ShlAz8g1soEiFr1HtoG7hPTn/9rS4FNMVO2fq76At7n/wnvg0esGWvRSX27EBun8DIMw9LB5EgFIsY+cC+FuuShKj3nEyIKz62o4RNCZyvVEiEKDyS0DoTOU0zyooh86r5U0JuiNhOKlhcIyTzva9hx6zkqzrQ6QUyMKNRM80yisTwfXz11/r3vkM9Bn/c1q2JKmcaJXpFkadlc7Ky3c5+MMmbIoTJA1wG4T9tZawkDqnpOCaLs7vXJwLyzv+piMDYll/3cnfuqC3t9yqFucKeU1B1CCL9Fs6GVvHDflbSn/h9Er+5izHRgoKOndMho7ZjuDPpWyaNcdTTg/BHrvupZ+a4itwxmGLJZdjkVva5wcLtAdYfPa4Dx6dxEwY5D8cRrapBV8NOE94+f2O4Bk2LuD0wAouR+cuO7uwEHnoi2fNJ34K2WPI8BTNwZbYC0U8m5ngLAW1LTOlDH++2jd+qHwcNJOqVw9EzhAZISKj6N3hwzcDZYcD+xdD84tRlVt7bBr8Nx3Gto8tzK3mMvcXRVHTDb6qbuJF5M5Db8ks47jbXWutKdmec581RQnpu7tLXvFnEcYe6ovvIEXM9JELibx89msRl1pGEURvD48TQCzgGqDZpyVHC5msWcCFwvCsrfF1QGkTdfz5G6jMzKozRYD4gr10Ea2VZmCFEEqLqOEHIcR6NQXUaCjw5LJBKJRCKRSCQSiUQikUgkEskPixfk7eMFeXt/QX5EHX5+4c/74Xw+wKfDO3wSL+pw/OvX58fhoBwP578PH/98XY7HD+V8Vj6vyvX4B1TVoq7/VkKul6/v6+X4HX/tL+F3eL0aFyv+/JxBVKfKqjd+3Trl5+fGfx+5T/ik/yMzAAAAAElFTkSuQmCC" alt="X" /></a><br />
              <a href="https://www.instagram.com/compssa_ug/"><img style={{width: "40px", height: "40px",borderRadius: "60px",objectFit: "cover"}} className="h-[50px] ml-[5px] mr-[10px] mt-[11px] rounded-[50%]" src="data:image/jpeg;base64,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" /></a><br />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Landing;
