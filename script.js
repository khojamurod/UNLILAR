function vowels(str) {
let arr=[ str ] 
let son=0
for(key in arr){
    for(key2 in arr[key]){
        if(arr[key][key2]== 'a' || arr[key][key2]=='o' || arr[key][key2]=='u' || arr[key][key2]=='i'|| arr[key][key2]=='y' || arr[key][key2]=='e'|| arr[key][key2]== 'A' || arr[key][key2]=='O' || arr[key][key2]=='U' || arr[key][key2]=='I'|| arr[key][key2]=='Y' || arr[key][key2]=='E') son++
    }
}
console.log(str);
return son
}
