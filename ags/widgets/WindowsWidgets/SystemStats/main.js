import { getCpuUsage, getMemoryUsage, getCpuTemperature } from "./systemStats.js"; // This file should handle system commands

// CPU Usage Widget
const CpuUsageWidget = () => {
    return Widget.Box({
        spacing: 10,
        children: [
            Widget.Box({
                children: [
                    Widget.Icon({ icon: "cpu-symbolic", size: 25}),
                ]
            }),
            Widget.Box({
                vertical: true,
                children: [
                    Widget.LevelBar({
                        // class_name: "cpuLevelBar",
                        vpack: "center",
                        hexpand: true,
                    }).poll(1000, (self) => {
                        self.value = getCpuUsage().usage/100
                    }),
                    Widget.Box({
                        halign: 2,
                        children: [
                            Widget.Label({
                                css: "font-size: 15px;"
                            }).poll(1000, (self) => {
                                self.label = `${getCpuUsage().usage}%  `
                            }),
                            Widget.Label({
                                css: "font-size: 15px;"
                            }).poll(1000, (self) => {
                                self.label = `${getCpuTemperature().temp}°C`
                            })
                        ]
                    })
                ]
            })
        ],
    });
};

const MemoryUsageWidget = () => {
    return Widget.Box({
        spacing: 10,
        children: [
            Widget.Box({
                children: [
                    Widget.Icon({ 
                        icon: "memory-symbolic", 
                        // vpack: "start",
                        size: 25
                    }),
                ]
            }),
            Widget.Box({
                vertical: true,
                vpack: "start",
                children: [
                    Widget.LevelBar({
                        vpack: "center",
                        hexpand: true,
                    }).poll(1000, (self) => {
                        self.value = getMemoryUsage().usage
                    }),  
                    Widget.Label({
                        halign: 2,
                        css: "font-size: 15px;"
                    }).poll(1000, (self) => {
                        self.label = `${getMemoryUsage().takenMemory/1000}/${getMemoryUsage().allMemory/1000} GB`
                    })
                ]
            })
        ],
    });
};

// Main System Stats Widget
const SystemStatsWidget = () => {
    return Widget.Box({
        class_name: "SystemStatsWidget",
        vertical: true,
        spacing: 10,
        children: [
            CpuUsageWidget(),
            MemoryUsageWidget(),
        ],
    });
};

export { SystemStatsWidget };

