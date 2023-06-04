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
<div id="grid">
  <div class="item" data-index="1">Item 1</div>
  <div class="item" data-index="2">Item 2</div>
  <div class="item" data-index="3">Item 3</div>
  <!-- Add more items as needed -->
</div>
```

3. Initialize the grid using Muuri.js:

```javascript
var grid = new Muuri('#grid', {
  // Grid options go here
});
```

## Updating the _sortData Attribute

To update the `_sortData` attribute of items in Muuri.js, follow these steps:

1. Access the grid items using the `getItems()` method:

   ```javascript
   var items = grid.getItems();
   ```

2. Iterate over the items and update the `_sortData` attribute:

   ```javascript
   items.forEach(function(item, index) {
     item._sortData.index = index + 1;
   });
   ```

3. Trigger a layout update using the `layout()` method to reflect the changes:

   ```javascript
   grid.layout();
   ```

By following the above steps, you can dynamically update the `_sortData` attribute of items in the grid.

Please note that this example assumes a basic setup. Refer to the Muuri.js documentation for advanced configuration options and additional features.

For more information on how to use Muuri.js, check out the [official documentation](https://muuri.dev/).

Feel free to adjust the content and formatting of the `README.md` file to meet your specific requirements and project structure.

## Customization

You can customize the grid and its appearance by modifying the HTML structure and CSS styles. You can also explore the various options provided by Muuri.js to customize the behavior of the grid, such as sorting, filtering, dragging, and more. Refer to the official Muuri.js documentation for detailed information on available options and methods.

## Additional Resources

- [Muuri.js GitHub Repository](https://github.com/haltu/muuri)
- [Muuri.js Documentation](https://muuri.dev)

## License
