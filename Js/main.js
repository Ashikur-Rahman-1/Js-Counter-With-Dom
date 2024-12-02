//taking items with query selector

const item = document.querySelectorAll(".item");
const newItem = Array.from(item);

newItem.map((item) => {
  let x = 0;

  const counterUp = () => {
    x += 1;
    item.innerHTML = x;

    if (item.dataset.item1 == 5) {
      x += 5;
    } else if (item.dataset.item2 == 10) {
      x += 10;
    } else if (item.dataset.item3 == 8) {
      x += 8;
    } else if (item.dataset.item4 == 12) {
      x += 12;
    }
    if (x >= 100) {
      clearInterval(stop);
    }
  };

  const stop = setInterval(() => {
    counterUp();
  }, 1000);
});

//lets make a function, that function can update their existing value
