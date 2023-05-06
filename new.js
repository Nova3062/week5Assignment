class MenuItem {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
  }
  
  class Menu {
    constructor() {
      this.items = [];
    }
  
    addItem(item) {
      this.items.push(item);
    }
  
    viewMenu() {
      console.log('Menu:');
      this.items.forEach(item => {
        console.log(`${item.name} - $${item.price}`);
      });
    }
  
    deleteItem(itemName) {
      this.items = this.items.filter(item => item.name !== itemName);
      console.log(`Item '${itemName}' deleted from menu.`);
    }
  }
  
  const menu = new Menu();
  
  const item1 = new MenuItem('Hamburger', 9.99);
  const item2 = new MenuItem('French Fries', 4.99);
  const item3 = new MenuItem('Soft Drink', 2.49);
  
  menu.addItem(item1);
  menu.addItem(item2);
  menu.addItem(item3);
  
  menu.viewMenu(); // view all items in menu
  
  menu.deleteItem('French Fries'); // delete an item from menu
  
  menu.viewMenu(); // view all items in menu after deleting an item