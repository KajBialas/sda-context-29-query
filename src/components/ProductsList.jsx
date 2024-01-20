import { useQuery } from "react-query"
import { API_PRODUCTS } from "../api/constants"

const fetchProducts = async () => {
    const response = await fetch(API_PRODUCTS);
    const data = await response.json();
    return data;
}

const ProductsList = () => {
    const { data, isLoading, isError } = useQuery('products', fetchProducts, {
        staleTime: Infinity
    });

    if (isLoading) {
        return (<div>Loading</div>);
    }

    if (isError) {
        return (<div>Error</div>);
    }

    return (
        <div>
            {data.map(product => (
                <div key={product.id}>
                    <h3>{product.title}</h3>
                    <div>
                        <h4>Kategorie:</h4>
                        {product.categories.map((categorie) => <div key={categorie}>{categorie}</div>)}
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
        </div>
    )
}

export default ProductsList;