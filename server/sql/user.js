import moment from 'moment';
const defaultUser = {
  user_nickname: '云若风色',
  user_sex: '男',
  user_name: '朝乾山',
  user_birthday: moment().format('YYYY-MM-DD'),
};
export default {
  findUserById(book_id) {
    const text = `SELECT * FROM user_information WHERE book_id = $1`;
    return { text, values: [book_id] };
  },
  findUserByName(book_name) {
    const text = `SELECT * FROM user_information WHERE book_name = $1`;
    return { text, values: [book_name] };
  },
  createUser(option) {
    let values = Object.assign(defaultUser, option);
    const text = `INSERT INTO user_information(
      user_nickname,
      user_sex,
      user_name,
      user_birthday
    ) VALUES($1, $2, $3, $4 ) RETURNING *`;
    return { text, values: [...Object.values(values)] };
  }
}