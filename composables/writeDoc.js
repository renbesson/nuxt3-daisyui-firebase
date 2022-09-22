import { collection, addDoc, doc, setDoc } from "@firebase/firestore";

export default async function (docObj) {
  const { $firestoreDb } = useNuxtApp();

  try {
    const addedDoc = await addDoc(collection($firestoreDb, "docs"), {
      ...docObj,
    });
    await setDoc(
      doc($firestoreDb, "docs", addedDoc.id),
      { id: addedDoc.id },
      { merge: true }
    );
    alert(`Document Added!`);
  } catch (e) {
    alert(`Error writing document: ${e.message}`);
  }
}
