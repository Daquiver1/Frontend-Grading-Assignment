import { useState } from 'react';
import Header from './components/Header';

import { reasons } from './data';
import Footer from './components/Footer';

function App() {

  const [ reason, setReason ] = useState( reasons[0] );

  function handleReasonChange(e, reason){
    e.preventDefault()
    const reasonP = document.getElementById('reason')
    reasonP.style.animation = 'fadeInOut forwards .5s ease-in-out'
    setTimeout(()=>{
      setReason(reason)
    }, 250);
    setTimeout(()=> {
      reasonP.style.animation = ''
    }, 500)
    // Well this was fun.
}

  return (
    <>
      <Header />
      <main>
        <section>
          <div className='grid grid-cols-[1.5fr,1fr] mt-16'>
            <span>
              <h3 className=' leading-7 w-3/4'><span className='pulsing-text'>Introducing GradeRepo</span> Elevate Your Academic Experience! Uncover hidden achievements, 
                track every grade, and take control of your academic narrative with our user-friendly system. 
                Login in now and experience a new level of grade transparency.</h3>
              <h1 className='text-ugBlue'>Take Control of Your Academic Narrative.</h1>
            </span>
            <span>
              <img src='/img/Macbook Pro.png' />
            </span>
          </div>
        </section>
        <section>
          <div className='bg-ugBlue text-white rounded-3xl p-10 '>
            <h2 className='text-white font-light text-5xl tracking-[3px]'>Why GradeRepo?</h2>
            <div className='flex gap-2 place-items-center mt-4 h-[200px] '>
              <span className='w-2/5'>
                { reasons.map((reasonObj, idx) =>{
                    return (
                      <h3 key={idx} onClick={(e)=>{handleReasonChange(e, reasonObj)}} className={`mb-4 cursor-pointer hover:text-white duration-150 text-xl last:mb-0 ${(reasonObj === reason) ? 'text-white font-bold':'text-gray-400'}`}>{reasonObj.title}</h3>
                    )
                })}
              </span>
              <span className='w-3/5'>
                <p id='reason' className='text-2xl duration-150'>{reason.body}</p>
              </span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
