const dotproduct = (v1 , v2) =>{
output = 0
for (let i in v1){
    output += v1[i] * v2[i]
}
if (output == 0){
    return "IR are orthogonal"
}else{
    return output
}
}
console.log(dotproduct([2 , 3] , [-3 , 2]))