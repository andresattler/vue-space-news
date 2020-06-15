<template>
  <div ref="sentinel" class="loading-sentinel"></div>
</template>

<script lang="ts">
import { Vue, Component, Ref } from 'vue-property-decorator'

@Component
export default class LoadingSentinel extends Vue {
  observer!: IntersectionObserver
  @Ref() readonly sentinel!: HTMLDivElement
  mounted() {
    this.observer = new IntersectionObserver((entry) => {
      const isIntersecting = entry[0].isIntersecting
      if (isIntersecting) {
        this.$emit('inView', isIntersecting)
      }
    })

    this.observer.observe(this.$refs.sentinel as HTMLDivElement) // TODO what is @Ref then doing?
  }
}
</script>

<style lang="scss" scoped>
.loading-sentinel {
  height: 1px;
}
</style>
