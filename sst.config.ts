/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "vitals",
      removal: input?.stage === "production" ? "retain" : "remove",
      protect: ["production"].includes(input?.stage),
      home: "aws",
    };
  },
  async run() {
    const next = await import("./infra/nextjs");
    const api = new sst.aws.ApiGatewayV2("MyApi");

    api.route("GET /hello", {
      handler: "packages/functions/src/hello.handler",
    });


    return {
      url: next.nextjs.url,
      apiUrl: api.url,            
      nextUrl: next.nextjs.url,   
    };
  },
});
