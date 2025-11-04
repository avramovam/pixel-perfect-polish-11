import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-ice to-white">
      <div className="text-center">
        <h1 className="mb-4 text-4xl md:text-6xl font-bold text-primary">404</h1>
        <p className="mb-4 text-xl text-gray-600">Страница не найдена</p>
        <a href="/" className="text-ocean underline hover:text-primary transition-colors">
          Вернуться на главную
        </a>
      </div>
    </div>
  );
};

export default NotFound;
