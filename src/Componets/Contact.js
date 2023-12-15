import React from 'react'

const Contact = () =>{
  return (
    <div>
      
      <section class="flex flex-col-reverse lg:flex-row items-center justify-center min-h-screen" >
      <div class="lg:w-2/3 lg:p-50">
      <div class="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
    <div class="justify-center mx-auto text-left align-bottom transition-all transform bg-white rounded-lg sm:align-middle sm:max-w-2xl sm:w-full">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto shadow-xl rounded-xl">
        <div class="w-full px-6 py-3">
          <div class="mt-3 text-left sm:mt-5">
            <div class="inline-flex items-center w-full">
             
            </div>
           
          </div>

          <div class="mx-auto max-w-2xl text-center">
    <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact Us</h2>
    <p class="mt-2 text-lg leading-8 text-gray-600">Grade point is souly design for the academic well fare of our pupils. We will be glad to hear and respond to your needs and concerns</p>
  </div>
  <form action="#" method="POST" class="mt-6">
    <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
      <div>
        <label for="first-name" class="block text-sm font-semibold leading-6 text-gray-900">First name</label>
        <div class="mt-2.5">
          <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
      </div>
      <div>
        <label for="last-name" class="block text-sm font-semibold leading-6 text-gray-900">Last name</label>
        <div class="mt-2.5">
          <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
      </div>
      <div class="sm:col-span-2">
        <label for="company" class="block text-sm font-semibold leading-6 text-gray-900">Enter Email</label>
        <div class="mt-2.5">
          <input type="text" name="company" id="company" autocomplete="organization" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
      </div>
      <div class="sm:col-span-2">
        <label for="email" class="block text-sm font-semibold leading-6 text-gray-900">Enter ID</label>
        <div class="mt-2.5">
          <input type="email" name="email" id="email" autocomplete="email" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
      </div>
      
      <div class="sm:col-span-2">
        <label for="message" class="block text-sm font-semibold leading-6 text-gray-900">Message</label>
        <div class="mt-2.5">
          <textarea name="message" id="message" rows="4" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
        </div>
      </div>
      <div class="flex gap-x-4 sm:col-span-2">
        <div class="flex h-6 items-center">
         
          <button type="button" class="bg-gray-200 flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" role="switch" aria-checked="false" aria-labelledby="switch-1-label">
            <span class="sr-only">Agree to policies</span>
            
            <span aria-hidden="true" class="translate-x-0 h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"></span>
          </button>
        </div>
        <label class="text-sm leading-6 text-gray-600" id="switch-1-label">
          By selecting this, you agree to our
          <a href="#" class="font-semibold text-indigo-600">privacy&nbsp;policy</a>.
        </label>
      </div>
    </div>
    <div class="mt-10">
      <button type="submit" class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Let's talk</button>
    </div>
  </form>
  </div>
        <div class="lg:w-50/3 lg:p-50">
          <img class="object-cover h-full bg-cover rounded-l-lg" src="https://images.unsplash.com/photo-1491933382434-500287f9b54b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80" alt="" />
        </div>
      </div>
    </div>
    </div>
  </div>


  
</section>


    </div>
  )
}

export default Contact
