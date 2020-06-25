<template>
  <div>
    <q-item
      tag="label"
      clickable
      v-ripple
      @click="task.completed == !task.completed"
      :class="!task.completed ? 'bg-orange-1' : 'bg-green-1'"
    >
      <q-item-section
        side
        top
      >
        <q-checkbox
          color="positive"
          v-model="task.completed"
        />
      </q-item-section>
      <q-item-section>
        <q-item-label :class="{ 'text-strikethrough' : task.completed }">
          {{ task.name }} {{ task.completed }} {{ id }}
        </q-item-label>
      </q-item-section>
      <q-item-section
        side
        top
      >
        <div class="row">
          <q-item-label caption>{{ task.dueDate }}, <small>{{ task.dueTime }}</small></q-item-label>
          <q-icon
            name="event"
            size="18px"
          />
        </div>
      </q-item-section>
    </q-item>
  </div>
</template>

<script>
import mapActions from 'vuex'

export default {
  props: ['task', 'id'],
  methods: {
    ...mapActions('tasks', ['updateTask'])
  }
}
</script>

<style lang="scss" scoped>
</style>
