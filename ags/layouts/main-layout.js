import { Clock } from "../widgets/clock.js"
import { Workspaces } from "../widgets/workspaces.js"
import { Volume } from "../widgets/audio.js"
import { BatteryLabel } from "../widgets/battery.js"
import { SysTray } from "../widgets/system-tray.js"
import { NotificationPopups } from "../widgets/notification.js"

export function Left(monitor) {
    return Widget.Box({
        spacing: 8,
        children: [
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
            Volume(),
            BatteryLabel(),
            SysTray(),
            NotificationPopups(),
        ],
    })
}
