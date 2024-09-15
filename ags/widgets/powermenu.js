export function PowerMenu() {
    const menu = Widget.Menu({
        children: [
            Widget.MenuItem({
                child: Widget.Label('poweroff'),
                onActivate: () => {
                    Utils.exec('poweroff')
                }
            }),
            Widget.MenuItem({
                child: Widget.Label('reboot'),
                onActivate: () => {
                    Utils.exec('reboot')
                }
            }),
            Widget.MenuItem({
                child: Widget.Label('lock'),
                onActivate: () => {
                    Utils.exec('hyprlock')
                }
            }),
        ],
    })

    return Widget.Button({
        css: "margin: 0px 0px 0px 10px;",
        on_primary_click: (button, event) => {
            menu.popup_at_widget(button, 3, 9, event) //this is how i did
        },
        child: Widget.Label('⏻')
    })
}
