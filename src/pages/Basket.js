import React from 'react';
import { useGetAllProductsQuery } from '../features/productsApi';

export default function Basket () {
    const { data,error, isLoading } = useGetAllProductsQuery()
    return (
        <div className="basket">
            Basket Component
        </div>
    );
}