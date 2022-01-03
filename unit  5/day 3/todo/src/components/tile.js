function find(n,k,arr) {
   var a = arr.reduce((a, b) => a + b)
      for(var i = 0 ; i<2000000 ; i++){
          if (n+a>k){
              return "-1"
          }
          if(n+a==k){
              return  k
          }
          else{
          n = n+a
          arr = n.toString().split("").map(Number)
          a = arr.reduce((a, b) => a + b,0)
          console.log(n,arr,a);}
      }
       
    }


function runProgram(input) {
    // Write code here
    input= input.trim().split("\n")
//     var size = +input[0]
  var [n,k] = input[0].trim().split(" ").map(Number)
var arr = n.toString().split("").map(Number)
console.log(find(n,k,arr));


  }
  if (process.env.USERNAME === "sm798") {
    runProgram(`10055 415455`);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0) ;
    });
  }
