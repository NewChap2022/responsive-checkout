# Technical Assessment

## Steps to run the project

### Step 1
Open terminal and make sure your path is in the responsive-checkout folder

### Step 2
run `npm install`

### Step 3
run `npm start`

### Step 4
open "http://localhost:3000/" in browser

## Additional feature
1. View products by category
2. Products list page
3. Product detail page
4. Mock checkout page
4. Show the number of products added to the cart
5. Use the redux to store the cart, the cart open state and current category information.
6. Stock management

## Approach to the product
1. I choose to build a relevant full site for this project which means including homepage and product detail page. Client can add product to cart if he/she likes the product.
2. I built the header, product card and cart first. I chose to use redux because it makes the management of cart easier.
3. I had difficulty in updating the local storage. I attempted to save what store in redux to update the local storage but failed. In the end, I used the similar approach I used in redux to update local storage.
4. I built product detail and checkout page after the main function is completed. I use MUI checkout template and made modification. The review page can see what user has put into the form instead of fake data.
5. My understanding towards e2e tests is limited. I need more time to learn it. Therefore, I can't implement it fully during this development.
6. Add stock into the data.

## Improvements in future
1. Add login/sign up function.
2. User can save the address and credit card information in the account.
3. Checkout form has more validation for input. For example, checking if the country and state is valid and checking credit card number is valid or not.
4. Trim lay out and UI for the app.
5. Allow user to select multiple category.
6. Add e2e tests for the app.
7. Add pagination

