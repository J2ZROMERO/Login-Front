import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
    const [visible, setVisible] = useState(true);

    const toggleVisibility = () => {
        setVisible(!visible);
    };

    return (
          
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
    
            <ul className="navbar-nav mr-auto">
                <li className="nav-item dropdown show">
                    <a className="nav-link dropdown-toggle btn btn-outline-primary " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        Sidebar
                    </a>
                    <div className="dropdown-menu show" aria-labelledby="navbarDropdown">
            <ul>
           
                    <li className='dropdown-item w-100' ><Link className='nav-link' to="/dashboard/"> Inicio</Link></li>
                    <li className='dropdown-item'><Link className='nav-link' to="/dashboard/seccion1">Sección 1</Link></li>
                    <li className='dropdown-item'><Link  className='nav-link' to="/dashboard/seccion2">Sección 2</Link></li>
                    <li className='dropdown-item'><Link className='nav-link' to="/dashboard/seccion3">Sección 3</Link></li>
                    </ul>                    
                    </div>
                </li>
            </ul>
    
    </nav>
    );


    

}

export default Sidebar;

