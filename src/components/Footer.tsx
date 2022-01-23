import React from 'react'

const Footer = () => {
 const year = new Date().getFullYear()

  return (
    <footer className="footer py-4">
      <p>Copyright &copy; Kirsi Trospe {year}</p>
    </footer>
  )
}

export default Footer