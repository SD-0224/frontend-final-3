# Data:

```
const product = {
	id:string,
	smallImageUrl:URL => 400 x 400,
	largeImageUrl:URL => 1000 x 1000,
	title:string,
	shortSubtitle:string => 1 - 4 words,
	longSubtitle:string => 1 - 15 words,
	description:string,
	categoryId:string,
	createdAt:number => Date.now(),
	reviews: [
		{
			userId:string,
			rating:float => 0.0 - 5
			content:string,
		}
	],
	price:float => up to 2 decimal points,
	brandId:string,
	quantity:number,
	discountPercentage:number => 0 - 100,
}

const user = {
	id:string,
	user:string,
	password:string,
	avatar:URL,
	firstName:string,
	lastName:string,
	mobile:number,
	email:string,
	address:{[addressId]:Address},
	reviews:{[productId]:{
		rating:float => 0.0 - 5,
		content:string,
	}},
	orders:{[orderId]:{
		products:[{
			productId:string,
			quantity:number,
		}],
		date:number => Date.now(),
		category:string => "cancelled" | "completed" | "processing",
		status: string => "paid" | "unpaid",
		address: Address
	}}
}

const brand = {
	id:string,
	name:string,
	image:URL
}

const category = {
	id:string,
	name:string,
	homeImage:URL,
	categoryImage:URL,
	title:string,
	subtitle:string,
	brands:{[brandId]:brand}
}
```

# API:

## /categories/

```
[{
	id:string,
	name:string,
	homeImage:URL,
	categoryImage:URL,
	title:string,
	subtitle:string,
	brands:{[brandId]:brand}
}]
```

## /categories/:id

```
{
	id:string,
	name:string,
	homeImage:URL,
	categoryImage:URL,
	title:string,
	subtitle:string,
	brands:{[brandId]:brand}
}
```

## /brands/

```
[{
	id:string,
	name:string,
	image:URL
}]
```

## /brands/:id

```
{
	id:string,
	name:string,
	image:URL
}
```

## /users/

```
[{
	id:string,
	user:string,
	password:string,
	avatar:URL,
	firstName:string,
	lastName:string,
	mobile:number,
	email:string,
	address:{[addressId]: Address},
    reviews:{[productId]:{
    	rating:float => 0.0 - 5,
    	content:string,
    }},
    orders:{[orderId]:{
    	products:[{
    		productId:string,
    		quantity:number,
    	}],
    	date:number => Date.now(),
    	category:string => "cancelled" | "completed" | "processing",
    	status: string => "paid" | "unpaid",
    	address: Address
    }}

}]
```

## /users/:id

```
{
	id:string,
	avatar:URL,
	firstName:string,
	lastName:string,
	mobile:number,
	email:string,
	address:{[addressId]:Address},
	reviews:{[productId]:{
		rating:float => 0.0 - 5,
		content:string,
	}},
	orders:{[orderId]:{
		products:[{
			productId:string,
			quantity:number,
		}],
		date:number => Date.now(),
		category:string => "cancelled" | "completed" | "processing",
		status: string => "paid" | "unpaid",
		address: Address
	}}
}
```

## /orders/

```
[{
    orderId:string,
	products:[{
		productId:string,
		quantity:number,
	}],
	date:number => Date.now(),
	category:string => "cancelled" | "completed" | "processing",
	status: string => "paid" | "unpaid",
	address: Address
}]
```

## /orders/:id

```
{
    orderId:string,
	products:[{
		productId:string,
		quantity:number,
	}],
	date:number => Date.now(),
	category:string => "cancelled" | "completed" | "processing",
	status: string => "paid" | "unpaid",
	address: Address
}
```

## /products/

```
[{
	id:string,
	smallImageUrl:URL => 400 x 400,
	largeImageUrl:URL => 1000 x 1000,
	title:string,
	shortSubtitle:string => 1 - 4 words,
	longSubtitle:string => 1 - 15 words,
	description:string,
	categoryId:string,
	createdAt:number => Date.now(),
	reviews: [
		{
			userId:string,
			rating:float => 0.0 - 5
			content:string,
		}
	],
	price:float => up to 2 decimal points,
	brandId:string,
	quantity:number,
	discountPercentage:number => 0 - 100,
}]
```

