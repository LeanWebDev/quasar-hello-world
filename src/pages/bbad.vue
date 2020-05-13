<template>
  <q-page padding>
    <div class="column justify-center items-center">
      <h3>{{ four.name }}</h3>
      <q-card class="my-card">
        <img :src="four.img">
        <q-card-section>
          <div class="text-h6">{{ four.name }}</div>
          <div class="text-subtitle2">{{ four.nickname }}</div>
        </q-card-section>
        <q-card-section>
          <q-chip
            v-for="occupation in four.occupation"
            color="teal"
            :key="occupation"
            text-color="white"
            icon="bookmark"
            clickable="true"
            ripple="true"
          >
            {{ occupation}}
          </q-chip>
        </q-card-section>
        <q-card-actions>
          <q-btn
            flat
            label="Bday"
            @click="alert = true"
          />
        </q-card-actions>
      </q-card>
    </div>
    <q-dialog v-model="alert">
      <q-card>
        <q-card-section>
          <div class="text-h6">Birthday info</div>
        </q-card-section>
        <q-card-section>{{ four.birthday }}</q-card-section>
        <q-card-actions align="right">
          <q-btn
            flat
            label="OK"
            color="primary"
            v-close-popup
          />
        </q-card-actions>
      </q-card>
    </q-dialog>

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
import { QSpinnerCube } from 'quasar'
export default {
  async created () {
    this.$q.loading.show({
      message: 'Loading',
      spinnerColor: 'blue',
      spinner: QSpinnerCube
    })
    const four = await this.$axios.get('https://www.breakingbadapi.com/api/characters/1')
    console.log(four.data)
    setTimeout(() => {
      this.$q.loading.hide()
    }, 1000)
    this.four = four.data[0]
  },
  data () {
    return {
      four: '',
      small: false,
      alert: false,
      fullWidth: false,
      fullHeight: false
    }
  }
}
</script>

<style lang="scss" scoped>
.my-card {
  width: 30%;
}
</style>
