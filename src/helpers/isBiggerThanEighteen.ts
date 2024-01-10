export function isBiggerThanEighteen(date: Date) {
	return new Date(date.getFullYear() + 18, date.getMonth() - 1, date.getDay()) <= new Date()
}