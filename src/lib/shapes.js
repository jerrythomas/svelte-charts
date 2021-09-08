export const shapes = {
  A: (s) =>
    `M${0.1 * s} ${0.5 * s}` +
    `A${0.4 * s} ${0.4 * s} 0 0 0 ${0.9 * s} ${0.5 * s}` +
    `A${0.4 * s} ${0.4 * s} 0 0 0 ${0.1 * s} ${0.5 * s}`,
  B: (s) =>
    `M${0.5 * s} 0` +
    `A${0.5 * s} ${0.5 * s} 0 0 0 ${s} ${0.5 * s}` +
    `A${0.5 * s} ${0.5 * s} 0 0 0 ${0.5 * s} ${s}` +
    `A${0.5 * s} ${0.5 * s} 0 0 0 0 ${0.5 * s}` +
    `A${0.5 * s} ${0.5 * s} 0 0 0 ${0.5 * s} 0`,
  C: (s) =>
    `M${0.5 * s} 0` +
    `L${s} ${0.5 * s}` +
    `L${0.5 * s} ${s}` +
    `L0 ${0.5 * s}Z`,
  D: (s) =>
    `M${0.1 * s} ${0.1 * s}` +
    `L${0.1 * s} ${0.9 * s}` +
    `L${0.9 * s} ${0.9 * s}` +
    `L${0.9 * s} ${0.1 * s}Z`,
  E: (s) =>
    `M${0.5 * s} ${0.05 * s}` +
    `L${0.606 * s} ${0.36 * s}` +
    `L${s} ${0.36 * s}` +
    `L${0.685 * s} ${0.59 * s}` +
    `L${0.81 * s} ${0.95 * s}` +
    `L${0.5 * s} ${0.725 * s}` +
    `L${0.19 * s} ${0.95 * s}` +
    `L${0.315 * s} ${0.59 * s}` +
    `L0 ${0.36 * s}` +
    `L${0.394 * s} ${0.36 * s}Z`,
  F: (s) =>
    `M${0.1 * s} ${0.1 * s}` +
    `A${0.5 * s} ${0.5 * s} 0 0 0 ${0.9 * s} ${0.1 * s}` +
    `A${0.5 * s} ${0.5 * s} 0 0 0 ${0.9 * s} ${0.9 * s}` +
    `A${0.5 * s} ${0.5 * s} 0 0 0 ${0.1 * s} ${0.9 * s}` +
    `A${0.5 * s} ${0.5 * s} 0 0 0 ${0.1 * s} ${0.1 * s}`,
  G: (s) =>
    `M${0.2 * s} ${0.5 * s}` +
    `A${0.3 * s} ${0.3 * s} 0 0 0 ${0.8 * s} ${0.5 * s}` +
    `A${0.3 * s} ${0.3 * s} 0 0 0 ${0.2 * s} ${0.5 * s}` +
    `M0 ${0.5 * s}` +
    `L${s} ${0.5 * s}` +
    `M${0.5 * s} 0` +
    `L${0.5 * s} ${s}`,
  H: (s) =>
    `M${0.9 * s} ${0.5 * s}` +
    `A${0.08 * s} ${0.08 * s} 0 0 0 ${0.5 * s} ${0.2 * s}` +
    `A${0.08 * s} ${0.08 * s} 0 0 0 ${0.1 * s} ${0.5 * s}` +
    `L${0.5 * s} ${0.9 * s}` +
    `L${0.9 * s} ${0.5 * s}`,
  I: (s) =>
    `M${0.5 * s} ${0.3 * s}` +
    `A${0.2 * s} ${0.1 * s} 0 0 0 ${0.5 * s} ${0.1 * s}` +
    `L${0.5 * s} ${0.9 * s}` +
    `M${0.5 * s} ${0.7 * s}` +
    `A${0.2 * s} ${0.1 * s} 0 0 0 ${0.5 * s} ${0.9 * s}` +
    `M${0.3 * s} ${0.5 * s}` +
    `A${0.1 * s} ${0.2 * s} 0 0 0 ${0.1 * s} ${0.5 * s}` +
    `L${0.9 * s} ${0.5 * s}` +
    `M${0.7 * s} ${0.5 * s}` +
    `A${0.1 * s} ${0.2 * s} 0 0 0 ${0.9 * s} ${0.5 * s}`,
  J: (s) =>
    `M${0.1 * s} ${0.3 * s}` +
    `L${0.7 * s} ${0.9 * s}` +
    `L${0.9 * s} ${0.7 * s}` +
    `L${0.3 * s} ${0.1 * s}Z` +
    `M${0.1 * s} ${0.7 * s}` +
    `L${0.7 * s} ${0.1 * s}` +
    `L${0.9 * s} ${0.3 * s}` +
    `L${0.3 * s} ${0.9 * s}Z`,
  K: (s) =>
    `M${0.1 * s} ${0.4 * s}` +
    `L${0.9 * s} ${0.4 * s}` +
    `L${0.9 * s} ${0.6 * s}` +
    `L${0.1 * s} ${0.6 * s}Z` +
    `M${0.4 * s} ${0.1 * s}` +
    `L${0.4 * s} ${0.9 * s}` +
    `L${0.6 * s} ${0.9 * s}` +
    `L${0.6 * s} ${0.1 * s}Z`,
  L: (s) =>
    `M${0.5 * s} ${0.05 * s}` +
    `L${0.19 * s} ${0.95 * s}` +
    `L${s} ${0.36 * s}` +
    `L0 ${0.36 * s}` +
    `L${0.81 * s} ${0.95 * s}Z`,
  M: (s) =>
    `M${0.1 * s} ${0.1 * s}` +
    `L${0.1 * s} ${0.9 * s}` +
    `L${0.9 * s} ${0.9 * s}` +
    `L${0.9 * s} ${0.1 * s}Z` +
    `M${0.1 * s} ${0.1 * s}` +
    `L${0.1 * s} ${0.5 * s}` +
    `L${0.5 * s} ${0.5 * s}` +
    `L${0.5 * s} ${0.1 * s}Z` +
    `M${0.5 * s} ${0.5 * s}` +
    `L${0.5 * s} ${0.9 * s}` +
    `L${0.9 * s} ${0.9 * s}` +
    `L${0.9 * s} ${0.5 * s}Z`,
  N: (s) =>
    `M${0.5 * s} 0` +
    `L${s} ${0.5 * s}` +
    `L${0.5 * s} ${s}` +
    `L0 ${0.5 * s}Z` +
    `M${0.5 * s} 0` +
    `L${s} ${0.5 * s}` +
    `L${0.5 * s} ${s}Z`,
  O: (s) =>
    `M0 ${0.5 * s}` +
    `A${0.6 * s} ${0.4 * s} 0 0 0 ${s} ${0.5 * s}` +
    `A${0.6 * s} ${0.4 * s} 0 0 0 0 ${0.5 * s}` +
    `M${0.5 * s} 0` +
    `A${0.4 * s} ${0.6 * s} 0 0 0 ${0.5 * s} ${s}` +
    `A${0.4 * s} ${0.6 * s} 0 0 0 ${0.5 * s} 0`,
}

