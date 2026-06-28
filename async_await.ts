async function doiGiay(){
console.log("Dang cho...");
await cho(1000);
console.log("Da cho xong 1s");
}

function cho(ms: number){
    return new Promise((resolve) => setTimeout(resolve, ms));
}
doiGiay();
