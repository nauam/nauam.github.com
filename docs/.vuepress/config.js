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
    title: 'Documentos',
    locales: {
        '/': {
            lang: 'pt-BR',
            description: 'Ainda assim, existem dúvidas a respeito de como o julgamento imparcial das eventualidades aponta para a melhoria das formas de ação.',
        },
        '/en/': {
            lang: 'en-US',
            description: 'Still, there are doubts about how the impartial judgment of eventualities points to the improvement of the forms of action.',
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
