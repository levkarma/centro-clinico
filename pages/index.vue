<template>
  <div>
    <FrameOne />
    <FrameTwo />
    <Mission />
    <Bulletin />
    <Services />
    <footer class="footer">
      <div class="columns has-text-centered-mobile">
        <div class="column is-half is-size-6 ">
          <h1>{{ $t('locations[0].name') }}</h1>
          <h2>{{ $t('locations[0].address') }}</h2>
          <p>{{ $t('locations[0].hours') }}</p>
          <p>{{ $t('locations[0].phone') }}</p>
        </div>
        <div class="column is-half is-size-6">
          <h1>{{ $t('locations[1].name') }}</h1>
          <h2>{{ $t('locations[1].address') }}</h2>
          <p>{{ $t('locations[1].hours') }}</p>
          <p>{{ $t('locations[1].phone') }}</p>
        </div>
      </div>
      <div class="content has-text-centered">
        <p><strong>Centro Clinico</strong></p>
        <p>&copy; 2020</p>
      </div>
    </footer>
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
