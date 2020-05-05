<template>
  <div @click="mobileMenuActive = false">
    <NavBar
      @openMobileMenu="mobileMenuActive = !mobileMenuActive"
      :mobileMenuActive="mobileMenuActive"
    />
    <nuxt />
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
        <a target="_blank" href="http://20836.portal.athenahealth.com">
          <button class="button mb">
            {{ $t('patientPortal') }}
          </button>
        </a>
        <p><strong>Centro Clinico</strong></p>
        <p>&copy; 2020</p>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      mobileMenuActive: false
    }
  },
  mounted() {}
}
</script>
<style>
.mb {
  margin-bottom: 2rem;
}
</style>
