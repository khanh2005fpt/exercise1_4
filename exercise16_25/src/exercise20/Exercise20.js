import React from 'react';
import { useLocation } from 'react-router-dom';
import { routes } from './routes';
import NavigationMenu from './NavigationMenu';

const Exercise20 = () => {
  const location = useLocation();

  // Tìm route phù hợp với đường dẫn hiện tại
  const currentRoute = routes.find(r => r.path === location.pathname);
  
  // Lấy component cần render (nếu không tìm thấy thì mặc định là Home hoặc null)
  const ComponentToRender = currentRoute ? currentRoute.component : () => <h1>Page Not Found</h1>;

  return (
      <div>
        <NavigationMenu />
        
        <div className="content">
            <ComponentToRender />
        </div>
      </div>
  );
};

export default Exercise20;