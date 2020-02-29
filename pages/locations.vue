<template>
	<div id="locations" class="section has-background-light">
		<h1 class="is-size-1 has-text-centered">
			{{ $t("header.locations") }}
		</h1>
		<div
			class="columns is-vcentered is-centered is-reversed-mobile"
			data-aos="fade-down"
		>
			<div class="column is-half content ">
				<h1 class="is-size-3">{{ $t("locations[0].name") }}</h1>
				<h2 class="is-size-4">{{ $t("locations[0].address") }}</h2>
				<p>{{ $t("locations[0].details") }}</p>
				<p>{{ $t("locations[0].hours") }}</p>
				<p>{{ $t("locations[0].phone") }}</p>
				<div class="box provider-blurb">
					<p class="is-size-5">{{ $t("locations[0].staff.name") }}</p>
					<p>{{ $t("locations[0].staff.blurb") }}</p>
				</div>
			</div>
			<div class="column is-half">
				<figure class="image is-1by1">
					<iframe
						class="has-ratio"
						width="600"
						height="450"
						frameborder="0"
						style="border:0"
						src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJDXlotcH-wokRHnLT8qvgBGE&key=AIzaSyB2dyLWHslxvCoUQUVdCxoU-brloQGFKh4"
						allowfullscreen
					></iframe>
				</figure>
			</div>
		</div>
		<div class="columns is-vcentered is-centered" data-aos="fade-down">
			<div class="column is-half">
				<figure class="image is-1by1">
					<iframe
						class="has-ratio"
						width="600"
						height="450"
						frameborder="0"
						style="border:0"
						src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJHxVdNyr8wokRApTTvrsoYt4&key=AIzaSyB2dyLWHslxvCoUQUVdCxoU-brloQGFKh4"
						allowfullscreen
					></iframe>
				</figure>
			</div>
			<div class="column is-half content">
				<h1 class="is-size-3">{{ $t("locations[1].name") }}</h1>
				<h2 class="is-size-4">{{ $t("locations[1].address") }}</h2>
				<p>{{ $t("locations[1].details") }}</p>
				<p>{{ $t("locations[1].hours") }}</p>
				<p>{{ $t("locations[1].phone") }}</p>
				<div class="box provider-blurb">
					<p class="is-size-5">{{ $t("locations[1].staff.name") }}</p>
					<p>{{ $t("locations[1].staff.blurb") }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "locations",

	data() {
		return {};
	}
};
</script>

<style lang="css" scoped></style>
