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



--------------------------
  step-3

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
      tags:
        - products
  /orders:
    summary: to access orders
    post:
      summary: place a new order
      description: ''
      operationId: createOrder
      responses:
        '201':
          description: order created
          content:
            application/json:
              schema:
                $ref: '#/components/schema/product'
      tags:
        - orders

-----------------------

  step-4



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
                  $ref: '#/components/schemas/Product'
      tags:
        - products
  /orders:
    summary: to access orders
    post:
      summary: place a new order
      description: ''
      operationId: createOrder
      responses:
        '201':
          description: order created
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Order'
      tags:
        - orders
components:
  schemas:
    Product:
      type: object
      properties:
        id:
          type: integer
          format: int64
        name:
          type: string
        price:
          type: number
          format: float
      required: 
        - name
        - price
    Order:
      type: object
      properties:
        id:
          type: integer
          format: int64
        productId:
          type: integer
          format: int64
        quantity:
          type: integer
      required: 
        - name
        - price

