import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  updateEmail,
  sendPasswordResetEmail,
} from "firebase/auth";
import { collection, getDocs, onSnapshot } from "firebase/firestore";

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

  if (username && username !== auth.currentUser.displayName) {
    try {
      await updateProfile(auth.currentUser, { displayName: username });
      alert("Username updated!");
    } catch (e) {
      alert(`Error updating username: ${e.message}`);
    }
  } else {
    alert("Please type a valid username and different from the current one.");
  }
  if (email && email !== auth.currentUser.email) {
    try {
      await updateEmail(auth.currentUser, email);
      alert("Email updated!");
    } catch (e) {
      alert(`Error updating email: ${e.message}`);
    }
  } else {
    alert("Please type a valid email and different from the current one.");
  }
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
