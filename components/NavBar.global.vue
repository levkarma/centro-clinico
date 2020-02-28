<template>
	<nav
		class="navbar is-spaced"
		role="navigation"
		aria-label="main navigation"
	>
		<div class="navbar-brand">
			<a class="navbar-item" href="/">
				<span class="icon is-large"
					><i class="fas fa-3x fa-clinic-medical"></i
				></span>
				<h1 class="is-size-2">
					Centro Clinico
				</h1>
				<!-- <picture>
					<source srcset="~/assets/img/logo.png" type="image/png" />
					<source srcset="~/assets/img/logo.png.webp" type="image/webp" />
					<img srcset="~/assets/img/logo.png" type="image/png" />
				</picture> -->
			</a>

			<a
				role="button"
				class="navbar-burger burger"
				aria-label="menu"
				aria-expanded="false"
				data-target="navbarBasicExample"
			>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
			</a>
		</div>

		<div id="navbarBasicExample" class="navbar-menu">
			<div class="navbar-end">
				<nuxt-link to="/" class="navbar-item">
					{{ $t("header.home") }}
				</nuxt-link>
				<nuxt-link
					class="navbar-item"
					:to="{ path: '/', hash: 'services' }"
				>
					{{ $t("services") }}
				</nuxt-link>

				<nuxt-link class="navbar-item" to="/locations">
					{{ $t("header.locations") }}
				</nuxt-link>
				<nuxt-link class="navbar-item" to="/faqs">
					{{ $t("header.faqs") }}
				</nuxt-link>
				<div class="navbar-item">
					<div class="buttons">
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
	name: "NavBar",
	data() {
		return {};
	},
	mounted() {}
};
</script>

<style lang="css" scoped></style>
