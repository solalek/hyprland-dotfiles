import { slider } from "./slider.js"
import { PercentageLabel } from "./percentage.js"

const BrightnessBox = Widget.Box({
    class_name: "brightness",
    css: "min-width: 180px; padding: 5px 10px;",
    children: [
        Widget.Label('󰃟'), 
        slider,
        PercentageLabel,
    ],  
});

export { BrightnessBox }
