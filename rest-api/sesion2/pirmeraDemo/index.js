// const xhr = new XMLHttpRequest();
// xhr.open("GET", "https://api.github.com/orgs/lemoncode/members");

// xhr.onreadystatechange = function () {
//   if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
//     console.log(xhr.responseText);
//   }
// };

// xhr.setRequestHeader("Accept", "application/json");

// xhr.send();

// const getJson = (url, onSuccess) => {
//   const xhr = new XMLHttpRequest();
//   xhr.open("GET", url);

//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
//       onSuccess(JSON.parse(xhr.responseText));
//     }
//   };

//   xhr.setRequestHeader("Accept", "application/json");

//   xhr.send();
// };

// getJson("https://api.github.com/orgs/lemoncode/members", (result) => {
//   console.log(result);
// });

const getMembers = async () => {
  const promise = new Promise((resolve, reject) => {
    reject("Error al obtener los miembros");
  });
  return promise;
};

const run = async () => {
  const data = await getMembers();
};
run();
