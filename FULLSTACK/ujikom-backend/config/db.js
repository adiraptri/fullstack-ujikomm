import mysql from "mysql2";

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "film",
});

const promisePool = pool.promise();

pool.getConnection((err, conn) => {
    if(err) {
      console.error("Database connection failed :", err.message);
    }else{
      console.log("Database conection succes");
      conn.release()
    }
})

const checkDBConnection = async () => {
  try {
    await promisePool.execute("SELECT 1");
    return{status : true}
  } catch (error) {
    return {status : false, error : error.message}
  }
}


export default promisePool;
export {checkDBConnection}