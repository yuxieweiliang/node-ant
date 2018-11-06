export default {
  findBookById(book_id) {
    const text = `SELECT * FROM books WHERE book_id = $1`;
    return { text, values: [book_id] };
  },
  findBookByName(book_name) {
    const text = `SELECT * FROM books WHERE book_name = $1`;
    return { text, values: [book_name] };
  },
  createBook(values) {
    const text = `INSERT INTO books(
      book_name,
      book_author,
      book_signature,
      book_editor,
      book_role,
      book_settings
    ) VALUES($1, $2, $3, $4, $5, $6) RETURNING *`;
    return { text, values };
  }
}