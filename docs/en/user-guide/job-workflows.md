# _Job_ Workflows

The _Job_'s most basic feature is its ability to execute one or more
_steps_. This sequence of _steps_ is called a _workflow_.

The _steps_ of the _Job_ workflow are displayed when viewing a _Job_'s
detail from a _Job_ listing or within the _Job_ editor form.

## Workflow definition

Workflows can be defined within the QW Control graphical console or as an
XML or YAML document that is loaded to the server.

The graphical console provides an authoring environment where _steps_
can be added, edited, removed or reordered.

Users preferring to define _Jobs_ in a text format should refer to the two format definitions:

- XML: [job-xml](/en/user-guide/document-format-reference/job-v20.md)
- YAML: [job-yaml](/en/user-guide/document-format-reference/job-yaml-v12.md)

It is also possible to author _Jobs_ inside the graphical console
and then export the definition as a file using the
`rd` CLI tool ([rd](https://qwsoftware.github.io/qwcontrol-cli/)), or via the API.

See [Command Line Tools and API Acccess][1].

[1]: #command-line-tools-and-api-access

## Workflow control settings

Workflow execution is controlled by two important settings: _Handling a
step failure_ and _Strategy_.

![Workflow controls](/assets/img/fig0401.png)

_If a step fails_: This manages what to do if a _step_ incurs an error:

- Stop at the failed _step_: Fail immediately (default).
- Run remaining _steps_ before failing: Continue to next _steps_ and fail the _job_ at the end.

The default is to fail immediately but depending on the procedure at
hand you can choose to have the execution continue.

<!--- Out of date? _Node_ First, Parallel, Sequential, Ruleset Workflow Strategy --->

_Strategy_: Controls the order of execution of _steps_ and command
dispatch to _nodes_: _Node-oriented_ and _Step-oriented_.

- _Node First_: Executes the full workflow on each _node_ before the
  next _node_. (default)
- _Sequential_: Executes each _step_ on all _nodes_ before the next
  _step_.
- _Parallel_: Run all _steps_ in parallel.

The following illustrations contrast the strategies showing how three
_steps_ proceed across two _nodes_.

_Node_ First flow illustrated:

```sh
1.   NodeA    step#1
2.     "      step#2
3.     "      step#3
4.   NodeB    step#1
5.     "      step#2
6.     "      step#3
```

Sequential flow illustrated:

```sh
1.   NodeA    step#1
2.   NodeB      "
3.   NodeA    step#2
4.   NodeB      "
5.   NodeA    step#3
6.   NodeB      "
```

The process you are automating will determine which strategy is
correct, though the _node_-oriented flow is more commonplace.

For more complex workflow strategy rules, see [Ruleset Workflow Strategy Plugin](/en/user-guide/workflow-strategies/ruleset.md)

## Workflow _steps_

The following sections describe how to construct a workflow as a set
of _steps_ of different types.

When creating a new _Job_ definition, the Workflow form will be set with
defaults and have no workflow _steps_ defined. The workflow editor will
have a form open asking to choose a _step_ type to add.

![Add a _step_](/assets/img/fig0402.png)

To add new _steps_ simply press the "Add a _step_" link inside the workflow
editor form. This will prompt you with a dialog asking which kind of
_step_ you would like to add. Each kind of _step_ has its own
form. When you are done filling out the form, press "Save" to add it
to the sequence. Pressing "Cancel" will close the form and leave the
sequence unchanged.

![Add a _step_ form](/assets/img/fig0403.png)

New _steps_ are always added to the end of the sequence. See
[Reordering _steps_](/en/#reordering-_steps_)
for directions on moving _steps_ into a new order.

Each _step_ can have a "Description" to give it a more logical name or description to be displayed in the QW Control GUI.

The next several sections describe the specification of each kind of
workflow _step_.

### Types of _Steps_

_Steps_ in a workflow can be either _Node Steps_ or _Workflow Steps_.

- _Node_ _Steps_ operate once on each _Node_, which could be multiple times within a workflow. For a full list of _Node_ _Steps_, see [_Job_ Plugins - _Node_ _Steps_](/en/user-guide/job-plugins.md#_node_-_steps_)
- Workflow _Steps_ operate only once in the workflow. For a full list of Workflow _Steps_, see [Workflow _Steps_](/en/user-guide/job-plugins.md#workflow-_steps_)

## Reordering _steps_

The order of the Workflow _steps_ can be modified by hovering over any
_step_ and then clicking and dragging the double arrow icon to the
desired position.

![_Job_ _step_ reorder](/assets/img/fig0408.png)

A blue horizontal bar helps highlight the position
where the _Job_ will land.

![_Job_ _step_ reorder](/assets/img/fig0408a.png)

After releasing the select _Job_, it will land in the desired position
and the _step_ order will be updated.

If you wish to Undo the _step_ reordering, press the "Undo" link above
the _steps_.

The "Redo" button can be pressed to reapply the last undone change.

Press the "Revert All Changes" button to go back to the original _step_ order.

## Error Handlers

Each _step_ in a Workflow can have an associated "Error Handler" action. This handler
is a secondary _step_ of any of the available types that will execute if the Workflow
_step_ fails. Error Handler _steps_ can be used to recover the workflow from failure, or
simply to execute a secondary action.

This provides a few different ways to deal with a _step_'s failure:

- Print additional information about a failure
- Roll back a change
- Recover the workflow from failure, and continue normally

When a Workflow _step_ has a failure, the behavior depends on whether it has an Error Handler or not,
and the value of the "keepgoing" setting for the Workflow, and the value of the "keepgoingOnSuccess" for the Error Handler.

- When a _step_ fails **without an Error Handler**
  1. the Workflow is marked as "failed"
  2. If `keepgoing="false"`
     1. then the entire Workflow stops
  3. Otherwise, the remaining Workflow _steps_ are executed in order
  4. the Workflow ends with a "failed" result status

If you define an Error Handler for a _step_, then the behavior changes. The handler can recover the _step_'s failure by executing successfully, and a secondary option "keepgoingOnSuccess" will
let you override the Workflow's "keepgoing" value if it is false.

- When a _step_ fails **with an Error Handler**
  1. The Error Handler is executed
  2. If the Error Handler was successful and has `keepgoingOnSuccess="true"`
     1. The workflow `keepgoing` is ignored,
     2. The Workflow failure status is _not_ marked, and it will continue to the next _step_
  3. Else if `keepgoing="false"`
     1. The Workflow is marked as "failed"
     2. Then the entire Workflow stops
  4. Else if `keepgoing="true"`
     1. If the Error Handler failed then the Workflow is marked as "failed"
     2. Otherwise, the Workflow is _not_ additionally marked
  5. the remaining Workflow _steps_ are executed in order (including other triggered Error Handlers)
  6. when the Workflow ends, its status depends on if it is marked

Essentially, the result status of the Error Handler becomes the result status of its _Step_, if the Workflow
has `keepgoing="true"` or if the Error Handler overrides it with `keepgoingOnSuccess="true"`. If the Error Handler succeeds, then the _step_ is not considered to have failed. This
includes scripts, commands, _job_ references, etc. (Scripts and commands must have an exit status of `0` to
return success.)

It is a good practice, when you are defining Error Handlers, to **always** have them fail (e.g. scripts/commands return a non-zero exit-code), unless you specifically want them to be used for Recovery.

::: tip
Error-handlers can be attached to either _Node_ _Steps_ or Workflow _Steps_, and the type of _step_ and the Strategy of the Workflow determines what type of Error-handler _steps_ can be attached to a _step_. The only restriction is in the case that the Workflow is "_Node_-oriented", which means that the workflow is executed independently for each _node_. In this case, _Node_ _Steps_ can only have other _Node_ _steps_ as Error Handlers. In other cases, the Error Handler can be other Workflow _steps_.
:::

To add an error handler press the "settings" button on the _step_ you want to handle.

![Adding an error handler](/assets/img/fig0410.png)

The form presented includes the normal set of _steps_ you can add to a workflow.

![Adding an error handler](/assets/img/fig0410a.png)

The example below shows an error handler that calls a script by URL.

![Example error handler](/assets/img/fig0411.png)

### Context information

When the Error-handler _step_ is executed, its execution context will contain some information about the nature
of the failure that occurred for the original _step_.

In the case where a _Node_ _Step_ has a Workflow _Step_ as an Error Handler, then the failure data for multiple _nodes_ is rolled up into a single failure reason to be used by the Workflow _Step_.

See the section on [Context Variables](/en/user-guide/job-workflows.html#context-variables) for more information.

## Save the changes

Once the Workflow _steps_ have been defined and order, changes are
permanently saved after pressing the "Create" button if new or the
"Update" button if the _Job_ is being modified.

## Context Variables

When a _Job_ _step_ is executed, it has a set of "context" variables that you can access in the _Job_ _step_. There are several sets of context variables, including: the _Job_ context `job`, the _Node_ context `node`, and the Option context `option`.

_Job_ context variables (Global scope):

- `job.name`: Name of the _Job_
- `job.group`: Group of the _Job_
- `job.id`: ID of the _Job_
- `job.execid`: ID of the current Execution
- `job.executionType` : Execution type, can be `user`, `scheduled` or `user-scheduled` for `Run _Job_ Later` executions
- `job.username`: Username of the user executing the _Job_
- `job.project`: Project name
- `job.loglevel`: Logging level, one of: 'ERROR','WARN','INFO','VERBOSE','DEBUG'
- `job.user.email`: Executing user's email address set in [User profile](/en/user-guide/10-user.md).
- `job.retryAttempt`: A number indicating the attempt, if this execution is a [retry](/en/#retry).
- `job.wasRetry`: `true` if this execution is a retry, otherwise `false`. See: [retry](/en/#retry).
- `job.threadcount`: Threadcount (number of _nodes_ run at once) of the _Job_
- `job.filter`: The filter used to select the _nodes_ for this _job_ (if applicable)

_Node_ context variables (_Node_ scope):

- `node.name`: Name of the _Node_ being executed on
- `node.hostname`: Hostname of the _Node_
- `node.username`: Username of the remote user
- `node.description`: Description of the _node_
- `node.tags`: Comma-separated list of tags
- `node.os-*`: OS properties of the _Node_: `name`,`version`,`arch`,`family`
- `node.*`: All _Node_ attributes defined on the _Node_.

Execution context variables (Global scope):

The execution data is included as a Map called execution containing the following keys and values:

- `execution.id`: ID of the execution
- `execution.href`: URL to the execution output view
- `execution.status`: Execution state ('running','failed','aborted','succeeded')
- `execution.user`: User who started the _job_
- `execution.dateStarted`: Start time (java.util.Date)
- `execution.dateStartedUnixtime`: Start time as milliseconds since epoch (long)
- `execution.dateStartedW3c`: Start time as a W3C formatted String
- `execution.description`: Summary string for the execution
- `execution.argstring`: Argument string for any _job_ options
- `execution.project`: Project name
- `execution.loglevel`: Loglevel string ('ERROR','WARN','INFO','VERBOSE','DEBUG')
The following values may be available after the _job_ is finished (not available for onstart trigger):
- `execution.failedNodeListString`: Comma-separated list of any _nodes_ that failed, if present
- `execution.failedNodeList`: Java List of any _node_ names that failed, if present
- `execution.succeededNodeListString`: Comma-separated list of any _nodes_ that succeeded, if present
- `execution.succeededNodeList`: Java List of any _node_ names that succeeded, if present
- `execution.nodestatus`: Java Map containing summary counts of _node_ success/failure/total, in the form: [succeeded: int, failed: int, total: int]
- `execution.dateEnded`: End time (java.util.Date)
- `execution.dateEndedUnixtime`: End time as milliseconds since epoch (long)
- `execution.dateEndedW3c`: End time as W3C formatted string
- `execution.abortedby`: User who aborted the execution

Additional Error-handler context variables (Global scope):

- `result.reason`: A code indicating the reason the _step_ failed
  - Common reason code strings used by _node_ execution of commands or scripts:
    - `NonZeroResultCode` - the execution returned a non-zero code
    - `SSHProtocolFailure` - SSH protocol failure
    - `HostNotFound` - host not found
    - `ConnectionTimeout` - connection timeout
    - `ConnectionFailure` - connection failure (e.g. refused)
    - `IOFailure` - IO error
    - `AuthenticationFailure` - authentication was refused or incorrect
  - Reason code strings used by _Job_ references
    - `JobFailed` - referenced _Job_ workflow failed
    - `NotFound` - referenced _Job_ not found
    - `Unauthorized` - referenced _Job_ not authorized
    - `InvalidOptions` - referenced _Job_ input options invalid
    - `NoMatchedNodes` - referenced _Job_ _node_ dispatch filters had no match
  - Reason code used from a failed _Node_ _Step_ if the handler is a Workflow _Step_
    - `NodeDispatchFailure` - one or more _nodes_ failed the _step_
- `result.message`: A string describing the failure
- `result.resultCode`: Exit code from an execution (if available)
- `result.failedNodes`: Comma-separated list of _node_ names that failed for a `NodeDispatchFailure`

Option context variables are referred to as `option.NAME` (more about [_Job_ Options](/en/user-guide/job-options.md).)

There may be additional context variables available, such as `data.*` values when using the [Data Capture Log Filter Plugins](/en/user-guide/job-workflows.html#data-capture-log-filter-plugins).

### Context Variable Usage

Context variables can be used in a few ways in a _Job_ _step_, with slightly different syntaxes:

- Commands, Script Arguments and _Job_ Reference Arguments

  : `${ctx.name}`

- Inline Script Content (_see note_)

  : `@ctx.name@`

::: tip Note
The "Inline Script Content" variable expansion is **not** available for "Script File" _steps_. The Script File is not rewritten at all when used for execution.
:::

::: tip
This can be disabled, see [Administrator Guide > Configuration File Reference > framework.properties](/en/administration/configuration/config-file-reference.md#framework-properties).
:::

- Environment Variables (_see note_)

  : `$RD_CTX_NAME`

  The syntax for Environment variables is that all letters become uppercase, punctuation is replaced with underscore, and the name is prefixed with `RD`.

::: tip Note
See the chapter [Configuring Remote Machine for SSH](/en/administration/projects/_node_-execution/ssh.md#configuring-remote-machine-for-ssh) for information about requirements of the SSH server.
:::

- Special syntax for different Scopes (see below)

### About Context Variable Scopes

The `job.*`, and `execution.*` variables mentioned above exist in the Global scope.

Global Scope variables are available to all types of Workflow _steps_.

The `node.*` values are available within a _Node_ scope.  There can be multiple _Node_ Scopes, and each _Node_ Scope is bound to a particular _Node_ Name.

_Node_ Scope values for a particular _Node_ name, are available within the same Scope for the same _Node_.

Variables that are added to the Context while the workflow is executing, such as `data.*` variables, get added to either the Global Scope or a _Node_ Scope.  

If the variable is added within a _Node_ _Step_, then the data values are stored within the _Node_ Scope for that _node_. This allows multiple values to be added by different _nodes_ with the same variable name.

Any variables within the same Scope can be referenced without special syntax.  For example, within a _Node_ _Step_ other variables
added to the Context within the same _Node_ Scope for the same _node_ can be referenced using `${data.MyKey}`.

If a value is not found for the variable reference within the current scope, the scope is "widened" to find it at a higher scope. So all Globally Scoped variable
values can be referenced using the normal syntax.

_Node_ Scope values can be referenced either from the Global scope or a different _Node_'s scope by using a special syntax:

- `${data.MyKey@MyNodeName}` - reference the variable within the _Node_ scope for the `MyNodeName` _node_.
- `${data.MyKey*}` - collects all variable values from all _Node_ Scopes, and produces a single value using a `,` (comma) to delimit the values.
- `${data.MyKey*;}` - specifies a different delimiter for the values

::: tip
If a variable reference does not produce the value that is expected, make sure the Scope of the value and the Scope of the reference point (i.e where the context variable reference is being evaluated) correspond.

The **Log Data** Workflow _Step_ will log all scoped context variables, to visualize what values are available at a certain point in a workflow.

The Workflow Strategy used in the Workflow governs when _steps_ execute: A sequential strategy means each _step_ will be processed before subsequent _steps_, which allows (for example) _Step_ 2 to reference any value stored in _Step_ 1, even from different _Nodes_.  However, a _Node_-first, Parallel or Ruleset Strategy will have different behavior, so depending on the order in which _Steps_ are executed, some captured values may or may not be present.
:::

### Data Capture Log Filter Plugins

QW Control offers two different data capture Log Filter plugins. The first, Key Value Data, captures simple Key/Value data using a simple text format. The second, Multiline Regex Data Capture, captures multiline regex key/value data using a simple text format. The data capture Log Filter plugins allow users to define and utilize data variables across numerous _job_ _steps_.

For more information on Key Value data, see [Key Value Data](/en/user-guide/log-filters/key-value-data.md).

For more information on Key Value data, see [Multiline Regex Capture](/en/user-guide/log-filters/multi-line-regex.md).

### Command Line Tools and API access

_Jobs_ can be exported or imported in XML or Yaml format using the API or the `rd` CLI tool.

- [Exporting _Jobs_](/en/api/qwcontrol-api.md#exporting-_jobs_)
- [Importing _Jobs_](/en/api/qwcontrol-api.md#importing-_jobs_)
- [RD CLI Tool](https://qwsoftware.github.io/qwcontrol-cli/)
