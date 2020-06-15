<template>
  <div class="launch-card">
    <img
      v-if="launch.links.flickr_images[0] || launch.links.mission_patch"
      class="header-image"
      :src="launch.links.flickr_images[0] || launch.links.mission_patch"
      :alt="launch.mission_name"
    />
    <div class="title">
      <i class="icon"></i>
      <h3>{{ launch.mission_name }}</h3>
      <div class="tags"></div>
    </div>
    <p>{{ launchDate }}</p>
    <p class="intro">{{ launch.details }}</p>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { Launch } from '~/types/types'

@Component
export default class extends Vue {
  @Prop() readonly launch!: Launch
  get launchDate() {
    return new Intl.DateTimeFormat().format(
      new Date(this.launch.launch_date_utc)
    )
  }
}
</script>

<style lang="scss">
@import '~/styles/mixins';

.launch-card {
  @include shadow;
  height: 300px;
  width: 500px;
  margin: 8px;
  padding: 8px;
}
.header-image {
  width: 100%;
  height: 150px;
  object-fit: contain;
  background: black;
}
.intro {
  overflow: hidden;
  // multiline elipis see https://css-tricks.com/line-clampin/#weird-webkit-flexbox-way
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
</style>
