import type { Config } from 'tailwindcss'
import {
  colors,
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  radii,
  space,
} from 'tokens'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: { ...colors, current: 'currentColor' },
    fontFamily: {
      sans: fonts.default,
    },
    spacing: space,
    fontSize: fontSizes,
    borderRadius: radii,
    lineHeight: lineHeights,
    fontWeight: fontWeights,
  },
  plugins: [],
}
export default config
