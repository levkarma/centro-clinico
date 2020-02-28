<template>
	<section id="faqs" class="section content">
		<h1>{{ $t('header.faqs') }}</h1>
		<div v-for="(question, index) in $t('faq')" class="has-top-margin">
			<h2 class="is-size-4" v-html="question.q"></h2>
			<p class="is-size-5" v-html="question.a"></p>
		</div>
	</section>
</template>

<script>
export default {
	name: 'faqs',

	data() {
		return {}
	}
}
</script>

<style lang="css" scoped></style>
