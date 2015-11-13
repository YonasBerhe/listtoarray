var list1 = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: null
    }
  }
};
var list2 = {
  value: "foo",
  next: {
    value: "bar",
    next: null
  }
};


function listToArray(list) {
  var node = list;
  var result = [];

  while (node) {
    result.push(node.value);
    node = node.next;
}
return result;




  //
  // var firstValue = list1.value;
  // var secondValue = list1.next.value;
  //
  // result[0] = firstValue;
  // result[1] = secondValue;
  // console.log(result);


}




Test.assertSimilar(listToArray(list1), [1, 2, 3]);
Test.assertSimilar(listToArray(list2), ["foo", "bar"]);
