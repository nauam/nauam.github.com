module.exports = [{
    title: 'User Guide',
    collapsable: false,
    sidebarDepth: 1,
    children: [
        ['/en/user-guide/projects', 'Projects'],
        {
            title: 'Jobs',
            collapsable: true,
            path: '/en/user-guide/jobs',
            sidebarDepth: 1,
            children: [
                '/en/user-guide/jobs',
                '/en/user-guide/creating-jobs',
                '/en/user-guide/job-workflows',
                '/en/user-guide/job-options',
                // '/en/user-guide/jobs/job-notifications',
                // {
                //     title: 'Log Filters',
                //     collapsable: true,
                //     path: '/en/user-guide/log-filters/',
                //     sidebarDepth: 1,
                //     children: [
                //         '/en/user-guide/log-filters/key-value-data.md',
                //         '/en/user-guide/log-filters/quiet-output.md',
                //         '/en/user-guide/log-filters/progress-badge.md',
                //         '/en/user-guide/log-filters/highlight-output.md',
                //         '/en/user-guide/log-filters/render-formatted-data.md',
                //         '/en/user-guide/log-filters/mask-passwords.md',
                //         '/en/user-guide/log-filters/json-jq.md',
                //         '/en/user-guide/log-filters/multi-line-regex.md'
                //     ]
                // },
                // '/en/user-guide/job-plugins',
                // '/en/user-guide/execution-lifecycle/job-resume.md',
                // '/en/user-guide/execution-lifecycle/job-retry-failed-nodes.md',
                // '/en/user-guide/execution-lifecycle/job-data.md',
                // '/en/user-guide/jobs/job-queue.md',
            ]
        },
        // {
        //     title: 'Nodes',
        //     collapsable: true,
        //     path: '/en/user-guide/05-nodes',
        //     sidebarDepth: 1,
        //     children: [
        //         '/en/user-guide/05-nodes',
        //         '/en/user-guide/node-enhancers.md',
        //         '/en/user-guide/11-node-filters.md',
        //         {
        //             title: 'Health Checks',
        //             collapsable: true,
        //             path: '/en/user-guide/healthchecks',
        //             sidebarDepth: 2,
        //             children: [
        //                 '/en/user-guide/healthchecks',
        //                 '/en/user-guide/healthcheckplugins/datadog.md',
        //                 '/en/user-guide/healthcheckplugins/sensu.md',
        //                 '/en/user-guide/healthcheckplugins/azure-healthcheck.md'
        //             ]
        //         }
        //     ]
        // },
        // {
        //     title: 'Commands',
        //     path: '/en/user-guide/06-commands',
        //     collapsable: true,
        //     sidebarDepth: 1
        // },
        // {
        //     title: 'Activity',
        //     path: '/en/user-guide/08-activity',
        //     collapsable: true,
        //     sidebarDepth: 2,
        //     children: [
        //         '/en/user-guide/08-activity',
        //         '/en/user-guide/07-executions'
        //     ]
        // },
        // {
        //     title: 'Schedules',
        //     collapsable: true,
        //     path: '/en/user-guide/schedules/project-schedules',
        //     children: [
        //         '/en/user-guide/schedules/project-schedules.md',
        //         '/en/user-guide/schedules/missedjobfires.md'
        //     ],
        //     sidebarDepth: 1
        // },
        // {
        //     title: 'Calendars',
        //     collapsable: true,
        //     path: '/en/user-guide/calendars',
        //     sidebarDepth: 2,
        //     children: [
        //         '/en/user-guide/calendars',
        //         '/en/user-guide/calendars/system-calendars.md',
        //         '/en/user-guide/calendars/project-calendars.md',
        //         '/en/user-guide/calendars/import-export.md'
        //     ]
        // },
        // {
        //     title: 'Webhooks',
        //     collapsable: true,
        //     path: '/en/user-guide/12-webhooks',
        //     sidebarDepth: 2,
        //     children: [
        //         '/en/user-guide/12-webhooks',
        //         {
        //             title: 'Webhooks Handlers',
        //             sidebarDepth: 2,
        //             children: [
        //                 '/en/user-guide/webhooks/advanced-run-job',
        //                 '/en/user-guide/webhooks/pagerduty-run-job',
        //                 '/en/user-guide/webhooks/datadog-run-job.md',
        //                 '/en/user-guide/webhooks/aws-sns-webhook',
        //                 '/en/user-guide/webhooks/github-webhook',
        //                 '/en/user-guide/webhooks/run-job.md',
        //                 '/en/user-guide/webhooks/log-events.md'
        //             ]
        //         },
        //     ]
        // },
        // {
        //     title: 'Tour Manager',
        //     collapsable: true,
        //     path: '/en/user-guide/tour-manager.md',
        //     sidebarDepth: 1
        // },
        // {
        //     title: 'Project Settings',
        //     collapsable: true,
        //     path: '/en/user-guide/project-settings',
        //     sidebarDepth: 2
        // },
        // {
        //     title: 'System Menu',
        //     collapsable: true,
        //     path: '/en/user-guide/system-configs',
        //     sidebarDepth: 1,
        //     children: [
        //         '/en/user-guide/system-configs',
        //         '/en/user-guide/user-management/user-mgmt',
        //         '/en/user-guide/system-report',
        //         '/en/user-guide/configuration-mgmt/configmgmt'
        //     ]
        // },
        // ['/en/user-guide/10-user.md', 'Profile Menu'],
        // {
        //     title: 'Integrations',
        //     collapsable: true,
        //     path: '/en/user-guide/integrations',
        //     sidebarDepth: 1,
        //     children: [
        //         '/en/user-guide/integrations/servicenow-app.md'
        //     ]
        // },
        // {
        //     title: 'Document Formats',
        //     collapsable: true,
        //     path: '/en/user-guide/document-format-reference',
        //     sidebarDepth: 1,
        //     children: [
        //         '/en/user-guide/document-format-reference/aclpolicy-v10.md',
        //         '/en/user-guide/document-format-reference/job-v20.md',
        //         '/en/user-guide/document-format-reference/job-yaml-v12.md',
        //         '/en/user-guide/document-format-reference/resource-json-v10.md',
        //         '/en/user-guide/document-format-reference/resource-v13.md',
        //         '/en/user-guide/document-format-reference/resource-yaml-v13.md',
        //     ]
        // }
    ]
}]
