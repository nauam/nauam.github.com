// sidebars
const sidebarIntroduction = require('./sidebar-menus/introduction')
const sidebarIntroductionEn = require('./sidebar-menus/en/introduction')
const sidebarUserGuide = require('./sidebar-menus/user-guide')
const sidebarUserGuideEn = require('./sidebar-menus/en/user-guide')
// navbars
const navbarIntroduction = require('./navbar-menus/introduction')
const navbarIntroductionEn = require('./navbar-menus/en/introduction')
const navbarUserGuide = require('./navbar-menus/user-guide')
const navbarUserGuideEn = require('./navbar-menus/en/user-guide')

module.exports = {
    base: `/`,
    title: 'Documentação',
    locales: {
        '/': {
            lang: 'pt-BR',
            description: 'No mundo atual, a mobilidade dos capitais internacionais auxilia a preparação e a composição do investimento em reciclagem técnica.',
        },
        '/en/': {
            lang: 'en-US',
            description: "In today's world, the mobility of international capital helps the preparation and composition of investment in technical recycling.",
        },
    },
    head: [['link', { rel: 'icon', href: '/images/logo-black.png' }]],
    themeConfig: {
        locales: {
            '/': {
                label: 'Português',
                selectText: 'Linguagens',
                ariaLabel: 'Linguagens',
                nav: [
                    {
                        text: 'Introdução',
                        items: navbarIntroduction
                    },
                    {
                        text: 'Guia do Usuário',
                        items: navbarUserGuide
                    }
                ],
                sidebarDepth: 2,
                sidebar: {
                    '/introduction/': sidebarIntroduction,
                    '/user-guide/': sidebarUserGuide,
                }
            },
            '/en/': {
                label: 'English',
                selectText: 'Languages',
                ariaLabel: 'Languages',
                nav: [
                    {
                        text: 'Introduction',
                        items: navbarIntroductionEn
                    },
                    {
                        text: 'User Guide',
                        items: navbarUserGuideEn
                    }
                ],
                sidebarDepth: 2,
                sidebar: {
                    '/en/introduction/': sidebarIntroductionEn,
                    '/en/user-guide/': sidebarUserGuideEn,
                },
            },
        },
    }
}
