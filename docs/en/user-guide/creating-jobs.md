# Creating s

## Creating a 

From the s, page press the "Create " menu to begin creating a . Then
menu contains items to create a  definition or upload a definition from a file.

![Create  menu](/assets/img/fig0301.png)

For the first  example, create a  that calls the info script.

Like in the earlier example, begin by pressing the "New " menu item.

Within the new  form:

For " Name", enter "info" and for the "Group", enter "administration/resources".
If you want to specify your own UUID you can enter it in the field.
Otherwise a unique value will be set for you.
Providing a description will become helpful to other users to understand the intent and purpose for the .

Give the  a description. It's best practice to give a short description on the first line.
Create one blank line and all subsequent lines can use markdown format.
You can see line 3, has text that show a URL link in markdown format. When shows the , this extra information can be displayed to the user. Rich text is useful to link to external tools or even charts and graphs. Anything useful to support the  user.

Check the box for "Dispatch to Nodes".
Choose the "Node Exclude Filters" and enter the name of your server.
This will cause the  to run on just the remote Nodes (eg., centos54 and ubuntu).

Type in shell script that produces some information (eg, `uname -a`)

Save the Workflow step.

Press the "Create" button at the bottom of the page.

![Simple saved  form](/assets/img/fig0303.png)

After the the  is created, the browser is directed to the page of the  you just created. The  can be run by clicking the Run  Now button.

![Simple  form](/assets/img/fig0303-a.png)

When you go to the s page, you will see folder icons reflecting the 's group.
Navigate through to the administration/resources folder. Notice the extra information is displayed, markdown now rendered as HTML.

Notice the play button before the  name.

Press the play button to run the .

![Simple saved ](/assets/img/fig0304.png)

Press the "Run  Now" button to begin execution.
The  will be queued and executed. You will be taken to the 's
execution details page.

![Simple saved  output](/assets/img/fig0305.png)

### Multiple Executions

By default, a  runs as a "Single Execution" -- it can only have a single execution running at a time. This is useful if the steps the  performs might be interfered with if another separate process was also performing them on the same Node(s).

However, in some cases it is useful to allow a  to be executed more than once simultaneously.

You can make a  allow "Multiple Executions" by toggling the value to Yes in the  editor field shown below:

![Multiple executions](/assets/img/fig0324.png)

### Timeout

You can set a maximum runtime for a . If the runtime exceeds this value, the  will be halted (as if a user had killed it.) (Note: Timeout only affects the  if is invoked directly, not if it is used as a  Reference.)

![ Timeout field](/assets/img/s-timeout-field.png)

The value for the timeout can be:

- A number of seconds, such as `240`
- A string indicating numbers and units, such as "1d 12h 30m 24s". Each number must have a unit letter next to it. The total timeout duration will be the sum of the values. Available units are "d" (days) "h" (hours) "m" (minutes) and "s" (seconds, default if unspecified.)
- An embedded property reference such as `${option.timeout}`. This allows a  Option to be used to change the timeout for the .

### Retry

You can set a maximum number of retries for a .
If a  fails or times out,
it will be executed again up to the specified number of times
until it succeeds. (Note: Retry only affects the  if is invoked directly, not if it is used as a  Reference.)

![ Retry field](/assets/img/s-retry-field.png)

The value for the retry can be:

- A specific integer number
- An embedded property reference such as `${option.retryMax}`. This allows a  Option to be used to change the retry count for the .

