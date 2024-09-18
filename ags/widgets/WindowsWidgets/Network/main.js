import { WifiButtons } from "./buttons.js"

const WifiButtonsBox = Widget.Box({
    class_name: "wifiButtonsBox",
    homogeneous: false,
    spacing: 1,
    children: [
        ...WifiButtons()
    ]
})

export { WifiButtonsBox }
