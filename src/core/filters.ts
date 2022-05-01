export const filters = {
  date (value: any) {
    const date = new Date(value || '')
    return value
      ? date.toLocaleString('en-US', {
        weekday: 'short',
        month: 'short',
        day: '2-digit'
      })
      : ''
  }
}
