//dung Reduce
function tinhTongGia1 (item: {ten: string, gia:number}[]) : number {
return item.reduce((tong, item) => tong + item.gia, 0); //duyet tung phan tu trong mang va cong don gia cua tung phan tu vao bien tong, bat dau tu 0
}

const mang1 = [
  {ten: 'item1', gia: 100},
  {ten: 'item2', gia: 200},
  {ten: 'item3', gia: 300}
];

const mang2 = [
    {ten: 'item4', gia: 400},
    {ten: 'item5', gia: 500},
];

console.log(`Tong gia cua mang 1: ${tinhTongGia1(mang1)}`); 
console.log(`Tong gia cua mang 2: ${tinhTongGia1(mang2)}`); 


//dung for of
function tinhTongGia2 (items: {ten: string, gia:number}[]) : number {
    let tong = 0;
    for (const item of items) {
        tong += item.gia;
    }
    return tong;
}

const mang3 = [
  {ten: 'item1', gia: 100},
  {ten: 'item2', gia: 200},
  {ten: 'item3', gia: 300}
];

const mang4 = [
    {ten: 'item4', gia: 400},
    {ten: 'item5', gia: 500},
];

console.log(`Tong gia cua mang 3: ${tinhTongGia2(mang3)}`); 
console.log(`Tong gia cua mang 4: ${tinhTongGia2(mang4)}`); 