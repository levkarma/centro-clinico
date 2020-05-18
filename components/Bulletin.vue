<template>
	<section class="section">
		<div class="columns is-centered">
			<div class="column is-half">
				<div class="content">
					<h1>{{ $t('bulletin') }}</h1>
					<a
						class="twitter-timeline"
						data-height="500"
						href="https://twitter.com/CentroClinicoNJ?ref_src=twsrc%5Etfw"
						>Tweets by CentroClinicoNJ</a
					>
					<script
						async
						defer
						src="https://platform.twitter.com/widgets.js"
						charset="utf-8"
					></script>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'Bulletin',

	data() {
		return {}
	}
}
</script>

<style lang="css" scoped></style>
