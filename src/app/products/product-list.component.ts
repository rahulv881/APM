import { templateJitUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{

  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  showButton: string = "Show";
  //listFilter: string = "cart";

  constructort() {
    this.filteredProducts = this.products;
    this.listFilter = 'cart';
  }

  products: any[] = [
    {
      productId: 1,
      productName: 'Leaf Rake',
      productCode: 'GDN-0011',
      releaseDate: 'March 19, 2019',
      description: 'Leaf rake with 48-inch wooden handle.',
      price: 19.95,
      starRating: 3.2,
      imageUrl: 'assets/images/leaf_rake.png',
    },
    {
      productId: 2,
      productName: 'Garden Cart',
      productCode: 'GDN-0023',
      releaseDate: 'March 18, 2019',
      description: '15 gallon capacity rolling garden cart',
      price: 32.99,
      starRating: 4.2,
      imageUrl: 'assets/images/garden_cart.png',
    }
  ];

  _listFilter: string;
  filteredProducts: any[] = this.products;


  get listFilter():string{
    return this._listFilter;
  }
  set listFilter(value:string){
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  performFilter(filterBy: string): any[] {
    //throw new Error('Method not implemented.');
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: any)=>
    product.productName.toLocaleLowerCase().indexOf(filterBy)!== -1);
  }


  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }


  toggleImage(): void{
    this.showImage = !this.showImage;
    if(this.showImage===true)
    {
      this.showButton="Hide";
    }
    else
    {
      this.showButton="Show";
    }
  }
}



