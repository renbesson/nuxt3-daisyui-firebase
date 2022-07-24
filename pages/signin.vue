<template>
  <div>
    <Spinner v-if="user?.isLoading === true" />

    <div
      v-if="user?.isLoading === false && user?.user === null"
      class="card w-96 bg-base-200 mx-auto m-5 shadow-xl"
    >
      <div class="card-body">
        <!--card title -->
        <h2 class="card-title">Sign In</h2>
        <!--card content -->
        <div class="mb-3">
          <label class="label">
            <span class="label-text">What is your email address?</span>
          </label>
          <input
            v-model="email"
            type="text"
            placeholder="Email"
            class="input input-bordered input-primary w-full"
          />
        </div>
        <div>
          <label class="label">
            <span class="label-text">What is your password?</span>
          </label>
          <input
            v-model="password"
            type="password"
            placeholder="Password"
            class="input input-bordered input-primary w-full"
          />
        </div>
        <!--card buttons -->
        <div class="card-actions justify-between mt-5">
          <button @click="signInUser(email, password)" class="btn btn-primary">
            Sign In
          </button>
          <NuxtLink to="/signup"
            ><button class="btn btn-secondary">Create Account</button></NuxtLink
          >
        </div>
      </div>
    </div>

    <div
      v-if="user?.isLoading === false && user?.user !== null"
      class="card w-96 bg-base-200 mx-auto m-5 shadow-xl"
    >
      <div class="card-body">
        <h2 class="card-title">Already Signed In</h2>
        <p>You are already signed in. Click OK to go to the home page.</p>
        <div class="card-actions justify-end">
          <NuxtLink to="/"
            ><button class="btn btn-primary">Ok</button></NuxtLink
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const user = useUser();
const email = ref("");
const password = ref("");
</script>
