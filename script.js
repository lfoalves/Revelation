// const button = document.getElementsByTagName('button');
// console.log(button)

// const resposta = document.getElementById('cResp');

// button[0].onclick = (e) => {
//     resposta.innerHTML = 'Sim. Vejo muitas coisas boas!'
//     resposta.classList.add('animate');
//     setTimeout(() => {
//             resposta.innerHTML = 'Mas não ponha a sua confiança nisto'
//             setTimeout(() => {
//                 resposta.style.display = 'none';

//                 setTimeout(() => {
//                     window.location.reload();
                    
//                 }, 1);
                
//             }, 4000);
//     }, 3000);
// };

//MAIK CODFE MARATONA EXPLROR
const respostas = [
    'Não',
    'Provavel que não',
    'Não conte com isso',
    'Não, definitivamente não',
    'Não me pergunte sobre isso',
    'Você já deveria ter pensado sobre isso há muito tempos',
    'Toma vergonha',
    'Aiai...',
    'Quê?',
    'Me respeita',
    'kkkkkkkkkkkkkk...',
    'Acho é pouco',
    'Minha nossa...',
    'apenas sim',
    'Claro',
    'Claro que sim',
    'Definitivamente sim',
    'Verdade',
    'Deixa de graça ô...'
]

const button = document.getElementsByTagName('button');
console.log(button)

button[0].onclick = () => {
    if(inputPergunta.value == '') {
        alert('Faça uma pergunta!')
        return  
    }
    const pergunta = '<div>' + inputPergunta.value + '</div>'
    const totalRespostas = respostas.length;
    const numeroAleatorio = Math.floor(Math.random() * totalRespostas);
    resposta.innerHTML = pergunta + respostas[numeroAleatorio];

    setTimeout(function(){
        resposta.style.opacity = 0;

        setTimeout(() => {
            window.location.reload()
        },500)
    }, 3000)
}