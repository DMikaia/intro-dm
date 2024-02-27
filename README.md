# Frontend Mentor - Intro section with dropdown navigation solution

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```js
let toggleAnimationMobile = (index) => {
  const featM = anime.timeline({
    easing: "easeOutExpo",
  });

  const compM = anime.timeline({
    easing: "easeOutExpo",
  });

  if (index === 0) {
    featM.add({
      targets: "#feat-arrow-mobile .arrow-mobile",
      d: [{ value: toggleDrop ? upPathM : downPathM }],
    });
    document.getElementById("feat-drop-mobile").style.display = toggleDrop
      ? "flex"
      : "none";
  } else {
    compM.add({
      targets: "#comp-arrow-mobile .arrow-mobile",
      d: [{ value: toggleDrop ? upPathM : downPathM }],
    });
    document.getElementById("comp-drop-mobile").style.display = toggleDrop
      ? "flex"
      : "none";
  }
};
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

### Useful resources

- [Anime.js](https://animejs.com) - This helped me to do a little svg changing animation

## Author

- Frontend Mentor - [@DMikaia](https://www.frontendmentor.io/profile/DMikaia)
