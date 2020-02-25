<template>
  <div>
    <NavBar />
    <FrameOne />
    <Bulletin />
    <Services />
  </div>
</template>

<script>
import FrameOne from '~/components/FrameOne'
import Bulletin from '~/components/Bulletin'
import Services from '~/components/Services'
export default {
  components: {
    FrameOne,
    Bulletin,
    Services
  },
  mounted() {
    this.$webpSupport()
    // this.$delayHeavyElements()
    // this.handleInitalScrollPosition()
  }
}
</script>
