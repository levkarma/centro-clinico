<template>
	<div id="important-banner">
		{{ $t('importantTopBanner') }}
	</div>
</template>

<script>
export default {
	name: 'important-banner',

	data() {
		return {}
	}
}
</script>

<style lang="scss" scoped>
#important-banner {
	height: 3rem;
	width: 100%;
	background-color: #b8336a;
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
	font-weight: 600;
	font-size: 1rem;
}
</style>
