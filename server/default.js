import { products } from "./contants/data.js";
import product from "./model/Products_schema.js";

const DefaultData=async()=>{
    try {
         //await product.deleteMany({});
        await product.insertMany(products);
        console.log('Data Inserted successfully');
    } catch (error) {
        console.log('Error while inserting the default data',error.message);
    }
}

export default DefaultData;