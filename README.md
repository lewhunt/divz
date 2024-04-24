<p dir="auto" align='center'><a href="https://lewhunt.github.io/divz/" rel="nofollow"><img  align='center' src="https://lewhunt.github.io/assets/readme/divz-demo.gif" alt="DIVZ" style="border: 2px solid gray"></a></p>

<p align='center'><i><small>
Divz is a React UI component that lets you stack, swipe and zoom through divs on the 3D z-axis. <br/>Click the above to try out the demos.</small></i></p>

<p align='center'>
  <a href='https://www.npmjs.com/package/divz'>
    <img src='https://img.shields.io/npm/v/divz.svg' alt='Latest npm version'>
  </a>
    <a href='https://github.com/lewhunt/divz/blob/main/LICENSE'>
    <img src='https://img.shields.io/badge/License-MIT-yellow.svg' alt='MIT License'>
  </a>
    <a href='https://www.npmjs.com/package/divz'>
    <img src='https://img.shields.io/npm/dm/divz.svg' alt='Monthly npm downloads'>
  </a>
</p>

## Installation

```bash
npm install divz
```

## Basic Usage

Just import the component and render it in your app or page:

```jsx
import { Divz } from "divz";

function App() {
  return (
    <Divz>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </Divz>
  );
}
```

## Advanced Usage

The demos illustrate how the component can be initialised with more props - along with images and videos inside the child divs - for a richer user experience.

```jsx
<Divz
  autoPlay={true}
  autoPlayDuration={4000}
  onIndexChange={(i) => console.log("divz selected index: ", i)}
  onPlaying={(i) => console.log("divz playing status: ", i)}
>
  <div>
    <img src="https://image.tmdb.org/t/p/w1280/rRBD8ORo9y34tYkAQJVbn4Ml6tu.jpg" />
  </div>

  <div>
    <img src="https://image.tmdb.org/t/p/w1280/vJGgox2d4HWmm3icilCytCC6RCR.jpg" />
  </div>

  <div>
    <img src="https://image.tmdb.org/t/p/w1280/36q3LejjQbpyhhuMpJN6kALbFtR.jpg" />
  </div>
</Divz>
```

## Why create Divz?

Divz was was created to showcase portfolio work within an experimental pseudo-3D environment, loosely inspired by Apple's Time Machine interface which allows the user to zoom through historical Finder windows:

[![https://en.wikipedia.org/wiki/Time_Machine_%28macOS%29](https://upload.wikimedia.org/wikipedia/en/1/1a/Timemachine_gallery_windowsquicklook20070611.jpg)](https://en.wikipedia.org/wiki/Time_Machine_%28macOS%29)

<p align='center'><i>Apple's Time Machine was the inspiration for Divz</i>

## What Sets It Apart?

Divz is designed to be responsive and easy to use, acting as a simple wrapper around a list of HTML divs or elements. Various modes of navigation are supported: touch for mobile, cursor and trackpad for desktop, plus arrow keys for big-screen devices.

## How Does It Work?

Under the hood Divz performs CSS3 transforms on child elements of the component, set dynamically with React TypeScript. The component is packaged using Vite to allow npm library integration.

<hr>

## Props

| Prop                       | Description                                                                                                                                    | Default |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| `autoPlay`                 | Set to `true` to autoplay a carousel sequence of any children div elements                                                                     | `false` |
| `isAutoPlayLooped`         | Set to `true` to enable the autoPlay sequence to endlessly loop                                                                                | `true`  |
| `autoPlayDuration`         | Set the time interval in milliseconds for the autoPlay feature                                                                                 | `6000`  |
| `showPlayButton`           | Set to `true` to display the autoPlay toggle button                                                                                            | `true`  |
| `showNavButtons`           | Set to `true` to display the up/down navigational buttons for cycling between div children                                                     | `true`  |
| `showExpandButton`         | Set to `true` to display the 'full-screen' expand button which is used to toggle the scale of div items                                        | `true`  |
| `showNavButtonsOnExpanded` | Set to `true` to display the navigational buttons when div items have been expanded                                                            | `false` |
| `isExpanded`               | Set to `true` to toggle the scale of div items                                                                                                 | `false` |
| `isDarkMode`               | Set to `true` to set the buttons UI styling to dark mode                                                                                       | `false` |
| `isSnapEnabled`            | Set to `true` to ensure the transform animation is snap-fixed to only move between the div items                                               | `true`  |
| `selectIndex`              | Set the index number to force it to instantly jump to position of a div child item. By default it will instead zoom animate to the first item. | `null`  |
| `className`                | Insert additional classname values for overriding the component CSS styling                                                                    | `null`  |

## Callback Props

Callback props take a function that gets fired on various events:

| Prop            | Description                                                                          |
| --------------- | ------------------------------------------------------------------------------------ |
| `onIndexChange` | Called when navigation occurs and the currently selected divz item has changed index |
| `onPlaying`     | Called when autoPlay sequence starts or stops                                        |

|

<hr>

## [:point_right: Try out the demo :point_left:](https://lewhunt.github.io/divz/)

**https://lewhunt.github.io/divz**
