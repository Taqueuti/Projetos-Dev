import eventosAstronomicos from './data/chuva-de-meteoros.js';
import imprimeListaDeChuvas from './funções/funcoesInterface.js'
import { verificaChuvaVisivelPorData, verificaChuvaVisivelProximos2Meses } from './funções/funcao.js';


const dataAtual = new Date();

const chuvasVisiveisHoje = eventosAstronomicos.filter((chuva) => verificaChuvaVisivelPorData(chuva, dataAtual)
);

const chuvasVisiveisProximos2Meses = eventosAstronomicos.filter((chuva) => verificaChuvaVisivelProximos2Meses(chuva, dataAtual)
);

console.log('Chuva de meteoros');

if( chuvasVisiveisHoje.length > 0) {
    let msg = "\nEncontramos ";
    msg += chuvasVisiveisHoje == 1
    ? '1 chuva de meteoros que pode ser vista hoje'
    : chuvasVisiveisHoje.length + 'chuvas de meteoros que podem ser vistas hoje'

    console.log(msg);
    imprimeListaDeChuvas(chuvasVisiveisHoje);
}else {
    console.log('\nNão há chuvas passando hoje');
}

console.log('\n\nNão perca as próximas chuvas de meteoros: ');
imprimeListaDeChuvas(chuvasVisiveisProximos2Meses);



 
