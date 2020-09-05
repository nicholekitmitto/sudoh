---
title: How to persist state between pages - Gatsby with Context
date: "2020-09-04T22:12:03.284Z"
description: "Tutorial on how to manage and persist state between pages using Context."
---

Have you ever wondered how to make your states persis between pages? You're in the right place! I'll teach you how to do just that, but with some limitations - this will not persist through refresh, bummer I know.

We'll do this with an example of a color theme, dark vs light, using React's [Context API](https://reactjs.org/docs/context.html). The first step is to setup a Provider with our `isActive` state as well as a way to toggle its current state. We'll be using props and wrap them in `myContext.Provider`. Go ahead and make a `components/provider.js` file. Instead of exporting Provider itself, we'll be exporting a function that will wrap whatever is passed to it in our Provider.

<div class="codeblock">
<svg xmlns="http://www.w3.org/2000/svg" width="54" height="14" viewBox="0 0 54 14"><g fill="none" fill-rule="evenodd" transform="translate(1 1)"><circle cx="6" cy="6" r="6" fill="#FF5F56" stroke="#E0443E" strokeWidth=".5"></circle><circle cx="26" cy="6" r="6" fill="#FFBD2E" stroke="#DEA123" strokeWidth=".5"></circle><circle cx="46" cy="6" r="6" fill="#27C93F" stroke="#1AAB29" strokeWidth=".5"></circle></g></svg>
<div class="inline-block">components/provider.js</div>

<pre class="result">
<span class="pink">import</span> React, { useState } <span class="pink">from</span> 'react';

<span class="pink">export const</span> myContext = React.<span class="command">createContext</span>();

<span class="pink">const</span> <span class="command">Provider</span> = props => {
  <span class="pink">const</span> [isActive, setTheme] = <span class="command">useState</span>(false);

  <span class="pink">return</span> (
    &lt;<span class="pink">myContext.Provider</span> value={{
      <span class="pink">isActive</span>,
      <span class="command">changeTheme</span>: () => <span class="command">setTheme</span>(!<span class="pink">isActive</span>)
    }}>
      {props.children}
    &lt;/<span class="pink">myContext.Provider</span>>
  )
};

<span class="pink">export default</span> ({ element }) => (
  &lt;<span class="command">Provider</span>>
    {element}
  &lt;/<span class="command">Provider</span>>
);
</pre>
</div>
<br/>

That's pretty much all the heavy lifting we need to do when it comes to managing our state! All that's left is wrapping our pages so the state can flow. Gatsby is pretty cool and it gives us access to a hook called `wrapRootElement` - you can read more in depth about it [here](https://www.gatsbyjs.org/docs/browser-apis/#wrapRootElement). But it basically takes everything in our site and passes it as props into the function we exported in our Provider!

Your `gatsby-browser.js` file has access to this hook, we'll be wrapping it up with our Provider. It's recommended to also add this to your `gatsby-ssr.js` file, if you have it.

<div class="codeblock">
<svg xmlns="http://www.w3.org/2000/svg" width="54" height="14" viewBox="0 0 54 14"><g fill="none" fill-rule="evenodd" transform="translate(1 1)"><circle cx="6" cy="6" r="6" fill="#FF5F56" stroke="#E0443E" strokeWidth=".5"></circle><circle cx="26" cy="6" r="6" fill="#FFBD2E" stroke="#DEA123" strokeWidth=".5"></circle><circle cx="46" cy="6" r="6" fill="#27C93F" stroke="#1AAB29" strokeWidth=".5"></circle></g></svg>
<div class="inline-block">gatsby-browser.js</div>

<pre class="result">
<span class="pink">import</span> "./src/styles/theme.scss"
<span class="pink">import</span> Provider <span class="pink">from</span> './provider';

<span class="pink">export const</span> wrapRootElement = Provider;
</pre>
</div>
<br/>

Now, if you have some basic stylings already in place for both themes, you're about ready to see the toggle in action! If not, go ahead and create some in your CSS/Sass. Keep note of the light and dark class names you choose. I chose to import my styles into the `gatsby-browser.js` file.

### Let's Apply It!

Finally, the last thing we need to do to access our state throughout our pages is to wrap each page's content in a `myContext.Consumer` tag and make use of our global state `context`. I've included `React.Fragment` in this example, because it allows us to add more than one element, like we would usually use an Array for.

Also, before we forget, in order to actually toggle the theme, we'd need some sort of button with our toggle action. Make sure you add `onClick={() => context.changeTheme()}` to your chosen button or link. This references our `changeTheme: () => setTheme(!isDark)` function that we defined back in our Provider.

<div class="codeblock">
<svg xmlns="http://www.w3.org/2000/svg" width="54" height="14" viewBox="0 0 54 14"><g fill="none" fill-rule="evenodd" transform="translate(1 1)"><circle cx="6" cy="6" r="6" fill="#FF5F56" stroke="#E0443E" strokeWidth=".5"></circle><circle cx="26" cy="6" r="6" fill="#FFBD2E" stroke="#DEA123" strokeWidth=".5"></circle><circle cx="46" cy="6" r="6" fill="#27C93F" stroke="#1AAB29" strokeWidth=".5"></circle></g></svg>
<div class="inline-block">pages/index.js</div>

<pre class="result">
<span class="pink">import</span> { myContext } <span class="pink">from</span> '../../provider';

<span class="pink">const</span> <span class="command">BlogIndex</span> = ({ data, location }) => {
  
  return (
    &lt;<span class="pink">myContext.Consumer</span>>
      {context => (
        &lt;<span class="command">React.Fragment</span>>
          &lt;<span class="pink">div</span>>
            &lt;<span class="pink">button</span> <span class="command">className</span>="theme-toggle" <span class="command">onClick</span>={() => <span class="command">context</span>.<span class="pink">changeTheme</span>()}>Click Me!&lt;/<span class="pink">button</span>>
          &lt;/<span class="pink">div</span>>
          &lt;<span class="pink">div</span>>
            &lt;<span class="pink">h2</span>>Second element&lt;/<span class="pink">h2</span>>
          &lt;/<span class="pink">div</span>>
        &lt;/<span class="command">React.Fragment</span>>
      )}
    &lt;/<span class="pink">myContext.Consumer</span>>
  )
}

<span class="pink">export default</span> <span class="command">BlogIndex</span>
</pre>
</div>
<br/>

You'll want to setup the same configuration to all your pages, wrapping their main content as we did above, this is what will make the state persist while moving between them! Nifty, right?

### Body class or wrapper class?

You have an option here, if you'd like your class added to your `body` element, you'll make the following addition to your `provider.js` file:

<div class="codeblock">
<svg xmlns="http://www.w3.org/2000/svg" width="54" height="14" viewBox="0 0 54 14"><g fill="none" fill-rule="evenodd" transform="translate(1 1)"><circle cx="6" cy="6" r="6" fill="#FF5F56" stroke="#E0443E" strokeWidth=".5"></circle><circle cx="26" cy="6" r="6" fill="#FFBD2E" stroke="#DEA123" strokeWidth=".5"></circle><circle cx="46" cy="6" r="6" fill="#27C93F" stroke="#1AAB29" strokeWidth=".5"></circle></g></svg>
<div class="inline-block">components/provider.js</div>

<pre class="result">
<span class="pink">const</span> <span class="command">Provider</span> = props => {
  <span class="pink">const</span> [isActive, setTheme] = <span class="command">useState</span>(false);
  document.body.className = <span class="pink">isActive</span> ? 'dark' : 'light';
</pre>
</div>
<br/>

`document.body.className = isActive ? 'dark' : 'light';` will add your class directly to the body element. If you want to add this class to another element, say you're not even using this for theme management, you'll instead add `className={context.isActive ? 'dark' : 'light'}` to whatever element you'd like, **given it is wrapped inside `<myContext.Consumer>` in your JSX**!

## Fin!