const stock = ['fries', 'burger', 'icecream'];

const isValidOrder = (...order) => {
  for (const food of order) {
    if (!stock.includes(food)) {
      return {
        outOfStockFood: food,
        orderStatus: false,
      };
    }
  }
  return { orderStatus: true };
};

const getFood = (...order) =>
  new Promise((resolve, reject) => {
    const { orderStatus, outOfStockFood } = isValidOrder(...order);
    if (orderStatus) {
      console.log(`... preparing ${order}`); // this should take time
      resolve(order);
    }
    reject(new Error(`${outOfStockFood} is out of stock`));
  });

const myFood = getFood('fries', 'burger');
// console.log('myFood: ', myFood);

myFood
  .then(food => {
    console.log('\nPromise flow');
    console.log(`prepared ${food}`);
  })
  .catch(err => {
    console.log('\nPromise flow');
    console.log(`We are sorry, ${err.message}`);
  })
  .finally(() => {
    console.log('Food ordering finished');
  });

(async () => {
  console.log('IIFE flow');
  try {
    const myFood = await getFood('fries', 'burger'); // add 'pizza' to go to the catch branch
    console.log('myFood: ', myFood);
  } catch (err) {
    console.log(`We are sorry, ${err.message}`);
  } finally {
    console.log('Food ordering finished');
  }
})();
