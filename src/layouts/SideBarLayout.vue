<template>
  <q-layout view="lHh lpR lFf">

    <q-drawer show-if-above v-model="left" side="left" bordered primary>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  data () {
    return {
      left: false,
      miniState: true
    }
  }
}
</script>