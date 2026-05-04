// import { betterAuth, google, socialProviders } from "better-auth";
// import { MongoClient } from "mongodb";
// import { mongodbAdapter } from "better-auth/adapters/mongodb";

// const client = new MongoClient(process.env.MONGODB_URI);
// const db = client.db("qurbani_hat");

// export const auth = betterAuth({
//   database: mongodbAdapter(db, {
    
//     client
//   }),
//    emailAndPassword: { 
//     enabled: true, 
//    },
   
//     socialProviders:{
//         google:{
//         clientId:process.env.GOOGLE_CLIENT_ID,
//         clientSecret:process.env.GOOGLE_CLIENT_SECRET
//         }
//     }
   
// });




import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const uri = process.env.MONGODB_URI;

let client;
let db;

async function getDb() {
  if (!client) {
    client = new MongoClient(uri);
    await client.connect(); // ✅ REQUIRED
    db = client.db("qurbani_hat");
  }
  return { client, db };
}

const { client: mongoClient, db: mongoDb } = await getDb();

export const auth = betterAuth({
  database: mongodbAdapter(mongoDb, {
    client: mongoClient,
  }),
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },
});