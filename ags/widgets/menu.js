const Gtk = imports.gi.Gtk
const Gdk = imports.gi.Gdk

// export function RightClickMenu() {
//     const button = Widget.Button({
//         on_clicked: () => {
//             // Показываем меню под кнопкой
//             App.toggleWindow('menu')
//         },
//         child: Widget.Label('Open Menu'),
//     });
//
//     return button;
// }


export function RightClickMenu() {
    const menu = Widget.Menu({
        children: [
            Widget.MenuItem({
                child: Widget.Label('hello'),
            }),
        ],
    })

    return Widget.Button({
        on_primary_click: (button, event) => {
            menu.popup_at_widget(button, 7, 1, event) //this is how i did
            // menu.popup_at_rect()
            // menu.popup_at_pointer(event)  
        },
        child: Widget.Label('hello'),
    })
}
