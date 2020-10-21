<template>
	<div>
		<img lazy-load alt="Vue logo" data-src="./logo.png" />
		<img lazy-load alt="Vue logo" data-src="./logo2.png" />
		<img lazy-load alt="Vue logo" data-src="./logo3.png" />
		<img lazy-load alt="Vue logo" data-src="./logo4.png" />
		<img lazy-load alt="Vue logo" data-src="./logo5.png" />
		<img lazy-load alt="Vue logo" data-src="./logo6.png" />
		<img lazy-load alt="Vue logo" data-src="./logo7.png" />
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "App",
	mounted() {
		const images = document.querySelectorAll("[lazy-load]");

		images.forEach(el => {
			const imageObserver = new IntersectionObserver(entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						const lazyImage = entry.target as HTMLImageElement;
						if (lazyImage.dataset.src) {
							lazyImage.src = lazyImage.dataset.src;
							imageObserver.unobserve(lazyImage);
						}
					}
				});
			});
			imageObserver.observe(el);
		});
	}
});
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
div {
	display: flex;
	flex-direction: column;
}
img {
	padding: 50vh 0;
	width: 20%;
	margin: 0 auto;
	height: auto;
}
</style>
