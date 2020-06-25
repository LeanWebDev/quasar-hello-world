<template>
  <div class="q-pa-md">
    section v-if="errored">
    <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
    </section>

    <section>
      <div v-if="loading">Loading...</div>

      <div
        v-else
        v-for="currency in info"
        class="currency"
      >
        {{ currency.description }}:
        <span class="lighten">
          <span v-html="currency.symbol"></span>{{ currency.rate_float | currencydecimal }}
        </span>
      </div>

    </section>
    <div class="q-gutter-y-md">
      <q-card
        flat
        bordered
      >
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="left"
        >
          <q-tab
            name="mails"
            no-caps
          >
            <div class="row">
              <div class="col q-tab__label">Mails</div>
              <div class="col">
                <q-badge
                  color="info"
                  class="q-ml-sm"
                >{{ data.length }}</q-badge>
              </div>
            </div>
          </q-tab>
          <q-tab
            name="alarms"
            label="Alarms"
            no-caps
            alert="info"
          >
          </q-tab>
          <q-tab
            name="movies"
            label="Movies"
            no-caps
          />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab">
          <q-tab-panel
            name="mails"
            dark
            class="q-tab-panel-list"
          >
            <q-list>
              <q-item
                clickable
                v-ripple
                v-for="item in info"
                :key="item.name"
              >
                <q-item-section>
                  <q-item-label overline>OVERLINE</q-item-label>
                  <q-item-label>{{ item.name }}</q-item-label>
                  <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
                </q-item-section>

                <q-item-section
                  side
                  top
                >
                  <q-item-label caption>5 min ago</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-tab-panel>

          <q-tab-panel name="alarms">
            <div class="text-h6">Alarms</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>

          <q-tab-panel name="movies">
            <div class="text-h6">Movies</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
        </q-tab-panels>
      </q-card>

    </div>
  </div>
</template>
<script>
export default {
  name: 'StatsTabPanelLists',
  data () {
    return {
      info: null,
      loading: true,
      errored: false,
      bool: false,
      slide: true,
      step: 1,
      tab: 'mails',
      shape: true,
      filter: ''
    }
  },
  filters: {
    currencydecimal (value) {
      return value.toFixed(2)
    }
  },
  mounted () {
    this.$axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => {
        this.info = response.data.bpi
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
  }
}
</script>
<style lang="sass" scoped>
.q-tab-panel-list
    padding: 0px;
</style>
