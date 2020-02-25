import Vue from 'vue'
import supportsWebP from 'supports-webp'
const WebPSupport = {
	install: function(Vue, options) {
		Vue.prototype.$webpSupport = function(methodOptions) {
			supportsWebP.then(supported => {
				if (supported) {
					document.querySelector('html').classList.add('webp')
				} else {
					document.querySelector('html').classList.add('no-webp')
				}
			})
		}
	}
}
Vue.use(WebPSupport)
