const formulario = document.getElementById('meuFormulario');

formulario.addEventListener('submit', function (event) {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let peloMenosUmMarcado = false;
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            peloMenosUmMarcado = true;
            break;
        }
    }

    if (!peloMenosUmMarcado) {
        event.preventDefault();
        alert('Por favor, marque pelo menos um checkbox.');
    }
});


formulario.addEventListener('submit', function (event) {
    event.preventDefault(); 

    const nome = document.getElementById('nome').value;
    const endereco = document.getElementById('endereco').value;
    const cidade = document.getElementById('cidade').value;
    const estado = document.getElementById('estado').value;
    const cargo = document.getElementById('cargo').value;
    const interesse = document.getElementById('interesse').value;

    console.log('Nome:', nome);
    console.log('Endereco:', endereco);
    console.log('Cidade:', cidade);
    console.log('Estado:', estado);
    console.log('Natureza do cargo:', cargo);
    console.log('Área de interesse:', interesse);
});