Each execution will be started with context variables
indicating the current retry attempt and whether it was a retry.
See [Context Variables](/en/user-guide/-workflows.md#context-variables).

Optionally a delay between retries can be established:

- A number of seconds, such as `30`
- A string indicating numbers and units, such as "1d 12h 30m 24s". Each number must have a unit letter next to it. The total timeout duration will be the sum of the values. Available units are "d" (days) "h" (hours) "m" (minutes) and "s" (seconds, default if unspecified.)
- An embedded property reference such as `${option.delay}`. This allows a  Option to be used to change the delay between retries for the .

![ Delay between retries field](/assets/img/s-retry-delay-field.png)

### Log Limit

You can specify a log limit, which can perform an action depending on how much log output
the  produces.

The limit can be set in one of three ways:

- Maximum total number of log lines
- Maximum total log file size
- Maximum number of log lines for a single node

![ Log limit](/assets/img/s-loglimit-field.png)

Enter a value in the "Log Output Limit" field.
The syntax of the value you enter determines the type of limit:

- `###` If you specify a number, that is treated as the "Maximum total number of log lines"
- `###/node` If you specify a number followed by `/node`, the number is treated as the "Maximum number of log lines for a single node"
- `###[GMK]B` If you specify a number followed by a filesize suffix, that is treated as the "total log file size". The file size suffixes allowed are "GB" (gigabyte), "MB" (megabyte), "KB" (kilobyte) and "B" (byte).

And one of three actions can be performed if the limit is exceeded:

- Halt
  - the  will halt with a certain status
  - Enter a status string in the field, such as "failed" or "aborted", or any custom status
- Truncate and Continue
  - the  will not halt, but no more log output will be produced.

![ Log limit action](/assets/img/s-loglimit-action.png)

### Node dispatching and filtering

When you create a  you can choose between either running the  only locally (on the server), or dispatching it to multiple nodes (including the server if you want).

In the GUI, the "Dispatch to Nodes" checkbox lets you enable node dispatching. When you click this box you are presented with the Node Filtering interface:

![Node Filtering interface](/assets/img/fig0305-b.png)

#### Filters

You can click the different filter fields "Name", and "Tags" to enter filter values for those fields. As you update the values you will see the "Matched Nodes" section updated to reflect the list of nodes that will match the inputs. You can click "More" to see more of the available inclusion filters, and you can click "Extended Filters" to enter
exclusion filters for the same fields.

::: tip
By default, the "Matched Nodes" section will show a maximum of 100 nodes in the search result. To customize this maximum value, you should set the property `.gui.matchedNodesMaxCount` on -config.property file
:::

#### Threadcount

You can set the maximum number of simultaneous threads to use by changing the "Thread Count" box. A value of 1 means all node dispatches happen sequentially, and any greater value means that the node dispatches will happen in parallel.

#### Rank order

You can change the order in which nodes are executed on by setting the "Rank Attribute" and "Rank Order". By default nodes are ordered by name ("nodename" attribute) in ascending order. You can change the node attribute to sort on by entering it here, for example "rank", and you can change the order to descending to sort in reverse.

If the attribute you use has an integer number value, then the nodes will be sorted numerically by that attribute, rather than lexically. Otherwise the sort is based on the string value rather than the integer value.

Any nodes without the specified attribute will then be sorted by their names.

#### If a node fails

This setting determines how to continue if one of the nodes has a failure.

The option "Fail the step without running on any remaining nodes", will cause no further dispatches to be executed and the  Execution will fail immediately.

The option "Continue running on any remaining nodes before failing the step" will allow the remaining nodes to continue to be executed until all have been executed.  At the end of the workflow for all nodes, the  Execution will fail if any of the nodes had failed.

#### Dynamic node filters

In addition to entering static values that match the nodes, you can also use
more dynamic values.

If you have defined Options for the  (see [ Options](/en/user-guide/-options.md)), you
can use the values submitted by the user when the  is executed as part of the
node filtering.

Simply set the filter value to `${option.name}`, where "name" is the name of the option.

When the  is executed, the user will be prompted to enter the value of the option, and
that will then be used in the node filter to determine the nodes to dispatch to.

::: tip
Since the dynamic option value is not set yet, the "Matched Nodes" shown in the node filtering input may indicate that there are "None" matched. Also, when the  is executed, you may see a message saying "Warning: The Node filters specified for this  do not match any nodes, execution may fail." The nodes matched will be determined after the user enters the option values.
:::

#### Orchestrator

Orchestrators define how a  orchestrates the dispatching of executions to multiple nodes.

The default behavior is to dispatch based on these  configuration values:

- Threadcount: how many nodes to process in parallel
- Rank Order: which node attribute to use to sort the nodes (default is the node name.), and whether to sort ascending or descending

You can select an Orchestrator plugin to use instead, which can choose its own logic
for how many and what order to process the nodes.

To learn how to develop your own Orchestrator plugin
see [Plugin Developer Guide - Orchestrator Plugin](/en/developer/09-orchestrator-plugin.md).

### Scheduled s

s can be configured to run on a periodic basis.
If you want to create a Scheduled , select Yes under "Schedule to
run repeatedly?"

![Scheduled  simple form](/assets/img/fig0306.png)

The schedule can be defined in a simple graphical chooser or Unix
crontab format.

To use the simple chooser, choose an hour and minute. You can then
choose "Every Day" (default), or uncheck that option and select
individual days of the week. You can select "Every Month" (default) or
unselect that option and choose specific months of the year:

If the crontab time and date format is preferred, enter a cron
expression.

![Scheduled  crontab form](/assets/img/fig0307.png)

Use the crontab syntax referenced here: [Quartz Scheduler crontrigger](http://www.quartz-scheduler.org/documentation/quartz-2.3.0/tutorials/crontrigger.html).

A good place to generate, validate and test  crontabs is [here](/en/https://www.freeformatter.com/cron-expression-generator-quartz.html).

After the  has been updated to include a schedule, a clock icon
will be displayed when the  is listed:

![Scheduled  icon](/assets/img/fig0308.png)

###  Notifications

 notifications are messages triggered by a  event.
[More details here about  Notifications](/en/s/-notifications.md).

## Deleting s

In the  view page, click the Action button for a menu of actions, and select "Delete this ..." to delete the .

![ delete button](/assets/img/fig0311.png)

Click "Delete" when it says "Really delete this ?"

If you have access, you can choose to delete all executions for the  as well.

## Updating and copying s

All of the data you set when creating a  can be modified (except UUID). To edit a
, you can click the "edit " icon:

![edit  button](/assets/img/fig0312.png)

Similarly, to Copy a  definition to a new , press the "duplicate to a new " button.

![duplicate  button](/assets/img/fig0313.png)

## Exporting  definitions

 definitions created inside the graphical console can be
exported to XML or YAML file formats and be used for later import.

Two methods exist to retrieve the  definitions: via 's
graphical interface, and via the [rd-s] shell tool.

In the  definition tab, locate the "Download Definition" menu button.
Clicking on the icon will let you
choose either XML or YAML format to download the definition.

![ export button](/assets/img/fig0314.png)

Click the preferred format to initiate the file download to your
browser.

To export s to a git repository, see the [Git plugin](/en/administration/projects/scm/git.md#configuring-git-export)

## Importing  definitions

If you have a  definition file (See above) and want to upload it via
the GUI web interface, you can do so.

Click on the "Create " menu button in the  list.

Click the item that says "Upload Definition...":

![ import button](/assets/img/fig0315.png)

Click the Choose File button and choose your  definition file to upload.

![ import form](/assets/img/fig0316.png)

Choose an option where it says "When a  with the same name already
exists:":

- Update
  - This means that a  defined in the xml will overwrite any
  existing  with the same name.
- Skip
  - This means that a  defined in the xml will be skipped over
  if there is an existing  with the same name
- Create
  - This means that the  defined in the xml will be used to
  create a new  if there is an existing  with the same name.

Choose an option where it says "Imported s:":

- Preserve UUIDs
  - This means that UUIDs defined in the imported s will be used when importing them. UUIDs must be unique, so if you have a  with the same UUID defined in any project, your import may fail.
- Remove UUIDs
  - This means that imported  UUIDs will be ignored, and the imported s will either _update_ an existing , or be created with a new UUID.

Click the Upload button. If there are any errors with the 
definitions in the XML file, they will show up on the page.

To import s from a git repository, see the [Git plugin](/en/administration/projects/scm/git.md#git-import-configuration)
