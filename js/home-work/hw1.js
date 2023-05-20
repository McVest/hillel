/*
Частина №1
Створити скрипт яки повинен виконувати наступне:

  запитати у користувача рік народження;
запитати в нього, в якому місті він живе;
запитати його улюблений вид спорту.


  При натисканні на ОК показуємо вікно, де має бути відображена наступна інформація:

  його вік;
якщо користувач вкаже Київ, Вашингтон чи Лондон, то показати йому повідомлення - "Ти живеш у столиці..." і на місце точок підставляємо країну, столицею якої є місто. Інакше показуємо йому “ти живеш у місті…”, де місце точок – введене місто.
*/
// Функція для перевірки, чи є місто столицею
 function checkCityIsCapital() {
  let year = prompt('How old are you?');
  let cities = prompt('What city do you live in?');
  let sport = prompt('What is your favorite sport?');

  let apiUrl = `https://restcountries.com/v3.1/capital/${cities}`;

   fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      if (data[0]?.capital[0] === cities) {
        alert(`You were born in ${year}. You live in the capital city of ${cities}. Your favorite sport is ${sport}.`);
      } else {
        alert(`You were born in ${year}. You live in the city of ${cities}. Your favorite sport is ${sport}.`);
      }
    })
    .catch(error => {
      console.log(`Сталася помилка: ${error}`);
    });
}
// checkCityIsCapital();


/*
Частина №2

Вибираємо самі три види спорту та три чемпіони у цих видах. Відповідно, якщо користувач вкаже один із цих видів спорту, то показуємо йому повідомлення “Круто! Хочеш стати …? і підставляємо на місце точок ім'я та прізвище чемпіона.

Все це має бути відображено в одному вікні (алерті).

Якщо в якомусь випадку він не захоче вводити інформацію і натисне Скасувати, показати йому повідомлення – “Шкода, що Ви не захотіли ввести свій(ю) …” і вказуємо, що він не захотів вводити – дату народження, місто чи вид спорту .
* */
function sportsQuestion() {
  let sportTypes = ["football", "tennis", "basketball"];
  let champions = {
    football: "Lionel Messi",
    tennis: "Novak Djokovic",
    basketball: "LeBron James"
  };

  let sport = prompt("Enter a sport (football, tennis, basketball):");

  if (sport === null) {
    alert("It is a pity that you did not want to introduce a sport.");
  } else if (sportTypes.includes(sport.toLowerCase())) {
    let champion = champions[sport.toLowerCase()];
    alert("Cool! You want to " + champion + "?");
  } else {
    alert("Unfortunately, this sport is not on the list.");
  }
}

// sportsQuestion();


