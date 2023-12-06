

import './viewGrade.css';


function Available(){
document.querySelector('.first').innerHTML=`First Semester Grade
DCIT101  GRADE:A  SCORE:85
DCIT103  GRADE:A  SCORE:89
DCIT105  GRADE:A  SCORE:95
Second Semester Grade
DCIT102  GRADE:B  SCORE:74
DCIT104  GRADE:C  SCORE:64
DCIT106  GRADE:D  SCORE:54
`;

}

function Available1(){
    if(true){ document.querySelector('.first1').innerHTML=`First Semester Grade
    DCIT201  GRADE:A  SCORE:85
    DCIT203  GRADE:C  SCORE:65
    DCIT202  GRADE:B  SCORE:73 
    Second Semester Grade
    DCIT205  GRADE:D  SCORE:54
    DCIT207  GRADE:C  SCORE:65
    DCIT209  GRADE:A  SCORE:89`}
    else{
        
    }
   
    ;
    
    }
    function Available2(){
        document.querySelector('.first2').innerHTML=`First Semester Grade
       DCIT301  GRADE:A  SCORE:82
       DCIT303  GRADE:C  SCORE:63
       DCIT305  GRADE:A  SCORE:85
       Second Semester Grade
       DCIT304  GRADE:B  SCORE:72
       DCIT302  GRADE:A  SCORE:83
       DCIT307  GRADE:C  SCORE:64 `;
        
        }

        function Available3(){
            document.querySelector('.first3').innerHTML=`First Semester Grade
            DCIT401  GRADE:A  SCORE:87
            DCIT405  GRADE:A  SCORE:85
            DCIT402  GRADE:D  SCORE:52
            Second Semester Grade
            DCIT403  GRADE:A  SCORE:97
            DCIT407  GRADE:A  SCORE:85
            DCIT408  GRADE:A  SCORE:82`
            ;
            
            }





function View(){





    return(

   <div>

<h1>View All Your Grade</h1>
<div className='button_name'>
<div><button
onClick={Available  }>LEVEL 100</button>
<h5 className='first'></h5></div>
<div><button onClick={Available1}>LEVEL 200</button>
<h5 className='first1'></h5></div>
<div><button  onClick={Available2}>LEVEL 300</button>
<h5 className='first2'></h5></div>
<div><button  onClick={Available3}>LEVEL 300</button>
<h5 className='first3'></h5></div>




</div>
 
 


   </div>


    )
}


export default View;