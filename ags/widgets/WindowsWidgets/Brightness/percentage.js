import brightness from "./brightnessService.js"

const PercentageLabel = Widget.Label({
    label: brightness.bind('screen-value').as(v => `${Math.round(v * 100)}%`),  // Display percentage
});

export { PercentageLabel }
