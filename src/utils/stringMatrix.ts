export const slideH = (str: string, slideIndex: number): string => {
  return str.slice(slideIndex) + str.slice(0, slideIndex)
}
export const slideV = (
  strs: string[],
  colIndex: number,
  slideIndex: number
): string[] => {
  const len = strs.length
  return strs.map((str, rowIndex) => {
    const list = str.split('')
    list[colIndex] = strs[(rowIndex + slideIndex + len) % len][colIndex]
    return list.join('')
  })
}

export const left = (str: string): string => {
  return slideH(str, 1)
}
export const right = (str: string): string => {
  return slideH(str, -1)
}
export const up = (strs: string[], colIndex: number): string[] => {
  return slideV(strs, colIndex, 1)
}
export const down = (strs: string[], colIndex: number): string[] => {
  return slideV(strs, colIndex, -1)
}
