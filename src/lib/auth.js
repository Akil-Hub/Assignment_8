import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db("Qurbanir_Hat");

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },

  baseURL: process.env.BETTER_AUTH_URL,

  socialProviders: {
    google: {
      clientId:"941853114069-8etuntcqt0if47h7j04b0r87ppbo5144.apps.googleusercontent.com",
      clientSecret:"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",
    },
  },

  database: mongodbAdapter(db, {
    client,
  }),
});
console.log("GOOGLE_CLIENT_ID:", process.env.GOOGLE_CLIENT_ID) // ← add this temporarily
