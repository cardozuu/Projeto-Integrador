const mysql = require('mysql2/promise');

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Método não permitido' });
    }

    const { name, message, avaliacao } = req.body;

    if (!name || !message || !avaliacao) {
        return res.status(400).json({ error: 'Dados incompletos' });
    }

    const connection = await mysql.createConnection({
        host: 'aawconstrucoes.mysql.dbaas.com.br',
        user: 'aawconstrucoes',
        password: 'AAWConstru1@',
        database: 'aawconstrucoes',
    });

    try {
        const [result] = await connection.execute(
            'INSERT INTO avaliacoes (nome, mensagem, avaliacao) VALUES (?, ?, ?)',
            [name, message, avaliacao]
        );
        res.status(200).json({ message: 'Avaliação salva com sucesso!' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao salvar avaliação', details: error.message });
    } finally {
        await connection.end();
    }
}