const section = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

fetch('http://myjson.dit.upm.es/api/bins/f4ai').then( (res)=> {
    console.log(res);
    let dat = res.json();
    console.log(dat);
    return dat;
}).then((dat) => { dat.reduce(
    (values, item) => {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["All"]
  );
    

})



/*
const categoryList = () => {
  const categoryBtns = categories
    .map((category) => {
      return `<button class="btn btn-outline-dark btn-item" data-id=${category}>${category}</button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = document.querySelectorAll(".btn-item");
*/