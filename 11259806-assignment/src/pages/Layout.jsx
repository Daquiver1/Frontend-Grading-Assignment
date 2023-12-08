import LSideBar from '../components/LSideBar'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Layout() {
  return (
    <div className='flex'>
      <LSideBar />
      <div className='w-full'>
        <Header />
        <div className='p-4 bg-black/5 min-h-screen'>
         
        </div>
        <Footer />
      </div> 
    </div>
  )
}

export default Layout
