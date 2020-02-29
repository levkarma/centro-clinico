<template>
	<section class="section is-medium has-text-centered">
		<div style="width: 100px; margin: auto;">
			<figure class="image is-1by1" data-aos="fade-down">
				<picture>
					<source srcset="~/assets/img/logo.png" type="image/png" />
					<source
						srcset="~/assets/img/logo.png.webp"
						type="image/webp"
					/>
					<img src="~/assets/img/logo.png" alt="" />
				</picture>
			</figure>
		</div>
		<h1 data-aos="fade-down" class="is-size-2">
			Book an appointment or walk in today!
		</h1>
		<nuxt-link
			:to="localePath('/locations')"
			data-aos="fade-down"
			class="button is-large is-light has-top-margin"
		>
			{{ $t("header.locations") }}
		</nuxt-link>
	</section>
</template>

<script>
export default {
	name: "FrameTwo",

	data() {
		return {};
	}
};
</script>

<style lang="css" scoped></style>
