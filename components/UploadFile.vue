<template>
  <input accept="image/*" type="file" id="selectFile" ref="selectedFile" />
  <div class="card-actions justify-between">
    <button @click="submitFile" class="btn btn-primary btn-block">
      Submit
    </button>
  </div>
</template>

<script setup>
const props = defineProps({ path: String });

const selectedFile = ref(null);

const submitFile = async () => {
  try {
    await addFile(props.path, selectedFile.value.files[0]);
    alert(`File uploaded successfully!`);
  } catch (error) {
    alert(`Error uploading file: ${error.message}`);
  }
};
</script>
