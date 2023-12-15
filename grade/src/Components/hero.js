import { NavLink } from "react-router-dom"

function Hero() {
  const containerImg = {
    backgroundImage: 'url("/images/school.jpg")',
  };
  return (
    <section class="w-full h-screen bg-cover bg-center"  style={containerImg}>
    <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:pt-64 lg:px-12">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Missing Grade Report System</h1>
        <p class="mb-8 text-4xl font-bold text-yellow-500 lg:text-xl sm:px-16 xl:px-48">Stay Informed with Our Missing Grade Report System</p>
        <div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <NavLink to="/login">
            <a href="#" class="inline-flex justify-center bg-yellow-600 items-center py-3 px-12 text-base font-medium text-center text-yellow-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100">
                Login
            </a> 
            </NavLink> 
        </div>
    </div>
</section>
  )
}

export default Hero