function qt(n,x,arr){
    var c = 0
    var cc = 0
    for(var i =0 ; i<n ; i++){
        if(c<2){
            if(arr[i]<=x){
                cc++
            }
            else{
                c++
            }
        }
        else{
            return cc
        }
    }
    return cc
}
function runProgram(input) {
    // Write code here
    input= input.trim().split("\n")
//     var size = +input[0]
var [n,x] = input[0].trim().split(" ").map(Number)
var arr = input[1].trim().split(" ").map(Number)
console.log(qt(n,x,arr))
  }
  if (process.env.USERNAME === "sm798") {
    runProgram(`7 6
    4 3 7 6 7 2 2
    `);
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

