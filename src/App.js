import React from 'react';
import axios from "axios";

/*
  1.네트워크에 존재하는 데이터를 가져와서 const 변수에 넣는다.
    어떻게 가져오는가?
     :기본적으로는 fetch - promis를 사용하지만 (자바스크립트 기능)
     : axios (fetch를 좀 더 쉽게 사용 할 수 있음)

  2.const변수를 view시킨다.
*/

// 암기하세요 componentDidMount();
// 라이프사이클의 일종 
// componentDidMount() : 컴포넌트(App)가 만들어진 직후에 자동으로 실행하는 함수
//render() -> didMount();

const API_KEY = "b431ba6f03980392bd531710f1fac895";
const URL = "https://api.themoviedb.org/3/";
const param = {
  path: "movie/popular",
  lan: "en"
};

function App(){
  const axios = require("axios"); //네트워크에 있는 데이터를 불러오는 기능

  let movies = null;

  axios.get("https://api.themoviedb.org/3/movie/popular?api_key=b431ba6f03980392bd531710f1fac895&language=en-US&page=1")
  .then(function(response) {
    // handle success

    movies = response.data.results; // 영화 20개 를 movies에 가져옴
    console.log(movies);

    const movieList = document.getElementById("movieList");

    for (let i = 0; i < movies.length; i++) {
      const li = document.createElement("li");
      const span = document.createElement("span");
      const img = document.createElement("img");

      console.log(movies[i].poster_path);

      img.src = "https://image.tmdb.org/t/p/w500"+movies[i].poster_path;
      span.innerHTML = movies[i].title; //제목이 들어가있는 span을 li에 넣어줌 => <li><span>영화제목</span></li>가 실행되는 것
      li.appendChild(span);
      li.appendChild(img);

      movieList.appendChild(li);
    }
  }) // 억지스러운 자바스크립트
  .catch(function(error) {
    // handle error
    console.log(error);
  })
  .finally(function() {
    // always executed
  });
//여기까지 사용한 것이 javascript입니다.
//React Soure 으로 바꾸면 map하나로 끝남

  return <ol id="movieList"></ol>;
}

//map이 에러가 나는 이유
/*
  map은 ES6 문법을 사용함 => render(화면에 뿌려주는 것)를 시키려면 babel이라는 기능이 필요.
  그래서 map은 실행이 되는데, 화면에 뿌려줄 때 에러 발생
*/

export default App;

//axios를 통해서 외부 데이터를 가져올 수 있군아 정도만 알고 있으면 됨