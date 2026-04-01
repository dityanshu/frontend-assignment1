function addEvent() {

  var title = document.getElementById("title").value;
  var date = document.getElementById("date").value;
  var category = document.getElementById("category").value;
  var desc = document.getElementById("desc").value;

  if (title == "" || date == "") {
    alert("Fill all fields");
    return;
  }

  var list = document.getElementById("eventList");

  var event = document.createElement("div");
  event.classList.add("event"); // ✅ apply CSS

  event.innerHTML =
    "<h3>" + title + "</h3>" +
    "<p><b>Date:</b> " + date + "</p>" +
    "<p><b>Category:</b> " + category + "</p>" +
    "<p>" + desc + "</p>";

  // Create delete button properly
  var btn = document.createElement("button");
  btn.innerText = "Delete";
  btn.classList.add("delete");

  btn.onclick = function () {
    event.remove();
  };

  event.appendChild(btn);
  list.appendChild(event);

  // clear input
  document.getElementById("title").value = "";
  document.getElementById("date").value = "";
  document.getElementById("desc").value = "";
}