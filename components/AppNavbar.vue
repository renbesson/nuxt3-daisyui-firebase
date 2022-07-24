<template>
  <div class="navbar bg-base-300">
    <div class="flex-1">
      <NuxtLink to="/"
        ><a class="btn btn-ghost normal-case text-xl"
          >Nuxt3 + daisyUI</a
        ></NuxtLink
      >
    </div>
    <div class="flex-none gap-2">
      <div class="form-control">
        <input type="text" placeholder="Search" class="input input-bordered" />
      </div>
      <article class="prose">
        <h3>{{ user?.user?.displayName }}</h3>
      </article>
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full">
            <img src="https://placeimg.com/80/80/people" />
          </div>
        </label>
        <ul
          v-if="user?.user"
          tabindex="0"
          class="menu menu-compact dropdown-content bg-base-200 rounded-box w-52 mt-3 p-2 shadow"
        >
          <li>
            <NuxtLink to="/profile"
              ><a class="justify-between">Profile</a></NuxtLink
            >
          </li>
          <li><a>Settings</a></li>
          <li><a @click="signOutUser">Logout</a></li>
        </ul>
        <ul
          v-else
          tabindex="0"
          class="menu menu-compact dropdown-content bg-base-200 rounded-box w-52 mt-3 p-2 shadow"
        >
          <li>
            <NuxtLink to="/signin"
              ><a class="justify-between">SignIn</a></NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/signup"
              ><a class="justify-between">SignUp</a></NuxtLink
            >
          </li>
        </ul>
      </div>
    </div>
    <h3>{{ user?.user?.displayName }}</h3>
  </div>
</template>

<script setup>
const user = useUser();
console.log(user?.value);
</script>
