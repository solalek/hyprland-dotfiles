import { UserIcon } from "./icons.js"
import { UserNameLabel, HostNameLabel, SessionTypeLabel } from "./sessionInfo.js"

const SessionBox = Widget.Box({
    css: "padding: 30px 0px 0px 0px; min-width: 150px;",
    halign: 'center', 
    valign: 'center', 
    vertical: true,
    class_name: "session-info",
    children: [UserIcon, UserNameLabel, HostNameLabel, SessionTypeLabel]
});

export { SessionBox }
