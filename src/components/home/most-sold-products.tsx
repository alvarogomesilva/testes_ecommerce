import { data } from "@/data";
import { ProductList } from "../product-list";

type Props = {
    title: string
}

export function MostSoldProduts({title}: Props) {
    return (
        <div className="mt-10">
            <h2 className="text-2xl text-center md:text-left">{title}</h2>
            <p className="text-gray-500 text-center md:text-left">Campeões de vendas da nossa loja.</p>

            <div className="mt-9">
                <ProductList list={data.products}/> 
            </div>
        </div>
    )
}