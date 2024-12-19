class Products {
  constructor(api) {
    this.api = api;
  }
  async GetAll() {
    try {
      const products = await this.api.get(`/products`);
      return products.data;
    } catch (err) {
      console.error(err);
    }
  }
}
export default Products;