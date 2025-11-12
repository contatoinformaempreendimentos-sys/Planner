
import React, { useState } from 'react';
import { ProductData } from '../types';

interface ProductInfoProps {
  product: Pick<ProductData, 'title' | 'price' | 'regularPrice'>;
}

const PlusIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
);

const MinusIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
    </svg>
);


export const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (amount: number) => {
    setQuantity(prev => Math.max(1, prev + amount));
  };

  const sellingFeatures = [
    { icon: "🌍", text: "Recomendado por 6.19K pessoas no Facebook" },
    { icon: "📦", text: "Frete Grátis em Pedidos Acima de $39" },
    { icon: "🚚", text: "Entrega Rápida" },
    { icon: "🔒", text: "Pagamento seguro via PayPal & Cartão de Crédito" }
  ];

  return (
    <div className="flex flex-col space-y-4">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{product.title}</h1>
      
      <div className="flex items-baseline space-x-3">
        <span className="text-3xl font-bold" style={{ color: 'rgba(172,10,30,1)' }}>${product.price.toFixed(2)}</span>
        <span className="text-xl text-gray-500 line-through">${product.regularPrice.toFixed(2)}</span>
      </div>

      <div className="flex items-center space-x-4">
        <span className="font-semibold text-gray-700">Quantidade:</span>
        <div className="flex items-center border border-gray-300 rounded-md">
          <button onClick={() => handleQuantityChange(-1)} className="px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-l-md transition">
            <MinusIcon className="w-4 h-4" />
          </button>
          <input type="text" value={quantity} readOnly className="w-12 text-center border-l border-r border-gray-300 focus:outline-none" />
          <button onClick={() => handleQuantityChange(1)} className="px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-r-md transition">
            <PlusIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      <button className="w-full text-lg font-bold py-4 rounded-md transition-transform duration-200 hover:scale-105" style={{ backgroundColor: 'rgba(97,143,125,1)', color: '#FFFFFF' }}>
        ADICIONAR AO CARRINHO
      </button>

      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
        <ul className="space-y-3">
          {sellingFeatures.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="text-xl mr-3">{feature.icon}</span>
              <span className="text-gray-700 text-sm">{feature.text}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <img src="https://cdn.hotishop.com/image/c15c15d997d071b6b5f51d957677dd25d69da1d4.png" alt="Métodos de pagamento" className="mx-auto" />
      </div>

    </div>
  );
};
