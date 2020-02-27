<template>
	<nav class="navbar is-spaced" role="navigation" aria-label="main navigation">
		<div class="navbar-brand">
			<a class="navbar-item" href="/">
				<picture>
					<source srcset="~/assets/img/logo.png" type="image/png" />
					<source srcset="~/assets/img/logo.png.webp" type="image/webp" />
					<img srcset="~/assets/img/logo.png" type="image/png" />
				</picture>
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
			<div class="navbar-start">
				<a class="navbar-item">
					Home
				</a>

				<a class="navbar-item">
					Documentation
				</a>

				<div class="navbar-item has-dropdown is-hoverable">
					<a class="navbar-link">
						More
					</a>

					<div class="navbar-dropdown">
						<a class="navbar-item">
							About
						</a>
						<a class="navbar-item">
							Jobs
						</a>
						<a class="navbar-item">
							Contact
						</a>
						<hr class="navbar-divider" />
						<a class="navbar-item">
							Report an issue
						</a>
					</div>
				</div>
			</div>

			<div class="navbar-end">
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
	name: 'NavBar',
	data() {
		return {}
	},
	mounted() {}
}
</script>

<style lang="css" scoped></style>
