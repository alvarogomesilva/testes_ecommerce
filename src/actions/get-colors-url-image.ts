import { database } from "@/config/firebase-config";
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";


export async function getColorsUrlImages(id: string) {
    const colors: string[] = []
    try {

        const q = query(collection(database, "product_images"), where("product_id", "==", id));
            const querySnapshot = await getDocs(q);

            querySnapshot.docs.map((doc) => {
                colors.push(doc.data().color)
            })

      
        const data = {
            colors: colors
        }
        return data
    } catch (error) {
        return null
    }
}