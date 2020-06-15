<template>
  <div class="container">
    <article>
      <h1>title</h1>
      <p class="body">some text stay tuned for real news</p>
      <p v-if="launchNext">{{ launchNext.details }}</p>
    </article>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
// TODO needs to be imported somewhere so the types for Vue get patched
// why is the nuxt apollo module not solving this?
import 'vue-apollo'

import nextLaunchQuery from '~/apollo/queries/nextLaunch.graphql'
import { NextLaunchQuery } from '~/types/types'

@Component({
  apollo: {
    launchNext: {
      query: nextLaunchQuery,
    },
  },
})
export default class NextLaunch extends Vue {
  launchNext: NextLaunchQuery['launchNext'] | null = null
}
</script>

<style scoped></style>
