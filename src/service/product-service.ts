import { APIGatewayEvent } from "aws-lambda";
import { plainToClass } from "class-transformer";
import { ProductInput } from "../dto/product-input";
import { ProuductRepository } from "../repository/product-repository";
import { AppValidationError } from "../utility/errors";
import { ErrorResponse, SuccessReaponse } from "../utility/response";

export class ProductService {
  _repository: ProuductRepository;

  constructor(repository: ProuductRepository) {
    this._repository = repository;
  }

  async createProduct(event: APIGatewayEvent) {
    try {
      const body = JSON.parse(event.body as string);
      const input = plainToClass(ProductInput, body);
      const error = await AppValidationError(input);
      if (error) return ErrorResponse(404, error);

      return SuccessReaponse({ msg: "Product Created!" });
    } catch (error) {
      return ErrorResponse(500, error);
    }
  }

  async getProducts(event: APIGatewayEvent) {
    return SuccessReaponse({ msg: "get Products!" });
  }

  async getProduct(event: APIGatewayEvent) {
    return SuccessReaponse({ msg: "get product by id!" });
  }

  async editProduct(event: APIGatewayEvent) {
    return SuccessReaponse({ msg: "edit product" });
  }

  async deleteProduct(event: APIGatewayEvent) {
    return SuccessReaponse({ msg: "delete product" });
  }
}
