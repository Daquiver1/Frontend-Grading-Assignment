import React from 'react'

const Navigationpage = () => {
  const today = new Date ();

  return (
    <footer>
        <p>Copyright &copy; {today.getFullYear()}</p>
    </footer>
  )
}

export default Navigationpage
