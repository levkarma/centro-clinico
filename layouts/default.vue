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
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
