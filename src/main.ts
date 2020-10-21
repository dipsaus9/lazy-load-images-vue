import { createApp } from "vue";
import App from "./App.vue";

const LazyLoadDirective = {
	mounted(el: HTMLImageElement) {
		const imageObserver = new IntersectionObserver(entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					const lazyImage = entry.target as HTMLElement;
					if (lazyImage.dataset.src) {
						el.src = lazyImage.dataset.src;
						imageObserver.unobserve(el);
					}
				}
			});
		});
		imageObserver.observe(el);
	}
};

const app = createApp(App);

app.directive("lazy", LazyLoadDirective);
app.mount("#app");
