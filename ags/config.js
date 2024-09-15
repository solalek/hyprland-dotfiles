import { Bar } from "./panels/bar.js"
import { window_calendar } from "./windows/calendar.js"
import { SystemWindow } from "./windows/system.js"

App.config({
    style: "./styles/moonfly-theme.css",
    windows: [
        Bar(1),
        Bar(0),
        SystemWindow(),
        window_calendar(),
    ]
})

export { }
