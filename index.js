const text = document.querySelector(".text");
const text1 = document.querySelector(".text1");
const text2 = document.querySelector(".text2");
const text3 = document.querySelector(".text3");
const text4 = document.querySelector(".text4");
///////////////////////////////////////////////
const number1 = document.querySelector(".numbers");
const number2 = document.querySelector(".numbers2");
const number3 = document.querySelector(".numbers3");
const number4 = document.querySelector(".numbers4");
const number5 = document.querySelector(".numbers5");
const number6 = document.querySelector(".numbers6");
const number7 = document.querySelector(".numbers7");
const number8 = document.querySelector(".numbers8");
const number9 = document.querySelector(".numbers9");
const number10 = document.querySelector(".numbers10");
const number11 = document.querySelector(".numbers11");

const serverRequest = async () => {
  try {
    const req = await fetch(
      "https://api.stackexchange.com/2.3/tags?pagesize=5&order=desc&sort=popular&site=stackoverflow"
    );
    const res = await req.json();

    for (let i = 0; i < res.items.length; i++) {
      text.textContent = res.items[i].name;
      text1.textContent = res.items[i + 1].name;
      text2.textContent = res.items[i + 2].name;
      text3.textContent = res.items[i + 3].name;
      text4.textContent = res.items[i + 4].name;
    }
  } catch (error) {
    console.log(error);
  }
};
const serverRequestForNumbers = async () => {
  try {
    const req = await fetch(
      "https://api.stackexchange.com/2.3/users?pagesize=11&order=desc&sort=reputation&site=stackoverflow"
    );
    const res = await req.json();

    for (let i = 0; i < res.items.length; i++) {
      number2.textContent = res.items[i + 1].badge_counts.gold;
      number3.textContent = res.items[i + 2].badge_counts.gold;
      number4.textContent = res.items[i + 3].badge_counts.gold;
      number5.textContent = res.items[i + 4].badge_counts.gold;
      number6.textContent = res.items[i + 5].badge_counts.gold;
      number7.textContent = res.items[i + 6].badge_counts.gold;
      number8.textContent = res.items[i + 7].badge_counts.gold;
      number9.textContent = res.items[i + 8].badge_counts.gold;
      number10.textContent = res.items[i + 9].badge_counts.gold;
      number11.textContent = res.items[i + 10].badge_counts.gold;
    }
  } catch (error) {}
};
serverRequest();
serverRequestForNumbers()
