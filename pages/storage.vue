<template>
  <div v-if="user">
    <div v-if="!loading">
      <div
        class="card w-full max-w-3xl bg-base-100 mx-auto m-5 shadow-xl rounded-none lg:rounded-2xl"
      >
        <div class="card-body">
          <!--card content -->
          <input
            accept="image/*"
            type="file"
            id="selectFile"
            ref="selectedFile"
          />
          <!--card buttons -->
          <div class="card-actions justify-between">
            <button @click="submitFile" class="btn btn-primary btn-block">
              Submit
            </button>
          </div>
        </div>
        <div class="card-body">
          <!--+++ Images -->
          <div class="columns-1 sm:columns-3 p-0">
            <div
              v-for="image in data"
              class="card w-full shadow-lg hover:shadow-2xl mb-3"
            >
              <button
                @click="submitDelete(image.fullPath, image.id)"
                class="btn btn-error btn-xs rounded-none"
              >
                Delete
              </button>
              <figure>
                <img :src="image.url" class="w-full aspect-square" />
              </figure>
            </div>
          </div>
          <!--*** Images -->
        </div>
      </div>
    </div>
    <Spinner v-else />
  </div>
  <NoAuth v-else />
</template>

<script setup>
const { user } = useUser()?.value;
const { data, loading } = getCollection(`users/${user?.uid}/images`);

const selectedFile = ref(null);

const submitFile = async () => {
  await addFile(`users/${user?.uid}/images`, selectedFile.value.files[0]);
};

const submitDelete = (fullPath) => {
  deleteFile(fullPath);
};
</script>
