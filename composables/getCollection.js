import { collection, onSnapshot, query } from "@firebase/firestore";

export default function (path) {
  const { $firestoreDb } = useNuxtApp();
  const loading = ref(null);
  const data = reactive([]);
  const unsubscribe = ref(null);

  onBeforeMount(async () => {
    const collectionRef = collection($firestoreDb, path);
    const q = query(collectionRef);

    loading.value = true;

    unsubscribe.value = onSnapshot(
      q,
      (snapshot) => {
        snapshot.docChanges().forEach((change) => {
          if (change.type === "added") {
            data.push(change.doc.data());
          }
          if (change.type === "modified") {
            data.splice(
              data.findIndex((post) => post.id === change.doc.id),
              1,
              change.doc.data()
            );
          }
          if (change.type === "removed") {
            data.splice(
              data.findIndex((post) => post.id === change.doc.id),
              1
            );
          }
        });
        loading.value = false;
      },
      (error) => {
        alert(`Error: ${error.message}`);
      }
    );
  });

  onUnmounted(() => {
    unsubscribe.value?.();
  });

  return { data, loading };
}
