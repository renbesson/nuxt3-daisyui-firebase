import { doc, deleteDoc } from "@firebase/firestore";

export default async function (fullPath) {
  const { $firestoreDb } = useNuxtApp();

  try {
    await deleteDoc(doc($firestoreDb, fullPath));
    alert(`Document deleted!`);
  } catch (e) {
    alert(`Error deleting document: ${e.message}`);
  }
}
