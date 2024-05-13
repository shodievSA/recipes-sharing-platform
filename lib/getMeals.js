import fs from "node:fs";
import { MongoClient, ServerApiVersion } from "mongodb";
import slugify from "slugify";
import xss from "xss";

export async function getMeals()
{
    const uri = "mongodb://localhost:27017";
    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true
        }
    });

    try
    {

        await client.connect();

        // Get the database and collection on which to run the operation
        const database = client.db("next-level-food");
        const table = database.collection("meals");

        const cursor = table.find();

        return await cursor.toArray();

    } catch(err) 
    {
        console.log(err);
    }
    finally 
    {
        await client.close();
    }
}

export async function getMeal(slug)
{   
    const uri = "mongodb://localhost:27017";
    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true
        }
    });

    try
    {
        await client.connect();

        const database = client.db("next-level-food");
        const table = database.collection("meals");

        return await table.findOne({ slug : slug });
    } catch(err) 
    {
        console.log(err);
    }
    finally 
    {
        await client.close();
        console.log("executed!")
    }
}

export async function saveMeal(meal)
{
    meal.slug = slugify(meal.title, { lower: true });
    meal.instructions = xss(meal.instructions);

    const extension = meal.image.name.split('.').pop();
    const fileName = `${meal.slug}.${extension}`;

    const stream = fs.createWriteStream(`public/images/${fileName}`);
    const bufferedImage = await meal.image.arrayBuffer(); // converts image into a binary form

    stream.write(Buffer.from(bufferedImage), (error) => 
    {
        if (error)
        {
            throw new Error("Saving image failed");
        }
    });

    meal.image = `/images/${fileName}`;

    const uri = "mongodb://localhost:27017";
    const client = new MongoClient(uri);

    try
    {
        await client.connect();

        const database = client.db("next-level-food");
        const table = database.collection("meals");

        const result = await table.insertOne(meal);
        
        console.log(`A document was inserted with the _id: ${result.insertedId}`);
    } catch(err)
    {   
        console.log(err);
    } finally
    {
        await client.close();
    }
}