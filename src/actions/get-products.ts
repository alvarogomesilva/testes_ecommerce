import { database } from "@/config/firebase-config";
import { 
  collection, 
  query, 
  getDocs,
  where,
  limit 
} from "firebase/firestore";
import type { Product } from "@/types/product";

export async function getProducts(): Promise<Product[]> {
  try {
    const q = query(collection(database, "products"));
    const querySnapshot = await getDocs(q);

    const products = await Promise.all(
      querySnapshot.docs.map(async (doc) => {
        const data = doc.data();

        const imagesQuery = query(
          collection(database, "product_images"),
          where("product_id", "==", doc.id),
          limit(1)
        );

        const imagesSnapshot = await getDocs(imagesQuery);

        let firstImage: string | null = null;

        if (!imagesSnapshot.empty) {
          const imageData = imagesSnapshot.docs[0].data();
          firstImage = imageData.url || null;
        }

        return {
          id: doc.id,
          ...data,
          created_at: data.created_at?.toDate().toISOString() ?? null,
          image: firstImage,
        } as Product
      })
    );

    return products;

  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
    return [];
  }
}
