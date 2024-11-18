<?php
$host = "localhost";
$banco = "fale_conosco";
$usuario = "root";
$senha = "";

try {
    // Capturando os dados
    $nome = $_POST["txtnome"];
    $email = $_POST["txtemail"];
    $assunto = $_POST["txtassunto"];
    $mensagem = $_POST["txtmensagem"];

    // Conexão com o banco de dados
    $pdo = new PDO("mysql:host=$host;dbname=$banco", $usuario, $senha);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Query de inserção
    $sql = "INSERT INTO mensagens (nome, email, assunto, mensagem) VALUES (:nome, :email, :assunto, :mensagem)";
    $stm = $pdo->prepare($sql);
    $stm->bindValue(':nome', $nome);
    $stm->bindValue(':email', $email);
    $stm->bindValue(':assunto', $assunto);
    $stm->bindValue(':mensagem', $mensagem);

    // Executando a query
    $res = $stm->execute();

    if ($res) {
        echo "Dados gravados com sucesso!";
    } else {
        echo "Erro ao tentar gravar os dados!";
    }
} catch (PDOException $e) {
    echo "Erro na conexão ou execução: " . $e->getMessage();
}
?>
    <a href="../index.html">voltar</a>
