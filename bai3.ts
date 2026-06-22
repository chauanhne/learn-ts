function taoEmail(ten: string) {
    return `${ten}@test.com`;
}

console.log(taoEmail("anhdc4"));

const taoEmail2 = (ten:string): string => `${ten}@test.com`;

console.log(taoEmail2("anhdc4"));