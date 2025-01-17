import { APIGatewayEvent, APIGatewayProxyResult, Context } from "aws-lambda";
import { ProuductRepository } from "./repository/product-repository";
import { ProductService } from "./service/product-service";
import { ErrorResponse } from "./utility/response";

const service = new ProductService(new ProuductRepository());

export const handler = async (
  event: APIGatewayEvent,
  context: Context
): Promise<APIGatewayProxyResult> => {
  const isRoot = event.pathParameters === null;

  switch (event.httpMethod.toLowerCase()) {
    case "post":
      if (isRoot) {
        return service.createProduct(event);
      }
      break;
    case "get":
      return isRoot ? service.getProducts(event) : service.getProduct(event);

    case "put":
      if (!isRoot) {
        return service.editProduct(event);
      }

    case "delete":
      if (!isRoot) {
        return service.deleteProduct(event);
      }
  }

  return ErrorResponse(404, "request method not allowed!");
};
