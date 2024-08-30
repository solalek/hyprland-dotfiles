import { Center } from "../layouts/main-layout.js"
import { Left } from "../layouts/main-layout.js"
import { Right } from "../layouts/main-layout.js"

export function Bar(monitor = 0) {
    return Widget.Window({
        name: `bar-${monitor}`, // name has to be unique
        class_name: "bar",
        monitor,
        anchor: ["top", "left", "right"],
        exclusivity: "exclusive",
        child: Widget.CenterBox({
            start_widget: Left(monitor),
            center_widget: Center(),
            end_widget: Right(),
        }),
    })
}
