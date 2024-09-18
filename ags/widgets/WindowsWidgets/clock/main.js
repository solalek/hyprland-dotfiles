import { CurrentTime, CurrentDate } from "./TimeInfo.js"

const clock = Widget.Box({
    vertical: true,
    class_name: 'WindowClock',
    children: [
        Widget.Label({
            css: "font-size: 30px;",
            label: CurrentTime.bind(),
        }),
        Widget.Label({
            css: "font-size: 18px;",
            label: CurrentDate.bind(),
        })
    ]
})

export { clock }
