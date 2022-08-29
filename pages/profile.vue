<template>
  <div>
    <div v-if="user" class="card w-96 bg-base-100 mx-auto m-5 shadow-xl">
      <div class="card-body">
        <h2 class="card-title">Profile</h2>
        <!--card content -->
        <!--+++Username -->
        <div class="mb-3">
          <label class="label">
            <span class="label-text font-semibold">New Username</span>
          </label>
          <input
            v-model="username"
            type="text"
            placeholder="Userame"
            class="input input-bordered input-primary w-full max-w-xs"
          />
          <button
            class="btn btn-primary btn-block mt-3"
            @click="updateUserUsername(username)"
          >
            Update Username
          </button>
        </div>
        <!--***Username -->
        <!--+++Email -->
        <div class="mb-3">
          <label class="label">
            <span class="label-text font-semibold">New Email Address</span>
          </label>
          <input
            v-model="email"
            type="text"
            placeholder="Email"
            class="input input-bordered input-primary w-full max-w-xs"
          />
          <button
            class="btn btn-primary btn-block mt-3"
            @click="updateUserEmail(email)"
          >
            Update Email
          </button>
        </div>
        <!--***Email -->
        <!--+++PhotoURL -->
        <div class="mb-3">
          <label class="label">
            <span class="label-text font-semibold">New Profile Picture</span>
          </label>
          <input
            accept="image/*"
            type="file"
            id="selectFile"
            ref="selectedFile"
          />
          <div class="card-actions justify-between">
            <button @click="submitFile" class="btn btn-primary btn-block mt-3">
              Update Photo
            </button>
          </div>
        </div>
        <!--***PhotoURL -->
        <!--card buttons -->
        <div class="card-actions justify-between mt-5">
          <button @click="resetPassword(email)" class="btn btn-secondary">
            Reset Password
          </button>
        </div>
      </div>
    </div>
    <NoAuth v-else />
  </div>
</template>

<script setup>
import { ref as storageRef } from "@firebase/storage";
import { uploadBytes, getDownloadURL } from "@firebase/storage";

const { user } = useUser()?.value;
const username = ref("");
const email = ref("");

const selectedFile = ref(null);

const submitFile = async () => {
  let url = "";
  const { $fireStorage } = useNuxtApp();

  try {
    console.log(selectedFile);
    const file = selectedFile.value.files[0];
    const fileName = `photo.${file.name.split(".").pop()}`; // Concatenates firebase ID + file extension
    const fullPath = `users/${user.uid}/profile/${fileName}`;
    console.log(file);
    const fileRef = storageRef($fireStorage, fullPath);

    // Upload the file to fireStorage
    await uploadBytes(fileRef, file);

    // Gets the URL for the file and stores in the "eurl" variable
    await getDownloadURL(fileRef).then((eurl) => (url = eurl));

    // It first creates a doc in firestore with a unique id and stores that ID in the "id" variable
    await updateUserPhotoURL(url);

    alert(`File uploaded successfully!`);
  } catch (e) {
    alert(`Error uploading file: ${e.message}`);
  }
};
</script>
