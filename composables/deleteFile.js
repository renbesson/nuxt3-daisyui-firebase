import { ref, deleteObject } from "firebase/storage";
import { doc, deleteDoc } from "@firebase/firestore";

export default async function (fullPath, id) {
  // Delete the image from firestorage
  const { $fireStorage, $firestoreDb } = useNuxtApp();
  const storageRef = ref($fireStorage, fullPath);
  const firestorePath = `${fullPath.split(".").shift()}`; // Concatenates firebase ID + file extension
  const firestoreRef = doc($firestoreDb, firestorePath);

  try {
    await deleteObject(storageRef);
    await deleteDoc(firestoreRef);
    alert("File deleted successfully!");
  } catch (error) {
    alert(`Error deleting file: ${error.message}`);
  }
}
