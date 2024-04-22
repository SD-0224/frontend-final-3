Data:

```
const product = {
	id:string,
	image:URL,
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
			review:string,
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
		rating:number => 0 - 5,
		review:string,
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

API:

```
/categories/

/categories/:id

/brands/

/brands/:id

/users/

/users/:id

/products/

/products/:id

/products/category/:id

/products/brand/:id

/products/new-arrivals => any product created in the last 3 months

/products/handpicked => any products that have an average rating higher than 4.5 and is less than 100$

/products/limited-edition => any products that are less than 20 in stock

/products/on-sale => any products that have a discount of 15% or more

/products/popular => any products that have a rating of 4.5 or more

```
