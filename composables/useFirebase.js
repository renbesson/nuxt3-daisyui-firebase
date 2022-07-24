import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  updateEmail,
  sendPasswordResetEmail,
} from "firebase/auth";

export const createUser = async (email, password, displayName) => {
  const auth = getAuth();

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser, {
      displayName,
    });
    alert("Account Created!");
    useRouter().push({ path: "/" });
  } catch (error) {
    alert(`Create user error: ${error.message}`);
  }
};

export const signInUser = async (email, password) => {
  const auth = getAuth();

  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("Signed In!");
    useRouter().push({ path: "/" });
  } catch (error) {
    alert(`Signin user error: ${error.message}`);
  }
};

export const getUser = async () => {
  const auth = getAuth();
  const user = useUser();

  user.value.isLoading = true;
  try {
    await onAuthStateChanged(auth, (userData) => {
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
};

export const signOutUser = async () => {
  const auth = getAuth();

  try {
    await auth.signOut();
    alert("User Signed Out!");
  } catch (error) {
    alert(`Signout user error: ${error.message}`);
  }
};

export const updateUser = async (userObj) => {
  const auth = getAuth();
  const { username, email } = userObj;

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
  await getUser();
};

export const resetPassword = async () => {
  const auth = getAuth();
  const email = auth.currentUser.email;
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset email sent!");
  } catch (e) {
    alert(`Error sending reset password email: ${e.message}`);
  }
};
