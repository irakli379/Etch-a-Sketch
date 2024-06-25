const cont = document.querySelector(".cont");
const button = document.createElement("button");
const body = document.querySelector("body");
const btnCont = document.createElement("div");

function random_rgba() {
  let o = Math.round,
    r = Math.random,
    s = 255;
  return (
    "rgba(" +
    o(r() * s) +
    "," +
    o(r() * s) +
    "," +
    o(r() * s) +
    "," +
    r().toFixed(1) +
    ")"
  );
}

button.textContent = "change square count";
btnCont.setAttribute("class", "btnCont");

btnCont.append(button);
body.append(btnCont);

let divCount = 16;
getGrid(divCount);

button.addEventListener("click", () => {
  const nums = Number(
    prompt(
      "Enter the number of grid squares to be displayed on both axes. (maximum 100)"
    )
  );

  if (typeof nums !== "number" || isNaN(nums) || nums > 100) {
    alert("enter a valid value");
    return;
  }

  console.log(Number(nums));
  divCount = nums;

  while (cont.hasChildNodes()) {
    cont.removeChild(cont.firstChild);
  }

  getGrid(divCount);
});

function getGrid(numSquares) {
  for (let i = 1; i <= numSquares; i++) {
    const div = document.createElement("div");
    const divDimensions = 50 / numSquares;

    div.setAttribute("class", "square");
    div.style.cssText = `background: red; height: ${divDimensions}vh; width: ${divDimensions}vh; border: 1px solid black;`;

    cont.append(div);

    for (let j = 1; j < numSquares; j++) {
      const div = document.createElement("div");

      div.setAttribute("class", "square");
      div.style.cssText = `background: red; height: ${divDimensions}vh; width: ${divDimensions}vh; border: 1px solid black;`;

      cont.append(div);
    }
  }

  const squares = Array.from(document.querySelectorAll(".square"));

  squares.forEach((cur) => {
    let opacity = 100;

    cur.addEventListener("mouseenter", function () {
      cur.style.background = random_rgba();
      cur.style.opacity = `${(opacity -= 10)}%`;
    });
  });
}
