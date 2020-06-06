<template>
  <div>
    <q-page padding>
      <div class="row q-mb-lg">
        <div class="col">.col</div>
        <div class="col">.col</div>
        <div class="col">.col</div>
        <div class="col">.col</div>
      </div>
      <div class="row q-mb-lg">
        <div class="col-8">.col-8</div>
        <div class="col-4">.col-4</div>
      </div>
      <div class="row q-mb-lg">
        <div class="col-8">.col-8</div>
        <div class="col-4">.col-4</div>
      </div>
      <div class="row q-mb-lg">
        <div class="col-8">.col-8</div>
        <div class="col-4">.col-4</div>
      </div>
    </q-page>
  </div>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      bool: false
    }
  }
}
</script>

<style lang="sass" scoped>
.row
    height: 5rem
    background: rgba(255,0,0,.1)
.row > div
    padding: 10px 15px
    background: rgba(86,61,124,.15)
    border: 1px solid rgba(86,61,124,.2)
.doc-container > div + div
    margin-top: 1rem
</style>
