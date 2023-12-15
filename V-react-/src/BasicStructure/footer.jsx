// Footer.jsx


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 p-4 mt-8">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <p className="text-sm">&copy; 2023 Student Grading Report System</p>
          <p className="text-sm">All rights reserved</p>
        </div>
        <div>
          <a href="/privacy" className="text-sm mr-4 hover:text-white">
            Privacy Policy
          </a>
          <a href="/terms" className="text-sm hover:text-white">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
