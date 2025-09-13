// ❌ 구방식
// module.exports = {
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//   },
// }

// tailwind 4 방식
// postcss.config.js (CJS)
// module.exports = {
//   plugins: {
//     "@tailwindcss/postcss": {},  // ✅ 이걸로 변경
//     autoprefixer: {},
//   },
// }

// postcss.config.js (ESM)
export default {
  plugins: {
    "@tailwindcss/postcss": {},  // ✅
    autoprefixer: {},
  },
}
