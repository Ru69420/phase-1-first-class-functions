
function receivesAFunction(spy) {
   spy();
}



function returnsANamedFunction() {
   const three = function() {return 3};
   return three;
}

function returnsAnAnonymousFunction() {
   return function(){return 3};
}

