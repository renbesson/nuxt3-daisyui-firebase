<template>
  <div>
    <Spinner v-if="user?.isLoading === true" />

    <div
      v-if="user?.isLoading === false && user?.user === null"
      class="card w-96 bg-base-100 mx-auto m-5 shadow-xl"
    >
      <div class="card-body">
        <!--card title -->
        <h2 class="card-title">Sign Up</h2>
        <!--card content -->
        <div class="mb-3">
          <label class="label">
            <span class="label-text font-semibold">Username</span>
          </label>
          <input
            v-model="username"
            type="text"
            placeholder="Username"
            class="input input-bordered input-primary w-full max-w-xs"
          />
        </div>
        <div class="mb-3">
          <label class="label">
            <span class="label-text font-semibold">Email Address</span>
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
            <span class="label-text font-semibold">Password</span>
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
            @click="createUser(email, password, username)"
          >
            Sign Up
          </button>
          <NuxtLink to="/signin"
            ><button class="btn btn-secondary">
              Have an Account
            </button></NuxtLink
          >
        </div>
      </div>
    </div>

    <div
      v-if="user?.isLoading === false && user?.user !== null"
      class="card w-96 bg-base-100 mx-auto m-5 shadow-xl"
    >
      <div class="card-body">
        <h2 class="card-title">Already Signed In</h2>
        <span>You are already signed in. Click OK to go to the home page.</span>
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
const user = useState("user");
const username = ref("");
const email = ref("");
const password = ref("");
</script>
