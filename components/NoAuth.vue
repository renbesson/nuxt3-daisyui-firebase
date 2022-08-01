<template>
  <div class="card w-96 bg-base-100 mx-auto m-5 shadow-xl">
    <div class="card-body">
      <h2 class="card-title">Not Signed In</h2>
      <span class="">You are NOT signed in.</span>
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
</template>
