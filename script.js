var grid = new Muuri(".grid", {
  dragEnabled: false,
  layoutOnInit: false,
  showDuration: 700,
  showEasing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  layout: {
    fillGaps: true,
    duration: 1000,
  },
  sortData: {
    id: function (item, element) {
      const el = parseInt(element.children[0].getAttribute("data-index"), 10);
      return el;
    },
  },
});
var sortAsc = document.querySelector(".sort-asc");
var sortDesc = document.querySelector(".sort-desc");
var shuffle = document.querySelector(".shuffle");

// Sort the items before the initial layout
// and do the initial layout
grid.sort("id", { layout: "instant" });

// Shuffle the items
function shuffleItems() {
  // Update the data-index attribute of items when the layout changes
  grid.getItems().forEach(function (item, index) {
    // generate random  number
    const random = Math.floor(Math.random() * 5) + 1;
    // set the data-index attribute to the random number
    switch (index) {
      case 0:
        item._sortData.id = 4;
        break;
      case 4:
        item._sortData.id = 0;
        break;
      default:
        break;
    }
  });
  grid.layout();
  grid.sort("id");
}

// Example of updating and shuffling the index values
setInterval(function () {
  // Shuffle the index values of all riders
  shuffleItems();
}, 30000);

// Bind the button event listeners
sortAsc.addEventListener("click", function () {
  grid.sort("id");
});
sortDesc.addEventListener("click", function () {
  grid.sort("id:desc");
});
shuffle.addEventListener("click", function () {
  shuffleItems();
  grid.sort("id");
});
