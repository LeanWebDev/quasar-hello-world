<template>
  <q-page class="q-pa-md">
    <q-list
      separator
      bordered
    >
      <task
        v-for="(task, key) in tasks"
        :key="key"
        :task="task"
        :id="key"
      ></task>
    </q-list>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ToDo',
  computed: {
    ...mapGetters('tasks', ['tasks'])
  },
  components: {
    task: require('components/tasks/Task').default
  }
}
</script>

<style lang="scss" scoped>
</style>
