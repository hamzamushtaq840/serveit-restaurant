export const trimmedName = name => {
  let trimmed
  trimmed = name.slice(1, name.length)
  trimmed = trimmed.charAt(0).toUpperCase() + trimmed.slice(1)
  return trimmed
}
