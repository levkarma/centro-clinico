<template>
	<section
		class="hero is-fullheight is-relative has-overflow-hidden"
		id="frame-one"
	>
		<div class="zoom-background zoomed"></div>
		<div class="background-modifier"></div>
		<div class="hero-body">
			<div class="container content has-text-centered">
				<h1 class="has-text-white">
					{{ $t("clinicName") }}
				</h1>
				<nuxt-link
					:to="localePath('/locations')"
					class="button is-large"
				>
					{{ $t("scheduleAppointment") }}
				</nuxt-link>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: "FrameOne",

	data() {
		return {};
	},
	mounted() {
		window.onload = () =>
			document
				.querySelector("#frame-one .zoom-background")
				.classList.remove("zoomed");
	}
};
</script>

<style lang="css" scoped></style>
