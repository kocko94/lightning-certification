String.prototype.truncate = function(maxLength) {
  let truncated = this
  if (this.length > maxLength) {
    truncated = `${this.substring(0, maxLength)}`
    if (truncated[this.length - 1] === ' ') {
      truncated = truncated.substring(0, truncated.length - 1)
    }
    truncated += '...'
  }
  return truncated
}
