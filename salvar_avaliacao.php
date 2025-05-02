<?php
// Configuração do banco de dados
$host = "http://aawconstrucoes.mysql.dbaas.com.br/";
$usuario = "aawconstrucoes";
$senha = "AAWConstru1@";
$banco = "aawconstrucoes";

// Conexão com o banco de dados
$conn = new mysqli($host, $usuario, $senha, $banco);

// Verificar conexão
if ($conn->connect_error) {
    die("Falha na conexão: " . $conn->connect_error);
}

// Verificar se o formulário foi enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $conn->real_escape_string($_POST['name']);
    $mensagem = $conn->real_escape_string($_POST['message']);
    $avaliacao = intval($_POST['avaliacao']);

    // Inserir os dados na tabela
    $sql = "INSERT INTO avaliacoes (nome, mensagem, avaliacao) VALUES ('$nome', '$mensagem', $avaliacao)";

    if ($conn->query($sql) === TRUE) {
        echo "Avaliação salva com sucesso!";
    } else {
        echo "Erro ao salvar avaliação: " . $conn->error;
    }
}

// Fechar conexão
$conn->close();
?>