module.exports = {
    base: "/docs/",
    title: 'Hello, VuePress!',
    description: 'This is my first VuePress site',
    head: [
        [
            "link",
            { rel: "icon", href: "/gamepad_game_128px.ico" } //docs/.vuepress/public
        ]
    ],
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        nav: [
            { text: "flow", link: "/pages/flow.md" },
            { text: "Github", link: "/pages/Github.md" },
            { text: "VuePress", link: "/pages/VuePress.md" },
            { text: "TravisCI", link: "/pages/TravisCI.md" },
            { text: "nauam", link: "https://tsanfer.xyz" }
        ],
        sidebarDepth: 2,
        sidebar: [
            ["/pages/flow.md", "flow"],
            ["/pages/Github.md", "Github"],
            ["/pages/VuePress.md", "VuePress"],
            ["/pages/TravisCI.md", "TravisCI"]
        ],
        //GitHub.
        repo: "nauam/nauam.github.io/qwcdocs",
        repoLabel: "Github",
        docsDir: "docs",
        docsBranch: "master",
        editLinks: true,
        editLinkText: "Github",
        smoothScroll: true,
        lastUpdated: "Last Updated"
    },
    plugins: [
        "@vuepress/medium-zoom",
        "@vuepress/nprogress",
        "@vuepress/back-to-top",
        "@vuepress/nprogress",
        "reading-progress"
    ]
};
