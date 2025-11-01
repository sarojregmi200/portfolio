export const prettyDate = (date: Date): string => {
	return new Intl.DateTimeFormat('en-US', {
		year: 'numeric',
		month: 'short',
		day: '2-digit',
		weekday: 'short'
	}).format(date);
};
