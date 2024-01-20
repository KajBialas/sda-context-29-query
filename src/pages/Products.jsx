import ProductsList from "../components/ProductsList";
import CategoriesList from "../components/CategoriesList";

const Products = () => {
    return (
        <section>
            <div>
                Kategorie:
                <CategoriesList />
            </div>
            <hr />
            <div>
                Produkty:
                <ProductsList />
            </div>
        </section>
    )
}

export default Products;