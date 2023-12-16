import React from 'react'

function Footer() {
  return (
<footer class="">
    <div class="w-full h-64 max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="/" class="flex items-center mb-4 sm:mb-0">
                <img src="/images/ug.png" class="h-12" alt="" />
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-700">
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Support</a>
                </li>
                <li>
                    <a href="#" class="hover:underline">Login</a>
                </li>
            </ul>
        </div>
        <hr class="my-6  sm:mx-auto lg:my-8" />
    </div>
</footer>

  )
}

export default Footer