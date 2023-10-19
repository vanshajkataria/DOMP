import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface Product {
  id: number;
  name: string;
  price: number;
  alt: string;
  src: StaticImageData; // Change the type of src
}

interface ProductListProps {
  products: Product[];
  onAddToCart: (product: string) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, onAddToCart }) => {
  return (
    <div className='container mx-auto'>
      <h2 className='text-3xl font-bold p-4'>Products</h2>
      <div className='container mx-auto'>
      <ul className='grid grid-cols-4'>
        {products.map((product) => (
          <li key={product.id} className='grid mx-auto text-center'>
            <Image
              alt={product.alt}
              src={product.src}
              width={250} // Set the width of the image
              height={250} // Set the height of the image
            />
            <p>{product.name}</p>
            <p>Price: ₹{product.price}</p>
            <button className='w-fit' onClick={() => onAddToCart(product.name)}>
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default ProductList;
