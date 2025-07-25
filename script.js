function func(son, name, price) {
  let number = prompt(
    `${name} dan nechta sotib olmoqchisiz? narxi: ${price} so'm`
  );
  let allFunc = function () {
    alert(
      `${name} dan ${number} ta sotib oldingiz: Umumiy narxi: ${
        price * number
      } so'm`
    );
  };

  switch (son) {
    case 1:
      allFunc();
      break;
    case 2:
      allFunc();
      break;
    case 3:
      allFunc();
      break;
  }
}
