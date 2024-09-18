import { icon } from "./icons.js"
import { slider } from "./slider.js"
import { PercentageLabel } from "./percentage.js"
const audio = await Service.import("audio")

const vol = Widget.Box({
    class_name: "volume",
    css: "min-width: 180px; padding: 5px 10px;",
    children: [
        icon(), 
        slider,
        PercentageLabel,
    ],
})

export { vol }
