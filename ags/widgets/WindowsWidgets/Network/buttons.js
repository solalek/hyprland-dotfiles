import { GoNextIcon } from "./icons.js";
import { flowBox, setBox, getBox } from "../System/flowBox.js";
const network = await Service.import('network');

const WifiIndicator = () => Widget.Box({
    vertical: true,
    children: [
        Widget.Box({
            css: "border-bottom: 1px solid #bdbdbd;",
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
                    label: network.wifi.bind('ssid').as(ssid => ssid || 'Unknown'),
                }),
                Widget.Button({
                    child: Widget.Label("r"),
                    onClicked: () => network.wifi.scan()
                })
            ]
        }),
        AccessPoints()
    ],
});

const WiredIndicator = () => Widget.Icon({
    icon: network.wired.bind('icon_name'),
});

const WifiIcon = () => Widget.Icon({
    icon: network.wifi.bind('enabled').as(isEnabled => 
        isEnabled ? "network-wireless-signal-excellent-symbolic" : "network-wireless-disabled-symbolic"
    )
});

function AccessPoints() {
    return Widget.Box({
        vertical: true,
        children: network.wifi.access_points.map(ap => Widget.EventBox({
            halign: 3,
            child: Widget.Box({
                children: [
                    Widget.Label(`${ap.ssid || 'Unknown SSID'} - ${ap.strength}%`),
                ],
            }),
            onPrimaryClickRelease: () => {
                const password = 'sektor20034'; // Prompt for password if necessary
                print(`Attempting to connect to SSID: ${ap.ssid}, Password: ${password}`);
                Utils.execAsync(`nmcli dev wifi con "${ap.ssid}"`);
            }
        })),
    });
}

const NetworkIndicator = () => Widget.Stack({
    canFocus: false,
    children: {
        wifi: WifiIndicator(),
        wired: WiredIndicator(),
    },
    shown: network.bind('primary').as(p => p || 'wifi'),
});

export function WifiButtons() {
    const WifiToggleButton = Widget.Button({
        css: `
        border-top-left-radius: 10px; 
        border-bottom-left-radius: 10px;
        `,
        hexpand: true,
        child: WifiIcon(),
        onClicked: () => network.toggleWifi()
    });

    const WifiShowButton = Widget.Button({
        css: `
        border-top-right-radius: 10px; 
        border-bottom-right-radius: 10px;
        `,
        child: GoNextIcon,
        hexpand: true,
        onClicked: () => {
            if (!getBox()) {
                setBox(Widget.Box({
                    css: "background-color: #080808; border-radius: 10px;",
                    vertical: true,
                    children: [WifiIndicator()]
                }));
                flowBox.add(getBox());
            } else {
                flowBox.remove(getBox());
                setBox(null);
            }
        }
    });

    return [WifiToggleButton, WifiShowButton];
}

