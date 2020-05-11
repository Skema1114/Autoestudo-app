const connection = require('../database/connection');

module.exports = {
    async create(request, response){
        const {id} = request.body;

        const usuarios = await connection('usuario')
            .where('id', id)
            .select('nome')
            .first();

        if(!usuarios){
            return response.status(400).json({
                error: 'No ONG found with this ID'
            });
        }

        return response.json(usuarios);
    }
}
