document.getElementById("addTaskButton").addEventListener("click", function () {
    const taskTitle = document.getElementById("newTaskInput").value;
    if (taskTitle) {
      addTask(taskTitle);
      document.getElementById("newTaskInput").value = ""; // Clear input field
    }
  });
  
  function fetchTasks() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((tasks) => {
        const tasksListElement = document.getElementById("tasksList");
        tasks.forEach((task) => {
          const taskItem = document.createElement("li");
          taskItem.textContent = task.title;
          tasksListElement.appendChild(taskItem);
        });
      });
  }
  
  // Initial fetch of tasks
  fetchTasks();
  
  document
    .getElementById("loadAlbumsButton")
    .addEventListener("click", function () {
      fetchAlbums();
    });
  
  function fetchAlbums() {
    // URL incorrecte intentionnellement pour simuler une erreur
    fetch("https://jsonplaceholder.typicode.com/albumss")
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            "Impossible de charger les albums. Vérifiez l'URL et réessayez."
          );
        }
        return response.json();
      })
      .then((albums) => {
        const albumsListElement = document.getElementById("albumsList");
        albums.forEach((album) => {
          const albumItem = document.createElement("div");
          albumItem.textContent = album.title;
          albumsListElement.appendChild(albumItem);
        });
      })
      .catch((error) => {
        console.error(error);
        alert(error.message);
      });
  }

  function addTask(taskTitle) {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
  .then((response) => response.json())
  .then((json) => 
    fetchTasks()
    );
  }

  function filtre_titre() {
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('titre');
    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";				
        }
    }
}