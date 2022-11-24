import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {

    const { data: carOptions = [], isLoading } = useQuery({
        queryKey: ['carOptions'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/carOptions'); 
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