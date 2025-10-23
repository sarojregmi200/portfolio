export function safeEncode(s: string) {
	if (typeof s !== 'string') {
		console.error("Safe Encode can only receive string as it's input");
		return;
	}
	return s.trim().replaceAll(' ', '_');
}
