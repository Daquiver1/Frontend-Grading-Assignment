import React from 'react'

import Hero from '../Components/hero'
import Navbar from '../Components/Navbar'
import Footer from '../Components/footer'


function LandingPage() {
  return (
    <div>
        <Navbar />
       <Hero />
       
       <div>
       <section>
  <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
        <img
          src="/images/sub.jpg" 
          class="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div class="lg:py-24">
        <h2 class="text-3xl font-bold sm:text-4xl"> Grade Submission Monitoring:</h2>

        <p class="mt-4 text-gray-600">
        Our system actively tracks grade submissions by instructors to ensure they meet deadlines.

Instant Alerts: Receive real-time alerts if a grade is yet to be submitted, empowering you to take prompt action.
        </p>

        <a
          href="#"
          class="mt-8 inline-block bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
        >
          Get Started Today
        </a>
      </div>
    </div>
  </div>
</section>
<Footer />

       </div>
       
    </div>
  )
}

export default LandingPage