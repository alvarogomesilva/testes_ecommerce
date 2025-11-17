import { database } from "@/config/firebase-config";
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";


export async function getProductWithCategory(id: string) {
    const images: string[] = []
    try {
        const docRef = doc(database, "products", id);
        const docSnap = await getDoc(docRef);

        const q = query(collection(database, "product_images"), where("product_id", "==", id));
            const querySnapshot = await getDocs(q);

            querySnapshot.docs.map((doc) => {
                images.push(doc.data().url)
            })

            const product = {
                id: id,
                label: docSnap.data()?.label,
                price: docSnap.data()?.price,
                description: docSnap.data()?.description,
                liked: docSnap.data()?.liked,
                created_at: docSnap.data()?.created_at
            }

        const data = {
            images: images,
            product: product
        }
        return data
    } catch (error) {
        return null
    }
}