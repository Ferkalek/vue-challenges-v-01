module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      animation: {
        dropdownopen: "dropdownopen ease-out 100ms",
        dropdownclose: "dropdownclose ease-in 75ms",
      },
      keyframes: {
        dropdownopen: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        dropdownclose: {
          "0%": { transform: "scale(1)", opacity: "1" },
          "100%": { transform: "scale(0.95)", opacity: "0" },
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
