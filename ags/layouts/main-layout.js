import { Clock } from "../widgets/clock.js"
import { Workspaces } from "../widgets/workspaces.js"
import { VolumeButton } from "../widgets/audio.js"
import { BatteryLabel } from "../widgets/battery.js"
import { SysTray } from "../widgets/system-tray.js"
import { NotificationPopups } from "../widgets/notification.js"
import { RightClickMenu } from "../widgets/menu.js"

export function Left(monitor) {
    return Widget.Box({
        spacing: 8,
        children: [
            Workspaces(monitor),
            RightClickMenu(),
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
            // Volume(),
            VolumeButton(),
            BatteryLabel(),
            // SysTray(),
            NotificationPopups(),
        ],
    })
}
