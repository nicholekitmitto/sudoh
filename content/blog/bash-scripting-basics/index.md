---
title: Bash Scripting Basics! Your first script!
date: "2020-09-26T23:46:37.121Z"
description: "Basics on bash scripting, how to create your first script"
---

Hi again! I hear you're interested in learning some basics about Bash scripting? If you're completely new to it, Bash scripts are awesome! They can help you automate tasks, combine a lot of different commands into one script to save you time, write mini-programs, and so much more! It's a really great tool to add to your skillset.

First let's look at some basics of Bash in general, these are the things we're going to learn how to do **better** with our Bash scripts! 

## Running multiple commands

So far on this blog, and poyhaps even in your experience, you've just seen commands being ran one at a time at the command prompt and then seeing the results printed below. You can actually run multiple commands at once on the same command line by placing a semicolon `;` between each command!

<div class="codeblock">
<svg xmlns="http://www.w3.org/2000/svg" width="54" height="14" viewBox="0 0 54 14"><g fill="none" fill-rule="evenodd" transform="translate(1 1)"><circle cx="6" cy="6" r="6" fill="#FF5F56" stroke="#E0443E" strokeWidth=".5"></circle><circle cx="26" cy="6" r="6" fill="#FFBD2E" stroke="#DEA123" strokeWidth=".5"></circle><circle cx="46" cy="6" r="6" fill="#27C93F" stroke="#1AAB29" strokeWidth=".5"></circle></g></svg>
<span class="display-block"></span>
<span class="ps1">> </span><span class="command">date ; who</span>
<pre class="result">
Sat 26 Sep 2020 02:17:00 PM MST
nichole    :0       2020-09-26 14:16 (:0)
</pre>
<span class="ps1">></span>
</div>
<br />

The shell runs the first command, displaying the output and then runs the second command, displaying the output from that command immediately following the output from the first command. This all probably seems really basic but it's the basis of how shell scripts work and pretty dang cool!

## Output Redirection

Another founding principle of shell scripting is being able to store our command output somewhere other than STDOUT. We can make use of Output Redirection for this! It allows us to redirect the output (results) of any command and store it in another device, such as a file. To do this, all you have to do is use the greater-than symbol `>` after your command and designate a file name that will capture the output.

<div class="codeblock">
<svg xmlns="http://www.w3.org/2000/svg" width="54" height="14" viewBox="0 0 54 14"><g fill="none" fill-rule="evenodd" transform="translate(1 1)"><circle cx="6" cy="6" r="6" fill="#FF5F56" stroke="#E0443E" strokeWidth=".5"></circle><circle cx="26" cy="6" r="6" fill="#FFBD2E" stroke="#DEA123" strokeWidth=".5"></circle><circle cx="46" cy="6" r="6" fill="#27C93F" stroke="#1AAB29" strokeWidth=".5"></circle></g></svg>
<span class="display-block"></span>
<span class="ps1">> </span><span class="command">date > today.txt</span>
<span class="display-block"></span>
<span class="ps1">> </span><span class="command">cat today.txt</span>
<pre class="result">
Sat 26 Sep 2020 02:22:00 PM MST
</pre>
<span class="ps1">></span>
</div>
<br />

You'll notice that we didn't see the output from our date command in the terminal, that's because we redirected it to the today.txt file! Using `cat` we can read the file and see the output is stored nice and snugly in there.

Now that all seems fine and dandy, but what's the use of it? Won't we just get a billion different files of output? 
No! You can continue to rerun that command using `>` and it will overwrite the file with the new output, but you can **append** to any file by using a double greater-than symbol `>>`! Let's see how that works, I think our initial output is getting kinda lonely all by itself!

