Data:

```
const product = {
	id:string,
	image:URL,
	title:string,
	subtitle:string,
	description:string,
	categoryId:string,
	createdAt:number => Date.now(),
	ratings: [
		{
			userId:string,
			productId:string,
			rating:number => 0 - 5
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

/categories/:id/brands

/categories/:id/brands/:id

/brands/

/brands/:id

/users/

/users/:id

/products/

/products/:id

/products/category/:id

/products/brand/:id
```
