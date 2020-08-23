---
title: Xargs for Newbies
date: "2020-08-19T22:12:03.284Z"
description: "Tutorial on xargs for n00bs, examples of cutting by character, byte position, cutting based on delimiter, and how to modify the output delimiter"
---
WIP
<!-- IF you're anything like me, you don't know jack about xargs. In fact, it's so tricky interviewers love to ask about it to assess your skillz! Don't sweat it though, I'm here to walk you through it!

To sum it up, it's used to build and execute command lines from standard (`STDIN`) input. By default, it reads items from standard input as separated by blanks, and it executes a command once for each argument.

Tools like `grep` are able to accept standard input as an argument, while others like `echo`, `mkdir`, and `rm` can't. You can use `xargs` to enable such tools to accept standard input as an argument. 

#Example for `mkdir`

```
echo 'I like cats' | xargs mkdir
ls
I like cats
```

In this example standard input is piped to xargs, the `mkdir` command is ran for each argument (delimited by spaces) thus three folders are created. When you want to create a file that contains a space in the name, you'll need to use the `-d` option to change the delimiter from a space. -->