export const patterns = {
  A: 'M0 5A6 6 0 0 0 10 5',
  B: 'M0 10L10 0',
  C: 'M0 0A10 10 0 0 0 10 10',
  D: 'M0 0L10 10',
  E: 'M10 5A6 6 0 0 0 0 5',

  F: 'M10 10A10 10 0 0 0 0 0',
  G: 'M0 0L10 10ZM10 0L0 10Z',
  H: 'M1 1L9 1L9 9L1 9Z',
  I: 'M4 0L4 10M6 10L6 0M0 4L10 4M10 6L0 6',
  J: 'M0 2L8 10M2 0L10 8M0 8L8 0M2 10L10 2',

  K: 'M5 1A 4 4 0 0 0 9 5A4 4 0 0 0 5 9A4 4 0 0 0 1 5A4 4 0 0 0 5 1',
  L: 'M1 3L7 9M3 1L9 7M1 7L7 1M3 9L9 3',
  M: 'M2 2A4 4 0 0 0 8 2A4 4 0 0 0 8 8A4 4 0 0 0 2 8A4 4 0 0 0 2 2',
  N: 'M0 0A5 5 0 0 0 10 0A5 5 0 0 0 10 10A5 5 0 0 0 0 10A5 5 0 0 0 0 0',
  O: 'M5 2A 3 3 0 0 0 8 5A3 3 0 0 0 5 8A3 3 0 0 0 2 5A3 3 0 0 0 5 2',

  P: 'M2 5L5 2L8 5L5 8Z',
  Q: 'M3 5A2 2 0 0 0 7 5A2 2 0 0 0 3 5M1 5L9 5M5 1L5 9',
  R: 'M2 8L8 2ZM1.5 3.5L3.5 1.5ZM6.5 8.5L8.5 6.5ZM0 0L10 10Z',
  S:
    'M2 8L8 2ZM1.5 3.5L3.5 1.5Z' +
    'M6.5 8.5L8.5 6.5Z' +
    'M2 2L8 8M1.5 6.5L3.5 8.5' +
    'M6.5 1.5L8.5 3.5',
  T:
    'M5 1 A6 6 0 0 0 5 9' +
    'A6 6 0 0 0 5 1' +
    'M1 5A6 6 0 0 0 9 5A6 6 0 0 0 1 5',

  U: 'M5 2L2.5 9L8.8 4.6L1.2 4.6L7.5 9Z',
}

export const palette = [
  { fill: '#D7F1FE', stroke: '#023047' },
  { fill: '#EFF6FF', stroke: '#2563EB' },
  { fill: '#FDF2F8', stroke: '#DB2777' },
  { fill: '#ECFDF5', stroke: '#059669' },
  { fill: '#F5F3FF', stroke: '#7C3AED' },
  { fill: '#FEF2F2', stroke: '#DC2626' },
  { fill: '#FFFBEB', stroke: '#D97706' },
]
export const fallback = { fill: '#F9FAFB', stroke: '#9CA3AF' }

export function getPaletteForValues(values, { palette, fallback }) {
  return values.map((value, index) =>
    index < palette.length ? palette[index] : fallback
  )
}
