import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {

    const { data: carOptions = [], isLoading } = useQuery({
        queryKey: ['carOptions'],
        queryFn: async () => {
            const res = await fetch('https://assignment-server-eta.vercel.app/carOptions'); 
            const data = await res.json();
            return data
        }
    });

    return (
        <div>
            {
               carOptions.map(product=><Product
               key={product.id}
               product={product}
               ></Product>)
            }
        </div>
    );
};

export default Products;