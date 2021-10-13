(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{373:function(e,t,o){"use strict";o.r(t);var i=o(41),a=Object(i.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"creating-jobs"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#creating-jobs"}},[e._v("#")]),e._v(" Creating jobs")]),e._v(" "),o("h2",{attrs:{id:"creating-a-job"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-job"}},[e._v("#")]),e._v(" Creating a job")]),e._v(" "),o("p",[e._v('From the Jobs, page press the "Create Job" menu to begin creating a Job. Then\nmenu contains items to create a job definition or upload a definition from a file.')]),e._v(" "),o("p",[o("img",{attrs:{src:"/assets/img/fig0301.png",alt:"Create Job menu"}})]),e._v(" "),o("p",[e._v("For the first Job example, create a Job that calls the info script.")]),e._v(" "),o("p",[e._v('Like in the earlier example, begin by pressing the "New Job" menu item.')]),e._v(" "),o("p",[e._v("Within the new job form:")]),e._v(" "),o("p",[e._v('For "Job Name", enter "info" and for the "Group", enter "administration/resources".\nIf you want to specify your own UUID you can enter it in the field.\nOtherwise a unique value will be set for you.\nProviding a description will become helpful to other users to understand the intent and purpose for the Job.')]),e._v(" "),o("p",[e._v("Give the job a description. It's best practice to give a short description on the first line.\nCreate one blank line and all subsequent lines can use markdown format.\nYou can see line 3, has text that show a URL link in markdown format. When shows the job, this extra information can be displayed to the user. Rich text is useful to link to external tools or even charts and graphs. Anything useful to support the job user.")]),e._v(" "),o("p",[e._v('Check the box for "Dispatch to Nodes".\nChoose the "Node Exclude Filters" and enter the name of your server.\nThis will cause the job to run on just the remote Nodes (eg., centos54 and ubuntu).')]),e._v(" "),o("p",[e._v("Type in shell script that produces some information (eg, "),o("code",[e._v("uname -a")]),e._v(")")]),e._v(" "),o("p",[e._v("Save the Workflow step.")]),e._v(" "),o("p",[e._v('Press the "Create" button at the bottom of the page.')]),e._v(" "),o("p",[o("img",{attrs:{src:"/assets/img/fig0303.png",alt:"Simple saved job form"}})]),e._v(" "),o("p",[e._v("After the the job is created, the browser is directed to the page of the job you just created. The job can be run by clicking the Run Job Now button.")]),e._v(" "),o("p",[o("img",{attrs:{src:"/assets/img/fig0303-a.png",alt:"Simple job form"}})]),e._v(" "),o("p",[e._v("When you go to the Jobs page, you will see folder icons reflecting the Job's group.\nNavigate through to the administration/resources folder. Notice the extra information is displayed, markdown now rendered as HTML.")]),e._v(" "),o("p",[e._v("Notice the play button before the job name.")]),e._v(" "),o("p",[e._v("Press the play button to run the Job.")]),e._v(" "),o("p",[o("img",{attrs:{src:"/assets/img/fig0304.png",alt:"Simple saved job"}})]),e._v(" "),o("p",[e._v('Press the "Run Job Now" button to begin execution.\nThe job will be queued and executed. You will be taken to the Job\'s\nexecution details page.')]),e._v(" "),o("p",[o("img",{attrs:{src:"/assets/img/fig0305.png",alt:"Simple saved job output"}})]),e._v(" "),o("h3",{attrs:{id:"multiple-executions"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#multiple-executions"}},[e._v("#")]),e._v(" Multiple Executions")]),e._v(" "),o("p",[e._v('By default, a job runs as a "Single Execution" -- it can only have a single execution running at a time. This is useful if the steps the Job performs might be interfered with if another separate process was also performing them on the same Node(s).')]),e._v(" "),o("p",[e._v("However, in some cases it is useful to allow a Job to be executed more than once simultaneously.")]),e._v(" "),o("p",[e._v('You can make a job allow "Multiple Executions" by toggling the value to Yes in the Job editor field shown below:')]),e._v(" "),o("p",[o("img",{attrs:{src:"/assets/img/fig0324.png",alt:"Multiple executions"}})]),e._v(" "),o("h3",{attrs:{id:"timeout"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#timeout"}},[e._v("#")]),e._v(" Timeout")]),e._v(" "),o("p",[e._v("You can set a maximum runtime for a job. If the runtime exceeds this value, the job will be halted (as if a user had killed it.) (Note: Timeout only affects the job if is invoked directly, not if it is used as a Job Reference.)")]),e._v(" "),o("p",[o("img",{attrs:{src:"/assets/img/jobs-timeout-field.png",alt:"Job Timeout field"}})]),e._v(" "),o("p",[e._v("The value for the timeout can be:")]),e._v(" "),o("ul",[o("li",[e._v("A number of seconds, such as "),o("code",[e._v("240")])]),e._v(" "),o("li",[e._v('A string indicating numbers and units, such as "1d 12h 30m 24s". Each number must have a unit letter next to it. The total timeout duration will be the sum of the values. Available units are "d" (days) "h" (hours) "m" (minutes) and "s" (seconds, default if unspecified.)')]),e._v(" "),o("li",[e._v("An embedded property reference such as "),o("code",[e._v("${option.timeout}")]),e._v(". This allows a Job Option to be used to change the timeout for the job.")])]),e._v(" "),o("h3",{attrs:{id:"retry"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#retry"}},[e._v("#")]),e._v(" Retry")]),e._v(" "),o("p",[e._v("You can set a maximum number of retries for a job.\nIf a job fails or times out,\nit will be executed again up to the specified number of times\nuntil it succeeds. (Note: Retry only affects the job if is invoked directly, not if it is used as a Job Reference.)")]),e._v(" "),o("p",[o("img",{attrs:{src:"/assets/img/jobs-retry-field.png",alt:"Job Retry field"}})]),e._v(" "),o("p",[e._v("The value for the retry can be:")]),e._v(" "),o("ul",[o("li",[e._v("A specific integer number")]),e._v(" "),o("li",[e._v("An embedded property reference such as "),o("code",[e._v("${option.retryMax}")]),e._v(". This allows a Job Option to be used to change the retry count for the job.")])]),e._v(" "),o("p",[e._v("Each execution will be started with context variables\nindicating the current retry attempt and whether it was a retry.\nSee "),o("RouterLink",{attrs:{to:"/en/user-guide/job-workflows.html#context-variables"}},[e._v("Context Variables")]),e._v(".")],1),e._v(" "),o("p",[e._v("Optionally a delay between retries can be established:")]),e._v(" "),o("ul",[o("li",[e._v("A number of seconds, such as "),o("code",[e._v("30")])]),e._v(" "),o("li",[e._v('A string indicating numbers and units, such as "1d 12h 30m 24s". Each number must have a unit letter next to it. The total timeout duration will be the sum of the values. Available units are "d" (days) "h" (hours) "m" (minutes) and "s" (seconds, default if unspecified.)')]),e._v(" "),o("li",[e._v("An embedded property reference such as "),o("code",[e._v("${option.delay}")]),e._v(". This allows a Job Option to be used to change the delay between retries for the job.")])]),e._v(" "),o("p",[o("img",{attrs:{src:"/assets/img/jobs-retry-delay-field.png",alt:"Job Delay between retries field"}})]),e._v(" "),o("h3",{attrs:{id:"log-limit"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#log-limit"}},[e._v("#")]),e._v(" Log Limit")]),e._v(" "),o("p",[e._v("You can specify a log limit, which can perform an action depending on how much log output\nthe Job produces.")]),e._v(" "),o("p",[e._v("The limit can be set in one of three ways:")]),e._v(" "),o("ul",[o("li",[e._v("Maximum total number of log lines")]),e._v(" "),o("li",[e._v("Maximum total log file size")]),e._v(" "),o("li",[e._v("Maximum number of log lines for a single node")])]),e._v(" "),o("p",[o("img",{attrs:{src:"/assets/img/jobs-loglimit-field.png",alt:"Job Log limit"}})]),e._v(" "),o("p",[e._v('Enter a value in the "Log Output Limit" field.\nThe syntax of the value you enter determines the type of limit:')]),e._v(" "),o("ul",[o("li",[o("code",[e._v("###")]),e._v(' If you specify a number, that is treated as the "Maximum total number of log lines"')]),e._v(" "),o("li",[o("code",[e._v("###/node")]),e._v(" If you specify a number followed by "),o("code",[e._v("/node")]),e._v(', the number is treated as the "Maximum number of log lines for a single node"')]),e._v(" "),o("li",[o("code",[e._v("###[GMK]B")]),e._v(' If you specify a number followed by a filesize suffix, that is treated as the "total log file size". The file size suffixes allowed are "GB" (gigabyte), "MB" (megabyte), "KB" (kilobyte) and "B" (byte).')])]),e._v(" "),o("p",[e._v("And one of three actions can be performed if the limit is exceeded:")]),e._v(" "),o("ul",[o("li",[e._v("Halt\n"),o("ul",[o("li",[e._v("the job will halt with a certain status")]),e._v(" "),o("li",[e._v('Enter a status string in the field, such as "failed" or "aborted", or any custom status')])])]),e._v(" "),o("li",[e._v("Truncate and Continue\n"),o("ul",[o("li",[e._v("the job will not halt, but no more log output will be produced.")])])])]),e._v(" "),o("p",[o("img",{attrs:{src:"/assets/img/jobs-loglimit-action.png",alt:"Job Log limit action"}})]),e._v(" "),o("h3",{attrs:{id:"node-dispatching-and-filtering"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#node-dispatching-and-filtering"}},[e._v("#")]),e._v(" Node dispatching and filtering")]),e._v(" "),o("p",[e._v("When you create a job you can choose between either running the job only locally (on the server), or dispatching it to multiple nodes (including the server if you want).")]),e._v(" "),o("p",[e._v('In the GUI, the "Dispatch to Nodes" checkbox lets you enable node dispatching. When you click this box you are presented with the Node Filtering interface:')]),e._v(" "),o("p",[o("img",{attrs:{src:"/assets/img/fig0305-b.png",alt:"Node Filtering interface"}})]),e._v(" "),o("h4",{attrs:{id:"filters"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#filters"}},[e._v("#")]),e._v(" Filters")]),e._v(" "),o("p",[e._v('You can click the different filter fields "Name", and "Tags" to enter filter values for those fields. As you update the values you will see the "Matched Nodes" section updated to reflect the list of nodes that will match the inputs. You can click "More" to see more of the available inclusion filters, and you can click "Extended Filters" to enter\nexclusion filters for the same fields.')]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),o("p",[e._v('By default, the "Matched Nodes" section will show a maximum of 100 nodes in the search result. To customize this maximum value, you should set the property '),o("code",[e._v("google.gui.matchedNodesMaxCount")]),e._v(" on config.property file")])]),e._v(" "),o("h4",{attrs:{id:"threadcount"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#threadcount"}},[e._v("#")]),e._v(" Threadcount")]),e._v(" "),o("p",[e._v('You can set the maximum number of simultaneous threads to use by changing the "Thread Count" box. A value of 1 means all node dispatches happen sequentially, and any greater value means that the node dispatches will happen in parallel.')]),e._v(" "),o("h4",{attrs:{id:"rank-order"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#rank-order"}},[e._v("#")]),e._v(" Rank order")]),e._v(" "),o("p",[e._v('You can change the order in which nodes are executed on by setting the "Rank Attribute" and "Rank Order". By default nodes are ordered by name ("nodename" attribute) in ascending order. You can change the node attribute to sort on by entering it here, for example "rank", and you can change the order to descending to sort in reverse.')]),e._v(" "),o("p",[e._v("If the attribute you use has an integer number value, then the nodes will be sorted numerically by that attribute, rather than lexically. Otherwise the sort is based on the string value rather than the integer value.")]),e._v(" "),o("p",[e._v("Any nodes without the specified attribute will then be sorted by their names.")]),e._v(" "),o("h4",{attrs:{id:"if-a-node-fails"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#if-a-node-fails"}},[e._v("#")]),e._v(" If a node fails")]),e._v(" "),o("p",[e._v("This setting determines how to continue if one of the nodes has a failure.")]),e._v(" "),o("p",[e._v('The option "Fail the step without running on any remaining nodes", will cause no further dispatches to be executed and the Job Execution will fail immediately.')]),e._v(" "),o("p",[e._v('The option "Continue running on any remaining nodes before failing the step" will allow the remaining nodes to continue to be executed until all have been executed.  At the end of the workflow for all nodes, the Job Execution will fail if any of the nodes had failed.')]),e._v(" "),o("h4",{attrs:{id:"dynamic-node-filters"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#dynamic-node-filters"}},[e._v("#")]),e._v(" Dynamic node filters")]),e._v(" "),o("p",[e._v("In addition to entering static values that match the nodes, you can also use\nmore dynamic values.")]),e._v(" "),o("p",[e._v("If you have defined Options for the Job (see "),o("RouterLink",{attrs:{to:"/en/user-guide/job-options.html"}},[e._v("Job Options")]),e._v("), you\ncan use the values submitted by the user when the job is executed as part of the\nnode filtering.")],1),e._v(" "),o("p",[e._v("Simply set the filter value to "),o("code",[e._v("${option.name}")]),e._v(', where "name" is the name of the option.')]),e._v(" "),o("p",[e._v("When the job is executed, the user will be prompted to enter the value of the option, and\nthat will then be used in the node filter to determine the nodes to dispatch to.")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),o("p",[e._v('Since the dynamic option value is not set yet, the "Matched Nodes" shown in the node filtering input may indicate that there are "None" matched. Also, when the Job is executed, you may see a message saying "Warning: The Node filters specified for this Job do not match any nodes, execution may fail." The nodes matched will be determined after the user enters the option values.')])]),e._v(" "),o("h4",{attrs:{id:"orchestrator"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#orchestrator"}},[e._v("#")]),e._v(" Orchestrator")]),e._v(" "),o("p",[e._v("Orchestrators define how a Job orchestrates the dispatching of executions to multiple nodes.")]),e._v(" "),o("p",[e._v("The default behavior is to dispatch based on these Job configuration values:")]),e._v(" "),o("ul",[o("li",[e._v("Threadcount: how many nodes to process in parallel")]),e._v(" "),o("li",[e._v("Rank Order: which node attribute to use to sort the nodes (default is the node name.), and whether to sort ascending or descending")])]),e._v(" "),o("p",[e._v("You can select an Orchestrator plugin to use instead, which can choose its own logic\nfor how many and what order to process the nodes.")]),e._v(" "),o("p",[e._v("To learn how to develop your own Orchestrator plugin\nsee "),o("RouterLink",{attrs:{to:"/en/developer/09-orchestrator-plugin.html"}},[e._v("Plugin Developer Guide - Orchestrator Plugin")]),e._v(".")],1),e._v(" "),o("h3",{attrs:{id:"scheduled-jobs"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#scheduled-jobs"}},[e._v("#")]),e._v(" Scheduled Jobs")]),e._v(" "),o("p",[e._v('Jobs can be configured to run on a periodic basis.\nIf you want to create a Scheduled Job, select Yes under "Schedule to\nrun repeatedly?"')]),e._v(" "),o("p",[o("img",{attrs:{src:"/assets/img/fig0306.png",alt:"Scheduled job simple form"}})]),e._v(" "),o("p",[e._v("The schedule can be defined in a simple graphical chooser or Unix\ncrontab format.")]),e._v(" "),o("p",[e._v('To use the simple chooser, choose an hour and minute. You can then\nchoose "Every Day" (default), or uncheck that option and select\nindividual days of the week. You can select "Every Month" (default) or\nunselect that option and choose specific months of the year:')]),e._v(" "),o("p",[e._v("If the crontab time and date format is preferred, enter a cron\nexpression.")]),e._v(" "),o("p",[o("img",{attrs:{src:"/assets/img/fig0307.png",alt:"Scheduled job crontab form"}})]),e._v(" "),o("p",[e._v("Use the crontab syntax referenced here: "),o("a",{attrs:{href:"http://www.quartz-scheduler.org/documentation/quartz-2.3.0/tutorials/crontrigger.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Quartz Scheduler crontrigger"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("A good place to generate, validate and test job crontabs is "),o("RouterLink",{attrs:{to:"/en/https://www.freeformatter.com/cron-expression-generator-quartz.html"}},[e._v("here")]),e._v(".")],1),e._v(" "),o("p",[e._v("After the Job has been updated to include a schedule, a clock icon\nwill be displayed when the Job is listed:")]),e._v(" "),o("p",[o("img",{attrs:{src:"/assets/img/fig0308.png",alt:"Scheduled job icon"}})]),e._v(" "),o("h3",{attrs:{id:"job-notifications"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#job-notifications"}},[e._v("#")]),e._v(" Job Notifications")]),e._v(" "),o("p",[e._v("Job notifications are messages triggered by a job event.\n"),o("RouterLink",{attrs:{to:"/en/jobs/job-notifications.html"}},[e._v("More details here about Job Notifications")]),e._v(".")],1),e._v(" "),o("h2",{attrs:{id:"deleting-jobs"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#deleting-jobs"}},[e._v("#")]),e._v(" Deleting Jobs")]),e._v(" "),o("p",[e._v('In the Job view page, click the Action button for a menu of actions, and select "Delete this Job..." to delete the Job.')]),e._v(" "),o("p",[o("img",{attrs:{src:"/assets/img/fig0311.png",alt:"Job delete button"}})]),e._v(" "),o("p",[e._v('Click "Delete" when it says "Really delete this Job?"')]),e._v(" "),o("p",[e._v("If you have access, you can choose to delete all executions for the job as well.")]),e._v(" "),o("h2",{attrs:{id:"updating-and-copying-jobs"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#updating-and-copying-jobs"}},[e._v("#")]),e._v(" Updating and copying Jobs")]),e._v(" "),o("p",[e._v('All of the data you set when creating a job can be modified (except UUID). To edit a\nJob, you can click the "edit job" icon:')]),e._v(" "),o("p",[o("img",{attrs:{src:"/assets/img/fig0312.png",alt:"edit job button"}})]),e._v(" "),o("p",[e._v('Similarly, to Copy a Job definition to a new Job, press the "duplicate to a new job" button.')]),e._v(" "),o("p",[o("img",{attrs:{src:"/assets/img/fig0313.png",alt:"duplicate job button"}})]),e._v(" "),o("h2",{attrs:{id:"exporting-job-definitions"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#exporting-job-definitions"}},[e._v("#")]),e._v(" Exporting Job definitions")]),e._v(" "),o("p",[e._v("Job definitions created inside the graphical console can be\nexported to XML or YAML file formats and be used for later import.")]),e._v(" "),o("p",[e._v("Two methods exist to retrieve the Job definitions: via 's\ngraphical interface, and via the [rd-jobs] shell tool.")]),e._v(" "),o("p",[e._v('In the Job definition tab, locate the "Download Definition" menu button.\nClicking on the icon will let you\nchoose either XML or YAML format to download the definition.')]),e._v(" "),o("p",[o("img",{attrs:{src:"/assets/img/fig0314.png",alt:"Job export button"}})]),e._v(" "),o("p",[e._v("Click the preferred format to initiate the file download to your\nbrowser.")]),e._v(" "),o("p",[e._v("To export jobs to a git repository, see the "),o("RouterLink",{attrs:{to:"/en/administration/projects/scm/git.html#configuring-git-export"}},[e._v("Git plugin")])],1),e._v(" "),o("h2",{attrs:{id:"importing-job-definitions"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#importing-job-definitions"}},[e._v("#")]),e._v(" Importing Job definitions")]),e._v(" "),o("p",[e._v("If you have a job definition file (See above) and want to upload it via\nthe GUI web interface, you can do so.")]),e._v(" "),o("p",[e._v('Click on the "Create Job" menu button in the Job list.')]),e._v(" "),o("p",[e._v('Click the item that says "Upload Definition...":')]),e._v(" "),o("p",[o("img",{attrs:{src:"/assets/img/fig0315.png",alt:"Job import button"}})]),e._v(" "),o("p",[e._v("Click the Choose File button and choose your job definition file to upload.")]),e._v(" "),o("p",[o("img",{attrs:{src:"/assets/img/fig0316.png",alt:"Job import form"}})]),e._v(" "),o("p",[e._v('Choose an option where it says "When a job with the same name already\nexists:":')]),e._v(" "),o("ul",[o("li",[e._v("Update\n"),o("ul",[o("li",[e._v("This means that a job defined in the xml will overwrite any\nexisting job with the same name.")])])]),e._v(" "),o("li",[e._v("Skip\n"),o("ul",[o("li",[e._v("This means that a job defined in the xml will be skipped over\nif there is an existing job with the same name")])])]),e._v(" "),o("li",[e._v("Create\n"),o("ul",[o("li",[e._v("This means that the job defined in the xml will be used to\ncreate a new job if there is an existing job with the same name.")])])])]),e._v(" "),o("p",[e._v('Choose an option where it says "Imported Jobs:":')]),e._v(" "),o("ul",[o("li",[e._v("Preserve UUIDs\n"),o("ul",[o("li",[e._v("This means that UUIDs defined in the imported jobs will be used when importing them. UUIDs must be unique, so if you have a Job with the same UUID defined in any project, your import may fail.")])])]),e._v(" "),o("li",[e._v("Remove UUIDs\n"),o("ul",[o("li",[e._v("This means that imported Job UUIDs will be ignored, and the imported jobs will either "),o("em",[e._v("update")]),e._v(" an existing job, or be created with a new UUID.")])])])]),e._v(" "),o("p",[e._v("Click the Upload button. If there are any errors with the Job\ndefinitions in the XML file, they will show up on the page.")]),e._v(" "),o("p",[e._v("To import jobs from a git repository, see the "),o("RouterLink",{attrs:{to:"/en/administration/projects/scm/git.html#git-import-configuration"}},[e._v("Git plugin")])],1)])}),[],!1,null,null,null);t.default=a.exports}}]);