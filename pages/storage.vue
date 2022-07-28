<template>
  <div
    class="card w-full max-w-3xl bg-base-100 mx-auto m-5 shadow-xl rounded-none lg:rounded-2xl"
  >
    <div class="card-body">
      <!--card content -->
      <input accept="image/*" type="file" id="selectFile" ref="selectedFile" />
      <!--card buttons -->
      <div class="card-actions justify-between">
        <button @click="submit" class="btn btn-primary btn-block">
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
</template>

<script setup>
const { data } = pullCollection("images");
const user = useUser();
const selectedFile = ref(null);

const submit = async () => {
  await addFile("images", selectedFile.value.files[0]);
};

const submitDelete = (fullPath, id) => {
  deleteFile(fullPath, id);
};
</script>
