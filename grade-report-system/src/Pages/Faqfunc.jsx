import './Help.css';

const Faqfunc = () => {
    
            var www = document.getElementsByClassName("button-1");
          
            for(var x = 0; x < www.length ; x++){
              www[x].addEventListener("click", function(){
                this.classList.add("active");
                this.parentElement.classList.toggle("active");
          
                var answer = this.nextElementSibling;
          
                if (answer.style.display === "block"){
                  answer.style.display = "none";
                } else {
                  answer.style.display = "block";
                }
              });
            }
          };

 
export default Faqfunc;