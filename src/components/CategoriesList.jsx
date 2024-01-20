// Zadanie 3
// Wykonaj zapytanie do API oraz pobierz listę kategorii
// Wyświetl listę linków, przechodzących do podstrony z produktami z danej kategorii
import { useQuery } from "react-query";
import { API_CATEGORIES } from "../api/constants";
import { Link } from "react-router-dom";

const fetcCategories = async () => {
    const response = await fetch(API_CATEGORIES);
    const data = await response.json();
    return data;
}

const CategoriesList = () => {
    const { data, isLoading, isError } = useQuery('categories', fetcCategories, {
        staleTime: Infinity
    });

    if (isLoading) {
        return (<div>Loading</div>);
    }

    if (isError) {
        return (<div>Error</div>);
    }

    return (
        <ul>
            {data.map(categorie => 
                <li key={categorie.id}>
                    <Link to={`/categories/${categorie.id}`}>
                        {categorie.name}
                    </Link>
                </li>
                
            )}
        </ul>
    )
}

export default CategoriesList;