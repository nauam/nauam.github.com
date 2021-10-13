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
    title: 'QW Control',
    locales: {
        '/': {
            lang: 'pt-BR',
            description: 'Plataforma de automação e orquestração de serviços, processos de TI e de negócios.',
        },
        '/en/': {
            lang: 'en-US',
            description: 'Automation and orchestration platform for services, IT and business processes.',
        },
    },
    head: [['link', { rel: 'icon', href: '/images/qwcontrollogo-black-small.png' }]],
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
