import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
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

export const signOutUser = async () => {
  const auth = getAuth();

  try {
    await auth.signOut();
    alert("User Signed Out!");
  } catch (error) {
    alert(`Signout user error: ${error.message}`);
  }
};

export const updateUserUsername = async (data) => {
  const auth = getAuth();
  try {
    if (data !== auth.currentUser.displayName) {
      await updateProfile(auth.currentUser, { displayName: data });
      alert("Username updated!");
    }
  } catch (error) {
    alert(
      `Please submit a valid username and different from the current one. ${error.message}`
    );
  }
};

export const updateUserEmail = async (data) => {
  const auth = getAuth();
  try {
    if (data !== auth.currentUser.email) {
      await updateEmail(auth.currentUser, data);
      alert("Email updated!");
    }
  } catch (error) {
    alert(
      `Please submit a valid email and different from the current one. ${error.message}`
    );
  }
};

export const updateUserPhotoURL = async (data) => {
  const auth = getAuth();
  try {
    if (data !== auth.currentUser.email) {
      await updateProfile(auth.currentUser, { photoURL: data });
      alert("Photo updated!");
    }
  } catch (error) {
    alert(
      `Please submit a valid photo and different from the current one. ${error.message}`
    );
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
