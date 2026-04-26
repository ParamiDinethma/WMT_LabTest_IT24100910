import mongoose from "mongoose";

const itemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Item name is required"],
      trim: true,
    },
    category: {
      type: String,
      required: [true, "Category is required"],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [0, "Price cannot be negative"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
    },
    supplierName: {                                         
      type: String,
      required: [true, "Supplier name is required"],       
      trim: true,
    },
    imageUrl: {
      type: String,
      default: "",
      trim: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Item", itemSchema);








/*
https://claude.ai/share/14ad5c39-9dd9-471d-bd30-b30b3d047bc7

google -paramirana2004@gmail.com
pass - Padira2004@

mongodb pass =paramirana2004

git - ParamiDinethma 
pass- Padira2004@

install backend - npm init -y
                               npm install express mongoose cors dotenv

install frontend - npx create-react-app .
                              npm install axios

git init
git add .
git commit -m "initial commit"
git branch -M main
git remote add origin https://github.com/yourUsername/your-repo-name.git
git push -u origin main

DEPLOY BACKEND sign with git

in server.js see if these present 

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

Step 3 — Configure the Web Service 
	Fill in these settings:
		Name		         any name
		Root Directory 	  backend
		Runtime		            Node
		Build Command	    npm install
		Start Command	    node server.js

Step 4 — Add Environment Variable
	Scroll down to Environment Variables and add:
		Key		              Value
		MONGO_URI	      your MongoDB Atlas connection string

Then click "Create Web Service" and wait for it to deploy. You'll get a URL like:
	https://item-manager-backend.onrender.com

Copy this URL — you'll need it for the frontend!

DEPLOY FRONTEND

Step 1 — Update the API URL in your frontend
Before deploying, replace localhost with your Render URL in App.jsx.
	Create a .env file inside your frontend/ folder:
	VITE_API_URL= live url got from render

Then update all axios calls in App.jsx to use it:

	const res = await axios.get('http://localhost:5000/api/items');  // replace all                  localhost with down one
	const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/items`);

	await axios.post(`${import.meta.env.VITE_API_URL}/api/items`, formData);
	await axios.delete(`${import.meta.env.VITE_API_URL}/api/items/${id}`);

Commit and push this change:

git add .
git commit -m "update api url for deployment"
git push

Go to netlify.com → Sign up with GitHub
Click Add New Site → Import from Git
Select your GitHub repo
Set these settings:
	Base Directory         frontend
	Build Command       npm run build
	Publish Directory     frontend/dist


Step 4 — Add Environment Variable on Netlify
Go to Site Settings → Environment Variables and add:
	Key		                 Value	
	VITE_API_URL	your Render backend URL

Then click Deploy Site. You'll get a URL like:
https://item-manager.netlify.app


This is important! Your backend needs to allow requests from your Netlify URL. 

Update your backend/server.js:

jsconst cors = require('cors');

app.use(cors({
  origin: 'https://item-manager.netlify.app' // replace with your actual Netlify URL
}));

git add .
git commit -m "fix cors for production"
git push


if server.js not given                                                                                     require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());


// Database Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log("Error connecting to MongoDB:", err));

frontend delete 
const handleDelete = async (id) => {
try 
    { await axios.delete(`http://localhost:5000/api/items/${id}`);
       fetchItems();
     } catch (err) { console.error('Error deleting item:', err); } }; 

drop down selection
<option value="Electronics">Electronics</option> 
<option value="Clothing">Clothing</option> 
<option value="Food">Food</option> 
<option value="Other">Other</option> 

*/