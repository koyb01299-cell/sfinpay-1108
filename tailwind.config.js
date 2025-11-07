/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          mint: "#a7f3d0",       // 밝은 민트 (기본 배경)
          mintLight: "#d1fae5",  // 아주 연한 민트
          mintDark: "#34d399",   // 진한 민트 (포인트, 버튼)
        },
      },
      backgroundImage: {
        "mint-gradient":
          "linear-gradient(to bottom right, #e6fff7, #a7f3d0, #d1fae5)",
      },
    },
  },
  plugins: [],
};
