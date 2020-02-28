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
		<section class="section">
			<div class="columns is-multiline">
				<div v-for="service in $t('services-list')" class="column is-one-third">
					<div class="box has-text-centered service-box has-text-white">
						<div class="is-size-5">{{ service }}</div>
					</div>
				</div>
			</div>
		</section>
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
