<template>
	<section
		class="hero is-fullheight is-relative has-overflow-hidden"
		id="frame-one"
	>
		<div class="zoom-background zoomed"></div>
		<div class="background-modifier"></div>
		<div class="hero-body">
			<div class="columns" style="width: 100%;">
				<div class="column is-half is-relative">
					<h1 class="has-text-white" v-html="$t('clinicName[0]')"></h1>
					<h2 class="has-text-white" v-html="$t('clinicName[1]')"></h2>
					<div class="is-hidden-mobile">
						<nuxt-link
							:to="localePath('/locations')"
							class="button is-medium is-rounded is-dark"
						>
							{{ $t('scheduleAppointment') }}
						</nuxt-link>
						<button class="button is-medium is-rounded is-light">
							Patient Portal&nbsp<span class="is-size-7">(coming soon)</span>
						</button>
					</div>
					<div class="is-hidden-tablet">
						<nuxt-link
							:to="localePath('/locations')"
							class="button is-rounded is-dark"
						>
							{{ $t('scheduleAppointment') }}
						</nuxt-link>
						<button class="button is-rounded is-light">
							Patient Portal&nbsp<span class="is-size-7">(coming soon)</span>
						</button>
					</div>
				</div>
				<div class="column is-half"></div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'FrameOne',

	data() {
		return {}
	},
	mounted() {
		window.onload = () =>
			document
				.querySelector('#frame-one .zoom-background')
				.classList.remove('zoomed')
	}
}
</script>

<style lang="css" scoped></style>
