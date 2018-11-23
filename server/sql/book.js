
const defaultBook = {
  book_name:                null, // 书名, //
  book_author:              null, // 作者, // ID 这里是作品的归属 & 可以做一个外键
  book_introduction:        null, //
  book_title_message:       null, // 扉页寄语,
  book_type:                null, // 作品状态,// 驻站， 签约， 未签约， 公众作品
  book_authorization:       null, // 授权级别,
  book_classify:            null, // 分类,
  book_tags:                null, // 标签,
  book_status:              null, // 作品状态, // 草稿：draft, 发布：release，销毁：destroy
  book_editor:              null, // [编辑], // 只有这里有的人，才可以编辑
  book_role:                null, // [角色], //
  book_architecture:        null, // 架构, // ID 本书所属的架构 （书 属于 架构， 架构可以包含多本书）
  book_settings:            null, //
};
export default {
  findBookById(book_id) {
    const text = `SELECT * FROM books WHERE book_id = $1`;
    return { text, values: [book_id] };
  },
  findBookByName(book_name) {
    const text = `SELECT * FROM books WHERE book_name = $1`;
    return { text, values: [book_name] };
  },
  createBook(option) {
    let values = Object.assign(defaultBook, option);
    const text = `INSERT INTO books(
      book_name,
      book_author,
      book_introduction,
      book_title_message,
      book_type,
      book_authorization,
      book_classify,
      book_editor,
      book_status,
      book_tags,
      book_role,
      book_architecture,
      book_settings
    ) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13 ) RETURNING *`;
    return { text, values: [...Object.values(values)] };
  }
}