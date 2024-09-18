import { Bar } from "./panels/bar.js"
import { MiddleWindow } from "./windows/MiddleWindow.js"
import { SystemWindow } from "./windows/RightWindow.js"
import { MainMenuWindow } from "./windows/LeftWindow.js"
import { NotificationPopups } from "./widgets/BarWidgets/notifications/notification.js"

const hyprland = await Service.import('hyprland');

const createBarsForMonitors = () => {
    return hyprland.monitors.map((monitor, index) => Bar(index));
    // console.log(hyprland.monitors.map((monitor, index) => index))
}

App.config({
    style: "./styles/moonfly-theme.css",
    windows: [
        ...createBarsForMonitors(),
        // Bar(0),
        // Bar(1),
        SystemWindow,
        MiddleWindow,
        MainMenuWindow,
        NotificationPopups(),
    ],    
})

export { }
