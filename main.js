const init = document.scripts; //copia solo los scripts

//filtra los scripts, solo manda los que tienen la propiedad "buddy_id"
for (script of init) { 
  var metodo = script.innerHTML;
  if (metodo.contains("buddy_id")) {
    leedata(metodo);
  }
}

//Corta los scripts desde la propiedad "buddy_id"
function leedata(data) {
  let arr = data.split("{}");
  for (ar of arr) {
    let filter = ar.split('"buddy_id":');
    formateaInfo(filter);
  }
}

//Filtra los que tienen las propiedades de los usuarios (nombre, foto, id)
function formateaInfo(info) {
  let file = [];
  for (profile of info) {
    if (profile.contains("user")) {
      estructurainfo(profile);
      file.push(profile);
    }
  }
}

//Crea un objeto y le asigna los valores de los usuarios, los regresa en una tabla
function estructurainfo(profile) {
  let user_id = profile.slice(0, 25);
  let name_user = profile.split('"');
  user_id = user_id.split('"');

  dataObject = {
    user_id: user_id[1],
    name: name_user[15],
    profile_picture: "",
  };
  console.table(dataObject);
}
