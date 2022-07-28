import { collection, addDoc, doc, setDoc } from "@firebase/firestore";

export default async function (docObj) {
  const { $firestoreDb } = useNuxtApp();

  try {
    const addedDoc = await addDoc(collection($firestoreDb, "games"), {
      ...docObj,
    });
    await setDoc(
      doc($firestoreDb, "games", addedDoc.id),
      { id: addedDoc.id },
      { merge: true }
    );
    alert(`Document Added!`);
  } catch (e) {
    alert(`Error writing document: ${e.message}`);
  }
}
