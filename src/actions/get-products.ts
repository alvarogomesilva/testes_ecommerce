import { database } from "@/config/firebase-config";
import {
  collection,
  query,
  getDocs,
  where,
  limit
} from "firebase/firestore";

import type { Product } from "@/types/product";

type Props = {
  category: 'kasihimir' | 'lisas' | 'xadrez';
};

export async function getProducts({ category }: Props): Promise<Product[]> {
  try {
    const q = query(
      collection(database, "products"),
      where("category", "==", category)
    );

    const querySnapshot = await getDocs(q);

    const products: Product[] = [];

    for (const docSnap of querySnapshot.docs) {
      const data = docSnap.data();

      const imagesQuery = query(
        collection(database, "product_images"),
        where("product_id", "==", docSnap.id),
        limit(1)
      );

      const imagesSnapshot = await getDocs(imagesQuery);

      let firstImage: string | null = null;

      if (!imagesSnapshot.empty) {
        firstImage = imagesSnapshot.docs[0].data().url ?? null;
      }

      products.push({
        id: docSnap.id,
        ...data,
        created_at: data.created_at?.toDate().toISOString() ?? null,
        image: firstImage,
      } as Product);
    }

    return products;

  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
    return [];
  }
}
