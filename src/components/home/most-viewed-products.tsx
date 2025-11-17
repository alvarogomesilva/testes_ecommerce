import { ProductList } from "../product-list";
import { getProducts } from "@/actions/get-products";
import { Product } from "@/types/product";

export async function MostViewedProduts() {
  const products = await getProducts()

    return (
        <div className="mt-10">
            <h2 className="text-2xl text-center md:text-left">Produtos mais vistos</h2>
            <p className="text-gray-500 text-center md:text-left">Campeões de visualização da nossa loja.</p>

            <div className="mt-9">
                <ProductList list={products} />
            </div>
        </div>
    )
}