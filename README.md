# Reeco
# Order System

This project implements an order management system with the following functionalities:

- Display order details on the main page.
- Allow the user to update the status of each product.
- Implement a Missing – Urgent Popup for marking products as "Missing" or "Missing – Urgent."
- Optional: Edit Popup for updating product details.

## Main Page

The main page displays order information. When the shipping date arrives, the user can update the status of each product by interacting with the CTAs on the right.
![Screenshot 2023-12-18 160122](https://github.com/Ak-nut-47/reeco/assets/104593018/a90d918f-12c3-42a2-8a50-a886bab532bb)

### Updating Product Status

- Clicking <approve-button> will mark the product as approved.
  ![Screenshot 2023-12-18 160327](https://github.com/Ak-nut-47/reeco/assets/104593018/765e9ffd-f017-4e10-8ee1-fa508b6e24a4)

- Clicking <missing-button> will open the Missing – Urgent Popup for marking the product as "Missing" or "Missing – Urgent."
- ![Screenshot 2023-12-18 160412](https://github.com/Ak-nut-47/reeco/assets/104593018/98b7dc08-fe0f-43c7-84a7-9f760b9092b4)


- Clicking "Edit" will open an Edit Popup for updating product details.
  ![Screenshot 2023-12-18 160508](https://github.com/Ak-nut-47/reeco/assets/104593018/55835859-9264-4d73-9a48-0e9529ef9836)


### Missing Status Options

- "Missing"
- "Missing – Urgent"

## Edit Popup 

The Edit Popup allows the user to update product details:

- Product price (price >= 0)
- Product quantity (quantity >= 0)
- Selection of a reason

## Technologies Used

- **Redux**: State management library for managing the application state.
- **Chakra UI**: Used for styling the HTML elements and providing a consistent design.
- **React**: JavaScript library for building user interfaces.
- **React Icons**: Icons used in the project are sourced from the React Icons library.

