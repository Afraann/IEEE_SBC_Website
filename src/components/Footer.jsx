import { FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-ieee-blue text-white py-6">
      <div className="container mx-auto text-center">
        <div className="flex items-center justify-center space-x-4 py-4">
          <span>Connect with us -</span>
          <div className="flex space-x-3">
            <a
              href="https://www.linkedin.com/school/p-a-college-of-engineering-mangalore/?originalSubdomain=in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white opacity-80 hover:opacity-100 transition-opacity"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-8 w-8" />
            </a>
            <a
              href="https://www.instagram.com/pacemangalore_official/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white opacity-80 hover:opacity-100 transition-opacity"
              aria-label="Instagram"
            >
              <FaInstagram className="h-8 w-8" />
            </a>
          </div>
        </div>
        <p>
          &copy; {new Date().getFullYear()} PACE IEEE Student Branch. All Rights
          Reserved.
        </p>
        <p className="mt-2">P A College of Engineering, Mangaluru</p>
      </div>
    </footer>
  );
};

export default Footer;
