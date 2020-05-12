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
    <q-card>
      <div class="q-pa-md q-gutter-sm">
        <q-avatar
          color="red"
          text-color="white"
          icon="directions"
        />
        <q-avatar
          color="primary"
          text-color="white"
        >J</q-avatar>
        <q-avatar
          size="100px"
          font-size="52px"
          color="teal"
          text-color="white"
          icon="directions"
        />
        <q-avatar
          size="24px"
          color="orange"
        >J</q-avatar>
        <q-avatar>
          <img src="https://cdn.quasar.dev/img/avatar.png">
        </q-avatar>
      </div>
    </q-card>
    <q-card>
      <div class="q-pa-md q-gutter-y-md">
        <div class="q-gutter-sm">
          <q-chip>
            <q-avatar
              color="red"
              text-color="white"
            >50</q-avatar>
            Emails
          </q-chip>
          <q-chip>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
            John
          </q-chip>
        </div>

        <div class="q-gutter-x-sm">
          <q-btn round>
            <q-avatar size="28px">
              <img src="https://cdn.quasar.dev/app-icons/icon-128x128.png" />
            </q-avatar>
          </q-btn>
          <q-btn round>
            <q-avatar size="32px">
              <img src="https://cdn.quasar.dev/app-icons/icon-128x128.png" />
            </q-avatar>
          </q-btn>
          <q-btn round>
            <q-avatar size="40px">
              <img src="https://cdn.quasar.dev/app-icons/icon-128x128.png" />
            </q-avatar>
          </q-btn>
        </div>

        <q-item
          clickable
          v-ripple
        >
          <q-item-section side>
            <q-avatar
              rounded
              size="48px"
            >
              <img src="https://cdn.quasar.dev/img/avatar.png" />
              <q-badge
                floating
                color="teal"
              >new</q-badge>
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label>Mary</q-item-label>
            <q-item-label caption>2 new messages</q-item-label>
          </q-item-section>
          <q-item-section side>
            3 min ago
          </q-item-section>
        </q-item>

        <q-banner
          rounded
          class="bg-primary text-white"
        >
          <template v-slot:avatar>
            <q-avatar
              icon="signal_wifi_off"
              color="white"
              text-color="primary"
            />
          </template>

          You have lost connection to the internet. This app is offline.

          <template v-slot:action>
            <q-btn
              flat
              color="white"
              label="Turn ON Wifi"
            />
          </template>
        </q-banner>
      </div>
    </q-card>
    <q-card>
      <div class="q-pa-md q-gutter-md">
        <q-badge
          outline
          color="primary"
          label="Outline"
        />
        <q-badge
          outline
          color="orange"
          label="Outline"
        />
        <q-badge
          outline
          color="secondary"
          label="Outline"
        />

        <div class="text-h4">
          Text
          <q-badge
            outline
            align="middle"
            color="teal"
          >
            v1.0.0
          </q-badge>
        </div>
      </div>
      <q-card-actions>
        <div class="q-pa-md q-gutter-md">
          <q-btn color="teal">
            <q-icon
              left
              size="3em"
              name="map"
            />
            <div>Label</div>
          </q-btn>

          <q-btn round>
            <q-avatar size="42px">
              <img src="https://cdn.quasar.dev/img/avatar2.jpg">
            </q-avatar>
          </q-btn>

          <q-btn
            color="indigo"
            no-caps
          >
            Multiline<br>Button
          </q-btn>

          <q-btn
            color="deep-orange"
            push
          >
            <div class="row items-center no-wrap">
              <q-icon
                left
                name="map"
              />
              <div class="text-center">
                Custom<br>Content
              </div>
            </div>
          </q-btn>
          <div class="q-pa-md">
            <q-btn
              color="black"
              class="full-width"
              label="Full-width"
            />

            <q-btn
              color="primary"
              label="With Tooltip"
              class="q-mt-md"
            >
              <q-tooltip
                anchor="center right"
                self="center left"
                :offset="[10, 10]"
                transition-show="scale"
                transition-hide="scale"
                content-class="bg-accent"
              >I'm a tooltip</q-tooltip>
            </q-btn>
          </div>
        </div>
      </q-card-actions>
    </q-card>
    <div class="q-pa-md q-gutter-sm">
      <q-banner
        rounded
        class="bg-purple-8 text-white"
      >

        We can't find your saved recipes until you sign in.

        <template v-slot:action>
          <q-btn
            flat
            color="white"
            label="Continue as a Guest"
          />
          <q-btn
            flat
            color="white"
            label="Sign in"
          />
        </template>
      </q-banner>
    </div>
    <div class="q-pa-md">
      <q-layout
        view="lHh lpr lFf"
        container
        style="height: 400px"
        class="shadow-2 rounded-borders"
      >
        <q-header elevated>
          <q-bar>
            <q-icon name="laptop_chromebook" />
            <div>Google Chrome</div>

            <q-space />

            <q-btn
              dense
              flat
              icon="minimize"
            />
            <q-btn
              dense
              flat
              icon="crop_square"
            />
            <q-btn
              dense
              flat
              icon="close"
            />
          </q-bar>

          <div class="q-pa-sm q-pl-md row items-center">
            <div class="cursor-pointer non-selectable">
              File
              <q-menu>
                <q-list
                  dense
                  style="min-width: 100px"
                >
                  <q-item
                    clickable
                    v-close-popup
                  >
                    <q-item-section>Open...</q-item-section>
                  </q-item>
                  <q-item
                    clickable
                    v-close-popup
                  >
                    <q-item-section>New</q-item-section>
                  </q-item>

                  <q-separator />

                  <q-item clickable>
                    <q-item-section>Preferences</q-item-section>
                    <q-item-section side>
                      <q-icon name="keyboard_arrow_right" />
                    </q-item-section>

                    <q-menu
                      anchor="top right"
                      self="top left"
                    >
                      <q-list>
                        <q-item
                          v-for="n in 3"
                          :key="n"
                          dense
                          clickable
                        >
                          <q-item-section>Submenu Label</q-item-section>
                          <q-item-section side>
                            <q-icon name="keyboard_arrow_right" />
                          </q-item-section>
                          <q-menu
                            auto-close
                            anchor="top right"
                            self="top left"
                          >
                            <q-list>
                              <q-item
                                v-for="n in 3"
                                :key="n"
                                dense
                                clickable
                              >
                                <q-item-section>3rd level Label</q-item-section>
                              </q-item>
                            </q-list>
                          </q-menu>
                        </q-item>
                      </q-list>
                    </q-menu>
                  </q-item>

                  <q-separator />

                  <q-item
                    clickable
                    v-close-popup
                  >
                    <q-item-section>Quit</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </div>

            <div class="q-ml-md cursor-pointer non-selectable">
              Edit
              <q-menu auto-close>
                <q-list
                  dense
                  style="min-width: 100px"
                >
                  <q-item clickable>
                    <q-item-section>Cut</q-item-section>
                  </q-item>
                  <q-item clickable>
                    <q-item-section>Copy</q-item-section>
                  </q-item>
                  <q-item clickable>
                    <q-item-section>Paste</q-item-section>
                  </q-item>
                  <q-separator />
                  <q-item clickable>
                    <q-item-section>Select All</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </div>
          </div>
        </q-header>

        <q-page-container>
          <q-page class="q-pa-md">
            <p
              v-for="n in 15"
              :key="n"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil praesentium molestias a adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores pariatur eos numquam rerum delectus commodi perferendis voluptate?
            </p>
          </q-page>
        </q-page-container>
      </q-layout>
    </div>
    <div class="q-pa-md q-gutter-sm">
      <q-breadcrumbs gutter="none">
        <q-breadcrumbs-el label="Home" />
        <q-breadcrumbs-el label="Components" />
        <q-breadcrumbs-el label="Breadcrumbs" />
      </q-breadcrumbs>

      <q-separator />

      <q-breadcrumbs gutter="xs">
        <q-breadcrumbs-el label="Home" />
        <q-breadcrumbs-el label="Components" />
        <q-breadcrumbs-el label="Breadcrumbs" />
      </q-breadcrumbs>

      <q-separator />

      <q-breadcrumbs gutter="sm">
        <q-breadcrumbs-el label="Home" />
        <q-breadcrumbs-el label="Components" />
        <q-breadcrumbs-el label="Breadcrumbs" />
      </q-breadcrumbs>

      <q-separator />

      <q-breadcrumbs gutter="md">
        <q-breadcrumbs-el label="Home" />
        <q-breadcrumbs-el label="Components" />
        <q-breadcrumbs-el label="Breadcrumbs" />
      </q-breadcrumbs>

      <q-separator />

      <q-breadcrumbs gutter="lg">
        <q-breadcrumbs-el label="Home" />
        <q-breadcrumbs-el label="Components" />
        <q-breadcrumbs-el label="Breadcrumbs" />
      </q-breadcrumbs>

      <q-separator />

      <q-breadcrumbs gutter="xl">
        <q-breadcrumbs-el label="Home" />
        <q-breadcrumbs-el label="Components" />
        <q-breadcrumbs-el label="Breadcrumbs" />
      </q-breadcrumbs>
    </div>
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card class="my-card">
        <q-card-section>
          {{ lorem }}
        </q-card-section>
      </q-card>

      <q-card
        class="my-card text-white"
        style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
      >
        <q-card-section>
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ lorem }}
        </q-card-section>
      </q-card>

      <q-card
        dark
        bordered
        class="bg-grey-9 my-card"
      >
        <q-card-section>
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>

        <q-separator
          dark
          inset
        />

        <q-card-section>
          {{ lorem }}
        </q-card-section>
      </q-card>

      <q-card
        flat
        bordered
        class="my-card"
      >
        <q-card-section>
          <div class="text-h6">Our Changing Planet</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </q-card-section>

        <q-separator inset />

        <q-card-section>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </q-card-section>
      </q-card>
    </div>
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card class="my-card bg-secondary text-white">
        <q-card-section>
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>

        <q-card-section>
          {{ lorem }}
        </q-card-section>

        <q-separator dark />

        <q-card-actions>
          <q-btn flat>Action 1</q-btn>
          <q-btn flat>Action 2</q-btn>
        </q-card-actions>
      </q-card>

      <q-card class="my-card">
        <q-card-section>
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>

        <q-separator />

        <q-card-actions vertical>
          <q-btn flat>Action 1</q-btn>
          <q-btn flat>Action 2</q-btn>
        </q-card-actions>
      </q-card>

      <q-card class="my-card bg-purple text-white">
        <q-card-section>
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>

        <q-card-actions>
          <q-btn flat>Action 1</q-btn>
          <q-btn flat>Action 2</q-btn>
        </q-card-actions>
      </q-card>

      <q-card
        flat
        bordered
        class="my-card bg-grey-1"
      >
        <q-card-section>
          <div class="row items-center no-wrap">
            <div class="col">
              <div class="text-h6">Our Planet</div>
              <div class="text-subtitle2">by John Doe</div>
            </div>

            <div class="col-auto">
              <q-btn
                color="grey-7"
                round
                flat
                icon="more_vert"
              >
                <q-menu
                  cover
                  auto-close
                >
                  <q-list>
                    <q-item clickable>
                      <q-item-section>Remove Card</q-item-section>
                    </q-item>
                    <q-item clickable>
                      <q-item-section>Send Feedback</q-item-section>
                    </q-item>
                    <q-item clickable>
                      <q-item-section>Share</q-item-section>
                    </q-item>
                  </q-list>
                </q-menu>
              </q-btn>
            </div>
          </div>
        </q-card-section>

        <q-card-section>
          {{ lorem }}
        </q-card-section>

        <q-separator />

        <q-card-actions>
          <q-btn flat>Action 1</q-btn>
          <q-btn flat>Action 2</q-btn>
        </q-card-actions>
      </q-card>
    </div>
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
    <div class="q-pa-md">
      <q-card class="my-card">
        <q-card-section>
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>

        <q-tabs
          v-model="tab"
          class="text-teal"
        >
          <q-tab
            label="Tab one"
            name="one"
          />
          <q-tab
            label="Tab two"
            name="two"
          />
        </q-tabs>

        <q-separator />

        <q-tab-panels
          v-model="tab"
          animated
        >
          <q-tab-panel name="one">
            The QCard component is a great way to display important pieces of grouped content.
          </q-tab-panel>

          <q-tab-panel name="two">
            With so much content to display at once, and often so little screen real-estate,
            Cards have fast become the design pattern of choice for many companies, including
            the likes of Google and Twitter.
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
    <div class="q-pa-md">
      <q-carousel
        v-model="slide"
        transition-prev="slide-right"
        transition-next="slide-left"
        swipeable
        animated
        control-color="primary"
        navigation
        padding
        arrows
        height="300px"
        class="bg-grey-1 shadow-2 rounded-borders"
      >
        <q-carousel-slide
          :name="1"
          class="column no-wrap"
        >
          <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
            <q-img
              class="rounded-borders col-6 full-height"
              src="https://cdn.quasar.dev/img/mountains.jpg"
            />
            <q-img
              class="rounded-borders col-6 full-height"
              src="https://cdn.quasar.dev/img/parallax1.jpg"
            />
          </div>
        </q-carousel-slide>
        <q-carousel-slide
          :name="2"
          class="column no-wrap"
        >
          <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
            <q-img
              class="rounded-borders col-6 full-height"
              src="https://cdn.quasar.dev/img/parallax2.jpg"
            />
            <q-img
              class="rounded-borders col-6 full-height"
              src="https://cdn.quasar.dev/img/quasar.jpg"
            />
          </div>
        </q-carousel-slide>
        <q-carousel-slide
          :name="3"
          class="column no-wrap"
        >
          <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
            <q-img
              class="rounded-borders col-6 full-height"
              src="https://cdn.quasar.dev/img/cat.jpg"
            />
            <q-img
              class="rounded-borders col-6 full-height"
              src="https://cdn.quasar.dev/img/linux-avatar.png"
            />
          </div>
        </q-carousel-slide>
        <q-carousel-slide
          :name="4"
          class="column no-wrap"
        >
          <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
            <q-img
              class="rounded-borders col-6 full-height"
              src="https://cdn.quasar.dev/img/material.png"
            />
            <q-img
              class="rounded-borders col-6 full-height"
              src="https://cdn.quasar.dev/img/donuts.png"
            />
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
    <div class="q-pa-md">
      <q-carousel
        v-model="slide"
        transition-prev="slide-right"
        transition-next="slide-left"
        swipeable
        animated
        control-color="primary"
        navigation
        padding
        arrows
        height="300px"
        class="bg-grey-1 shadow-2 rounded-borders"
      >
        <q-carousel-slide
          :name="1"
          class="column no-wrap"
        >
          <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
            <q-img
              class="rounded-borders col-6 full-height"
              src="https://cdn.quasar.dev/img/mountains.jpg"
            />
            <q-img
              class="rounded-borders col-6 full-height"
              src="https://cdn.quasar.dev/img/parallax1.jpg"
            />
          </div>
        </q-carousel-slide>
        <q-carousel-slide
          :name="2"
          class="column no-wrap"
        >
          <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
            <q-img
              class="rounded-borders col-6 full-height"
              src="https://cdn.quasar.dev/img/parallax2.jpg"
            />
            <q-img
              class="rounded-borders col-6 full-height"
              src="https://cdn.quasar.dev/img/quasar.jpg"
            />
          </div>
        </q-carousel-slide>
        <q-carousel-slide
          :name="3"
          class="column no-wrap"
        >
          <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
            <q-img
              class="rounded-borders col-6 full-height"
              src="https://cdn.quasar.dev/img/cat.jpg"
            />
            <q-img
              class="rounded-borders col-6 full-height"
              src="https://cdn.quasar.dev/img/linux-avatar.png"
            />
          </div>
        </q-carousel-slide>
        <q-carousel-slide
          :name="4"
          class="column no-wrap"
        >
          <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
            <q-img
              class="rounded-borders col-6 full-height"
              src="https://cdn.quasar.dev/img/material.png"
            />
            <q-img
              class="rounded-borders col-6 full-height"
              src="https://cdn.quasar.dev/img/donuts.png"
            />
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
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
