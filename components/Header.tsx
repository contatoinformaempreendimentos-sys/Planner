
import React from 'react';

const MenuIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

const SearchIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
  </svg>
);

const UserIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
  </svg>
);

const CartIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c.51 0 .962-.343 1.087-.835l1.858-6.491a1.125 1.125 0 0 0-.914-1.439H4.25l-.228-1.141A2.25 2.25 0 0 0 2.25 3H1.5M16.5 18.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-6.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
    </svg>
);

const NavItem: React.FC<{ children: React.ReactNode; href?: string }> = ({ children, href = '#' }) => (
  <li className="h-full">
    <a href={href} className="text-sm uppercase text-gray-700 hover:text-green-700 h-full flex items-center border-b-2 border-transparent hover:border-green-600 transition-colors duration-300 mx-4">
      {children}
    </a>
  </li>
);

export const Header: React.FC = () => {
  return (
    <header className="shadow-sm bg-white sticky top-0 z-50">
      <div className="bg-cover bg-center text-white text-center py-2 px-4" style={{ backgroundImage: "url('https://cdn.hotishop.com/image/fb81a7dffaa909d8c43f18d85514c128750c797a.png')"}}>
        <p className="text-sm font-semibold">🎉 Frete Grátis em Pedidos Acima de $39 🎉</p>
      </div>
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex justify-between items-center h-20">
          <div className="lg:hidden">
            <button className="text-gray-700">
              <MenuIcon />
            </button>
          </div>
          <div className="flex-1 lg:flex-none flex justify-center lg:justify-start">
             <a href="/" className="flex items-center">
              <img src="https://cdn.hotishop.com/image/07d43ff0bebb3ebf114c31ce7ac20077180f94c9.png" alt="EXPANLARGE" className="h-8 w-auto" />
            </a>
          </div>
          <nav className="hidden lg:flex justify-center flex-1 h-full">
            <ul className="flex items-center h-full">
              <NavItem href="/">HOME</NavItem>
              <NavItem href="/collections/all-products">TODOS OS PRODUTOS</NavItem>
              <NavItem href="/collections/christmas-decorations">DECORAÇÕES DE NATAL</NavItem>
              <NavItem href="/collections/christmas-gifts">PRESENTES DE NATAL</NavItem>
              <NavItem href="/collections/christmas-lights">LUZES DE NATAL</NavItem>
              <NavItem href="/collections/christmas-toys">BRINQUEDOS DE NATAL</NavItem>
              <NavItem href="/app/order-tracking">RASTREAR SEU PEDIDO</NavItem>
            </ul>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-green-700"><SearchIcon /></button>
            <button className="text-gray-700 hover:text-green-700 hidden sm:block"><UserIcon /></button>
            <button className="text-gray-700 hover:text-green-700"><CartIcon /></button>
          </div>
        </div>
      </div>
    </header>
  );
};
