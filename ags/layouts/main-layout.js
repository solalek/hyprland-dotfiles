import { Clock } from "../widgets/BarWidgets/clock/clock.js"
import { Workspaces } from "../widgets/BarWidgets/workspaces/workspaces.js"
import { SysTray } from "../widgets/BarWidgets/system-tray/system-tray.js"
import { NotificationPopups } from "../widgets/BarWidgets/notifications/notification.js"
import { SysButton } from "../widgets/BarWidgets/system/system.js"
import { showOverlay, hideOverlay } from "../widgets/WindowsWidgets/Overlay/main.js"
import { IsAnyMenuOpen, MenuIsAdded, MenuIsRemoved } from "../widgets/WindowsWidgets/Overlay/main.js"

let isOpen = false

export function setLeftClosed() {
    isOpen = false
}

const LeftWindowToggleButton = () => { 
    const button = Widget.Button({
        css: "margin: 0px 0px 0px 10px;",
        on_primary_click: () => {
            App.toggleWindow('MainMenu-menu')
            // if (!isOpen) {
            //     MenuIsAdded()
            // } else {
            //     MenuIsRemoved()
            // }
            // if (IsAnyMenuOpen()) {
            //     showOverlay()
            // } else {
            //     hideOverlay()
            // }
            // if (!isOpen) {
            //     App.openWindow('MainMenu-menu')
            //     isOpen = true
            //     MenuIsAdded()
            // } else {
            //     App.closeWindow('MainMenu-menu')
            //     isOpen = false
            //     MenuIsRemoved()
            //     if (!IsAnyMenuOpen()) {
            //         hideOverlay()
            //     }
            // }
        },
        child: Widget.Icon({ icon: "system-shutdown-symbolic", size: 20 })
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
