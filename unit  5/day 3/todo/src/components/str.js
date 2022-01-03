function find(n,arr) {
    var rr = ""
    for(var i =0 ; i<n ; i++){
          if(arr[i]<0){
              rr = rr+"0"
          }
          else{
              rr= rr+arr[i]
          }
    }
    return rr
}
function runProgram(input) {
    // Write code here
    input= input.trim().split("\n")
   var size = +input[0]
  var arr = input[1].trim().split(" ").map(Number)
console.log(find(size,arr));

  }
  if (process.env.USERNAME === "sm798") {
    runProgram(`5
    2 -4 6 8 -9`);
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
