<template>
  <div>
    <div v-if="user" class="card w-96 bg-base-100 mx-auto m-5 shadow-xl">
      <div class="card-body">
        <!--card title -->
        <h2 class="card-title">Profile</h2>
        <!--card content -->
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
        </div>
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
        </div>
        <!--card buttons -->
        <div class="card-actions justify-between mt-5">
          <button
            class="btn btn-primary"
            @click="updateUser({ username, email })"
          >
            Update
          </button>
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
const { user } = useUser()?.value;
const username = ref("");
const email = ref("");
</script>