## /products/:id

```
{
	id:string,
	largeImageUrl:URL => 1000 x 1000,
	title:string,
	longSubtitle:string => 1 - 15 words,
	description:string,
	categoryId:string,
	createdAt:number => Date.now(),
	reviews: [
		{
			userId:string,
			rating:float => 0.0 - 5
			content:string,
		}
	],
	price:float => up to 2 decimal points,
	quantity:number,
	discountPercentage:number => 0 - 100,
}
```

## /products/category/:id

```
[{
	id:string,
	smallImageUrl:URL => 400 x 400,
	title:string,
	shortSubtitle:string => 1 - 4 words,
	createdAt:number => Date.now(),
	reviews: [
		{
			userId:string,
			rating:float => 0.0 - 5
			content:string,
		}
	],
	price:float => up to 2 decimal points,
	discountPercentage:number => 0 - 100,
}]
```

## /products/brand/:id

```
[{
	id:string,
	smallImageUrl:URL => 400 x 400,
	title:string,
	shortSubtitle:string => 1 - 4 words,
	createdAt:number => Date.now(),
	reviews: [
		{
			userId:string,
			rating:float => 0.0 - 5
			content:string,
		}
	],
	price:float => up to 2 decimal points,
	discountPercentage:number => 0 - 100,
}]
```

## /products/new-arrivals => _any product created in the last 3 months_

```
[{
	id:string,
	smallImageUrl:URL => 400 x 400,
	title:string,
	shortSubtitle:string => 1 - 4 words,
	createdAt:number => Date.now(),
	price:float => up to 2 decimal points,
}]
```

## /products/handpicked => _any products that have an average rating higher than 4.5 and is less than 100$_

```
[{
	id:string,
	smallImageUrl:URL => 400 x 400,
	title:string,
	shortSubtitle:string => 1 - 4 words,
	createdAt:number => Date.now(),
	categoryId:string,
	reviews: [
		{
			userId:string,
			rating:float => 0.0 - 5
			content:string,
		}
	],
	price:float => up to 2 decimal points,
	discountPercentage:number => 0 - 100,
}]
```

## /products/handpicked/:categoryId => _any products that have an average rating higher than 4.5 and is less than 100$ for a specific category_

```
[{
	id:string,
	smallImageUrl:URL => 400 x 400,
	title:string,
	shortSubtitle:string => 1 - 4 words,
	createdAt:number => Date.now(),
	reviews: [
		{
			userId:string,
			rating:float => 0.0 - 5
			content:string,
		}
	],
	price:float => up to 2 decimal points,
	discountPercentage:number => 0 - 100,
}]
```

## /products/limited-edition => _any products that are less than 20 in stock_

```
[{
	id:string,
	smallImageUrl:URL => 400 x 400,
	title:string,
	shortSubtitle:string => 1 - 4 words,
	createdAt:number => Date.now(),
	reviews: [
		{
			userId:string,
			rating:float => 0.0 - 5
			content:string,
		}
	],
	price:float => up to 2 decimal points,
	discountPercentage:number => 0 - 100,
}]
```

## /products/on-sale => _any products that have a discount of 15% or more_

```
[{
	id:string,
	smallImageUrl:URL => 400 x 400,
	title:string,
	shortSubtitle:string => 1 - 4 words,
	createdAt:number => Date.now(),
	reviews: [
		{
			userId:string,
			rating:float => 0.0 - 5
			content:string,
		}
	],
	price:float => up to 2 decimal points,
	discountPercentage:number => 0 - 100,
}]
```

## /products/popular => _any products that have a rating of 4.5 or more_

```
[{
	id:string,
	smallImageUrl:URL => 400 x 400,
	title:string,
	shortSubtitle:string => 1 - 4 words,
	createdAt:number => Date.now(),
	reviews: [
		{
			userId:string,
			rating:float => 0.0 - 5
			content:string,
		}
	],
	price:float => up to 2 decimal points,
	discountPercentage:number => 0 - 100,
}]
```
