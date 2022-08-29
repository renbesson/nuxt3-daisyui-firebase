<template>
  <div v-if="user">
    <div v-if="!loading">
      <div
        class="card w-full max-w-3xl bg-base-100 mx-auto m-5 shadow-xl rounded-none lg:rounded-2xl"
      >
        <!--+++card upload -->
        <div class="card-body">
          <UploadFile :path="`users/${user?.uid}/images`" />
        </div>
        <!--***card upload -->
        <!--+++ Images -->
        <div class="card-body">
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
        </div>
        <!--*** Images -->
      </div>
    </div>
    <Spinner v-else />
  </div>
  <NoAuth v-else />
</template>

<script setup>
const { user } = useUser()?.value;
const { data, loading } = getCollection(`users/${user?.uid}/images`);

const submitDelete = (fullPath) => {
  deleteFile(fullPath);
};
</script>
