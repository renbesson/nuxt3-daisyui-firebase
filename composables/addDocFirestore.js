import { collection, addDoc, doc, setDoc } from "@firebase/firestore";

export default async function (path, docObj) {
  const { $firestoreDb } = useNuxtApp();

  try {
    const addedDoc = await addDoc(collection($firestoreDb, path), {
      ...docObj,
    });
    await setDoc(
      doc($firestoreDb, path, addedDoc.id),
      { id: addedDoc.id },
      { merge: true }
    );
    alert(`Document Added!`);
  } catch (e) {
    alert(`Error writing document: ${e.message}`);
  }
}
