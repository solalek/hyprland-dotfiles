import { SystemAppsButtonsRow1 } from "./SystemAppsButtons/row-1.js"
import { SystemAppsButtonsRow2 } from "./SystemAppsButtons/row-2.js"
import { UserAppsButtonsRow1 } from "./UserAppsButtons/row-1.js"
import { UserAppsButtonsRow2 } from "./UserAppsButtons/row-2.js"

const SystemAppsRow1 = Widget.Box({
    spacing: 5,
    homogeneous: true,
    children: [
        ...SystemAppsButtonsRow1()
    ]
})

const SystemAppsRow2 = Widget.Box({
    spacing: 5,
    homogeneous: true,
    children: [
        ...SystemAppsButtonsRow2()
    ]
})

const SystemApps = Widget.Box({
    css: `
    padding: 5px;
    background-color: #080808;
    border-radius: 10px;
    `,
    spacing: 5,
    vertical: true,
    homogeneous: true,
    children: [
        SystemAppsRow1,
        SystemAppsRow2
    ]
})

const UserAppsRow1 = Widget.Box({
    spacing: 5,
    homogeneous: true,
    children: [
        ...UserAppsButtonsRow1()
    ]
})

const UserAppsRow2 = Widget.Box({
    homogeneous: true,
    spacing: 5,
    children: [
        ...UserAppsButtonsRow2()
    ]
})

const UserApps = Widget.Box({
    css: `
    padding: 5px;
    background-color: #080808;
    border-radius: 10px;
    `,
    spacing: 5,
    vertical: true,
    homogeneous: true,
    children: [
        UserAppsRow1,
        UserAppsRow2
    ]
})

const AppBox = Widget.Box({
    spacing: 5,
    homogeneous: true,
    children: [
        SystemApps,
        UserApps
    ]
})

export { AppBox }
