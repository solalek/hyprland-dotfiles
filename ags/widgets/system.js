import { BatteryLabel } from "./battery.js"
import { audio_label } from "./audio.js"

export function SysButton() {

    const button =  Widget.Button({
        onClicked: (button, event) => {
            App.toggleWindow('system')
        },
        child: Widget.Box({
            children: [
                audio_label(),
                BatteryLabel(),
            ]
        }),

    })

    return button

}

