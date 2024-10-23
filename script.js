function create(element,atri,style){
  let x = document.createElement(element);
  
  if(atri != undefined){
    let k = Object.keys(atri), v = Object.values(atri);
    for(i = 0; i < k.length; i++){
      x[k[i]] = v[i];
    }
  }
  
  if(style != undefined){
    let k = Object.keys(style), v = Object.values(style);
    for(i = 0; i < k.length; i++){
      x.style[k[i]] = v[i];
    }
  }
  
  return x;
}

function Ico(link,name,subb){
  let ico = create("a",{href:link});
  let z = link.length;
  
  if(link[z-1] != "/"){
    link += "/";
  }
  
  let zk = create("div");
  
  zk.classList.add("ed")
  document.getElementById("links").appendChild(zk);
  
  link += "favicon.ico";
  
  if(subb != undefined){
    link = subb;
  }
  
  let img = create("img",{src:link});
  
  zk.appendChild(img);
  zk.appendChild(ico);

  let ttt = create("p",{innerHTML:name});
  ico.appendChild(ttt);
}

document.getElementsByTagName("input")[0].addEventListener("keydown",(event)=>{
  xzz = document.getElementsByTagName("input")[0];
  if(event.key == "Enter"){
    let kz = xzz.value;
    xzz.value = "";
    window.open(`https://suporte.dominioatendimento.com/central/faces/central-solucoes-resultados.html?moduloSolucao=13&palavraChave=${kz}`);
  }
});

Ico("https://www.gov.br/esocial/pt-br","eSocial");
Ico("https://fgtsdigital.sistema.gov.br/portal/","FGTS digital");
Ico("https://sd.maisemprego.mte.gov.br/sdweb/empregadorweb/","empregador web","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAQCAIAAABGNLJTAAAAU0lEQVR4AZWQgQkAIBAC3amd2qmd2skA6QERQBEwu54nrF04t7y5zyhw4gPnhMo6JlqoPPpNP7vfu/+Twr1IWqZkWbKLKS34PINsVt4khoKW0OoBsenJajpTp9UAAAAASUVORK5CYII=");
Ico("https://www.caixa.gov.br/empresa/conectividade-social/Paginas/default.aspx","conectividade social","data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Mjc3Nzc3Nzc3Nzc3Mjc3Nzc3Nzc3NzcvNzc3Ny03Nzc3OC83Nzc1Nzc3ODg3Ny03N//AABEIABwAHAMBEQACEQEDEQH/xAAaAAABBQEAAAAAAAAAAAAAAAAGAAEEBQcD/8QAKRAAAgIBAgUCBwEAAAAAAAAAAQIDBBEABRITITFRBuEHQXGBobHwM//EABoBAAIDAQEAAAAAAAAAAAAAAAUGAAMEAgH/xAArEQABAwEGBAYDAAAAAAAAAAABAAMEAgURITFRYRJB4fAGE4GxwdEUkaH/2gAMAwEAAhEDEQA/AKirXa1ahroyI0siorSHCgk4GT8ho+TcL0AA4jciez8PN+r15JiKkgjUtwRSMWbHgcIydZhMaJuWgw3QL8O/RUlfZrdiFZkEYRxleJupHntobJ8RQY7paqJJGdw6rbHsSW/QHAAAdT0KhTwGCZ4nKlkOCVORnRaNIpkNUu0ggHXAobIaqYdLRIJGmXfyuffIPY6uBVd162P0n6mis7BWfcnZLCDgZipPMA7P9/3nSzPnRIz5bqrF+mmyYYTD77IrFPXdBfrK+ta7JX27iVJhzOYVK4U/Jfz1/hjsyxWX3zMcxoJvpGu520H7wzttG1nW6PxqcKgLifrff5yEB0HTTglhWG2V6jy8y7YiSNT/AJs2C/toLa0qY235cRsmo8wMB19kXsyLGcq8yTWBSOROJ6e6LNp3baDvFeC5MgrFSWkLARggdAT49tLVneHn6735VORyOZ3PeKOy7ZZoIaZPryHf8Uj4jS7LulCK5Q3KlJbrkLy45lLPGT2AHg9fpnThEpcoPCacEuS6m3BxCoXrPBogh6WNQLop8a9XKWNeKJsaii//2Q==");
Ico("https://cav.receita.fazenda.gov.br/autenticacao/login","https://www.gov.br/receitafederal/pt-br/canais_atendimento/atendimento-virtual/acessar-ecac/@@images/image");
