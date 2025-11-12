
import React from 'react';
import { Header } from './components/Header';
import { ProductGallery } from './components/ProductGallery';
import { ProductInfo } from './components/ProductInfo';
import { ProductDescription } from './components/ProductDescription';
import { Footer } from './components/Footer';
import { ProductData } from './types';

const productData: ProductData = {
  title: '⏰ Kit de Ferramentas de Limpeza e Organização para TDAH - Planejador de Tarefas ✔',
  price: 19.99,
  regularPrice: 38.99,
  gallery: [
    { id: 1, url: 'https://cdn.hotishop.com/image/650ca22630e437e529090612656fed4afa4f1914.jpeg' },
    { id: 2, url: 'https://cdn.hotishop.com/image/e86d4a2ab9b52bbeb9b86849afb9404f3f87b467.jpeg' },
    { id: 3, url: 'https://cdn.hotishop.com/image/6df16b45af94c48218514bd0beacbd9c522e304d.jpeg' },
    { id: 4, url: 'https://cdn.hotishop.com/image/3298acca218ac46e67b4653b7b7bb03eb300b09b.jpeg' },
    { id: 5, url: 'https://cdn.hotishop.com/image/02e492747fd0180b153cd56dcaa20a8954c4c998.jpeg' },
    { id: 6, url: 'https://cdn.hotishop.com/image/4095657725e9a68613950884756b72f74911a5a4.jpeg' },
    { id: 7, url: 'https://cdn.hotishop.com/image/427328671482141f127dd4225efe10cba3b96345.jpeg' },
    { id: 8, url: 'https://cdn.hotishop.com/image/18e85c441b762c382e3bff698debd35e4fdafdff.jpeg' },
  ],
};

const App: React.FC = () => {
  return (
    <div className="bg-white font-sans text-gray-800">
      <Header />
      <main className="pt-4">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex flex-col lg:flex-row lg:space-x-8">
            <div className="lg:w-1/2">
              <ProductGallery images={productData.gallery} />
            </div>
            <div className="lg:w-1/2 mt-6 lg:mt-0">
              <ProductInfo product={productData} />
            </div>
          </div>
          <ProductDescription />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
