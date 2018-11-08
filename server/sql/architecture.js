/**
 * Created by xueyufei on 2018/11/6.
 */
export default {
  findBookById(book_id) {
    const text = `SELECT * FROM books WHERE book_id = $1`;
    return { text, values: [book_id] };
  },
  findBookByName(book_name) {
    const text = `SELECT * FROM books WHERE book_name = $1`;
    return { text, values: [book_name] };
  },
  createArchite(values) {
    const text = `INSERT INTO architectures(
      archite_author
    )
    VALUES($1)
    RETURNING *`;
    return { text, values };
  }
}
