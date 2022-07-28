<template>
  <div class="card w-full max-w-3xl bg-base-100 mx-auto m-5 shadow-xl rounded-none lg:rounded-2xl">
    <div class="card-body">
      <!--card content -->
      <div class="flex flex-row space-x-4">
        <div class="mb-3">
          <label class="label">
            <span class="label-text font-semibold">Name</span>
          </label>
          <input
            v-model="name"
            type="text"
            placeholder="Name"
            class="input input-bordered input-primary w-full"
          />
        </div>
        <div>
          <label class="label">
            <span class="label-text font-semibold">Type</span>
          </label>
          <input
            v-model="type"
            type="text"
            placeholder="Type"
            class="input input-bordered input-primary w-full"
          />
        </div>
        <div>
          <label class="label">
            <span class="label-text font-semibold">Year</span>
          </label>
          <input
            v-model="year"
            type="number"
            placeholder="Type"
            class="input input-bordered input-primary w-full"
          />
        </div>
      </div>
      <!--card buttons -->
      <div class="card-actions justify-between">
        <button
          @click="writeDoc({ name, type, year })"
          class="btn btn-primary btn-block"
        >
          Submit
        </button>
      </div>

      <!--+++ Table -->
      <div class="overflow-x-auto">
        <table class="table table-compact border-4 mx-auto">
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Year</th>
              <th class="text-red-600">DELETE</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(game, index) in data">
              <td>{{ game.name }}</td>
              <td>{{ game.type }}</td>
              <td>{{ game.year }}</td>
              <td @click="eraseDoc(game.id)">
                <button class="btn btn-error fill-base-100 btn-circle btn-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    width="24"
                  >
                    <path
                      xmlns="http://www.w3.org/2000/svg"
                      d="m9.4 16.15 2.6-2.6 2.6 2.6 1.05-1.05-2.6-2.6 2.6-2.6-1.05-1.05-2.6 2.6-2.6-2.6L8.35 9.9l2.6 2.6-2.6 2.6ZM7.3 20.5q-.75 0-1.275-.525Q5.5 19.45 5.5 18.7V6h-1V4.5H9v-.875h6V4.5h4.5V6h-1v12.7q0 .75-.525 1.275-.525.525-1.275.525ZM17 6H7v12.7q0 .1.1.2t.2.1h9.4q.1 0 .2-.1t.1-.2ZM7 6V19v-.3Z"
                    />
                  </svg>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!--*** Table -->
    </div>
  </div>
</template>

<script setup>
const user = useUser();
const { data } = pullCollection("games");

const name = ref("");
const type = ref("");
const year = ref("");
</script>
