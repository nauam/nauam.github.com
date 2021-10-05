# Introduction

## What is ?

 is runbook automation that gives you and your colleagues self-service access to the processes and tools they need to get their job done.

When used for incident management, will help you have shorter incidents and fewer escalations.

When used for general operations work, will help alleviate the time-consuming and repetitive toil that currently consumes too much of your team's time.

For more information on use cases, see the [New to ] page.

With , it is simple and easy to create workflows (called "jobs") from any of your existing tools or scripts. Trigger jobs from the Web GUI, API, CLI, or by schedule. 's access control features make it easy to safely delegate control of tasks to those traditionally outside of operations.

 was designed to accept the reality that heterogeneous infrastructure and tooling are a fact of life in any sizable organization. That is why doesn't make you replace the scripts, commands, or tools you use today. You use to execute workflows across your existing automation (e.g., Ansible, Puppet, Chef, Jenkins, Docker, Kubernetes, legacy tools, and all of your custom scripts/APIs) or quickly automate previously manual procedures. With you can reuse the automation skills you already have and add new ones as needed.

Out of the box, gives you capabilities that would be expensive to develop and maintain in-house: workflow control, scheduling, error-handling, logging, access control, option passing, log filtering, web GUI, REST API (with CLI tools) and integration with external sources for authentication, resource model, and option data.

## Is free?

### 

 Open Source is free open source software licensed under the [Apache Software License v2.0](http://www.apache.org/licenses/LICENSE-2.0.html), and you can participate in the project on [GitHub]. For those who write and run jobs at small-scale usage (e.g., limited use or within a team), the open-source delivers you the features you need, for free, _forever_.

#### Enterprise

The focus of [ Enterprise], our commercial offering, is on making production-ready and enterprise-scale. Enterprise, built on the open source , is the bundle of software and services you need to run as an enterprise-class service.

Built and tested for the enterprise, Enterprise includes exclusive features (including clustering/HA, advanced workflow, enhanced ACL management, enhanced dashboards/visualization) and Enterprise exclusive plugins. Professional support and on-boarding services are also part of the Enterprise subscription bundle.

_NOTE: Enterprise was recently renamed from Pro. You may still see references to "Pro" here and there, as we work to update our documentation. Just know that they are the same thing._

[New to ]: https://www.github.com/new-to-github
[ Enterprise]: https://www.github.com/enterprise
[github]: https://github.com/github/github

## Who makes ?

[Software] is part of the [Software] suite of products and is developed by the Business unit and the community. The community is welcomed to participate in the project and contribute. Please submit an issue on ourgithub repository listed above or reach out to your Customer Success Team contact.

[]: https://www.github.com/
[Software]: https://www.software.com/

## feature highlights

- Distributed command execution
- Workflow (including option passing, conditionals, error handling, and multiple workflow strategies)
- Pluggable execution system (SSH and WinRM by default; PowerShell available)
- Pluggable resource model (get details of your infrastructure from external systems)
- On-demand (Web GUI, API or CLI) or scheduled job execution
- Secure Key store for passwords and keys
- Role-based access control policy with support for LDAP/ActiveDirectory/SSO
- Access control policy editing/management tools
- History and auditing logs
- Use any scripting language

Want to learn more or give it a test run?
[Check out the Learning Page for a Welcome Tutorial](/learning)

Already itching to install it? Jump ahead to
[Installing ](/manual/03-getting-started.md#download-and-installation).
