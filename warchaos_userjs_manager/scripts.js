var scripts = [
    {name: "icon_replacer", events: ["frame_load", "click"], match: ["http://warchaos.ru/*"]},
    {name: "replace_force_size", events: ["frame_load", "click", "load"], match: ["http://warchaos.ru/f/a", "http://warchaos.ru/snapshot/*", "http://warchaos.ru/~snapshot/*"]},
    {name: "ap_calc", events: ["frame_load", "click"], match: ["http://warchaos.ru/f/a"]},
    {name: "buildings", events: ["load"], match: ["http://warchaos.ru/f/a"]},
    {name: "loot_button", events: ["frame_load", "click"], match: ["http://warchaos.ru/f/a"]},
    {name: "main_menu", events: ["load"], match: ["http://warchaos.ru/*"]},
    {name: "marker", events: ["load"], match: ["http://warchaos.ru/f/a"]},
];
