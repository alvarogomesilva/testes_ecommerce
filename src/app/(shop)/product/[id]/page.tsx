import { getProductWithCategory } from "@/actions/get-product-with-category"
import { ImageSlider } from "@/components/products/image-slider"
import { ProductDescription } from "@/components/products/product-description"
import { ProductDetails } from "@/components/products/product-details"
import { redirect } from "next/navigation"

type Props = {
    params: Promise<{ id: string }>
}


export default async function Page({ params }: Props) {
    const { id } = await params

    const data = await getProductWithCategory(id)

    if (!data) {
        return redirect('/')
    }

    return (
        <div>
            <div className="flex flex-col md:flex-row gap-6 md:gap-32">

                <ImageSlider images={data.images}/>
                
                <ProductDetails product={data.product}/>
            </div>

            <ProductDescription text={data.product.description}/>

            {/* <div className="">
                <h3>Você também pode gostar!</h3>
                ...
            </div> */}
        </div>
    )
}