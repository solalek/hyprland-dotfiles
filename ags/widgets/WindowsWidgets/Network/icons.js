const network = await Service.import('network')

function GetWifiIcon() {

}
const WifiIcon = Widget.Icon({
    icon: network.bind('enabled').as(on =>
        `network-wireless-${on ? 'signal-excellent' : 'disabled'}-symbolic`),
    size: 20
})

// const WifiEnabledIcon = Widget.Icon({
//     icon: 'network-wireless-signal-excellent-symbolic',
//     size: 20,
// })
//
// const WifiDisabledIcon = Widget.Icon({
//     icon: 'network-wireless-disabled-symbolic',
//     size: 20,
// })

const GoNextIcon = Widget.Icon({
    icon: 'go-next-symbolic',
    size: 20,
})

export { GoNextIcon, WifiIcon }
