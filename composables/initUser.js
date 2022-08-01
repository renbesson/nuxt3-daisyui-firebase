import { onAuthStateChanged } from "firebase/auth";

export default function () {
  const { $firebaseAuth } = useNuxtApp();

  onBeforeMount(() => {
    const user = useUser();

    user.value.isLoading = true;
    try {
      onAuthStateChanged($firebaseAuth, (userData) => {
        if (userData) {
          //if signed in
          user.value.user = userData;
        } else {
          //if signed out
          user.value.user = null;
        }
        user.value.isLoading = false;
      });
    } catch (e) {
      user.value.error = e;
      user.value.isLoading = false;
    }
  });
}
