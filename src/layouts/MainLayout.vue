<template>
  <q-layout view="lHh Lpr lFf">
    <q-toolbar class="bg-purple text-white">
      <q-btn
        flat
        round
        dense
        icon="assignment_ind"
      />
      <q-toolbar-title>
        Toolbar
      </q-toolbar-title>
      <q-btn
        flat
        round
        dense
        icon="apps"
        class="q-mr-xs"
      />
      <q-btn
        flat
        round
        dense
        icon="more_vert"
      />
    </q-toolbar>
    <template>
      <div class="q-pa-md q-gutter-sm">
        <q-btn
          label="Maximized"
          color="primary"
          @click="dialog = true"
        />

        <q-dialog
          v-model="dialog"
          persistent
          :maximized="maximizedToggle"
          transition-show="slide-up"
          transition-hide="slide-down"
        >
          <q-card class="bg-primary text-white">
            <q-bar>
              <q-space />

              <q-btn
                dense
                flat
                icon="minimize"
                @click="maximizedToggle = false"
                :disable="!maximizedToggle"
              >
                <q-tooltip
                  v-if="maximizedToggle"
                  content-class="bg-white text-primary"
                >Minimize</q-tooltip>
              </q-btn>
              <q-btn
                dense
                flat
                icon="crop_square"
                @click="maximizedToggle = true"
                :disable="maximizedToggle"
              >
                <q-tooltip
                  v-if="!maximizedToggle"
                  content-class="bg-white text-primary"
                >Maximize</q-tooltip>
              </q-btn>
              <q-btn
                dense
                flat
                icon="close"
                v-close-popup
              >
                <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
              </q-btn>
            </q-bar>

            <q-card-section>
              <xterm></xterm>
            </q-card-section>
          </q-card>
        </q-dialog>
      </div>
    </template>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink'
import XTerm from 'components/Xterm'

export default {
  name: 'MainLayout',

  components: {
    EssentialLink,
    XTerm
  },
  meta: {
    title: 'Quasar Hello World'
  },
  data () {
    return {
      dialog: false,
      maximizedToggle: true,
      leftDrawerOpen: false,
      essentialLinks: [
        {
          title: 'Docs',
          caption: 'quasar.dev',
          icon: 'school',
          link: 'https://quasar.dev'
        },
        {
          title: 'Github',
          caption: 'github.com/quasarframework',
          icon: 'code',
          link: 'https://github.com/quasarframework'
        },
        {
          title: 'Discord Chat Channel',
          caption: 'chat.quasar.dev',
          icon: 'chat',
          link: 'https://chat.quasar.dev'
        },
        {
          title: 'Forum',
          caption: 'forum.quasar.dev',
          icon: 'record_voice_over',
          link: 'https://forum.quasar.dev'
        },
        {
          title: 'Twitter',
          caption: '@quasarframework',
          icon: 'rss_feed',
          link: 'https://twitter.quasar.dev'
        },
        {
          title: 'Facebook',
          caption: '@QuasarFramework',
          icon: 'public',
          link: 'https://facebook.quasar.dev'
        },
        {
          title: 'Quasar Awesome',
          caption: 'Community Quasar projects',
          icon: 'favorite',
          link: 'https://awesome.quasar.dev'
        }
      ]
    }
  }
}
</script>
