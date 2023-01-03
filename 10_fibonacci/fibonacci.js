const fibonacci = function(num) {
  let sequence = []
  sequence[0] = 1;
  sequence[1] = 1;

  if (typeof num === 'string'){
    num = Number(num);
  }
  if (num > 0){
    for (let i = 2; i < num; i++){
        sequence[i] = sequence[i-2] + sequence[i-1];
    }
    return sequence[num - 1];
  }else{
    return 'OOPS';
  }

};

// Do not edit below this line
module.exports = fibonacci;
