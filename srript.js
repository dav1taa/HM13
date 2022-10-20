

var income = prompt ("რამდენი გაქვთ ხელფასი?");

if (income<1500) {
    alert ("დაბალი ხელფასი");

}  else if (income == 1500) {
    alert ("საშუალო ხელფასი");
}  else {
    alert ("მაღალი ხელფასი");
}



var arr = [1,4,18,24,15,2,3,19,55];
for ( var i=0; i < arr.length; i++)
if(arr[i] % 2 == 0) {
    // ლუწი
    console.log(arr[i] + " " + "ლუწი რიცხვი მასივიდან")
}  else if  (arr[i] % 2 == 1) {
    //  კენტი 
    console.log(arr[i] + " " + "კენტი რიცხვი მასივიდან")
} 


var arr = [1,4,18,24,15,2,3,19,55];
var max = 0;
for (var i=0; i<arr.length; i++) {
    if (arr[i] > max) {
        max= arr[i];
    }
}
console.log ( max + " " + " დიდი რიცხვი ")


