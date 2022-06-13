type Size = '' | 'S' | 'M' | 'XL';

class Product {
  constructor(
    public name: string = '',
    public price: number = 0,
    public size:Size = ''
  ) {}

  isProductReady(): boolean {
    for( const key in this ) {
      switch ( typeof this[key] ) {
        case 'string':
          if( (<string><unknown>this[key]).length <= 0 ) throw new Error( `${ key } is empry` )
          break;
        case 'number':
          if( (<number><unknown>this[key]) <= 0 ) throw new Error( `${ key } is zero` )
          break;
        default:
          throw new Error( `${ typeof key } is not supported` );
      }
    }
    return true;
  };

  toString() {
    // if( this.name.length <= 0 ) throw new Error('Name is empty');
    // if( this.price <= 0 ) throw new Error('Price is zero');
    // if( this.size.length <= 0 ) throw new Error('Size is empty');

    if( !this.isProductReady ) return;

    return `${this.name} (${this.price}), ${ this.size}`
  }
}

(() => {

  const bluePants = new Product('Blue Large Pants');
  console.log( bluePants.toString() );
  
})();