export const getImageUrl = name => {
  return new URL(`../assets/images/${name}`, import.meta.url).href
}

export const getRareColor = (rare) => {
  switch (rare) {
      case 'set':
          return 'green'
      case 'epic':
          return '#8c0099'
      case 'legendary':
          return 'red'
      case 'rare':
          return '#1714b9'
      case 'uncommon':
          return '#fff'
      default:
          return '#fff'
  }
}