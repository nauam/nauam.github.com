// sidebars
const sidebarIntroduction = require('./sidebar-menus/introduction')
const sidebarIntroductionEn = require('./sidebar-menus/en/introduction')
// navbars
const navbarIntroduction = require('./navbar-menus/introduction')
const navbarIntroductionEn = require('./navbar-menus/en/introduction')

module.exports = {
    base: `/QW_Control_Docs/`,
    title: 'QW Control',
    locales: {
        '/': {
            lang: 'pt-BR',
            description: 'Plataforma de automação e orquestração de serviços',
        },
        '/en/': {
            lang: 'en-US',
            description: 'Automation and Service Orchestration Platform',
        },
    },
    head: [['link', { rel: 'icon', href: '/images/qwcontrollogo-black-small.png' }]],
    themeConfig: {
        locales: {
            '/': {
                lang: 'pt-BR',
                nav: [
                    {
                        text: 'Introdução',
                        items: navbarIntroduction
                    },
                    {
                        text: 'QW Software',
                        link: 'https://qwsoftware.com.br'
                    }
                ],
                sidebarDepth: 2,
                sidebar: {
                    '/introduction/': sidebarIntroduction,
                }
            },
            '/en/': {
                nav: [
                    {
                        text: 'Introduction',
                        items: navbarIntroductionEn
                    },
                    {
                        text: 'QW Software',
                        link: 'https://qwsoftware.com.br'
                    }
                ],
                sidebarDepth: 2,
                sidebar: {
                    '/en/introduction/': sidebarIntroductionEn,
                },
            },
        },
    }
}
