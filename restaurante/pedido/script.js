function comecar() {
    var nome = document.getElementById("exampleFormControlInput1").value;
    show(nome);
  }
  
  function show(nome) {
    document.getElementById("nomePrint").textContent = nome;
    var div = document.getElementById("selects-div");
    if (nome && nome.trim() !== "") {
      div.style.display = "block";
      document.getElementById("exampleFormControlInput1").style.background =
        "none";
    } else {
      document.getElementById("error").style.display = "flex";
    }
  }
  
  function fechar() {
    document.getElementById("error").style.display = "none";
    document.getElementById("exampleFormControlInput1").style.background =
      "lightpink";
  }
  
  function calcularTotal() {
    var selectPratos = document.getElementById("selectPrato");
    var selectBebidas = document.getElementById("selectBebida");
    var selectSobremesas = document.getElementById("selectSobremesa");
    var resultadoSpan = document.getElementById("resultado");
  
    var total = 0;
    var prato = 0;
    var bebida = 0;
    var sobremesa = 0;
  
    switch (selectPratos.value) {
      case "Ilhas abençoadas":
        total += 45.99;
        prato = 45.99;
        break;
      case "Executivo":
        total += 28.99;
        prato = 28.99;
        break;
      case "Macarronada das Parcas":
        total += 32.99;
        prato = 32.99;
        break;
    }
  
    switch (selectBebidas.value) {
      case "Flegetonte":
        total += 25.99;
        bebida = 25.99;
        break;
      case "Lete":
        total += 15.99;
        bebida = 15.99;
        break;
      case "Estige":
        total += 22.99;
        bebida = 22.99;
        break;
      case "Aqueronte":
        total += 15.99;
        bebida = 15.99;
        break; 
      case "Cócito":
        total += 22.99;
        bebida = 22.99;
        break;
    }
  
    switch (selectSobremesas.value) {
      case "Mousse da Persê":
        total += 19.97;
        sobremesa = 19.97;
        break;
      case "Pudim de Deméter":
        total += 31.98;
        sobremesa = 31.98;
        break;
      case "Tártaro":
        total += 19.99;
        sobremesa = 19.99;
        break;
    }
  
    document.getElementById("total").style.display = "flex";
    document.getElementById("prato-pronto").innerHTML = prato.toFixed(2);
    document.getElementById("bebida-pronto").innerHTML = bebida.toFixed(2);
    document.getElementById("sobremesa-pronto").innerHTML = sobremesa.toFixed(2);
  
    resultadoSpan.textContent = "R$ " + total.toFixed(2);
  }
  
  function limpar() {
    document.getElementById("total").style.display = "none";
    document.getElementById("selects-div").style.display = "none";
    document.getElementById("exampleFormControlInput1").value = "";
    document.getElementById("resultado").value = "";
    document.getElementById("selectPrato").value = "Selecione um prato";
    document.getElementById("selectBebida").value = "Selecione uma bebida";
    document.getElementById("selectSobremesa").value = "Selecione uma sobremesa";
  }