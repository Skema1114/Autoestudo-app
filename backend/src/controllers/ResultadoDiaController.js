const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const id_usuario = request.headers.authorization;

        const resultado_dias = await connection('resultado_dia')
        .select('*')
        .where('id_usuario', id_usuario);

        if (resultado_dias.length > 0) {
            const [count] = await connection('resultado_dia')
            .count()
            .where('id_usuario', id_usuario);

            response.header('X-Total-Count', count['count(*)']);
        } else {
            response.header('X-Total-Count', 0);
        }

        return response.json(resultado_dias);
    },

    async create(request, response){
        const {id_dia, resultado, qtd_nao, data_cadastro} = request.body;
        const id_usuario = request.headers.authorization;

        const [id] = await connection("resultado_dia").insert({
            id_dia,
            id_usuario,
            resultado,
            qtd_nao,
            data_cadastro
        });

        return response.json({id});
    },

    async delete(request, response){
        const {id} = request.params;
        const id_usuario = request.headers.authorization;

        const resultado_dias = await connection('resultado_dia')
            .where('id', id)
            .select('id_usuario')
            .first()

    if((resultado_dias.id_usuario !== id_usuario)&&(resultado_dias.id !== id)){
            return response.status(401).json({
                error: 'Operation not permitted.'
            });
        }
        await connection('resultado_dia').where('id', id).delete();

        return response.status(204).send();
    }
};