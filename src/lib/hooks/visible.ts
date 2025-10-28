export function onVisiblityChange(
	callback: (isIntersecting: boolean, entry: IntersectionObserverEntry) => void,
	options?: IntersectionObserverInit
) {
	return (node: HTMLElement) => {
		const observer = new IntersectionObserver(([entry]) => {
			callback(entry.isIntersecting, entry);
		}, options);

		observer.observe(node);

		return () => {
				observer.unobserve(node)
		};
	};
}
