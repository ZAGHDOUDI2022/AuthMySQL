const {connection} = require('../configurationBD/config')
module.exports = {
    Post:(session,user_id)=>{
        return new Promise((resolve,reject)=>{
            connection.query('INSERT INTO sessions(session,user_id)Values (?,?)',
            [user_id,session,Date.now()+1000*3600*24*7],
            (err,results)=>{
                return err?reject(err):resolve(results)
            }
            )
        })
    },
    Get:(session)=>{
        return new Promise((resolve,reject)=>{
      connection.query('SELECT * FROM sessions WHERE session=?',[session],
      (err,results)=>{
        // console.log(results,'sesssionss')
          err ? reject(err):resolve(results)
      } )
     
        })
    },
    Delete:(session)=>{
        console.log(session)
        return new Promise((resolve,reject)=>{
            connection.query('DELETE FROM sessions WHERE session=?',[session],
            (err,results)=>{
                err ?reject(err,'ttt'):resolve(results,'yy')
            })
        })
    }
}