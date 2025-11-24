import { ProductDetail } from "@/types/product"
import Image from "next/image"
import Link from "next/link"

type Props = {
    product: ProductDetail,
    colors: string[]
}
export async function ProductDetails({ product, colors }: Props) {

    return (
        <div className="flex-1">
            <div className="text-sm text-gray-500 mb-2">Cód: {product.id}</div>
            <div className="font-bold text-3xl mb-3">{product.label}</div>
            <div className="text-gray-400 text-sm mb-3">Cores disponíveis: </div>
            <div className="flex gap-4 mb-4">

                {colors.map((item, index) => (
                    <div key={index} className={`size-10 bg-${item}-500 rounded-sm`}></div>
                ))}

            </div>

            <div className="font-bold text-4xl text-blue-600 mb-2">R$ {product.price.toFixed(2).replace('.', ',')}</div>
            <div className="text-sm text-gray-500 mb-6">Forma de pagamento via PIX</div>
            <div className="flex gap-4">
                <Link
                    href={`https://wa.me/4788123376?text=Oi, tudo bem?`}
                    target="_blank"
                    className="py-4 px-8 flex-1 max-w-xs bg-blue-600 text-white text-center border-0 rounded-sm cursor-pointer hover:opacity-90"
                >Entrar em contato</Link>

                <div className="size-14 border border-gray-200 flex justify-center items-center rounded-sm">
                    <Image
                        src={'/assets/ui/heart-3-line.png'}
                        alt=""
                        width={24}
                        height={24}
                    />
                </div>
                <div className="size-14 border border-gray-200 flex justify-center items-center rounded-sm">
                    <Image
                        src={'/assets/ui/share-line.png'}
                        alt=""
                        width={24}
                        height={24}
                    />
                </div>
            </div>

        </div>
    )
}