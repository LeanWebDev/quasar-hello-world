<template>
  <q-page padding>
    <div class="row">
      <div class="col-12">
        <div class="column items-center">
          <h3>{{ four.name }}</h3>
          <q-card
            v-for="i in 10"
            class="my-card"
          >
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
        <div class="q-pa-md row items-start q-gutter-md">
          <q-card
            class="my-card"
            flat
            bordered
          >
            <q-card-section horizontal>
              <q-card-section class="q-pt-xs">
                <div class="text-overline">Overline</div>
                <div class="text-h5 q-mt-sm q-mb-xs">Title</div>
                <div class="text-caption text-grey">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </q-card-section>

              <q-card-section class="col-5 flex flex-center">
                <q-img
                  class="rounded-borders"
                  src="https://cdn.quasar.dev/img/parallax2.jpg"
                />
              </q-card-section>
            </q-card-section>

            <q-separator />

            <q-card-actions>
              <q-btn
                flat
                round
                icon="event"
              />
              <q-btn flat>
                7:30PM
              </q-btn>
              <q-btn
                flat
                color="primary"
              >
                Reserve
              </q-btn>
            </q-card-actions>
          </q-card>

          <q-card
            class="my-card"
            flat
            bordered
          >
            <q-item>
              <q-item-section avatar>
                <q-avatar>
                  <img src="https://cdn.quasar.dev/img/boy-avatar.png">
                </q-avatar>
              </q-item-section>

              <q-item-section>
                <q-item-label>Title</q-item-label>
                <q-item-label caption>
                  Subhead
                </q-item-label>
              </q-item-section>
            </q-item>

            <q-separator />

            <q-card-section horizontal>
              <q-card-section>
                {{ lorem }}
              </q-card-section>

              <q-separator vertical />

              <q-card-section class="col-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </q-card-section>
            </q-card-section>
          </q-card>

          <q-card class="my-card">
            <q-card-section horizontal>
              <q-img
                class="col-5"
                src="https://cdn.quasar.dev/img/parallax1.jpg"
              />

              <q-card-section>
                {{ lorem }}
              </q-card-section>
            </q-card-section>

            <q-separator />

            <q-card-actions>
              <q-btn
                flat
                round
                icon="event"
              />
              <q-btn flat>
                5:30PM
              </q-btn>
              <q-btn flat>
                7:00PM
              </q-btn>
              <q-btn
                flat
                color="primary"
              >
                Reserve
              </q-btn>
            </q-card-actions>
          </q-card>

          <q-card class="my-card">
            <q-card-section horizontal>
              <q-img
                class="col"
                src="https://cdn.quasar.dev/img/parallax2.jpg"
              />

              <q-card-actions
                vertical
                class="justify-around"
              >
                <q-btn
                  flat
                  round
                  color="red"
                  icon="favorite"
                />
                <q-btn
                  flat
                  round
                  color="accent"
                  icon="bookmark"
                />
                <q-btn
                  flat
                  round
                  color="primary"
                  icon="share"
                />
              </q-card-actions>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
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
    }, 1)
    this.four = four.data[0]
  },
  data () {
    return {
      four: '',
      small: false,
      alert: false,
      fullWidth: false,
      fullHeight: false,
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  }
}
</script>

<style lang="scss" scoped>
.my-card {
  margin-bottom: 20px;
}
.column {
  width: 100%;
}

.q-card {
  width: 100%;
}
</style>
