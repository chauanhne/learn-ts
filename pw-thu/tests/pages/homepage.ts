import {Page, Locator} from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly btn_addtocart_backpack: Locator;
    readonly btn_addtocart_bikelight: Locator;
    readonly btn_addtocart_bolt: Locator;
    readonly btn_addtocart_fleece: Locator;
    readonly btn_addtocart_onesie: Locator
    readonly btn_addtocart_tshirt: Locator;
    
    readonly btn_remove_backpack: Locator;
    readonly btn_remove_bikelight: Locator;
    readonly btn_remove_bolt: Locator
    readonly btn_remove_fleece: Locator;
    readonly btn_remove_onesie: Locator;
    readonly btn_remove_tshirt: Locator;


constructor(page: Page){
    this.page = page;
    //this.btn_addtocart_backpack = page.locator('#add-to-cart-sauce-labs-backpack');
    //this.btn_addtocart_backpack = page.getByRole('button', {name: 'Add to cart', exact: true}).first();
    this.btn_addtocart_backpack = page.getByTestId('add-to-cart-sauce-labs-backpack');

    //this.btn_remove_backpack = page.locator('#remove-sauce-labs-backpack');
    this.btn_remove_backpack = page.getByRole('button', {name: 'Remove', exact: true}).first();
    this.btn_addtocart_bikelight = page.locator('#add-to-cart-sauce-labs-bike-light');
    this.btn_remove_bikelight = page.locator('#remove-sauce-labs-bike-light');
    this.btn_addtocart_bolt = page.locator('#add-to-cart-sauce-labs-bolt-t-shirt');
    this.btn_remove_bolt = page.locator('#remove-sauce-labs-bolt-t-shirt');
    this.btn_addtocart_fleece = page.locator('#add-to-cart-sauce-labs-fleece-jacket');
    this.btn_remove_fleece = page.locator('#remove-sauce-labs-fleece-jacket');
    this.btn_addtocart_onesie = page.locator('#add-to-cart-sauce-labs-onesie');
    this.btn_remove_onesie = page.locator('#remove-sauce-labs-onesie');
    this.btn_addtocart_tshirt = page.locator('[id="add-to-cart-test.allthethings()-t-shirt-(red)"]');
    this.btn_remove_tshirt = page.locator('[id="remove-test.allthethings()-t-shirt-(red)"]');
}

async addtocart(){
    await this.btn_addtocart_backpack.click();
    await this.btn_addtocart_bikelight.click();
    await this.btn_addtocart_bolt.click();
    await this.btn_addtocart_fleece.click();
    await this.btn_addtocart_onesie.click();
    await this.btn_addtocart_tshirt.click();
}

async removecart(){
    await this.btn_remove_backpack.click();
    await this.btn_remove_bikelight.click();
    await this.btn_remove_bolt.click();
    await this.btn_remove_fleece.click();
    await this.btn_remove_onesie.click();
    await this.btn_remove_tshirt.click();   
}

}