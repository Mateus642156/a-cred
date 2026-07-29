function alternarTema() {
  const body = document.body;
  if (body.classList.contains("light")) {
    body.classList.remove("light");
    body.classList.add("dark");
  } else {
    body.classList.remove("dark");
    body.classList.add("light");
  }
}



let alunos = [];

function adicionarAluno(){
     const nome = document.getElementById("nome").value ;
     const nota = document.getElementById("nota").value ;

     if(nome !== "" && nota !== ""){
        alunos.push({nome: nome, nota: Number(nota)})
        document.getElementById("nome").value = "";
        document.getElementById("nota").value = "";
        alert("Aluno adicionado com sucess!")
     }
}

function calcularMedia(){
     if(alunos.length === 0 ){
        alert("Nenhum aluno foi adicionado!");
        return;
     }

     const soma = alunos.reduce((acc, aluno)  => acc + aluno.nota, 0);
     const  media = soma / alunos.length;

     let resultadoTexto = `Média da turma: ${media.toFixed(2)}<br><br>`;
     resultadoTexto += "Lista de alunos:<br>";
     alunos.forEach(aluno => {
          resultadoTexto += `${aluno.nome} - Nota ${aluno.nota}<br>`
     });

     document.getElementById("resultado").innerHTML= resultadoTexto;
}

function mostrarMaiorMenorEmpates(){
      if(alunos.length === 0){
        alert("Nenhum aluno foi adicionado!");
        return;
      }

        const maiorNota = Math.max(...alunos.map(a => a.nota));
        const menorNota = Math.min(...alunos.map(a => a.nota));

        const alunoMaior = alunos.filter(a => a.nota === maiorNota);
        const alunoMenor = alunos.filter(a => a.nota === menorNota);
        
        let resultadoTexto = `Alunos com maior nota: (${maiorNota}):<br>`;
        alunoMaior.forEach(a => {
            resultadoTexto += `${a.nome} - Nota ${a.nota}`;
        });

        resultadoTexto += `<br>Alunos com a menor nota: (${menorNota})<br>`;
        alunoMenor.forEach(a => {
            resultadoTexto += `${a.nome} - Nota ${a.nota}<br>`
        });

        document.getElementById('resultado').innerHTML= resultadoTexto;

}

function ordenarPorNota(){
     if(alunos.length === 0){
        alert("Nenhum aluno foi adicionado!");
          return;
     }

     const ordernados = [...alunos].sort((a, b) => b.nota - a.nota);
      let resultadoTexto = "Alunos ordenados por nota (maior → menor):<br> ";
         ordernados.forEach(a => {
             resultadoTexto += `${a.nome} - Nota ${a.nota}<br>`;
         });

         document.getElementById("resultado").innerHTML= resultadoTexto;
}

function mostrarFrequenciaNotas(){
      if(alunos.length === 0){
        alert("Nenhum aluno foi adicionado!");
        return;
      }

      const frequencia = {};
        alunos.forEach(a => {
            if(frequencia[a.nota]){
                frequencia[a.nota]++;
            }  else {
                frequencia[a.nota] = 1;
            }
        });

        let resultadoTexto = `Frêquencia das notas:<br>`
        for(let nota in frequencia){
            resultadoTexto += `A nota ${nota} aparece ${frequencia[nota]} vezes<br>`
        }
        document.getElementById("resultado").innerHTML= resultadoTexto;

}