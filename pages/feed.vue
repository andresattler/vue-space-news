<template>
  <div class="launch-feed">
    <LaunchCard v-for="launch in launches" :launch="launch" :key="launch.id" />
    <button @click="fetchMore">Load next</button>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import LaunchCard from '@/components/LaunchCard.vue'
import 'vue-apollo'

import launchesQuery from '~/apollo/queries/launches.graphql'
import { LaunchesQuery } from '~/types/types'

@Component({
  components: {
    LaunchCard,
  },
  apollo: {
    launches: {
      query: launchesQuery,
      variables: {
        offset: 0,
      },
    },
  },
})
export default class LaunchFeed extends Vue {
  launches: LaunchesQuery['launches'] = []
  page: number = 0
  fetchMore() {
    this.page++
    this.$apollo.queries.launches.fetchMore({
      variables: {
        offset: this.page * 10,
      },
      updateQuery(
        previousResult: LaunchesQuery,
        { fetchMoreResult }
      ): LaunchesQuery {
        return {
          ...previousResult,
          launches: [...previousResult.launches, ...fetchMoreResult.launches],
        }
      },
    })
  }
}
</script>

<style lang="scss" scoped>
.launch-feed {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
