export function formatValue(
  value: number,
  cientificNotation: boolean = false,
  digits: number = 2,
  replaceDot: boolean = true,
): string {
  if (value === undefined || value === 0) {
    return (0).toFixed(digits).replace('.', replaceDot ? ',' : '.')
  }

  if (cientificNotation) {
    return value?.toExponential(digits).replace('.', replaceDot ? ',' : '.')
  }

  return value?.toFixed(digits).replace('.', replaceDot ? ',' : '.')
}
