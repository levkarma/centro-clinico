<template>
  <div>
    <NavBar />
    <FrameOne />
  </div>
</template>

<script>
import FrameOne from '~/components/FrameOne'
export default {
  components: {
    FrameOne
  },
  mounted() {
    this.$webpSupport()
    // this.$delayHeavyElements()
    // this.handleInitalScrollPosition()
  }
}
</script>
