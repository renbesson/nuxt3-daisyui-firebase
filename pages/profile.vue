<template>
  <div>
    <Spinner v-if="user?.isLoading === true" />

    <div
      v-if="user?.isLoading === false && user?.user !== null"
      class="card w-96 bg-base-100 mx-auto m-5 shadow-xl"
    >
      <div class="card-body">
        <!--card title -->
        <h2 class="card-title">Profile</h2>
        <!--card content -->
        <div class="mb-3">
          <label class="label">
            <span class="label-text">What is your username?</span>
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
            <span class="label-text">What is your email address?</span>
          </label>
          <input
            v-model="email"
            type="text"
            placeholder="Email"
            class="input input-bordered input-primary w-full max-w-xs"
          />
        </div>
        <div class="mb-3">
          <label class="label">
            <span class="label-text">What is your password?</span>
          </label>
          <input
            v-model="password"
            type="password"
            placeholder="Password"
            class="input input-bordered input-primary w-full max-w-xs"
          />
        </div>
        <!--card buttons -->
        <div class="card-actions justify-between mt-5">
          <button
            class="btn btn-primary"
            @click="updateUser({ username, email, password })"
          >
            Update
          </button>
        </div>
      </div>
    </div>

    <div
      v-if="user?.isLoading === false && user?.user === null"
      class="card w-96 bg-base-100 mx-auto m-5 shadow-xl"
    >
      <div class="card-body">
        <h2 class="card-title">Not Signed In</h2>
        <p>You are NOT signed in.</p>
        <div class="card-actions justify-between">
          <NuxtLink to="/signin"
            ><button class="btn btn-primary">SignIn</button></NuxtLink
          >
          <NuxtLink to="/signup"
            ><button class="btn btn-secondary">SignUp</button></NuxtLink
          >
        </div>
      </div>
    </div>
    <p>{{ user?.user?.displayName }}</p>
  </div>
</template>

<script setup>
const user = useUser();
console.log(user?.value);
const username = ref("");
const email = ref("");
const password = ref("");
</script>
