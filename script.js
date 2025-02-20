
document.addEventListener("DOMContentLoaded", function () {
    const rotina = {
        "Segunda-feira": [["07:00", "Acordar e higiene"], ["08:00", "Café da manhã"], ["09:00", "Faculdade online"], ["12:00", "Almoço"], ["13:00", "Descanso"], ["14:00", "Trabalhar no site da Igreja"], ["16:00", "Estudo de C#"], ["18:00", "Jantar"], ["19:00", "Jogar basquete"], ["21:00", "Tempo de lazer"], ["23:00", "Dormir"]],
        "Terça-feira": [["07:00", "Acordar e higiene"], ["08:00", "Café da manhã"], ["09:00", "Faculdade online"], ["12:00", "Almoço"], ["13:00", "Descanso"], ["14:00", "Trabalhar no site da Igreja"], ["16:00", "Estudo de C#"], ["18:00", "Jantar"], ["19:00", "Jogar basquete"], ["21:00", "Tempo de lazer"], ["23:00", "Dormir"]],
        "Quarta-feira": [["07:00", "Acordar e higiene"], ["08:00", "Café da manhã"], ["09:00", "Faculdade online"], ["12:00", "Almoço"], ["13:00", "Descanso"], ["14:00", "Trabalhar no site da Igreja"], ["16:00", "Estudo de C#"], ["18:00", "Jantar"], ["19:00", "Ir à Igreja"], ["21:00", "Tempo de lazer"], ["23:00", "Dormir"]],
        "Quinta-feira": [["07:00", "Acordar e higiene"], ["08:00", "Café da manhã"], ["09:00", "Faculdade online"], ["12:00", "Almoço"], ["13:00", "Descanso"], ["14:00", "Trabalhar no site da Igreja"], ["16:00", "Estudo de C#"], ["18:00", "Jantar"], ["19:00", "Tempo livre"], ["21:00", "Tempo de lazer"], ["23:00", "Dormir"]],
        "Sexta-feira": [["07:00", "Acordar e higiene"], ["08:00", "Café da manhã"], ["09:00", "Faculdade online"], ["12:00", "Almoço"], ["13:00", "Descanso"], ["14:00", "Trabalhar no site da Igreja"], ["16:00", "Estudo de C#"], ["18:00", "Jantar"], ["19:00", "Tempo livre"], ["21:00", "Tempo de lazer"], ["23:00", "Dormir"]],
        "Sábado": [["07:00", "Acordar e higiene"], ["08:00", "Café da manhã"], ["09:00", "Faculdade online / Trabalhar no site da Igreja"], ["12:00", "Almoço"], ["13:00", "Descanso"], ["14:00", "Estudo de ASP.NET"], ["16:00", "Tempo de lazer"], ["18:00", "Jantar"], ["19:00", "Jogar basquete"], ["21:00", "Tempo de lazer"], ["23:00", "Dormir"]],
        "Domingo": [["07:00", "Acordar e higiene"], ["08:00", "Café da manhã"], ["09:00", "Faculdade online / Trabalhar no site da Igreja"], ["12:00", "Almoço"], ["13:00", "Descanso"], ["14:00", "Tempo de lazer"], ["16:00", "Tempo de lazer"], ["18:00", "Jantar"], ["19:00", "Ir à Igreja"], ["21:00", "Tempo de lazer"], ["23:00", "Dormir"]]
    };

    const diasSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    let hoje = new Date().getDay();

    function atualizarRotina(diaIndex) {
        let nomeDia = diasSemana[diaIndex];
        document.getElementById("dia-atual").textContent = nomeDia;
        let listaAtividades = document.getElementById("atividades");
        listaAtividades.innerHTML = "";

        rotina[nomeDia].forEach(([hora, atividade]) => {
            let item = document.createElement("li");
            item.textContent = `${hora} - ${atividade}`;
            listaAtividades.appendChild(item);
        });
    }

    document.getElementById("anterior").addEventListener("click", function () {
        hoje = (hoje - 1 + 7) % 7;
        atualizarRotina(hoje);
    });

    document.getElementById("proximo").addEventListener("click", function () {
        hoje = (hoje + 1) % 7;
        atualizarRotina(hoje);
    });

    atualizarRotina(hoje);
});
