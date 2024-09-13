import { Bar } from "./panels/bar.js"
import { menu_window } from "./windows/audio.js"
import { window_calendar } from "./windows/calendar.js"

App.config({
    style: "./styles/moonfly-theme.css",
    windows: [
        Bar(1),
        Bar(0),
        menu_window(),
        window_calendar(),
    ]
})

export { }
