import React from 'react';

const FooterLink: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li>
    <a href="#" onClick={(e) => e.preventDefault()} className="text-gray-600 hover:text-green-700 hover:underline transition-colors text-sm cursor-pointer">
      {children}
    </a>
  </li>
);

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white mt-12 border-t border-gray-200">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div>
            <h4 className="font-bold text-gray-800 uppercase mb-4">SOBRE</h4>
            <ul className="space-y-2">
              <FooterLink>SOBRE NÓS</FooterLink>
              <FooterLink>CONTATE-NOS</FooterLink>
              <FooterLink>PERGUNTAS FREQUENTES</FooterLink>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-800 uppercase mb-4">POLÍTICA</h4>
            <ul className="space-y-2">
              <FooterLink>POLÍTICA DE PRIVACIDADE</FooterLink>
              <FooterLink>POLÍTICA DE DEVOLUÇÃO</FooterLink>
              <FooterLink>INFORMAÇÕES DE ENVIO</FooterLink>
              <FooterLink>TERMOS DE SERVIÇO</FooterLink>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-800 uppercase mb-4">Bem-vindo(a) para assinar nosso e-mail.</h4>
            <p className="text-sm text-gray-600 mb-4">Por favor, nos informe se tiver alguma dúvida, nós resolveremos para você a tempo.</p>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Endereço de e-mail" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button 
                  type="submit" 
                  className="px-6 py-2 text-white rounded-r-md transition-colors"
                  style={{ backgroundColor: 'rgba(211, 74, 74, 1)', color: '#FFFFFF' }}
                >
                  Inscrever-se
                </button>
              </div>
            </form>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-sm text-gray-500 mb-4 md:mb-0">
            © 2025 EXPANLARGE
          </p>
          <div>
             <img src="https://cdn.hotishop.com/image/c110d973adef9c64c49656946c16511f3c7be6ee.jpeg" alt="Métodos de pagamento" className="h-8 mx-auto md:mx-0" />
          </div>
        </div>
      </div>
    </footer>
  );
};