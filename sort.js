function sortByID(cheeseRecords) {
  let byCheeseId = cheeseRecords.slice(0);
  byCheeseId.sort(function(a, b) {
    return a.CheeseId - b.CheeseId;
  });
  console.log("---------------by CheeseId:----------------");
  console.log(byCheeseId);
  return byCheeseId;
}
//Sort cheese objects by Manufacturer provcode
function sortByProvCode(cheeseRecords) {
  let byName = cheeseRecords.slice(0);
  byName.sort(function(a, b) {
    let x = a.ManufacturerProvCode;
    let y = b.ManufacturerProvCode;
    //return x < y ? -1 : x > y ? 1 : 0;
    return x.localeCompare(y);
  });

  console.log("---------------by Province code:----------------");
  console.log(byName);
  return byName;
}

module.exports = {
  sortByID,
  sortByProvCode
};
