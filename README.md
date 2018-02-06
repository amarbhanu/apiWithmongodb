mongoDB  with API sample


Join https://docs.mongodb.com/manual/reference/operator/aggregation/lookup/


db.orders.insert([
   { "_id" : 1, "item" : "almonds", "price" : 12, "quantity" : 2 },
   { "_id" : 2, "item" : "pecans", "price" : 20, "quantity" : 1 },
   { "_id" : 3  }
])

db.inventory.insert([
   { "_id" : 1, "sku" : "almonds", description: "product 1", "instock" : 120 },
   { "_id" : 2, "sku" : "bread", description: "product 2", "instock" : 80 },
   { "_id" : 3, "sku" : "cashews", description: "product 3", "instock" : 60 },
   { "_id" : 4, "sku" : "pecans", description: "product 4", "instock" : 70 },
   { "_id" : 5, "sku": null, description: "Incomplete" },
   { "_id" : 6 }
])

db.orders.aggregate([
   {
     $lookup:
       {
         from: "inventory",
         localField: "item",
         foreignField: "sku",
         as: "inventory_docs"
       }
  }
])


------------------------------------

db.orders.insert([
{ "_id" : 10, "item" : "MON1003", "price" : 350, "quantity" : 2, "specs" :
[ "27 inch", "Retina display", "1920x1080" ], "type" : "Monitor" }
])


db.inventory.insert([
{ "_id" : 10, "sku" : "MON1003", "type" : "Monitor", "instock" : 120,
"size" : "27 inch", "resolution" : "1920x1080" }
])

db.orders.aggregate([
   {
      $unwind: "$specs"
   },
   {
      $lookup:
         {
            from: "inventory",
            localField: "specs",
            foreignField: "size",
            as: "inventory_docs"
        }
   },
   {
      $match: { "inventory_docs": { $ne: [] } }
   }
])