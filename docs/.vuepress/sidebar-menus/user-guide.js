module.exports = [{
    title: 'Guia do Usuário',
    collapsable: false,
    sidebarDepth: 1,
    children: [
        ['/user-guide/projects', 'Projetos'],
        {
            title: 'Jobs',
            collapsable: true,
            path: '/user-guide/jobs',
            sidebarDepth: 1,
            children: [
                '/user-guide/jobs',
                '/user-guide/creating-jobs',
                '/user-guide/job-workflows',
                '/user-guide/job-options',
                // '/user-guide/jobs/job-notifications',
                // {
                //     title: 'Log Filters',
                //     collapsable: true,
                //     path: '/user-guide/log-filters/',
                //     sidebarDepth: 1,
                //     children: [
                //         '/user-guide/log-filters/key-value-data.md',
                //         '/user-guide/log-filters/quiet-output.md',
                //         '/user-guide/log-filters/progress-badge.md',
                //         '/user-guide/log-filters/highlight-output.md',
                //         '/user-guide/log-filters/render-formatted-data.md',
                //         '/user-guide/log-filters/mask-passwords.md',
                //         '/user-guide/log-filters/json-jq.md',
                //         '/user-guide/log-filters/multi-line-regex.md'
                //     ]
                // },
                // '/user-guide/job-plugins',
                // '/user-guide/execution-lifecycle/job-resume.md',
                // '/user-guide/execution-lifecycle/job-retry-failed-nodes.md',
                // '/user-guide/execution-lifecycle/job-data.md',
                // '/user-guide/jobs/job-queue.md',
            ]
        },
        // {
        //     title: 'Nós',
        //     collapsable: true,
        //     path: '/user-guide/05-nodes',
        //     sidebarDepth: 1,
        //     children: [
        //         '/user-guide/05-nodes',
        //         '/user-guide/node-enhancers.md',
        //         '/user-guide/11-node-filters.md',
        //         {
        //             title: 'Health Checks',
        //             collapsable: true,
        //             path: '/user-guide/healthchecks',
        //             sidebarDepth: 2,
        //             children: [
        //                 '/user-guide/healthchecks',
        //                 '/user-guide/healthcheckplugins/datadog.md',
        //                 '/user-guide/healthcheckplugins/sensu.md',
        //                 '/user-guide/healthcheckplugins/azure-healthcheck.md'
        //             ]
        //         }
        //     ]
        // },
        // {
        //     title: 'Comandos',
        //     path: '/user-guide/06-commands',
        //     collapsable: true,
        //     sidebarDepth: 1
        // },
        // {
        //     title: 'Atividade',
        //     path: '/user-guide/08-activity',
        //     collapsable: true,
        //     sidebarDepth: 2,
        //     children: [
        //         '/user-guide/08-activity',
        //         '/user-guide/07-executions'
        //     ]
        // },
        // {
        //     title: 'Agendamentos',
        //     collapsable: true,
        //     path: '/user-guide/schedules/project-schedules',
        //     children: [
        //         '/user-guide/schedules/project-schedules.md',
        //         '/user-guide/schedules/missedjobfires.md'
        //     ],
        //     sidebarDepth: 1
        // },
        // {
        //     title: 'Calendários',
        //     collapsable: true,
        //     path: '/user-guide/calendars',
        //     sidebarDepth: 2,
        //     children: [
        //         '/user-guide/calendars',
        //         '/user-guide/calendars/system-calendars.md',
        //         '/user-guide/calendars/project-calendars.md',
        //         '/user-guide/calendars/import-export.md'
        //     ]
        // },
        // {
        //     title: 'Webhooks',
        //     collapsable: true,
        //     path: '/user-guide/12-webhooks',
        //     sidebarDepth: 2,
        //     children: [
        //         '/user-guide/12-webhooks',
        //         {
        //             title: 'Webhooks Handlers',
        //             sidebarDepth: 2,
        //             children: [
        //                 '/user-guide/webhooks/advanced-run-job',
        //                 '/user-guide/webhooks/pagerduty-run-job',
        //                 '/user-guide/webhooks/datadog-run-job.md',
        //                 '/user-guide/webhooks/aws-sns-webhook',
        //                 '/user-guide/webhooks/github-webhook',
        //                 '/user-guide/webhooks/run-job.md',
        //                 '/user-guide/webhooks/log-events.md'
        //             ]
        //         },
        //     ]
        // },
        // {
        //     title: 'Tour Manager',
        //     collapsable: true,
        //     path: '/user-guide/tour-manager.md',
        //     sidebarDepth: 1
        // },
        // {
        //     title: 'Configurações do Projeto',
        //     collapsable: true,
        //     path: '/user-guide/project-settings',
        //     sidebarDepth: 2
        // },
        // {
        //     title: 'Menu do Sistema',
        //     collapsable: true,
        //     path: '/user-guide/system-configs',
        //     sidebarDepth: 1,
        //     children: [
        //         '/user-guide/system-configs',
        //         '/user-guide/user-management/user-mgmt',
        //         '/user-guide/system-report',
        //         '/user-guide/configuration-mgmt/configmgmt'
        //     ]
        // },
        // ['/user-guide/10-user.md', 'Menu de Perfil'],
        // {
        //     title: 'Integrações',
        //     collapsable: true,
        //     path: '/user-guide/integrations',
        //     sidebarDepth: 1,
        //     children: [
        //         '/user-guide/integrations/servicenow-app.md'
        //     ]
        // },
        // {
        //     title: 'Formatos de Documento',
        //     collapsable: true,
        //     path: '/user-guide/document-format-reference',
        //     sidebarDepth: 1,
        //     children: [
        //         '/user-guide/document-format-reference/aclpolicy-v10.md',
        //         '/user-guide/document-format-reference/job-v20.md',
        //         '/user-guide/document-format-reference/job-yaml-v12.md',
        //         '/user-guide/document-format-reference/resource-json-v10.md',
        //         '/user-guide/document-format-reference/resource-v13.md',
        //         '/user-guide/document-format-reference/resource-yaml-v13.md',
        //     ]
        // }
    ]
}]
