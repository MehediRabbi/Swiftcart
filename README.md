# 🛒 SwiftCart E-Commerce

SwiftCart is a simple, responsive e-commerce website built using **HTML, Vanilla CSS, and Vanilla JavaScript**.  
This project dynamically fetches product data from the **FakeStore API**.

---

## 🚀 Live Demo
🔗 Live Link: https://swiftcart-pearl.vercel.app/

---

## 📦 GitHub Repository
🔗 Repo Link: https://github.com/MehediRabbi/Swiftcart

---

## 🎯 Project Overview

SwiftCart demonstrates a basic e-commerce UI with real API integration.

Key Highlights:

- Dynamic Category Loading
- Product Filtering by Category
- Responsive Product Grid
- Product Details Modal
- Add to Cart Functionality
- Cart Count Update
- LocalStorage Persistence
- Mobile Responsive Layout

---

## 🧰 Technology Stack

- HTML5
- Vanilla CSS
- Vanilla JavaScript
- FakeStore API

---

## 🔌 API Endpoints Used

- **All Products**  
  https://fakestoreapi.com/products

- **All Categories**  
  https://fakestoreapi.com/products/categories

- **Products by Category**  
  https://fakestoreapi.com/products/category/{category}

- **Single Product Detail**  
  https://fakestoreapi.com/products/{id}

---

## ✨ Features

✅ Responsive Navbar  
✅ Hero / Banner Section  
✅ Features / Why Choose Us  
✅ Dynamic Categories  
✅ Product Filtering  
✅ Product Cards  
✅ Product Details Modal  
✅ Add to Cart  
✅ Cart Count  
✅ LocalStorage  

---

## 🛍️ Functionalities

### 🧩 Category Loading
Categories are fetched dynamically from the API and displayed as buttons.

### 🧩 Category Filtering
Clicking a category loads products belonging to that category.

### 🧩 Product Cards
Each card includes:

- Product Image
- Truncated Title
- Price
- Category
- Rating
- Details Button
- Add to Cart Button

### 🧩 Product Details Modal
Displays:

- Full Title
- Full Description
- Price
- Rating
- Add to Cart Button

### 🧩 Cart System
- Products stored in array
- Cart count updates instantly
- Cart data saved in LocalStorage

---

## 📱 Responsiveness

The website is responsive across:

- Desktop
- Tablet
- Mobile

---

# 📘 README প্রশ্নের উত্তর (বাংলায়)

---

## 1️⃣ null এবং undefined এর পার্থক্য

**undefined** → যখন কোনো variable declare করা হয় কিন্তু value assign করা হয় না।
let x;
console.log(x); // undefined
null → ইচ্ছাকৃতভাবে "কোনো value নেই" বোঝাতে ব্যবহার করা হয়।

let y = null;

✅ মূল পার্থক্য:

undefined	null
Default value	Intentional empty value
Automatically আসে	Developer assign করে
2️⃣ map() function এর ব্যবহার ও forEach() থেকে পার্থক্য
✅ map()

নতুন array return করে

Original array change করে না

const numbers = [1, 2, 3];
const doubled = numbers.map(n => n * 2);
✅ forEach()

কিছু return করে না

শুধু loop চালায়

numbers.forEach(n => console.log(n));

✅ পার্থক্য:

map()	forEach()
New array return করে	কিছু return করে না
Transformation এর জন্য	শুধু iteration
3️⃣ == এবং === এর পার্থক্য
✅ ==

Value compare করে

Type convert করে

5 == "5" // true
✅ ===

Value + Type compare করে

5 === "5" // false

✅ সারাংশ:

==	===
Loose equality	Strict equality
Type conversion হয়	Type conversion হয় না
4️⃣ async/await এর গুরুত্ব (API fetch করার ক্ষেত্রে)

async/await asynchronous code সহজভাবে লিখতে সাহায্য করে।

async function loadData() {
  const res = await fetch(url);
  const data = await res.json();
}

✅ সুবিধা:

Cleaner code

Callback hell এড়ানো যায়

Readable & maintainable

5️⃣ JavaScript Scope (Global, Function, Block)
🌍 Global Scope

সব জায়গা থেকে access করা যায়

let name = "SwiftCart";
🔧 Function Scope

Function এর ভিতরে limited

function test() {
  let x = 10;
}
📦 Block Scope (let / const)

{} এর ভিতরে limited

if (true) {
  let y = 20;
}

✅ সারাংশ:

Scope	Access
Global	Everywhere
Function	Inside function
Block	Inside {}
