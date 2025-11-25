import { ProductList } from "../product-list";
import { getProducts } from "@/actions/get-products";

type Props = {
    title: string
    category: 'kasihimir' | 'lisas' | 'xadrez';
}

export async function MostViewedProduts({ title, category }: Props) {
    const products = await getProducts({
        category: category
    })

    return (
        <div className="mt-10">
            <h2 className="text-2xl text-center md:text-left">{title}</h2>
            <p className="text-gray-500 text-center md:text-left">Campeões de visualização da nossa loja.</p>

            <div className="mt-9">
                <ProductList list={products} />
            </div>
        </div>
    )
}