import { WifiIcon, GoNextIcon } from "./icons.js"
import { flowBox } from "./flowbox.js"
const network = await Service.import('network')

const WifiIndicator = () => Widget.Box({
    vertical: true,
    children: [
        Widget.Box({
            spacing: 5,
            children: [
                Widget.Icon({
                    halign: 2,
                    hexpand: true,
                    icon: network.wifi.bind('icon_name'),
                }),
                Widget.Label({
                    xalign: 0,
                    hexpand: true,
                    label: network.wifi.bind('ssid')
                    .as(ssid => ssid || 'Unknown'),
                }),
            ]
        })
    ],
})

const WiredIndicator = () => Widget.Icon({
    icon: network.wired.bind('icon_name'),
})

const NetworkIndicator = () => Widget.Stack({
    canFocus: false,
    children: {
        wifi: WifiIndicator(),
        wired: WiredIndicator(),
    },
    shown: network.bind('primary').as(p => p || 'wifi'),
})

let box = null

export function WifiButtons() {
    const WifiToggleButton = Widget.Button({
        css: `
        border-top-left-radius: 10px; 
        border-bottom-left-radius: 10px;
        `,
        hexpand: true,
        child: WifiIcon,
     })

    const WifiShowButton = Widget.Button({
        css: `
        border-top-right-radius: 10px; 
        border-bottom-right-radius: 10px;
        `,
        child: GoNextIcon,
        hexpand: true,
        onClicked: () => {
            // network.toggleWifi()
            if (box == null) {
                box = Widget.Box({
                    css: "background-color: #080808; border-radius: 10px;",
                    vertical: true,
                    children: [
                        WifiIndicator()
                    ]
                })
                flowBox.add(box)
            } else {
                flowBox.remove(box)
                box = null
            }
        }

    })

    return [WifiToggleButton, WifiShowButton]
}
