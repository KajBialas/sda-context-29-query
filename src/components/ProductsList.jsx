import { useState } from 'react';
import { useQuery } from "react-query"
import { API_PRODUCTS } from "../api/constants"

// Zadanie 4
// Zadanie dodaj więcej produktow
// Dodaj mozliwosc paginacji wynikow

const fetchProducts = async (category, page) => {
    const response = await fetch(`${API_PRODUCTS}?categories=${category}&_page=${page}&_per_page=2`);
    const data = await response.json();
    return data;
}

const ProductsList = ({ category = '' }) => {
    const [page, setPage] = useState(1);
    const { data, isLoading, isError } = useQuery(['products', category, page], () => fetchProducts(category, page), {
        staleTime: Infinity
    });

    if (isLoading) {
        return (<div>Loading</div>);
    }

    if (isError) {
        return (<div>Error</div>);
    }

    const renderPages = Array.from({ length: data.pages}, (_, index) => (
        <button key={index} onClick={() => setPage(index+1)}>{index+1}</button>
    ))
    

    return (
        <div>
            {data.data.map(product => (
                <div key={product.id}>
                    <h3>{product.title}</h3>
                    <div>
                        <h4>Kategorie:</h4>
                        {product.category}
                    </div>
                    <div>
                        <h4>
                            Cena:
                        </h4>
                        <div>
                            {product.price}
                        </div>
                    </div>
                    <hr/>
                </div>
            ))}
            <div>
                Strony:
                {renderPages}
            </div>
        </div>
    )
}

export default ProductsList;