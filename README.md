## 📚 Library Management API

This is a simple RESTful API for managing books and borrowing activities in a
library system.

## 🛠 Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/lilarani/Library-Management-API
cd Library-Management-API
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the server

```bash
npm run dev

```

### 📌 API Endpoints

📘 Book Management

Creates a new book in the database.

- POST `/api/books`

- Body

```json
{
  "title": "Book Title",
  "author": "Author Name",
  "genre": "Fiction",
  "isbn": "9781234567897",
  "copies": 5
}
```

### 📚 Get All Books

- GET `/api/books?filter=FANTASY&sortBy=createdAt&sort=desc&limit=5`

Query Parameters:

- `filter`: Filter by genre
- `sort`: `asc` or `desc`
- `limit`: Number of results (default: 10)

### 🔍 Get Book by ID

- GET `/api/books/:bookId`

Fetches a single book by its ID.

### ✏️ Update Book

#### PUT `/api/books/:bookId`

Updates any field of a specific book using its ID.

- Request Body:

- Any fields to update (e.g., title, author, copies)

### ❌ Delete Book

- DELETE `/api/books/:bookId`

Deletes a book from the database using its ID.

### 📖 Borrow Management

📥 Borrow a Book

- POST `/api/borrow`

Borrows a book by reducing available copies and saving the borrow record.

- Body

```json
{
  "bookId": "65a7b29f4c01d0123a8e8a10",
  "quantity": 1,
  "dueDate": "2025-06-30"
}
```

Validations:

- All fields are required

- Quantity must not exceed available copies

### 📊 Get Borrow Summary

- GET `/api/borrow`

Returns a summary of how many copies of each book have been borrowed.

Response Includes:

- Total quantity borrowed

- Book title and ISBN

### ✅ Validation & Error Handling

- Validation errors return 400 Bad Request

- Missing fields, book not found, and copy limits are handled gracefully with
  proper messages.

### 📦 Models

- Book: title, author, genre, isbn, copies, available

- Borrow: book (ObjectId), quantity, dueDate

#### 🧑‍💻 Author

Made with ❤️ by Lila
