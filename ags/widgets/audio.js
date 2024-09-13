

export function VolumeButton() {

    const button =  Widget.Button({
        onClicked: (button, event) => {
            App.toggleWindow('menu')
        },
        child: Widget.Label(
            ' '
        ),
    })

    return button

}


