class CoffeeShop {
  constructor(name, menu, orders) {
    this.name = name;
    this.menu = menu;
    this.orders = orders;
  }

  addOrder(product) {
    const idx = this.menu.findIndex((item) => item.item === product);

    if (idx === -1) {
      console.log("This item is currently unavailable!");
    } else {
      this.orders.push(product);
      console.log("Order added!");
    }
  }

  fulfillOrder() {
    if (this.orders.length !== 0) {
      console.log(`The ${this.orders.shift()} is ready"`);
      //console.log(this.orders);
    } else {
      console.log(`All orders have been fulfilled!`);
    }
  }

  listOrders() {
    if (this.orders.lenght !== 0) {
      console.log(this.orders);
    } else {
      console.log([]);
    }
  }

  dueAmount() {
    let total = 0;
    this.orders.forEach((item) => {
      // console.log(item);
      for (const val of this.menu) {
        if (val.item === item) {
          total += val.price;
        }
      }
    });
    console.log(`Total price is: ${total.toFixed(2)}`);
  }

  cheapestItem() {
    const result = this.menu.reduce((acc, item) => {
      acc.push(item.price);
      return acc;
    }, []);

    const cheapPrice = Math.min(...result);
    console.log(cheapPrice);

    const cheapItem = this.menu.find((item) => {
      if (item.price === cheapPrice) {
        console.log(item.item);
      }
    });
  }

  drinksOnly() {
    const drinks = this.menu
      .filter((item) => {
        if (item.type === "drink") {
          return item;
        }
      })
      .map((item) => item.item);
    console.log(drinks);
  }

  foodOnly() {
    const drinks = this.menu
      .filter((item) => {
        if (item.type === "food") {
          return item;
        }
      })
      .map((item) => item.item);
    console.log(drinks);
  }
}

const shop1 = new CoffeeShop(
  "CoffeeShop Danielito",
  [
    { item: "Hot Chocolate", type: "drink", price: 2 },
    { item: "Coffee", type: "drink", price: 2.2 },
    { item: "Carajillo", type: "drink", price: 2.5 },
    { item: "Tostadas", type: "food", price: 1.5 },
    { item: "CheeseCake", type: "food", price: 2.5 },
    { item: "Pancakes", type: "food", price: 1.9 },
    { item: "Churros", type: "food", price: 1.5 },
  ],
  []
);

shop1.addOrder("Coffee");
shop1.addOrder("Churros");
shop1.addOrder("Tostadas");
shop1.addOrder("Coffee");

//console.log(shop1);
//shop1.fulfillOrder();
shop1.listOrders();
shop1.dueAmount();
shop1.cheapestItem();
shop1.drinksOnly();
shop1.foodOnly();
