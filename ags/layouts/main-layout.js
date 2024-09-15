import { Clock } from "../widgets/clock.js"
import { Workspaces } from "../widgets/workspaces.js"
import { SysTray } from "../widgets/system-tray.js"
import { NotificationPopups } from "../widgets/notification.js"
import { PowerMenu } from "../widgets/powermenu.js"
import { SysButton } from "../widgets/system.js"

export function Left(monitor) {
    return Widget.Box({
        spacing: 8,
        children: [
            PowerMenu(),
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
            NotificationPopups(),
        ],
    })
}
