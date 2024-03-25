import { ProductInput } from "../dto/product-input";

export class ProuductRepository {
  constructor() {}

  async createProduct({
    name,
    description,
    price,
    category_id,
    image_url,
  }: ProductInput) {}

  async getAllProducts(offset = 0, pages?: number) {}

  async getProductById(id: string) {}

  async updateProduct({
    name,
    description,
    price,
    category_id,
    image_url,
  }: ProductInput) {}

  async deleteProduct(id: string) {}
}
