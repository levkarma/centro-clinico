<template>
	<section class="section has-background-image is-relative" id="mission">
		<div class="background-modifier"></div>
		<div class="columns">
			<div class="column is-two-fifths">
				<div class="content is-relative box">
					<h1 class="is-size-1">{{ $t('mission.header') }}</h1>
					<p>{{ $t('mission.text[0]') }}</p>
					<p>{{ $t('mission.text[1]') }}</p>
				</div>
			</div>
		</div>
		<!-- 		<div class="content box is-relative has-text-centered">
			<p>{{ $t('mission.text[0]') }}</p>
			<p>{{ $t('mission.text[1]') }}</p>
		</div> -->
	</section>
</template>

<script>
export default {
	name: 'Mission',

	data() {
		return {}
	}
}
</script>

<style lang="css" scoped></style>
