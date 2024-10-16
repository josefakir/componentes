"use client";
import './Header.scss';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faXTwitter, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);  // Para manejar el estado del menú
    const [submenuOpen, setSubmenuOpen] = useState<string | null>(null);  // Para manejar qué submenú está abierto
    const [searchOpen, setSearchOpen] = useState(false);  // Estado para la barra de búsqueda

    // Función para alternar el menú
    const toggleMenu = (event: any) => {
        event.preventDefault();
        setMenuOpen(!menuOpen); // Cambia el estado del menú
    };

    // Función para alternar el submenú
    const toggleSubmenu = (event: any, submenuName: string) => {
        event.preventDefault();
        setSubmenuOpen(submenuOpen === submenuName ? null : submenuName);  // Alterna el submenú específico
    };

    // Función para alternar la visibilidad del formulario de búsqueda
    const toggleSearch = (event: any) => {
        event.preventDefault();
        setSearchOpen(!searchOpen);
    };

    return (
        <header className='header'>
            <div className='header__logo-container'>
                <a href="#" className='header__hamburguer' onClick={toggleMenu}>
                    <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} size="2x" />
                </a>
                <a href="#" className='header__logo'>
                    <img src="/img/logo.png" alt="Logo" />
                </a>
                <nav className={`header__menu ${menuOpen ? 'visible' : ''}`}>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Nosotros</a></li>
                        <li>
                            <a href="#" onClick={(e) => toggleSubmenu(e, 'servicios')}>Servicios</a>
                            <ul className={`header__submenu ${submenuOpen === 'servicios' ? 'visible' : ''}`}>
                                <li><a href="#">Submenu 1</a></li>
                                <li><a href="#">Submenu 2</a></li>
                                <li><a href="#">Submenu 3</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Productos</a></li>
                        <li><a href="#">Contacto</a></li>
                    </ul>
                </nav>
            </div>
            <div className='header__search-container'>
                <form className={`search-form ${searchOpen ? 'visible' : ''}`}>
                    <input type="text" placeholder='Buscar' />
                    <button><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                </form>
                <ul className='header__social'>
                    <li><a href="#" className='facebook'><FontAwesomeIcon icon={faFacebookF} /></a></li>
                    <li><a href="#" className='twitter'><FontAwesomeIcon icon={faXTwitter} /></a></li>
                    <li><a href="#" className='youtube'><FontAwesomeIcon icon={faYoutube} /></a></li>
                    <li><a href="#" className='instagram'><FontAwesomeIcon icon={faInstagram} /></a></li>
                    <li><a href="#" className='search'><FontAwesomeIcon icon={searchOpen ? faTimes : faMagnifyingGlass} onClick={toggleSearch} /></a></li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
