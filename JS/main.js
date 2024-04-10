




const inp = document.querySelector("#inp");
const form = document.querySelector("#form");
const res = document.querySelector("#res");
const money = [500, 200, 100, 50, 20, 10, 5, 1];

form.addEventListener("click", (e) => {
  e.preventDefault();
  res.innerHTML = "";
  let mebleg = +inp.value;
  money.map((mny) => {
    let say = Math.trunc(mebleg / mny);
    if (say) {
      mebleg = mebleg - say * mny;
 
      const row = document.createElement("div");
      row.classList.add("row");
   
      for (let i = 0; i < say && i < 5; i++) {
        const image = document.createElement("img");
        image.src =`./images/${mny}.jpg` ;
        image.style.left = `${i * 60}px`;
        row.append(image);
      }
      if (say - 5 > 0) {
        const h1 = document.createElement("h1");
        h1.textContent = `${say - 5}X`;
        row.append(h1);
      }
      res.append(row);
    }
  });
});





















