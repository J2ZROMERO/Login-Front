import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
    const [visible, setVisible] = useState(true);

    const toggleVisibility = () => {
        setVisible(!visible);
    };

    return (
            <div className='container d-flex justify-content-between align-items-center'>
            <button className='btn bg-primary .text-muted ' onClick={toggleVisibility}>
                {visible ? 'Ocultar' : 'Mostrar'} Menú
            </button>
        <aside className={`sidebar ${visible ? 'visible' : 'hidden'}`}>
            <nav>
                <ul>
                    <li><Link to="/dashboard/">Inicio</Link></li>
                    <li><Link to="/dashboard/seccion1">Sección 1</Link></li>
                    <li><Link to="/dashboard/seccion2">Sección 2</Link></li>
                    <li><Link to="/dashboard/seccion3">Sección 3</Link></li>
                </ul>
            </nav>
        </aside>
        </div>
    );
}

export default Sidebar;

