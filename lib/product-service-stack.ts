import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { ApiGatewayStack } from "./api_gateway-stack";
import { ServiceStack } from "./service-stack";

export class ProductServiceStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const { productService, categoryService, dealsService } = new ServiceStack(
      this,
      "ProductService",
      {}
    );
    new ApiGatewayStack(this, "ProductApiGateway", {
      productService,
      categoryService,
      dealsService,
    });
  }
}
