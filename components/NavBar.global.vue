<template>
	<nav class="navbar is-spaced" role="navigation" aria-label="main navigation">
		<div class="navbar-brand">
			<nuxt-link class="navbar-item" :to="localePath('/')">
				<span class="icon is-medium"
					><i class="fas fa-2x fa-clinic-medical"></i
				></span>
				<h1 class="is-size-3-tablet is-size-4-mobile">
					Centro Clinico
				</h1>
				<!-- <picture>
					<source srcset="~/assets/img/logo.png" type="image/png" />
					<source srcset="~/assets/img/logo.png.webp" type="image/webp" />
					<img srcset="~/assets/img/logo.png" type="image/png" />
				</picture> -->
			</nuxt-link>

			<a
				role="button"
				class="navbar-burger burger"
				:class="{ 'is-active': mobileMenuActive }"
				aria-label="menu"
				aria-expanded="false"
				data-target="navbarBasicExample"
				@click.stop="$emit('openMobileMenu')"
			>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
			</a>
		</div>

		<div
			id="navbar"
			class="navbar-menu"
			:class="{ 'is-active': mobileMenuActive }"
		>
			<div class="navbar-end">
				<nuxt-link :to="localePath('/')" class="navbar-item">
					{{ $t('header.home') }}
				</nuxt-link>
				<nuxt-link class="navbar-item" :to="localePath('/#services')">
					{{ $t('services') }}
				</nuxt-link>

				<nuxt-link class="navbar-item" :to="localePath('/locations')">
					{{ $t('header.locations') }}
				</nuxt-link>
				<nuxt-link class="navbar-item" :to="localePath('/faqs')">
					{{ $t('header.faqs') }}
				</nuxt-link>

				<div class="navbar-item">
					<div class="buttons">
						<a
							target="_blank"
							href="http://20836.portal.athenahealth.com"
							class="button is-dark"
						>
							{{ $t('patientPortal') }}
						</a>
						<a
							v-if="this.$i18n.locale === 'en'"
							class="button is-light"
							:href="switchLocalePath('es')"
						>
							Espa&ntildeol
						</a>
						<a
							v-if="this.$i18n.locale === 'es'"
							class="button is-light"
							:href="switchLocalePath('en')"
						>
							English
						</a>
					</div>
				</div>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
	name: 'NavBar',
	props: ['mobileMenuActive'],
	data() {
		return {}
	},
	mounted() {}
}
</script>

<style lang="css" scoped></style>
