<template>
  <section class="section is-medium has-text-centered" id="frame-two">
    <div class="columns is-vcentered">
      <div class="column is-half">
        <figure class="image is-4by3">
          <picture>
            <source
              src="~/assets/img/sizes/Ultra_Care-7.jpg-500.webp"
              type="image/webp"
            />
            <source
              src="~/assets/img/sizes/Ultra_Care-7-500.jpg"
              type="image/png"
            />
            <img src="~/assets/img/sizes/Ultra_Care-7-500.jpg" alt="" />
          </picture>
        </figure>
      </div>
      <div class="column is-half">
        <!-- 			<div style="width: 100px; margin: auto;">
				<figure class="image is-1by1" data-aos="fade-down">
					<picture>
						<source srcset="~/assets/img/logo.png" type="image/png" />
						<source srcset="~/assets/img/logo.png.webp" type="image/webp" />
						<img src="~/assets/img/logo.png" alt="" />
					</picture>
				</figure>
			</div> -->
        <h1 data-aos="fade-down" class="">
          {{ $t('frameTwoText') }}
        </h1>
        <nuxt-link :to="localePath('/locations')">
          <button
            class="button is-medium is-light is-rounded"
            data-aos="fade-down"
          >
            {{ $t('header.locations') }}
          </button>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FrameTwo',

  data() {
    return {}
  }
}
</script>

<style lang="css" scoped></style>
