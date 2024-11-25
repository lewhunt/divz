<h1 align='center'>
  Divz
</h1>
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

<p align='center'><i><small>
A React UI component that lets you scroll, swipe & zoom through HTML elements on the 3D z-axis</small></i></p>

<p dir="auto" align='center'><a href="https://lewhunt.github.io/divz/" rel="nofollow"><img  align='center' src="https://lewhunt.github.io/assets/readme/divz-demo1.gif" alt="https://lewhunt.github.io/divz/"></a></p>

<p align='center'><i><small>
Click above to try out the demos</small></i></p>

<br/>

## Installation

```bash
npm install divz
```

<br/>

## Basic Usage

Import the component and render it in your app or page, wrapping it around your list of divs or other HTML elements:

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

### [:point_right: Try out the demos :point_left:](https://lewhunt.github.io/divz/)

**https://lewhunt.github.io/divz**

<br/>

## Advanced Usage

The demos illustrate how the component can be initialised with more props - along with images and videos inside the child divs - for a richer user experience. Demo 3 uses a custom video component with preview images, optimised to only play video when the current item is active:

```jsx
<Divz
  isExpanded={true}
  showPlayButton={false}
  onIndexChange={(i) => setSelectedIndex(i)}
>
  {demo3Assets.map((item, index) => (
    <DivzVideoItem
      key={index}
      index={index}
      selectedIndex={selectedIndex}
      previewImage={item.image}
      videoSource={item.video}
    ></DivzVideoItem>
  ))}
</Divz>
```

<br/>

Here's a quick video of Demo 2, utilising dark mode, images and basic video elements:

https://github.com/lewhunt/divz/assets/9886284/25c5f39b-5ab7-4088-8fa8-e23f4bb80498

<br/>

## Why Divz?

Divz was created to quickly showcase portfolio work within a pseudo-3D environment, loosely inspired by Apple's Time Machine interface which allows the user to zoom through historical Finder windows:

[![https://en.wikipedia.org/wiki/Time_Machine_%28macOS%29](https://upload.wikimedia.org/wikipedia/en/1/1a/Timemachine_gallery_windowsquicklook20070611.jpg)](https://en.wikipedia.org/wiki/Time_Machine_%28macOS%29)

<p><i>Apple's Time Machine was the inspiration for Divz</i></p>

<br/>
  
## What Sets It Apart?

- <b>Simplified Integration:</b> Divz is designed to be responsive and easy to use, acting as a straightforward wrapper around a list of divs or other HTML elements.
- <b>Diverse Applications:</b> While the demos showcase its versatility as a carousel, slideshow, or gallery component, Divz opens the door to a range of other potential uses. Consider it an innovative, experimental method for navigating web content.
- <b>Broad Device Support:</b> Divz accommodates various navigation modes, including touch for mobile devices, cursor/trackpad for desktop users, and arrow keys for TV devices.

<br/>

## How Does It Work?

Under the hood, Divz performs CSS3 transforms on the core component and the child HTML elements, set dynamically with React TypeScript. The component is packaged using Vite to allow npm library integration.

<br/>

## Props

| Prop                       | Description                                                                                                                                                                                            | Default |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| `autoPlay`                 | Set to `true` to autoplay a carousel sequence of any children div elements                                                                                                                             | `false` |
| `isAutoPlayLooped`         | Set to `true` to enable the autoPlay sequence to endlessly loop                                                                                                                                        | `true`  |
| `autoPlayDuration`         | Set the time interval in milliseconds for the autoPlay feature                                                                                                                                         | `6000`  |
| `showPlayButton`           | Set to `true` to display the autoPlay toggle button                                                                                                                                                    | `true`  |
| `showNavButtons`           | Set to `true` to display the up/down navigational buttons for cycling between div children                                                                                                             | `true`  |
| `showExpandButton`         | Set to `true` to display the 'full-screen' expand button which is used to toggle the scale of div items                                                                                                | `true`  |
| `showNavButtonsOnExpanded` | Set to `true` to display the navigational buttons when div items have been expanded                                                                                                                    | `false` |
| `isExpanded`               | Set to `true` to toggle the scale of div items                                                                                                                                                         | `false` |
| `isDarkMode`               | Set to `true` to set the buttons UI styling to dark mode                                                                                                                                               | `false` |
| `isSnapEnabled`            | Set to `true` to ensure the transform animation is snap-fixed to only move between the div items                                                                                                       | `true`  |
| `isScrollPageEnabled`      | Set to `true` to override the preferred 'fullscreen' behaviour and enable page scrolling with scrollbar. However, page scrolling is not recommended as it may also trigger the Divz swipe interactions | `false` |
| `selectIndex`              | Set the index number to force it to instantly jump to position of a div child item. By default it will instead zoom animate to the first item.                                                         | `null`  |
| `className`                | Insert additional classname values for overriding the component CSS styling                                                                                                                            | `null`  |
| `onIndexChange`            | Called when navigation occurs and the currently selected divz item has changed index                                                                                                                   |         |
| `onPlaying`                | Called when autoPlay sequence starts or stops                                                                                                                                                          |         |

<br/>

## Credits

Sample media used in the [demos](https://lewhunt.github.io/divz/) are from various open source projects:

- Demo 2 & 3 images and videos are from [Pixabay](https://pixabay.com/) and [Runway](https://runwayml.com/)
- Demo 4 images are generated in [Midjourney](https://www.midjourney.com/) by [Manoela Ilic](https://github.com/codrops/GridItemHoverEffect/)

<br/>

## Support

I hope this has given a good intro to the component and you get some use out of it for your own projects!

[💬 Fire over a comment](https://github.com/lewhunt/divz/issues) if you have any feedback, requests or issues 🐛

[⭐ Give it a star](https://github.com/lewhunt/divz) if you like the component or want to bookmark it 🙏
