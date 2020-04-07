
function loadJSON(file, callback) {
  var rawFile = new XMLHttpRequest();
  rawFile.overrideMimeType("application/json");
  rawFile.open("GET", file, true);
  rawFile.onreadystatechange = function() {
    if (rawFile.readyState === 4 && rawFile.status == "200") {
      callback(rawFile.responseText);
    }
  }
  rawFile.send();
}
loadJSON("data.json", function(text){
  let data = JSON.parse(text);
  console.log(data);
  ph(data.photos);
  // details(data.data);
  // skillsTable(data.skills);
  // raja(data.education);
  // raja1(data.experienc);
});
var main = document.getElementById('jsdata');

function ph(da){
  var photos = document.createElement("div")
  photos.classList.add("jsdata")

  main.appendChild(photos)
  for(i in da){
    var di=document.createElement("div");
    di.classList.add("ph1");
    var image=document.createElement("img");
    image.src=da[i].image;
    di.appendChild(image)
    var spam=document.createElement("span");
    spam.textContent=da[i].name;
    spam.classList.add("age");
    di.appendChild(spam);
    var sp=document.createElement("span");
    sp.textContent=da[i].value;
    di.appendChild(sp);
    photos.appendChild(di);
  }
}
