import { WifiIcon, GoNextIcon } from "./icons.js"

export function WifiButtons() {
    const WifiToggleButton = Widget.Button({
        css: `
        border-top-left-radius: 10px; 
        border-bottom-left-radius: 10px;
        `,
        hexpand: true,
        child: WifiIcon,
        onClicked: () => {
            // network.toggleWifi()
        }
    })

    const WifiShowButton = Widget.Button({
        css: `
        border-top-right-radius: 10px; 
        border-bottom-right-radius: 10px;
        `,
        child: GoNextIcon,
        hexpand: true,
    })

    return [WifiToggleButton, WifiShowButton]
}
