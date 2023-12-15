import { Inter } from 'next/font/google'
import './globals.css'
 import { ToastContainer } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ReportAMissingGrade',
  description: 'Report a missing grade application for UG students',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        {children}
      </body>
    </html>
  );
}
