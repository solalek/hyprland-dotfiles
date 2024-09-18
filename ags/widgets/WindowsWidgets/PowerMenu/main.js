import { PowerButtons } from "./buttons.js"

const PowerMenu = Widget.Box({
    class_name: "powerMenu",
    vertical: true,
    children: [
        ...PowerButtons()
    ]
})

export { PowerMenu }

