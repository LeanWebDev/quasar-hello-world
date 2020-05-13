<template>
  <div class="row items-center justify-evenly">
    <q-card dark>
      <example-component
        title="Example component"
        active
        :todos="todos"
        :meta="meta"
      ></example-component>
    </q-card>
    <div class="q-pa-md">
      <q-ajax-bar
        ref="bar"
        position="bottom"
        color="accent"
        size="10px"
        skip-hijack
      />

      <q-btn
        color="primary"
        label="Trigger"
        @click="trigger"
      />
    </div>
    <q-tabs>
      <q-route-tab
        icon="assignment"
        :to="{name: 'first-page'}"
        label="MyFirstPage"
        class="text-capitalize"
      />
      <q-route-tab
        icon="alarm"
        :to="{name: 'breaking-bad'}"
        label="breaking-bad"
        class="text-capitalize"
      />
    </q-tabs>

  </div>
</template>

<script lang="ts">
import ExampleComponent from "components/CompositionComponent.vue";
import { Todo, Meta } from "components/models";

export default {
  name: "PageIndex",
  components: { ExampleComponent },
  data() {
    const todos: Todo[] = [
      {
        id: 1,
        content: "ct1"
      },
      {
        id: 2,
        content: "ct2"
      },
      {
        id: 3,
        content: "ct3"
      },
      {
        id: 4,
        content: "ct4"
      },
      {
        id: 5,
        content: "ct5"
      }
    ];
    const meta: Meta = {
      totalCount: 1200
    };
    return { todos, meta };
  },
  methods: {
    // we manually trigger it (this is not needed if we
    // don't skip Ajax calls hijacking)
    trigger() {
      const bar = this.$refs.bar;

      bar.start();

      this.timer = setTimeout(() => {
        if (this.$refs.bar) {
          this.$refs.bar.stop();
        }
      }, Math.random() * 3000 + 1000);
    }
  }
};
</script>
