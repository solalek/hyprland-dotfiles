import { PowerIcon, RebootIcon, LockIcon } from "./icons.js"
import { closeAllMenus } from "../Overlay/main.js"

export function PowerButtons() {
    const poweroff = Widget.Button({
        css: "margin: 10px; min-width: 60px; min-height: 60px; border-radius: 10px;",
        child: PowerIcon,
        onClicked: () => {
            closeAllMenus()
            Utils.execAsync('poweroff')
        }
    })
    const reboot =  Widget.Button({
        css: "margin: 10px; min-width: 60px; min-height: 60px; border-radius: 10px;",
        child: RebootIcon,
        onClicked: () => {
            closeAllMenus()
            Utils.execAsync('reboot')
        }
    })
    const lock =  Widget.Button({
        css: "margin: 10px; min-width: 60px; min-height: 60px; border-radius: 10px;",
        child: LockIcon,
        onClicked: () => {
            closeAllMenus()
            Utils.execAsync('hyprlock')
        }
    })

    return [ poweroff, reboot, lock ]
}
