import { FaExclamationTriangle, FaTimesCircle, FaBan, FaLock, FaShieldAlt } from 'react-icons/fa';
import { Error400, Error401, Error403, Error404, Error500 } from './components/index.js'
const errorPages = [
  {
    id: "401",
    icon: FaLock,
    title: "Unauthorized",
    description: "Authentication is required and has failed or has not yet been provided. \nPlease log in to access this page.",
    component: Error401,
  },
  {
    id: "403",
    icon: FaBan,
    title: "Forbidden",
    description: "You don't have permission to access this resource. \nPlease contact the administrator if you believe this is an error.",
    component: Error403,
  },
  {
    id: "404",
    icon: FaExclamationTriangle,
    title: "Page Not Found",
    description: "Sorry, the page you are looking for could not be found. \nIt might have been removed, had its name changed, or is temporarily unavailable.",
    component: Error404,
},
  {
    id: "500",
    icon: FaTimesCircle,
    title: "Internal Server Error",
    description: "Oops! Something went wrong on our end. \nWe are working to fix the problem. Please try again later.",
    component: Error500,
},
  {
    id: "400",
    icon: FaShieldAlt,
    title: "Bad Request",
    description: "The server could not understand the request due to invalid syntax. \nPlease check your request and try again.",
    component: Error400,
  },
];

export default errorPages;