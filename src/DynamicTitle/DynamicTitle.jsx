import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const DynamicTitle = () => {
  const location = useLocation();

  const titleMap = {
    "/": "Home - BEAUTIFUL BANGLADESH",
    "/auth/login": "Login - BEAUTIFUL BANGLADESH",
    "/auth/register": "Register - BEAUTIFUL BANGLADESH",
    "/forgotPass": "Forgot Password - BEAUTIFUL BANGLADESH",
    "/about": "About Us - BEAUTIFUL BANGLADESH",
    "/contact": "Contact - BEAUTIFUL BANGLADESH",
    "/services": "Services - BEAUTIFUL BANGLADESH",
    "/blogs": "Blogs - BEAUTIFUL BANGLADESH",
    "/details/:id": "Details - BEAUTIFUL BANGLADESH",
    "/my-profile": "My Profile - BEAUTIFUL BANGLADESH",
    "/update-profile": "Update Profile - BEAUTIFUL BANGLADESH",
  };

  useEffect(() => {
    const path = location.pathname;

    let title;
    // Dynamic details
    if (path.startsWith("/details/")) {
      
      const id = path.split("/details/")[1];
      title = `Details for ${id} - BEAUTIFUL BANGLADESH`;
    } else {
      title = titleMap[path] || "Default Title - BEAUTIFUL BANGLADESH";
    }

    document.title = title;
  }, [location]);

  return null; 
};

export default DynamicTitle;
