# jobs

This chapter covers how to run and create .

Why create a ?

- One might find certain command executions are done repeatedly, and
  perhaps, represent what has become a routine procedure.
- Another user in your group needs a simple self-service interface to
  run a procedure across a set of nodes.
- Routine processes need to be encapsulated and become the basis for
  other routine procedures.

## Overview

s provide a means to encapsulate a process.
A  is a configuration representing input options,
the steps in the process, a filter expression that matches the nodes where
those steps will execute, and execution
control parameters that specify if steps are run in parallel
and what to do if an error occurs in one of the steps.

 access is governed by an access control
policy you define declaring how users are given privileges to
read, create, edit, run and kill s.

lets you organize and execute s and observe the progress as
the  is running. You can view a list of the currently running s
or drill down to see the output of individual executing steps.
 executions can also be aborted if they need to be stopped.

Each  execution is stored and contains information about the nodes
where steps executed, success and duration of each step. The 
execution output can be downloaded, forwarded to an
external log store or sent as part of a
notification via email, IRC, ticketing system, or other destinations.

The next sections describe how to navigate and run existing s. In
later sections, the topic of  creation will be covered where
you will learn about steps and  options

If you want to skip ahead, you can go straight to
[Creating s](/en/user-guide/creating-s.md).

##  groups

As many s will accumulate over time, it is useful to organize s
into groups. A group is a logical set of s, and one  group can
exist inside another. displays  lists as a set of folders
corresponding to the group structure your s define.

To create a new  group, create a new  and type in the name of the group the  should be stored in. After creating the , the group will be created and can be selected in UI for future  creation.

Beyond organizing s, groups assist in defining access control
policy, covered in the
[Administrator guide - Access Control Policy](/en/administration/security/authorization.md).

##  UUIDs

When created, each new  will be assigned a unique universal identifier (UUID). If you are writing the  definition using one of the supported formats you can assign the UUID yourself.

You can use the UUID to make sure that when you rename or change the group for
your  in your  definition, it will modify the correct  in the server.

The UUID is also useful when porting  definitions between instances.

::: warning
We do not require that this field is compliant with the UUID format but be careful creating custom UUIDs as this can lead to inconsistencies in  loading.
:::

## Listing and filtering s

All  activity begins on the main "s" page inside . After
logging in, press the "s" tab in the top navigation bar and any
s you are authorized to see will be displayed.

If the s were defined inside groups, you will see the listing
grouped into a folder like structure. These folders represent the 
groups described earlier. You can navigate these folders by pressing
the folder icon to reveal its contents.

Once you have navigated to a , you will see its name, possibly its
description and a summary total of how many times it has been executed.

Clicking on the  name will expand the window to show the 
detail. You will see a button bar containing icons representing the
actions you are able to perform. Other  detail will include what
command(s) it will run, filter expressions and other dispatcher options.

### Filtering s

The  page lets you search for s using the Filter option.

Click the "Filter" link to show the filter options:

![ filter form](/assets/img/fig0317.png)

This will show the Filter fields. Enter a value in any of the filter fields:

-  Name: the name of the 
- Group: the name of the  group
- Description:  description text
- Scheduled: Include s that have been scheduled.

You can type a substring or a regular expression in any of these
fields.

After pressing the "Filter" button, the  list will be filtered to
include only the matching s.

![ filtered list](/assets/img/fig0318.png)

To refine the filter, click on the blue-outlined Filter description,
and change the filter fields.

To reset the filter and go back to the full  page, click the
"Clear" button in the Filter fields.

## Running a 

Navigate to the desired 
from the filtered listing and then press the
"Run" icon to immediately run the .
If you do not see the Run icon, it
means your login does not have "run" privileges for that .

![ run button](/assets/img/fig0319.png)

If you navigated to the separate  page, press
the "Run" button there.

![ run button](/assets/img/fig0319-b.png)

The Run  dialog allows you to input  options if any,
Log level, Nodes selection and how you want to follow the execution.

### Choose execution options

s can be defined to prompt the user for options. This page contains
a form presenting any of these  options.

Some options will have default values while others may present you
with a menu of choices. Some options are optional while others are
required. Lastly, there might be a pattern governing what values are
acceptable.

If there are any such  options, you can change them here before
proceeding with the execution.

When you are ready, press "Run  Now". The  will enter
the execution queue and you can track its execution in the
Activity section of the page, or by going to the [Activity](/en/user-guide/08-activity.md) page.

### Following Running s

Once you have started running a , you can follow the 's output
in the Execution page.

![ execution output](/assets/img/fig0319-c.png)

On the s list page, look in the "Running" tab in the Activity section of the page
and click the execution ID's progress bar.

If you pressed the "run" button from the 's detail page, or you selected to "Follow execution" when you ran the , your
browser will already have been directed to the Execution Follow page.

## Viewing  detail

A 's definition can be shown by clicking on the Definition
tab in the  Show page or in the Execution page.

![ definition](/assets/img/fig0320.png)

The information in the  detail view includes:

- Steps the  will execute
- Options presented to the user at the time of  run
- Node filter expression with a button to show the matched nodes
-  UUID
- Creation date
- Statistics about the  executions

Pressing the "Show Matches" link will display the list of Nodes where the  will run.

##  history

In the  page, you can see the outcome of previous executions of
s by looking at the Activity section.

You can click on any past execution in the list to see the full execution for that  run.

You can also navigate to the Activity page from the top navigation bar and use the
search filter to find executions by typing in the  name.

![ executions matches](/assets/img/fig0310.png)

The s page also contains all executions for the  group shown.

## Killing s

s that are currently running can be Killed immediately.

WARNING: This feature should be used with caution, as it forcibly
kills the Java Thread that the  is running on.

From the Activity view Now Running section, or in the  execution
follow page, click on the "Kill " button for the running .

When prompted "Really kill this ?" Click the "Yes" button.

The  will terminate with a "Killed" completion status.

![ definition](/assets/img/fig0319-d.png)
