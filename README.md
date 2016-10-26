# mn-layout

Responsive layouts, with CSS3 flexbox. 
Inspired in [angular material layout](https://material.angularjs.org/latest/layout/introduction).

<!-- ![preview mn-layout](https://raw.githubusercontent.com/minimalist-components/mn-layout/master/sources/imgs/preview.png) -->

### Install

With bower

```sh
bower install --save mn-layout
```

Or just download the main file ```dist/mn-layout.css``` in your project, and make a reference to their, like:

```html
<head>
  <link rel="stylesheet" href="path/to/dist/mn-layout.css">
</head>
```

### Usage

The three main classes are:

- `.layout-row` display elements in a row
- `.layout-column` display elements in a column
- `.flex` use the space available to display the element


```html
<!-- display elements in a row -->
<div class="layout-row">
  <div class="flex">Lorem</div>
  <div class="flex">Lorem</div>
  <div class="flex">Lorem</div>
</div>
```

```html
<!-- display elements in a column -->
<div class="layout-column">
  <div class="flex">Lorem</div>
  <div class="flex">Lorem</div>
  <div class="flex">Lorem</div>
</div>
```

#### Sizes

Suppose you want define a specific size to a element. You can define `.flex-*` where * is a size restricted to multiples of five (5, 10, 15, ...) going up to a maximum of 100. And you can too define 1/3 with `.flex-33` and 2/3 with `.flex-66`.

```html
<div class="layout-column">
  <!-- the element below has half of row -->
  <div class="flex-50">Lorem</div>
  <div class="flex">Lorem</div>
  <div class="flex">Lorem</div>
</div>
```

### Media queries prefix

Finally all classes has a media querie using the prefix `sm`, `md` or `lg`. When you use a media querie prefix, you define a thing to a specific size of screen and up, below a example: 

```html
<div class="layout-column">
  <!-- 
    the element below will be flex, 
    but in small screens and greater, will have 50% of size 
  -->
  <div class="flex flex-sm-50">Lorem</div>
  <div class="flex">Lorem</div>
  <div class="flex">Lorem</div>
</div>
```

All class has media queries prefix, so, if I want for example, display elements in a row in mobile, and greater than display in a row, I can use the following:

```html
<!-- by default, will be layout-column, but in small screens and greater, will be a row -->
<div class="layout-column layout-sm-row">
  <div class="flex">Lorem</div>
  <div class="flex">Lorem</div>
  <div class="flex">Lorem</div>
</div>
```

sm | md | lg | xl
-- | -- | -- | --
(min-width: 600px) | (min-width: 960px) | (min-width: 1280px) | (min-width: 1920px)