<div class="codeblock">
<svg xmlns="http://www.w3.org/2000/svg" width="54" height="14" viewBox="0 0 54 14"><g fill="none" fill-rule="evenodd" transform="translate(1 1)"><circle cx="6" cy="6" r="6" fill="#FF5F56" stroke="#E0443E" strokeWidth=".5"></circle><circle cx="26" cy="6" r="6" fill="#FFBD2E" stroke="#DEA123" strokeWidth=".5"></circle><circle cx="46" cy="6" r="6" fill="#27C93F" stroke="#1AAB29" strokeWidth=".5"></circle></g></svg>
<span class="display-block"></span>
<span class="ps1">> </span><span class="command">who >> today.txt</span>
<span class="display-block"></span>
<span class="ps1">> </span><span class="command">cat today.txt</span>
<pre class="result">
Sat 26 Sep 2020 02:22:00 PM MST
nichole    :0       2020-09-26 14:16 (:0)
</pre>
<span class="ps1">></span>
</div>
<br />

We can see that we appended our newest output to the file with the last output! Success!! This is a really handy trick for log files and personal use such as a daily notes file I use to either add things I need to study up on or to-do's I want to get done. 

(I definitely have a file that just lists various commands and pentesting programs I want to learn more about hehe, and I add to it all the time by appending! `echo thingIdontknowaboutverywell >> stuffToLearn.txt` 😉 there's always more to learn!)

## |Piping|

Redirecting output allows us to redirect the command output to a file, **piping** allows us to redirect that output to another command! I bet you're starting to see the usefulness of shell scripting now, eh? The second command uses the piped output from the first command as its input data or STDIN. It's the best when you're using commands that process data, like the `sort` command. All you need to do is use the bar symbol `|` between the commands.

<div class="codeblock">
<svg xmlns="http://www.w3.org/2000/svg" width="54" height="14" viewBox="0 0 54 14"><g fill="none" fill-rule="evenodd" transform="translate(1 1)"><circle cx="6" cy="6" r="6" fill="#FF5F56" stroke="#E0443E" strokeWidth=".5"></circle><circle cx="26" cy="6" r="6" fill="#FFBD2E" stroke="#DEA123" strokeWidth=".5"></circle><circle cx="46" cy="6" r="6" fill="#27C93F" stroke="#1AAB29" strokeWidth=".5"></circle></g></svg>
<span class="display-block"></span>
<span class="ps1">> </span><span class="command">echo "First!" >> today.txt</span>
<span class="display-block"></span>
<span class="ps1">> </span><span class="command">cat today.txt | sort</span>
<pre class="result">
First!
nichole    :0       2020-09-26 14:16 (:0)
Sat 26 Sep 2020 02:22:00 PM MST
</pre>
<span class="ps1">></span>
</div>
<br />

The output from our cat command was sent directly to the sort command as its input, we didn't see all the processing that went on with that transfer, it's all behind the scenes but it's still happening! So we also don't see the output from our initial cat command, only the output from sort which alphabetically sorted our file (after a little addition to help emphasize the sort). There's absolutely no limit to how many commands you can chain together with piping.

## Bash Scripting!

Alright, by now you should be excited to dig into what you came here for! We covered some cool aspects of Bash/your chosen shell already, but it'd be a pain in the butt if we had to re-enter the same commands multiple times a day, especially if it's a really long chain of piped commands! Not to mention typos and remembering everything that needs to be included. That's where shell scripts come in handy! It's way easier to create a text file containing any and all commands along with processing the data returned and just run this once -- or hell, even automate it!

The first thing is to know about `shebang`, it is absolutely necessary to say that with some sass too! The shebang is the combination of the pound sign and the exclamation point `#!`. It signals to the OS which shell to use when we run the script. In this instance, we'll be adding `#!/bin/bash` to the beginning of our script. Now we're ready to start listing the commands!

We're going to create a suuuuper simple script just to get the idea of what you can do with it across. First, let's create a few variables,
 <br />
 
`first_greeting="Nice to meet you!"` <br />
`later_greeting="How are you?"` <br />
`greeting_count=0` <br />
`greeting_limit=$1`

You'll notice the formatting of our variables, there are no spaces between the variable, equal sign, and definition. This is important! Your script won't work if you add space. To reference these variables within our script, just prepend a `$` to the name, such as `$first_greeting`. 

We'll be using these greetings in a `while` loop, it will run as long as our `greeting_count` is less than the `greeting_limit`, which is defined when we run the script: `./script.sh 3` will set the limit to 3. 
If our count is less than 1, we'll echo the `first_greeting` to the monitor, otherwise we'll echo our `later_greeting`. We close our if statement with `fi` and increase our greeting count by 1. Don't forget to close the while statement with `done`!

<div class="codeblock">
<svg xmlns="http://www.w3.org/2000/svg" width="54" height="14" viewBox="0 0 54 14"><g fill="none" fill-rule="evenodd" transform="translate(1 1)"><circle cx="6" cy="6" r="6" fill="#FF5F56" stroke="#E0443E" strokeWidth=".5"></circle><circle cx="26" cy="6" r="6" fill="#FFBD2E" stroke="#DEA123" strokeWidth=".5"></circle><circle cx="46" cy="6" r="6" fill="#27C93F" stroke="#1AAB29" strokeWidth=".5"></circle></g></svg>
<div class="inline-block">script.sh</div>

<pre class="result">
#!/bin/bash
<span class="command">first_greeting</span><span class="pink">=</span>"Nice to meet you!"
<span class="command">later_greeting</span><span class="pink">=</span>"How are you?"
<span class="command">greeting_count</span><span class="pink">=0</span>
<span class="command">greeting_limit</span><span class="pink">=</span>$1

<span class="command">while</span> <span class="pink">[ </span><span class="orange">$greeting_count -lt $greeting_limit</span> <span class="pink">]</span>
<span class="command">do</span>
    <span class="command">if</span> <span class="pink">[ </span><span class="orange">$greeting_count -lt <span class="pink">1 ]</span>
    <span class="command">then</span>
        <span class="pink">echo</span> <span class="orange">$first_greeting</span>
    <span class="command">else</span>
        <span class="pink">echo</span> <span class="orange">$later_greeting</span>
    <span class="command">fi</span>
    greeting_count=<span class="orange">$((greeting_count + 1))</span>
<span class="command">done</span>
</pre>
</div>
<br/>

If we run this script on our command line it'll look a little something like this!

<div class="codeblock">
<svg xmlns="http://www.w3.org/2000/svg" width="54" height="14" viewBox="0 0 54 14"><g fill="none" fill-rule="evenodd" transform="translate(1 1)"><circle cx="6" cy="6" r="6" fill="#FF5F56" stroke="#E0443E" strokeWidth=".5"></circle><circle cx="26" cy="6" r="6" fill="#FFBD2E" stroke="#DEA123" strokeWidth=".5"></circle><circle cx="46" cy="6" r="6" fill="#27C93F" stroke="#1AAB29" strokeWidth=".5"></circle></g></svg>
<span class="display-block"></span>
<span class="ps1">> </span><span class="command">./script.sh 3</span>
<pre class="result">
Nice to meet you!
How are you?
How are you?
</pre>
<span class="ps1">></span>
</div>
<br />

This is a fun little way to see how we can use conditionals like for and while loops in scripting, but let's look at an example of something.... **useful**. Let's create a release script that copies certain files from a source directory and puts them into a build directory. This is a common practice of bash scripts for releases. Sometimes our private source code may contain dev resources or other confidential information that we don't want to make it into prod.

We'll also include some interactivity with the user by using `read` to get their authorization to continue with the program. Fun tip! You can use `read -n1` instead of just `read` and it will automatically accept a 1 character input without the need for the user to press enter. Ideally this would come with a prompt indicating some options of accepted inputs. You can also use `read -t [n]` where n is the number of seconds the prompt will wait for a response from the user.

<div class="codeblock">
<svg xmlns="http://www.w3.org/2000/svg" width="54" height="14" viewBox="0 0 54 14"><g fill="none" fill-rule="evenodd" transform="translate(1 1)"><circle cx="6" cy="6" r="6" fill="#FF5F56" stroke="#E0443E" strokeWidth=".5"></circle><circle cx="26" cy="6" r="6" fill="#FFBD2E" stroke="#DEA123" strokeWidth=".5"></circle><circle cx="46" cy="6" r="6" fill="#27C93F" stroke="#1AAB29" strokeWidth=".5"></circle></g></svg>
<div class="inline-block">script.sh</div>

<pre class="result">
#!/bin/bash
<span class="command">firstline</span><span class="pink">=</span>$(head -n 1 source/changelog.md)
<span class="comment"># Here we're going to use `read -a` to splie the string into an array</span> 
<span class="command">read</span> <span class="orange">-a</span> splitfirstline <span class="pink"><<<</span> $firstline
<span class="comment"># Setting the value of the version of the script, which is index 1 of our splitfirstline array</span>
<span class="command">version<span class="pink">=</span>${splitfirstline[1]}
<span class="pink">echo</span> <span class="orange">"You're building version # "</span> $version
<span class="pink">echo</span> <span class="orange">"Do you want to continue? (1 for yes) (0 for no)"</span>
<span class="comment"># We can improve this by using `read -n1` instead for better interactivity. We're putting the user input into a variable called versioncontinue</span>
read versioncontinue 

<span class="command">if</span> <span class="pink">[ </span><span class="orange">$versioncontinue -eq </span><span class="pink">1 ]</span>
<span class="command">then</span>
        <span class="pink">echo</span> <span class="orange">"Ok"</span>
        <span class="command">for</span> filename <span class="command">in</span> <span class="pnk">source/*</pan>
        <span class="command">do</span>
            <span class="pink">echo</span> $filename
            <span class="command">if</span> <span class="pink">[</span> <span class="orange">"$filename" <span class="pink">==</span> <span class="orange">"source/secretinfo.md" <span class="pink">]</span>
        <span class="command">then</span>
            <span class="pink">echo</span> <span class="orange">"secretinfo.md is not being copied"</span>
        <span class="command">else</span>
            <span class="pink">echo</span> <span class="orange">"this file is being copied"</span>
            <span class="pink">cp</span> $filename build/.
        <span class="command">fi</span>
    <span class="command">done</span>
<span class="command">else</span>
    <span class="comment"># If the user entered 0 for no we run this block</span>
    <span class="pink">echo</span> <span class="orange">"Please come back when you are ready!"</span>
<span class="command">fi</span>

<span class="comment"># Change directories into our build folder</span>
<span class="pink">cd</span> build/
<span class="pink">echo</span> <span class="orange">"Build version $version contains:"</span>
<span class="comment"># List all the files in our build folder</span>
<span class="pink">ls</span>
</pre>
</div>
<br/>

If you had the proper filesystem for this script and you ran it and chose no, the outcome would look a little like this:

<div class="codeblock">
<svg xmlns="http://www.w3.org/2000/svg" width="54" height="14" viewBox="0 0 54 14"><g fill="none" fill-rule="evenodd" transform="translate(1 1)"><circle cx="6" cy="6" r="6" fill="#FF5F56" stroke="#E0443E" strokeWidth=".5"></circle><circle cx="26" cy="6" r="6" fill="#FFBD2E" stroke="#DEA123" strokeWidth=".5"></circle><circle cx="46" cy="6" r="6" fill="#27C93F" stroke="#1AAB29" strokeWidth=".5"></circle></g></svg>
<span class="display-block"></span>
<span class="ps1">> </span><span class="command">./script.sh</span>
<pre class="result">
You're building version # 11.2.3
Do you want to continue? (1 for yes) (0 for no)
0
Please come back when you are ready!
Build version 11.2.3 contains:
bar.js buzz.css changelog.mg foo1.html
</pre>
<span class="ps1">></span>
</div>
<br />

If we ran it and selected 1 for yes, things would actually happen! Notice how we're able to exclude our confidential secretinfo.md file! The output is noisy but it would look like:

<div class="codeblock">
<svg xmlns="http://www.w3.org/2000/svg" width="54" height="14" viewBox="0 0 54 14"><g fill="none" fill-rule="evenodd" transform="translate(1 1)"><circle cx="6" cy="6" r="6" fill="#FF5F56" stroke="#E0443E" strokeWidth=".5"></circle><circle cx="26" cy="6" r="6" fill="#FFBD2E" stroke="#DEA123" strokeWidth=".5"></circle><circle cx="46" cy="6" r="6" fill="#27C93F" stroke="#1AAB29" strokeWidth=".5"></circle></g></svg>
<span class="display-block"></span>
<span class="ps1">> </span><span class="command">./script.sh</span>
<pre class="result">
You're building version # 11.2.3
Do you want to continue? (1 for yes) (0 for no)
1
Ok
source/bar.js
This file is being copied
source/buzz.css
This file is being copied
source/changelog.md
This file is being copied
source/foo1.html
This file is being copied
source/secretinfo.md
secretinfo.md is not being copied
Build version 11.2.3 contains:
bar.js buzz.css changelog.mg foo1.html
</pre>
<span class="ps1">></span>
</div>
<br />


## Some more fun things

⚪ That was all pretty cool in itself, I love how you can automate tasks like build releases with shell scripts! A few other nifty things you can do include silent reading. What's that you ask? Have you ever had to input your password for a command and you notice how you don't actually see what you're typing? That's silent reading! You can make use of it with `read -s -p "Enter your password: " pass` This uses `-p` to have an inline prompt with your read prompt and inserts the input into the pass variable. One REALLY cool thing about `read -s` (bee-tea-dubbs, I always read it as read-shhhh) is that it isn't really stopping your input from being displayed on the monitor, it's definitely there! It just sets the text color to the same color as the background color of your terminal 🤯!!

⚪ You can also make use of the **exit status** sent back to the parent shell that launched the script. This tells us whether the script completed successfully or not, you can check the status afterwards by using the `$?` command. This command will always change value according to the exit status of the last command executed by the shell, so be sure to run it immediately after your script has finished with `echo $?`! By default, if it was successful it would have the value of `0`. If it completes with an error, then a positive integer appears as the value. You can also change the exit status intentionally as you write more complicated scripts to help debugging scripts.

<div class="codeblock">
<svg xmlns="http://www.w3.org/2000/svg" width="54" height="14" viewBox="0 0 54 14"><g fill="none" fill-rule="evenodd" transform="translate(1 1)"><circle cx="6" cy="6" r="6" fill="#FF5F56" stroke="#E0443E" strokeWidth=".5"></circle><circle cx="26" cy="6" r="6" fill="#FFBD2E" stroke="#DEA123" strokeWidth=".5"></circle><circle cx="46" cy="6" r="6" fill="#27C93F" stroke="#1AAB29" strokeWidth=".5"></circle></g></svg>
<span class="display-block"></span>
<span class="ps1">> </span><span class="command">/bin/bash</span>
<span class="display-block"></span>
<span class="ps1">> </span><span class="command">exit 120</span>
<pre class="result">
exit
</pre>
<span class="ps1">> </span><span class="command">echo $?</span>
<pre class="result">
120
</pre>
<span class="ps1">></span>
</div>
<br />

## Fin!

Feel free to reach out to me via <a href="mailto:nicholedwight@gmail.com">email</a> or [twitter](https://twitter.com/sudohinbeta) if you have any questions, ideas for blog posts, or want me to expand on this!