<template>
  <section id="services">
    <section
      class="section is-relative is-medium has-background-image"
      id="services-header"
    >
      <div class="background-modifier"></div>
      <div class="content is-relative">
        <h1 class="has-text-white has-text-centered">
          {{ $t('services') }}
        </h1>
      </div>
    </section>
    <section class="section" id="services-list">
      <div
        v-for="service in $t('services-list')"
        :key="service"
        data-aos="fade-in"
        data-aos-offset="-50"
      >
        <h1
          class="is-size-1-tablet is-size-4-mobile has-text-centered has-text-white"
        >
          {{ service }}
        </h1>
      </div>
    </section>
    <!-- 		<section class="section">
			<div class="columns is-multiline is-vcentered">
				<div v-for="service in $t('services-list')" class="column is-one-third">
					<h1 class="is-size-1 has-text-centered has-text-white">
						{{ service }}
					</h1>
				</div>
			</div>
		</section> -->
  </section>
</template>

<script>
export default {
  name: 'Services',

  data() {
    return {}
  }
}
</script>

<style lang="css" scoped></style>
