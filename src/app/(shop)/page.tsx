import { MostSoldProduts } from "@/components/home/most-sold-products";
import { MostViewedProduts } from "@/components/home/most-viewed-products";
import { ProductListSkeleton } from "@/components/home/product-list-skeleton";
import { Suspense } from "react";

export default async function Home() {

  return (
    <div>
      <Suspense fallback={<ProductListSkeleton />}>
        <MostViewedProduts />
      </Suspense>
      {/* <Suspense fallback={<ProductListSkeleton />}>
        <MostSoldProduts />
      </Suspense> */}
    </div>
  )
}