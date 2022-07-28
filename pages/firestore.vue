<template>
  <div class="h2">ddd: {{ JSON.stringify(data) }}</div>
</template>

<script setup>
import { collection, onSnapshot, query } from "@firebase/firestore";

const user = useUser();
//const { data } = await useAsyncData(() => "/api/getCollection");

const loading = ref(false);
const data = reactive([]);
const unsubscribe = ref(null);

onMounted(async () => {
  const { $firestoreDb } = useNuxtApp();
  const collectionRef = collection($firestoreDb, "games");
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
  });
  loading.value = false;
});

onUnmounted(() => {
  unsubscribe.value?.();
});
</script>
