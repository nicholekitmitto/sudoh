---
title: Deleting commented out lines of CSS and other code with sed!
date: "2020-08-21T23:46:37.121Z"
description: "How to delete commented lines in css using sed"
---

You don't often find front-end developers using Linux commands for their everyday tasks, but whatever gets the job done the fastest, right?!

If you're using Linux/Ubuntu/WSL/What-have-you, basically NOT a Mac, look <a href="#linux">here for your solution</a>!

### // comments
Quick and easy is if you're looking to remove commented lines (including the line itself, rather than leaving a blank line) the command you're after is `sed -i '/^/\/\//d' filename`.
<div class="codeblock">
<svg xmlns="http://www.w3.org/2000/svg" width="54" height="14" viewBox="0 0 54 14"><g fill="none" fill-rule="evenodd" transform="translate(1 1)"><circle cx="6" cy="6" r="6" fill="#FF5F56" stroke="#E0443E" strokeWidth=".5"></circle><circle cx="26" cy="6" r="6" fill="#FFBD2E" stroke="#DEA123" strokeWidth=".5"></circle><circle cx="46" cy="6" r="6" fill="#27C93F" stroke="#1AAB29" strokeWidth=".5"></circle></g></svg>
<span class="ps1">> </span><span class="command">cat test.css</span>
<pre class="result">
// test
//test2
don't delete me!
//.test3
// #test4
</pre>
<span class="ps1">> </span><span class="command">sed -i '/^/\/\//d' test.css</span>
<pre class="result">
don't delete me!
</pre>
<span class="ps1">></span>
</div>

### /* comments */
If you're deleting comments that use /* , this'll be more what you're looking for, but BEWARE this will **not** delete multi-line comments. You'll need some more advanced regex skills for that. I may write up a post soon on it!
<div class="codeblock">
<svg xmlns="http://www.w3.org/2000/svg" width="54" height="14" viewBox="0 0 54 14"><g fill="none" fill-rule="evenodd" transform="translate(1 1)"><circle cx="6" cy="6" r="6" fill="#FF5F56" stroke="#E0443E" strokeWidth=".5"></circle><circle cx="26" cy="6" r="6" fill="#FFBD2E" stroke="#DEA123" strokeWidth=".5"></circle><circle cx="46" cy="6" r="6" fill="#27C93F" stroke="#1AAB29" strokeWidth=".5"></circle></g></svg>
<span class="ps1">> </span><span class="command">cat test.css</span>
<pre class="result">
/*test */
/* test2 */
don't delete me!
/* .test3 */
/* #test4 */
</pre>
<span class="ps1">> </span><span class="command">sed -i '/^/\/*//d' test.css</span>
<pre class="result">
don't delete me!
</pre>
<span class="ps1">></span>
</div>
<br/>

Now, if you're interested in the why and all the pitfalls I fell into to figure this out, keep reading!

### Using a Mac or have an "undefined label" error?

First of all, if you're using a Mac, which you might be if you're in a similar role to me, you'll need to include `'.bak'` with your sed command: `sed -i '.bak' '/^/\/\//d' filename` otherwise you'll come across the "undefined label" error. This'll just create a backup file of your original unedited file. **Note: you may need to remove the space between `-i` and `'.bak'`, your mileage will vary.**

If you've done some googling and Stack Overflow investigating, you may have come across a command that looks like this: `sed -i 's/\/\/.*//g' filename` and thought your problem was solved, just like me! Well, I personally had an 8,000 line file and 3/4 of it were commented out and needed to be deleted. This would've left me still with 8,000 lines... they just would've been blank.

<div class="codeblock">
<svg xmlns="http://www.w3.org/2000/svg" width="54" height="14" viewBox="0 0 54 14"><g fill="none" fill-rule="evenodd" transform="translate(1 1)"><circle cx="6" cy="6" r="6" fill="#FF5F56" stroke="#E0443E" strokeWidth=".5"></circle><circle cx="26" cy="6" r="6" fill="#FFBD2E" stroke="#DEA123" strokeWidth=".5"></circle><circle cx="46" cy="6" r="6" fill="#27C93F" stroke="#1AAB29" strokeWidth=".5"></circle></g></svg>
<span class="ps1">> </span><span class="command">cat test.css</span>
<pre class="result">
// test
//test2
don't delete me!
//.test3
// #test4
</pre>
<span class="ps1">> </span><span class="command">sed -i 's/\/\/.*//g' test.css</span>
<pre class="result">
<br/>
don't delete me!
<br />
</pre>
<span class="ps1">></span>
</div>
<br/>
Now you may be thinking, no biggie! We can pipe that through to another command to remove those blanks. BUT WAIT! This is CSS (at least it is in this example 🙃) you more than likely have blank lines between rules, we don't want to delete those! But!! If you do, don't care, or aren't even working with CSS, you can delete those empty lines separately with: 

`sed -i '/^$/d' filename`

<h2 id="linux">Non-Mac solutions!</h2>

You probably already know, but I didn't right away, you'll need to put your quotes in a different spot for Linux. This may not be the case if you're using Vim! But hey, what do I really know, I'm new to this and there are always multiple different ways to get something done, right? From my perspective, with my version of Ubuntu, the quotes need to wrap the actual regex pattern it's searching for, rather than the sed actions it's taking (such as at beginning of line and delete). 

### For deleting // comments

<div class="codeblock">
<svg xmlns="http://www.w3.org/2000/svg" width="54" height="14" viewBox="0 0 54 14"><g fill="none" fill-rule="evenodd" transform="translate(1 1)"><circle cx="6" cy="6" r="6" fill="#FF5F56" stroke="#E0443E" strokeWidth=".5"></circle><circle cx="26" cy="6" r="6" fill="#FFBD2E" stroke="#DEA123" strokeWidth=".5"></circle><circle cx="46" cy="6" r="6" fill="#27C93F" stroke="#1AAB29" strokeWidth=".5"></circle></g></svg>
<span class="ps1">> </span><span class="command">cat test.css</span>
<pre class="result">
// test
//test2
don't delete me!
//.test3
// #test4
</pre>
<span class="ps1">> </span><span class="command">sed -i /^"\/\/"/d test.css</span>
<pre class="result">
don't delete me!
</pre>
<span class="ps1">></span>
</div>

### For deleting /* comments */


<div class="codeblock">
<svg xmlns="http://www.w3.org/2000/svg" width="54" height="14" viewBox="0 0 54 14"><g fill="none" fill-rule="evenodd" transform="translate(1 1)"><circle cx="6" cy="6" r="6" fill="#FF5F56" stroke="#E0443E" strokeWidth=".5"></circle><circle cx="26" cy="6" r="6" fill="#FFBD2E" stroke="#DEA123" strokeWidth=".5"></circle><circle cx="46" cy="6" r="6" fill="#27C93F" stroke="#1AAB29" strokeWidth=".5"></circle></g></svg>
<span class="ps1">> </span><span class="command">cat test.css</span>
<pre class="result">
/*test */
/* test2 */
don't delete me!
/* .test3 */
/* #test4 */
</pre>
<span class="ps1">> </span><span class="command">sed -i /^"\/\*"/d  test.css</span>
<pre class="result">
don't delete me!
</pre>
<span class="ps1">></span>
</div>

## Let's break it down 🕺

`^\/\/` indicates lines starting with //

`/^\/\*/d ` indicates lines starting with /*

`^$` tells sed to delete emptylines, this command does not remove lines that contain spaces though

`/d` goes boom 💣

Hopefully you've learned enough about how sed recognizes text patterns with regex to be able to delete any lines ina file! At least ones that begin with certain characters hehe.