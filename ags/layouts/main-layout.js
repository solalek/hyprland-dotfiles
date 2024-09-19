import { Clock } from "../widgets/BarWidgets/clock/clock.js"
import { Workspaces } from "../widgets/BarWidgets/workspaces/workspaces.js"
import { SysTray } from "../widgets/BarWidgets/system-tray/system-tray.js"
import { NotificationPopups } from "../widgets/BarWidgets/notifications/notification.js"
import { SysButton } from "../widgets/BarWidgets/system/system.js"
import { showOverlay, hideOverlay, overlay } from "../widgets/WindowsWidgets/Overlay/main.js"

const LeftWindowToggleButton = () => { 
    const button = Widget.Button({
        css: "margin: 0px 0px 0px 10px;",
        on_primary_click: () => {
            if (!overlay) {
                showOverlay()
            } else {
                hideOverlay()
            }
            App.toggleWindow('MainMenu-menu')
        },
        child: Widget.Label('⏻')
    })
    return button
}

export function Left(monitor) {
    return Widget.Box({
        spacing: 8,
        children: [
            LeftWindowToggleButton(),
            Workspaces(monitor),
        ],
    })
}

export function Center() {
    return Widget.Box({
        spacing: 8,
        children: [
            Clock(),
        ],
    })
}

export function Right() {
    return Widget.Box({
        hpack: "end",
        spacing: 8,
        children: [
            SysTray(),
            SysButton(),
        ],
    })
}
