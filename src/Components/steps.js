import React from 'react'

function Steps() {
  return (
    <div className='w-full justify-center m-20 border-t-2 border-gray-200'>
    <div className="relative w-fit font-body-lg-medium py-4 text-black">
      <h2 className="text-base font-semibold leading-7 text-gray-700">Available Apps</h2> 
    </div>
    <div className="grid grid-cols-4 mx-10 content-center items-start gap-4">
        <div>
          <div className="max-w-sm p-4 bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
              <img className="object-cover w-46 h-16  pb-4" alt="Image" src="/assets/shopify.png" />
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Try Shopify free and start a business or grow an existing one. Get more than ecommerce software with tools to manage every part of your busines</p>
              <a href="#" className="inline-flex items-center px-16 py-2 text-sm font-medium text-center text-primary-50 bg-primary-500 rounded-lg hover:bg-primary-800 hover:text-primary-50">
                  Install
              </a>
          </div>
        </div>
        <div>
          <div className="max-w-sm p-4 bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
              <img className="object-cover w-46 h-16  pb-4" alt="Image" src="/assets/mageto.png" />
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Try Shopify free and start a business or grow an existing one. Get more than ecommerce software with tools to manage every part of your busines</p>
              <a href="#" className="inline-flex items-center px-16 py-2 text-sm font-medium text-center text-primary-50 bg-primary-500 rounded-lg hover:bg-primary-800 hover:text-primary-50">
                  Install
              </a>
          </div>
        </div>
        
        <div>
          <div className="max-w-sm p-4 bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
              <img className="object-cover w-46 h-16 pb-4" alt="Image" src="/assets/shopify.png" />
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Try Shopify free and start a business or grow an existing one. Get more than ecommerce software with tools to manage every part of your busines</p>
              <a href="#" className="inline-flex items-center px-16 py-2 text-sm font-medium text-center text-primary-50 bg-primary-500 rounded-lg hover:bg-primary-800 hover:text-primary-50">
                  Install
              </a>
          </div>
        </div>
        <div>
          <div className="max-w-sm p-4 bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
              <img className="object-cover w-46 h-16 pb-4" alt="Image" src="/assets/shopify.png" />
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Try Shopify free and start a business or grow an existing one. Get more than ecommerce software with tools to manage every part of your busines</p>
              <a href="#" className="inline-flex items-center px-16 py-2 text-sm font-medium text-center text-primary-50 bg-primary-500 rounded-lg hover:bg-primary-800 hover:text-primary-50">
                  Install
              </a>
          </div>
        </div>
    </div>
  </div>
  )
}

export default Steps