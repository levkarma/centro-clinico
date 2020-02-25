<template>
	<section
		class="hero is-fullheight is-relative has-overflow-hidden"
		id="frame-one"
	>
		<div class="zoom-background zoomed"></div>
		<div class="hero-body">
			<div class="container">
				<h1 class="title">
					Fullheight title
				</h1>
				<h2 class="subtitle">
					Fullheight subtitle
				</h2>
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
