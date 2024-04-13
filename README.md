# Online Shop with Stripe Integration

## Project description

This project is an online shop with Stripe integration, allowing users to place orders and make payments through Stripe. It features user registration and login functionalities, with user data stored in a JSON file on the server as well as on Stripe. Product management is handled through Stripe, and payment validation is implemented to ensure successful transactions. Orders are saved in a JSON file on the server upon payment confirmation.

Backend: Node.js/Express
Frontend: React/Typescript

This project was created by as student for educational purposes, and aims to fulfill the requirements for the grade G. Please note that the node_modules on both the server and client side has been removed.


## How to Install and Run the Project

### 1. Clone the Repository:

```
git clone https://github.com/fridagsmys/Uppgift-2.git
```

### 2. Install Dependencies:

```
cd client
npm i
```
```
cd server
npm i
```

The following dependecies have been used in this project (in addition to React/Vite): 
- cookie-session
- bcrypt
- cors
- dotenv
- express
- fs
- nodemon
- axios
- react-router
- sass
- react-hot-toast

### 3. Test cards:

Valid test card information for Stripe can be found here: https://docs.stripe.com/testing

## How to Use the Project

### 1. Add items:

Add the desired items to the cart by clicking the "add to cart" button.

### 2. View cart: 

To view your cart, click the cart-icon in the top right corner.

### 3. Log in/register: 

To be able to continue to Stripe in order to make the payment, you have to either log into an existing account or register a new one. Follow the directions shown on screen. 

To register, a name, email, and password is required.
To log in, only the email and password is needed.

### 4. Proceed to checkout: 

Once logged in, the "proceed to checkout" button will be available. This will take you to Stripe where the payment will be made. 

## Credits

### References:

[Stripe] https://stripe.com/en-se

[React-hot-toast] https://react-hot-toast.com/ 