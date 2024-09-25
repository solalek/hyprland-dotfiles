import { SessionBox } from "../widgets/WindowsWidgets/Session/main.js"
import { PowerMenu } from "../widgets/WindowsWidgets/PowerMenu/main.js"
import { AppBox } from "../widgets/WindowsWidgets/AppLauncher/main.js"
import { SystemStatsWidget } from "../widgets/WindowsWidgets/SystemStats/main.js"

const SessionAndPowerMenu = Widget.Box({
    class_name: "SessionAndPowerMenu",
    spacing: 5,
    children: [
        SessionBox,
        PowerMenu,
    ]
})


const main = Widget.Box({
    spacing: 5,
    class_name: "main-box",
    vertical: true,
    children: [
        SessionAndPowerMenu,
        AppBox,
        SystemStatsWidget()
    ]
})

const MainMenuWindow = Widget.Window({
    name: 'MainMenu-menu',
    class_name: 'MainMenu',
    anchor: ['top','left'],
    exclusivity: 'normal',
    keymode: 'none',
    margins: [10, 10],
    child: main,
    visible: false,

})

export { MainMenuWindow }
