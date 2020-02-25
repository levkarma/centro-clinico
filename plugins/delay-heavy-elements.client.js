import Vue from 'vue'
const possibleClasses =
	'.lazy-youtube, .lazy-instagram, .lazy-google-maps, .lazy-picture, .lazy-image'
const intersectionObserverOptions = {
	rootMargin: getAdjustedRootMargin(300) + 'px'
}
const DelayHeavyElements = {
	install: function(Vue, options) {
		Vue.prototype.$delayHeavyElements = function(methodOptions) {
			const elements = document.querySelectorAll(possibleClasses)
			let observer = createObserver()
			elements.forEach(element => {
				observer.observe(element)
			})

			function createObserver() {
				return new IntersectionObserver(function(entries, observer) {
					entries.forEach(entry => {
						if (entry.isIntersecting) {
							loadElement(entry.target)
							observer.unobserve(entry.target)
						}
					})
				}, intersectionObserverOptions)
			}

			function loadElement(element) {
				if (element.classList.contains('lazy-instagram')) {
					document.getElementById(
						'instagram-embed-script'
					).src = document
						.getElementById('instagram-embed-script')
						.getAttribute('data-src')
				} else if (element.nodeName === 'IFRAME') {
					element.src = element.getAttribute('data-src')
				} else if (element.classList.contains('lazy-picture')) {
					element.parentNode.childNodes.forEach(node => {
						if (node.nodeName === 'IMG') {
							node.src = node.getAttribute('data-src')
						} else if (node.nodeName === 'SOURCE') {
							node.srcset = node.getAttribute('data-srcset')
						}
					})
				} else if (element.classList.contains('lazy-image')) {
					element.src = element.getAttribute('data-src')
				}
			}
		}
	}
}
Vue.use(DelayHeavyElements)

function getAdjustedRootMargin(desiredMarginPx) {
	const scrollPosition = document.scrollingElement.scrollTop
	const elementsWithBoundingClientRectInfo = addBoundingClientRectInfo(
		document.querySelectorAll(possibleClasses)
	)
	const windowHeight = window.innerHeight
	const elementsNotInViewport = elementsWithBoundingClientRectInfo.filter(
		element => {
			return element.boundingClientRect.top - windowHeight > 0
		}
	)
	const elementsNotInViewportInOrder = elementsNotInViewport.sort((a, b) => {
		return a.boundingClientRect.top - b.boundingClientRect.top
	})
	const highestElementNotInViewport = elementsNotInViewportInOrder[0]
	const bottomOfViewportToTopOfHighestElement =
		highestElementNotInViewport.boundingClientRect.top - windowHeight
	return bottomOfViewportToTopOfHighestElement - 1

	function addBoundingClientRectInfo(elements) {
		return Array.from(elements).map(element => {
			element.boundingClientRect = element.getBoundingClientRect()
			return element
		})
	}
}
