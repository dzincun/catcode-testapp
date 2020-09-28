var token = "f06d0d1e35df0c4fec66b87878221a945ade64ff";

function join(arr /*, separator */) {
  var separator = arguments.length > 1 ? arguments[1] : ", ";
  return arr.filter(function(n){return n}).join(separator);
}

function showSuggestion(suggestion) {
  console.log(suggestion);
  var data = suggestion.data;
  if (!data)
    return;
  
 
}

$("#adress").suggestions({
  token: token,
  type: "ADDRESS",
  count: 5,
  onSelect: showSuggestion
});