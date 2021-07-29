import { CitiesData } from "./cities";

let searchCity = ``;

// cities에서 wordToMatch(검색단어)를 찾아서 리턴한다.
function findMatches(wordToMatch, cities) {
  return cities.filter((v) => {
    const regex = new RegExp(wordToMatch, "gi");
    return v.city.match(regex);
  });
}

// 검색된 단어를 지정한 태그에 보여준다.
export function displayInputValue(e) {
  console.log("들어오나?");
  // 이전 검색 초기화
  searchCity = ``;

  // iuput 에 값이 있을 때만 검색어와 일치하는지 검색한다.
  if (e.target.value !== ``) {
    const matchedArray = findMatches(this.value, CitiesData);

    for (let ma of matchedArray) {
      // 한번에 넣으면 단어마다 구분이 어려워서 <p> 태그로 감싸준다.
      searchCity +=
        `<button type="button" onclick="tagChoose(this)">` +
        ma.city +
        `, ` +
        ma.state +
        `</button>`;
    }
  }

  // 찾은 단어들을 id="result" 에 넣어준다.
  document.querySelector("#result").innerHTML = searchCity;
}

export function tagChoose(_this) {
  const chooseEl = document.querySelector("#choose");
  chooseEl.innerHTML += `<button class="chooseBtn" onclick="tagSubmit(this)"> ${_this.innerText} </button>`;
  _this.remove();
}

export function tagSubmit(_this) {
  _this.remove();
}

export function resultSubmit() {
  const chooseEl = document.querySelector("#choose");
  const chooseElChild = chooseEl.childNodes;
  console.log(chooseElChild);
  for (const cn of chooseElChild) {
    console.log(cn.innerText);
  }
}
