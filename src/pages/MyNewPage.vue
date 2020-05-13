<template>
  <q-page padding>
    <h1>My first page</h1>
    <q-card>
      <p>This is MynewPage</p>
    </q-card>
    <q-tabs>
      <q-route-tab
        icon="assignment"
        :to="{name: 'index'}"
        label="Home"
        class="text-capitalize"
      />
    </q-tabs>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
}
</script>
