<template>
  <div>
    <NavBar />
    <FrameOne />
    <FrameTwo />
    <Mission />
    <Bulletin />
    <Services />
  </div>
</template>

<script>
import FrameOne from '~/components/FrameOne'
import Bulletin from '~/components/Bulletin'
import Services from '~/components/Services'
import Mission from '~/components/Mission'
import FrameTwo from '~/components/FrameTwo'
export default {
  components: {
    FrameOne,
    Bulletin,
    Services,
    Mission,
    FrameTwo
  },
  mounted() {
    this.$webpSupport()
    // this.$delayHeavyElements()
    // this.handleInitalScrollPosition()
  },
  updated() {}
}
</script>
