function fn() {
  for (var i = 0; i < 6; i++) {
     setTimeout(function (){
      console.log(i);
     }, 1000 * i)
  }
}

function fn1() {
  for (var i = 0; i < 6; i++) {
    (function(j){
      setTimeout(function (){
        console.log(j);
       }, 1000 * j)
    })(i)
  }
}

// fn();
console.log('==================');
fn1();