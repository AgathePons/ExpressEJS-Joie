const tools = {
  orderObjectInArray: (valueToCompare, a,b) => {
    if(a[valueToCompare] < b[valueToCompare]) {
      return -1;
    }
    if(a[valueToCompare] > b[valueToCompare]) {
      return 1;
    }
    return 0;
  }
};

module.exports = tools;