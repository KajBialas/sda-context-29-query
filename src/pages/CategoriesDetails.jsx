import ProductsList from "../components/ProductsList";
import CategoriesList from "../components/CategoriesList";
import { useParams } from "react-router-dom";
const CategoriesDetails = () => {
    const { id } = useParams();

    return (
        <div>
            Wszystkie kategorie:
            <CategoriesList />
            <hr/>
            Produkty z kategori: {id}
            <ProductsList category={id} />
        </div>
    )
}

export default CategoriesDetails;