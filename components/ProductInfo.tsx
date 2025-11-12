
import React from 'react';
import { ProductData } from '../types';

interface ProductInfoProps {
  product: Pick<ProductData, 'title' | 'price' | 'regularPrice'>;
}

export const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {

  const sellingFeatures = [
    { icon: "🌍", text: "Recomendado por 6.19K pessoas no Facebook" },
    { icon: "⚡", text: "Acesso digital imediato após a compra" },
    { icon: "💻", text: "Download instantâneo — sem esperas, sem frete" },
    { icon: "🔒", text: "Pagamento seguro via Pix, PayPal ou Cartão de Crédito" }
  ];

  return (
    <div className="flex flex-col space-y-6">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{product.title}</h1>
      
      <div className="flex items-baseline space-x-3">
        <span className="text-3xl font-bold" style={{ color: 'rgba(172,10,30,1)' }}>
          {product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        </span>
        <span className="text-xl text-gray-500 line-through">
          {product.regularPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        </span>
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