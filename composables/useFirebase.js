import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  updateEmail,
} from "firebase/auth";

export const createUser = async (email, password, displayName) => {
  const auth = getAuth();

  try {
    var credentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await updateProfile(auth.currentUser, {
      displayName,
    });
  } catch (error) {
    alert(`Create user error: ${error.message}`);
  } finally {
    if (credentials) {
      alert("Account Created!");
      useRouter().push({ path: "/" });
    }
  }
};

export const signInUser = async (email, password) => {
  const auth = getAuth();

  try {
    var credentials = await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    alert(`Signin user error: ${error.message}`);
  } finally {
    alert("Signed In!");
    if (credentials) useRouter().push({ path: "/" });
  }
};

export const getUser = async () => {
  const auth = getAuth();
  const user = useUser();

  user.value.isLoading = true;
  try {
    onAuthStateChanged(auth, (userData) => {
      if (userData) {
        //if signed in
        user.value.user = userData;
        user.value.isLoading = false;
      } else {
        //if signed out
        user.value.user = null;
        user.value.isLoading = false;
      }
    });
  } catch (e) {
    user.value.error = e;
  } finally {
  }
};

export const signOutUser = async () => {
  const auth = getAuth();

  try {
    var result = await auth.signOut();
  } catch (error) {
    alert(`Signout user error: ${error.message}`);
  } finally {
    alert("User Signed Out!");
  }

  return result;
};

export const updateUser = async (userObj) => {
  const auth = getAuth();
  const { username, email, password } = userObj;

  if (username) {
    try {
      await updateProfile(auth.currentUser, { displayName: username });
      alert("Username updated!");
    } catch (e) {
      alert(`Error updating username: ${e.message}`);
    }
  }
  if (email) {
    try {
      await updateEmail(auth.currentUser, email);
      alert("Email updated!");
    } catch (e) {
      alert(`Error updating email: ${e.message}`);
    }
  }
  getUser();
};
