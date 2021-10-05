# QW Control Introduction

## What is QW Control?

QW Control is runbook automation that gives you and your colleagues self-service access to the processes and tools they need to get their job done.

When used for incident management, QW Control will help you have shorter incidents and fewer escalations.

When used for general operations work, QW Control will help alleviate the time-consuming and repetitive toil that currently consumes too much of your team's time.

For more information on use cases, see the [New to QW Control] page.

With QW Control, it is simple and easy to create workflows (called "jobs") from any of your existing tools or scripts. Trigger QW Control jobs from the Web GUI, API, CLI, or by schedule. QW Control's access control features make it easy to safely delegate control of tasks to those traditionally outside of operations.

QW Control was designed to accept the reality that heterogeneous infrastructure and tooling are a fact of life in any sizable organization. That is why QW Control doesn't make you replace the scripts, commands, or tools you use today. You use QW Control to execute workflows across your existing automation (e.g., Ansible, Puppet, Chef, Jenkins, Docker, Kubernetes, legacy tools, and all of your custom scripts/APIs) or quickly automate previously manual procedures. With QW Control you can reuse the automation skills you already have and add new ones as needed.

Out of the box, QW Control gives you capabilities that would be expensive to develop and maintain in-house: workflow control, scheduling, error-handling, logging, access control, option passing, log filtering, web GUI, REST API (with CLI tools) and integration with external sources for authentication, resource model, and option data.

## Is QW Control free?

### QW Control

QW Control Open Source is free open source software licensed under the [Apache Software License v2.0](http://www.apache.org/licenses/LICENSE-2.0.html), and you can participate in the project on [GitHub]. For those who write and run QW Control jobs at small-scale usage (e.g., limited use or within a team), the open-source QW Control delivers you the features you need, for free, _forever_.

#### QW Control Enterprise

The focus of [QW Control Enterprise], our commercial offering, is on making QW Control production-ready and enterprise-scale. QW Control Enterprise, built on the open source QW Control, is the bundle of software and services you need to run QW Control as an enterprise-class service.

Built and tested for the enterprise, QW Control Enterprise includes exclusive features (including clustering/HA, advanced workflow, enhanced ACL management, enhanced dashboards/visualization) and QW Control Enterprise exclusive plugins. Professional support and on-boarding services are also part of the QW Control Enterprise subscription bundle.

_NOTE: QW Control Enterprise was recently renamed from QW Control Pro. You may still see references to "Pro" here and there, as we work to update our documentation. Just know that they are the same thing._

[New to QW Control]: https://www.qwcontrol.com/new-to-qwcontrol
[QW Control Enterprise]: https://www.qwcontrol.com/enterprise
[github]: https://github.com/qwcontrol/qwcontrol

## Who makes QW Control?

[QW Control] is part of the [QW Software] suite of products and is developed by the QW Control Business unit and the QW Control community. The community is welcomed to participate in the project and contribute. Please submit an issue on our GitHub repository listed above or reach out to your Customer Success Team contact.

[QW Control]: https://www.qwcontrol.com/
[QW Software]: https://www.qwsoftware.com/

## QW Control feature highlights

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
[Installing QW Control](/manual/03-getting-started.md#download-and-installation).
