const hyprland = await Service.import("hyprland")

export function Workspaces(monitor) {
    // Workspace ID to icon mapping
    const workspaceIcons = {
        "1": "",
        "2": "",
        "3": "",
        "4": "",
        "8": "",
        "9": "",
        "10": "",
    };

    const defaultIcons = {
        default: "",  
    };

    // Bind to active workspace ID
    const activeId = hyprland.active.workspace.bind("id");

    // Bind to workspaces and filter based on monitor
    const workspaces = hyprland.bind("workspaces").as((ws) => {
        // Filter workspaces by monitor ID and create buttons with icons
        return ws
            .filter(({ monitorID }) => monitorID === monitor)
            .sort((a, b) => a.id - b.id) // Sort in increasing order
            .map(({ id }) => {
                const icon = workspaceIcons[id.toString()] || defaultIcons.default; // Get the icon or fallback to ID
                return Widget.Button({
                    on_clicked: () => {
                        // Dispatch the workspace switch command
                        hyprland.messageAsync(`dispatch workspace ${id}`);
                    },
                    child: Widget.Label(`${id}:${icon}`), // Display the icon instead of the ID
                    class_name: activeId.as(i => (i === id ? "focused" : "")),
                });
            });
    });

    return Widget.Box({
        class_name: "workspaces",
        children: workspaces,
    });
}
