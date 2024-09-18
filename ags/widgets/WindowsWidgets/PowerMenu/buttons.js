import { PowerIcon, RebootIcon, LockIcon } from "./icons.js"

export function PowerButtons() {
    const poweroff = Widget.Button({
        css: "margin: 10px; min-width: 60px; min-height: 60px; border-radius: 10px;",
        child: PowerIcon,
        onClicked: () => {
            App.closeWindow('mainMenu'),
                Utils.exec('poweroff')
        }
    })
    const reboot =  Widget.Button({
        css: "margin: 10px; min-width: 60px; min-height: 60px; border-radius: 10px;",
        child: RebootIcon,
        onClicked: () => {
            App.closeWindow('mainMenu'),
                Utils.exec('reboot')
        }
    })
    const lock =  Widget.Button({
        css: "margin: 10px; min-width: 60px; min-height: 60px; border-radius: 10px;",
        child: LockIcon,
        onClicked: () => {
            App.closeWindow('mainMenu'),
                Utils.exec('hyprlock')
        }
    })

    return [ poweroff, reboot, lock ]
}
