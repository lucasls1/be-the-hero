const connetction = require('../database/connection')

module.exports ={
    async index (req,res){
        const ong_id = req.headers.authorization;

        const incidents = await connetction('incidents')
        .where('ong_id',ong_id)
        .select('*')
    
        return res.json(incidents)
    }
    
}