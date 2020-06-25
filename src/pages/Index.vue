<template>
  <div>
    <q-page padding>
      <stats-tab-panel-lists></stats-tab-panel-lists>
      <q-banner class="bg-primary q-mb-lg">
        {2:Unfortunately, the credit card did not go through, please try again.}
        <template v-slot:action>
          <q-btn
            flat
            color="{3:white}"
            label="{4:Dismiss}"
          />
          <q-btn
            flat
            color="{5:white}"
            label="{6:Update Credit Card}"
          />
        </template>
      </q-banner>
      <q-btn
        color="primary"
        icon="check"
        label="ToDos"
        to="to-do"
      />
      <q-btn
        color="primary"
        icon="check"
        label="OK"
        @click="onClick"
      />
      <q-btn-group>
        <q-btn
          color="secondary"
          label="One"
          @click="clickHandler1"
        />
        <q-btn
          color="info"
          label="Two"
          @click="clickHandler2"
        />
        <q-btn
          color="warning"
          label="Three"
          @click="clickHandler3"
        />
        <q-btn
          color="positive"
          label="Two"
          @click="clickHandler2"
        />
        <q-btn
          color="negative"
          label="Three"
          @click="clickHandler3"
        />
      </q-btn-group>
      <template>
        <div class="q-pa-md">
          <div
            class="q-gutter-y-md"
            style="max-width: 600px"
          >
            <q-tabs
              v-model="tab"
              class="bg-primary text-white shadow-2"
            >
              <q-tab
                name="alarms"
                icon="notifications"
              >
                <q-badge
                  color="info"
                  floating
                >10+</q-badge>
              </q-tab>

            </q-tabs>

            <q-tabs
              v-model="tab"
              class="bg-negative text-white shadow-2"
            >
              <q-tab
                alert="yellow"
                alert-icon="warning"
                name="mails"
                label="Mails"
              />
              <q-tab
                alert
                alert-icon="event"
                label="Alarms"
                name="alarms"
              />
              <q-tab
                alert="orange"
                alert-icon="announcement"
                name="movies"
                label="Movies"
              />
            </q-tabs>

            <q-tabs
              v-model="tab"
              class="bg-positive"
            >
              <q-tab
                name="mails"
                icon="mail"
                label="Mails"
              >
                <q-badge
                  color="primary"
                  text-color="white"
                  floating
                >2</q-badge>
              </q-tab>
              <q-tab
                name="alarms"
                icon="alarm"
                label="Alarms"
              >
                <q-badge
                  color="purple"
                  text-color="white"
                  floating
                >10+</q-badge>
              </q-tab>
              <q-tab
                alert
                name="movies"
                icon="movie"
                label="Movies"
              />
            </q-tabs>

            <q-tabs
              v-model="tab"
              class="bg-grey-3"
            >
              <q-tab
                alert="red"
                name="mails"
                icon="mail"
                label="Mails"
              />
              <q-tab
                alert="purple"
                name="alarms"
                icon="alarm"
                label="Alarms"
              />
              <q-tab
                alert="orange"
                name="movies"
                icon="movie"
                label="Movies"
              />
            </q-tabs>
          </div>
        </div>
      </template>
      <div class="row">
        <div class="col-8 offset-2">
          <template>
            <div class="q-pa-md">
              <q-btn
                label="Reset"
                push
                color="white"
                text-color="primary"
                @click="step = 1"
                class="q-mb-md"
              />

              <q-stepper
                v-model="step"
                header-nav
                ref="stepper"
                color="primary"
                animated
                alternative-labels
                flat
                bordered
              >
                <q-step
                  :name="1"
                  :prefix="1"
                  title="Select campaign settings"
                  icon="settings"
                  :done="step > 1"
                  :header-nav="step > 1"
                >
                  For each ad campaign that you create, you can control how much you're willing to
                  spend on clicks and conversions, which networks and geographical locations you want
                  your ads to show on, and more.

                  <q-stepper-navigation>
                    <q-btn
                      @click="() => { done1 = true; step = 2 }"
                      color="primary"
                      label="Continue"
                    />
                  </q-stepper-navigation>
                </q-step>

                <q-step
                  :name="2"
                  :prefix="2"
                  title="Create an ad group"
                  caption="Optional"
                  icon="create_new_folder"
                  :done="step > 2"
                  :header-nav="step > 2"
                >
                  An ad group contains one or more ads which target a shared set of keywords.

                  <q-stepper-navigation>
                    <q-btn
                      @click="() => { done2 = true; step = 3 }"
                      color="primary"
                      label="Continue"
                    />
                    <q-btn
                      flat
                      @click="step = 1"
                      color="primary"
                      label="Back"
                      class="q-ml-sm"
                    />
                  </q-stepper-navigation>
                </q-step>

                <q-step
                  :name="3"
                  :prefix="3"
                  title="Create an ad"
                  :header-nav="step > 3"
                >
                  Try out different ad text to see what brings in the most customers, and learn how to
                  enhance your ads using features like ad extensions. If you run into any problems with
                  your ads, find out how to tell if they're running and how to resolve approval issues.

                  <q-stepper-navigation>
                    <q-btn
                      color="primary"
                      @click="done3 = true"
                      label="Finish"
                    />
                    <q-btn
                      flat
                      @click="step = 2"
                      color="primary"
                      label="Back"
                      class="q-ml-sm"
                    />
                  </q-stepper-navigation>
                </q-step>
              </q-stepper>
            </div>
          </template>
        </div>
      </div>
      <template>
        <div class="q-pa-md">
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
                      v-for="item in data"
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
      <template>
        <div class="q-pa-md">
          <q-table
            grid
            :data="data"
            :columns="columns"
            row-key="name"
            :filter="filter"
            hide-header
            bordered
            dark
          >
            <template v-slot:top-right>
              <q-input
                borderless
                dense
                debounce="300"
                v-model="filter"
                placeholder="Search"
              >
                <template v-slot:append>
                  <q-icon name="search" />
                </template>
              </q-input>
            </template>
          </q-table>
        </div>
      </template>
    </q-page>
  </div>
</template>

<script>
import StatsTabPanelLists from 'components/StatsTabPanelLists.vue'

export default {
  name: 'PageIndex',
  components: { StatsTabPanelLists },
  data () {
    return {
      bool: false,
      slide: true,
      step: 1,
      tab: 'mails',
      shape: true,
      filter: '',
      columns: [
        {
          name: 'desc',
          required: true,
          label: 'Dessert (100g serving)',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'calories', align: 'center', label: 'Calories', field: 'calories', sortable: true },
        { name: 'fat', label: 'Fat (g)', field: 'fat', sortable: true },
        { name: 'carbs', label: 'Carbs (g)', field: 'carbs' }
      ],
      data: [
        {
          name: 'config-elkjekj-21',
          calories: 159,
          fat: 6.0,
          carbs: 24
        },
        {
          name: 'l3diagram-wefwef-wefw',
          calories: 237,
          fat: 9.0,
          carbs: 37
        },
        {
          name: 'qweqw-23-config',
          calories: 262,
          fat: 16.0,
          carbs: 23
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65
        }
      ]
    }
  }
}

</script>

<style lang="sass" scoped>
.my-content
  padding: 10px 15px
  background: rgba(86,61,124,.15)
  border: 1px solid rgba(86,61,124,.2)

.q-tab-panel-list
  padding: 0px;

</style>
