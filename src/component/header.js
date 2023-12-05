import React from 'react-router-dom'
import {Link} from 'react-router-dom';
const Header = () => {
    
  return (
<div className="w-[1440px] h-[433px] px-36 justify-between items-center inline-flex">
  <div className="w-[442px] h-[433px] relative">
   <img src='/Images/user.png' />
  </div>
  <div className="w-[661px] flex-col justify-start items-start gap-8 inline-flex">
    <div className="h-[184px] flex-col justify-start items-start gap-4 flex">
      <div className="self-stretch text-neutral-600 text-4xl font-semibold font-['Inter'] leading-[44px]">The unseen of spending three years at Pixelgrade</div>
      <div className="self-stretch text-neutral-500 text-sm font-normal font-['Inter'] leading-tight">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</div>
    </div>
    <div className="px-8 py-3.5 bg-green-500 rounded justify-center items-center gap-2.5 inline-flex">
      <div className="text-center text-white text-base font-medium font-['Inter'] leading-normal">Learn More</div>
    </div>
  </div>
</div>
  )
}

export default Header