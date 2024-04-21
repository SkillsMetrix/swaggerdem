step-1

openapi: 3.0.3
info:
  title: Swagger ONline Store - OpenAPI 3.0
  version: 1.0..0
  description: This is a online store to buy a product
  license:
    name: Apache 2.0
    url: http://www.apache.org/licenses/LICENSE-2.0.html
servers:
  - url: http://onlinestore.com/api
    variables: {}
    description: URL for the API
tags:
  - name: products
    description: access to product
paths:
  /products:
    summary: access to product apis

-------------------

  step-2

openapi: 3.0.3
info:
  title: Swagger ONline Store - OpenAPI 3.0
  version: 1.0..0
  description: This is a online store to buy a product
  license:
    name: Apache 2.0
    url: http://www.apache.org/licenses/LICENSE-2.0.html
servers:
  - url: http://onlinestore.com/api
    variables: {}
    description: URL for the API
tags:
  - name: products
    description: access to product
  - name: orders
    description: for order app
paths:
  /products:
    summary: access to product apis
    get:
      summary: get all products
      description: ''
      operationId: getProducts
      responses:
        '200':
          description: List of products
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schema/product'
      tags: ['products']
  /orders:
    summary: to access orders

