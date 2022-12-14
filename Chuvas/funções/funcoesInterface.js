import { inverteMesAno, retornaHemisferio, retornaIntensidade } from "./funcao.js";

/* Imprime uma tabela com a lista de chuvas */

const imprimeListaDeChuvas = (lista) => {
    console.log('\nNOME DA CHUVA    -INTENSIDADE  -HEMISFÉRIO  -PERÍODO');

    lista.forEach(imprimeChuva);
}

/*Imprime uma linha da tabela de lista de chuvas */

const imprimeChuva = (chuva) => {
    const nome = chuva.nome.padEnd(27, ' ');
    let intensidade = retornaIntensidade(chuva.intensidade);
    let hemisfério = retornaHemisferio(chuva.declinacao);

    intensidade = intensidade.padEnd(11, '');
    hemisfério = hemisfério.padEnd(10, '');

    const dataInicio = inverteMesAno(chuva.inicio);
    const dataFim = inverteMesAno(chuva.fim)

    console.log(`${nome} - ${intensidade} - ${hemisfério} - ${dataInicio} à ${dataFim} `);
}

export default imprimeListaDeChuvas;