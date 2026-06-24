const taikhoan = {
    ten: "Đặng Châu Anh",
    tuoi: 24,
    diaChi: "123 Đường ABC, Quận 1, TP.HCM",
    email: "anhdc4@fpt.com"        
}
console.log(`Ten: ${taikhoan.ten}, Tuoi: ${taikhoan.tuoi}, Dia chi: ${taikhoan.diaChi}, Email: ${taikhoan.email}`);

const array = ["FPT", "Polytechnic", "University"];
console.log(`Array: ${array.join(", ")}`);
console.log(`array: ${array[0]}`);

const pattern = [
    {email: "anhdc4@fpt.com", hoten: "Đặng Châu Anh", tuoi: 24},
    {email: "huyennhk@fpt.com", hoten: "Nguyễn Huyền", tuoi: 22},
]
console.log(`Pattern: ${pattern.map(item => `Email: ${item.email}, Ho ten: ${item.hoten}, Tuoi: ${item.tuoi}`).join(" | ")}`);

//for...of
const dsTaiKhoan = [
    {email: "anhdc4@fpt.com", matkhau: "123456", tuoi: 24},
    {email: "hattt65@fpt.com", matkhau: "123456", tuoi: 32},
    {email: "anhptm17@fpt.com", matkhau: "345678", tuoi: 24},
]
//for...of & if...else
for(const TK of dsTaiKhoan) {
    console.log(`Email: ${TK.email}`);
   
}
 console.log(`Số lượng tài khoản: ${dsTaiKhoan.length}`);

for (const emailTK of dsTaiKhoan){
    if(emailTK.tuoi > 30) {
        console.log(`${emailTK.email} - Già`);
    }
        else {
            console.log(`${emailTK.email} - Trẻ`);

        }
    
    }
    


