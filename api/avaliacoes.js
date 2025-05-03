export default function handler(req, res) {
    // Simulação de dados do banco de dados
    const avaliacoes = [
        { nome: 'João', mensagem: 'Ótimo produto!', avaliacao: 5 },
        { nome: 'Maria', mensagem: 'Muito bom, recomendo!', avaliacao: 4 },
        { nome: 'Carlos', mensagem: 'Gostei bastante!', avaliacao: 5 },
    ];

    res.status(200).json(avaliacoes);
}