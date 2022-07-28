import { collection, onSnapshot, query } from "@firebase/firestore";

export default function (col) {
  const { $firestoreDb } = useNuxtApp();
  const loading = ref(false);
  const data = reactive([]);
  const unsubscribe = ref(null);

  onMounted(async () => {
    const collectionRef = collection($firestoreDb, col);
    const q = query(collectionRef);

    unsubscribe.value = onSnapshot(q, (snapshot) => {
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
    });
  });

  onUnmounted(() => {
    unsubscribe.value?.();
  });

  return { data };
}
