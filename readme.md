This file that explains how to use Muuri.js and update the `data-index` attribute of items when the layout changes:

# Muuri.js

Muuri.js is a powerful and flexible JavaScript library for creating responsive, sortable, and draggable grid layouts. It provides a simple API for managing and manipulating grid items with smooth animations.

## Usage

1. Include the Muuri.js library in your HTML file:

```html
    <script src="https://cdnjs.cloudflare.com/ajax/libs/web-animations/2.3.2/web-animations.min.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/haltu/muuri@0.9.5/dist/muuri.min.js"></script>
```

2. Set up the HTML structure for the grid container and the individual grid items. Assign an initial value to the `data-index` attribute for each item:

```html
<div id="grid-container">
  <div class="item" data-index="1">Item 1</div>
  <div class="item" data-index="2">Item 2</div>
  <div class="item" data-index="3">Item 3</div>
  <!-- Add more items as needed -->
</div>
```

3. Initialize the grid using Muuri.js:

```javascript
var grid = new Muuri('#grid-container', {
  // Grid options go here
});
```

4. Update the `data-index` attribute of items when the layout changes:

```javascript
function updateDataIndex() {
  grid.getItems().forEach(function(item, index) {
    item.getElement().setAttribute('data-index', index + 1);
  });
}

grid.on('layoutEnd', updateDataIndex);
```

In the above example, we create a function called `updateDataIndex()` that updates the `data-index` attribute of each item in the grid. This function is called whenever the `layoutEnd` event is triggered, indicating the end of a layout change.

## Customization

You can customize the grid and its appearance by modifying the HTML structure and CSS styles. You can also explore the various options provided by Muuri.js to customize the behavior of the grid, such as sorting, filtering, dragging, and more. Refer to the official Muuri.js documentation for detailed information on available options and methods.

## Additional Resources

- [Muuri.js GitHub Repository](https://github.com/haltu/muuri)
- [Muuri.js Documentation](https://muuri.dev)

## License
