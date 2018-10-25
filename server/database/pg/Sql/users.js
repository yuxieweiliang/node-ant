
//新增主记录
async function insert_QA_PLEASURE_TASK_RECORD(ID, TASK_ID, PATIENT_ID, VISIT_ID, CHECK_DATE, TOTALSCORE, CHECK_USER_NAME, TEMPLATE_NAME, DEPT_NAME, CHECKUSER, DEPT_CODE) {
  let sql = ` INSERT INTO QA_PLEASURE_TASK_RECORD VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)`;
  const res = await client.query(sql, [ID, TASK_ID, PATIENT_ID, VISIT_ID, CHECK_DATE, TOTALSCORE, CHECK_USER_NAME, TEMPLATE_NAME, DEPT_NAME, CHECKUSER, DEPT_CODE]);
  return res.rows;
}
//新增满意护士
async function insert_DOCS_BASIC_INFO_REC(REC_ID, PATIENT_ID, VISIT_ID, ITEM_NAME, ITEM_VALUE, time_point) {
  let sql = ` INSERT INTO DOCS_BASIC_INFO_REC(REC_ID,PATIENT_ID,VISIT_ID,ITEM_NAME,ITEM_VALUE,time_point) VALUES ((SELECT GETNEWID()),$1,$2,$3,$4,$5)`;
  const res = await client.query(sql, [PATIENT_ID, VISIT_ID, ITEM_NAME, ITEM_VALUE, time_point]);
  return res.rows;
}
//更新状态
async function update_QA_CHECK_TASK_LIST(TASKSTATUS, RECHECKSTATUS, ID) {
  let sql = `update QA_CHECK_TASK_LIST set TASKSTATUS=$1,RECHECKSTATUS=$2 WHERE ID=$3`;
  const res = await client.query(sql, [TASKSTATUS, RECHECKSTATUS, ID]);
  return res.rows;
}
//删除record记录
async function delete_QA_PLEASURE_TASK_RECORD(id) {
  let sql = `delete  from QA_PLEASURE_TASK_RECORD t where t.id = $1`;
  const res = await client.query(sql, [id]);
  return res.rows;
}