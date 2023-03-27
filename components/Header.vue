<template>
  <nav class="navbar bg-primary">
    <div class="container-fluid">
      <a class="navbar-brand link-light" href="#">Tasks</a>
      <form @submit.prevent="onSearch" class="d-flex" role="search">
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          v-model="search"
        />
        <button class="btn btn-info" type="submit">Search</button>
      </form>
    </div>
  </nav>
  <div class="my-4">
    <form class="row g-3" @submit.prevent="onSubmit">
      <div class="col-auto">
        <label for="task" class="visually-hidden">Task</label>
        <input
          v-model="text"
          type="text"
          class="form-control"
          id="task"
          placeholder="Task"
        />
      </div>
      <div class="col-auto">
        <button type="submit" class="btn btn-primary mb-3">Create</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'

const store = useStore()
const text = ref('')
const search = ref('')

const onSubmit = () => {
  const task = {
    id: Date.now(),
    title: text.value,
    completed: false,
  }
  store.dispatch('addTask', task)
  text.value = ''
}

const onSearch = () => {
  store.commit('updateSearchText', search.value)
}
</script>

<style></style>
