import { FaExclamationTriangle, FaTimesCircle, FaBan, FaLock, FaShieldAlt } from 'react-icons/fa';

const errorPages = [
  {
    id: "404",
    icon: FaExclamationTriangle,
    title: "404 - Page Not Found",
    description: "Sorry, the page you are looking for could not be found. It might have been removed, had its name changed, or is temporarily unavailable.",
  },
  {
    id: "500",
    icon: FaTimesCircle,
    title: "500 - Internal Server Error",
    description: "Oops! Something went wrong on our end. We are working to fix the problem. Please try again later.",
  },
  {
    id: "403",
    icon: FaBan,
    title: "403 - Forbidden",
    description: "You don't have permission to access this resource. Please contact the administrator if you believe this is an error.",
  },
  {
    id: "401",
    icon: FaLock,
    title: "401 - Unauthorized",
    description: "Authentication is required and has failed or has not yet been provided. Please log in to access this page.",
  },
  {
    id: "400",
    icon: FaShieldAlt,
    title: "400 - Bad Request",
    description: "The server could not understand the request due to invalid syntax. Please check your request and try again.",
  },
];

export default errorPages;