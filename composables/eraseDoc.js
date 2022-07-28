import { doc, deleteDoc } from "@firebase/firestore";

export default async function (id) {
  const { $firestoreDb } = useNuxtApp();

  try {
    await deleteDoc(doc($firestoreDb, "games", id));
    alert(`Document deleted!`);
  } catch (e) {
    alert(`Error deleting document: ${e.message}`);
  }
}
