<template>
  <input type="checkbox" id="default-modal" class="modal-toggle" />
  <div
    id="default-modal-box"
    class="modal modal-bottom sm:modal-middle modal-open"
  >
    <div class="modal-box">
      <h3 class="font-bold text-lg">{{ title }}</h3>
      <p class="py-4">
        {{ text }}
      </p>
      <div class="modal-action">
        <label
          @click="toggleModal"
          for="default-modal"
          class="btn btn-primary"
          >{{ buttonText }}</label
        >
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  enabled: { type: Boolean, default: false },
  title: { type: String, default: "" },
  text: { type: String, default: "" },
  buttonText: { type: String, default: "Ok" },
});

const toggleModal = () => {
  var element = document.getElementById("default-modal-box");

  if (element.classList.contains("modal-open")) {
    element.classList.remove("modal-open");
    console.log(element.classList);
  }
};
</script>
