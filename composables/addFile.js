import { uploadBytes, getDownloadURL, ref } from "firebase/storage";
import { collection, addDoc, doc, setDoc } from "@firebase/firestore";
import { customAlphabet } from "nanoid";

const nanoid = customAlphabet("0123456789abcdef", 6);

export default async function (path, file) {
  const id = nanoid();
  let url = "";
  const { $fireStorage, $firestoreDb } = useNuxtApp();
  const docRef = doc($firestoreDb, path, id);

  try {
    const fileName = `${id}.${file.name.split(".").pop()}`; // Concatenates firebase ID + file extension
    const fullPath = `${path}/${fileName}`;
    const fileRef = ref($fireStorage, fullPath);

    // Upload the file to fireStorage
    await uploadBytes(fileRef, file);

    // Gets the URL for the file and stores in the "eurl" variable
    await getDownloadURL(fileRef).then((eurl) => (url = eurl));

    // It first creates a doc in firestore with a unique id and stores that ID in the "id" variable
    await setDoc(docRef, { url, fullPath, id });

    alert(`File uploaded successfully!`);
  } catch (e) {
    alert(`Error uploading file: ${e.message}`);
  }
}
