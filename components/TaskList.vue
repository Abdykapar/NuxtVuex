<template>
  <table class="table table-secondary">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Title</th>
        <th scope="col">Status</th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(task, index) in tasks" :key="task.id">
        <th scope="row">{{ index + 1 }}</th>
        <td>{{ task.title }}</td>
        <td>
          <div class="form-check form-switch">
            <input
              @change="onChange($event, task.id)"
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              :checked="task.completed"
            />
          </div>
        </td>
        <td>
          <button @click="onDelete(task.id)" class="btn btn-danger">
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { useStore } from 'vuex'
const store = useStore()

const tasks = computed(() => store.getters.filteredTasks)
const allTasks = computed(() => store.state.tasks)

const onDelete = (id) => {
  store.dispatch(
    'updateTasks',
    allTasks.value.filter((i) => i.id !== id)
  )
}

const onChange = ({ target }, id) => {
  const data = allTasks.value.map((i) =>
    i.id === id ? { ...i, completed: target.checked } : i
  )
  store.dispatch('updateTasks', data)
}
</script>

<style></style>
