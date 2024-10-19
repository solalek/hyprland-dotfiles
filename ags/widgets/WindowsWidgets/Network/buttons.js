const { Gtk, Gio } = imports.gi;
import { GoNextIcon } from "./icons.js";
import { flowBox, setBox, getBox } from "../System/flowBox.js";
const network = await Service.import('network');

// Entry widget for password, with enhancements like icons and visibility control
const entry = Widget.Entry({
    placeholder_text: "Enter password",
    visibility: false,  // Password mode
    activates_default: true,  // Allows pressing Enter to trigger an action
    onAccept: ({ text }) => {
        print(`Text accepted: ${text}`);
    },
    onChange: ({ text }) => {
        print(`Text changed: ${text}`);
    },
    // Adding secondary icon (eye icon) to toggle password visibility
    secondary_icon_name: "view-conceal-symbolic",
    secondary_icon_tooltip_text: "Show/Hide password",
});

// Manually connect to the icon-press signal to handle the visibility toggle
entry.connect("icon-press", (widget, icon_pos) => {
    if (icon_pos === Gtk.EntryIconPosition.SECONDARY) {
        // Toggle password visibility
        const isVisible = entry.get_visibility();
        entry.set_visibility(!isVisible);
        entry.set_secondary_icon_name(isVisible ? "view-conceal-symbolic" : "view-reveal-symbolic");
    }
});

function scroll() {
    return Widget.Scrollable({
        hscroll: "never",
        vscroll: "automatic",
        css: "min-height: 200px;",
        child: AccessPoints()
    });
}

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
                // const password = entry.get_text(); // Get the password from the entry widget
                const password = "enot3425"; // Get the password from the entry widget
                print(`Attempting to connect to SSID: ${ap.ssid}, Password: ${password}`);
                Utils.execAsync(`nmcli dev wifi con "${ap.ssid}"`);
            }
        })),
    });
}

const WifiIndicator = () => Widget.Box({
    vertical: true,
    children: [
        Widget.Box({
            css: "border-bottom: 1px solid #bdbdbd; min-height: 40px;",
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
                    css: "border-radius: 10px; border: none; padding: 0 5px 0 0;",
                    child: Widget.Icon({
                        icon: 'system-reboot-symbolic',
                        size: 20
                    }),
                    onClicked: () => network.wifi.scan()
                })
            ]
        }),
        scroll(),
        // entry // Add the entry widget to the UI
    ],
});

const WifiIcon = () => Widget.Icon({
    icon: network.wifi.bind('enabled').as(isEnabled => 
        isEnabled ? "network-wireless-signal-excellent-symbolic" : "network-wireless-disabled-symbolic"
    )
});

const WifiButtons = () => {
    const WifiToggleButton = Widget.Button({
        css: `
        border-radius: 10px; 
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
                entry.grab_focus(); // Ensure the entry widget gains focus
            } else {
                flowBox.remove(getBox());
                setBox(null);
            }
        }
    });

    return [WifiToggleButton];
};

export { WifiButtons, entry };

