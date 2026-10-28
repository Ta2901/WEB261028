 // script.js : 내 영화 평점 통계(콘솔판)
 // 작성자 : 이름(학번)

 const titles = [
    "인터스텔라 Interstellar",
    "무서운 영화 Scary Movie",
    "옥희의 영화",
    "소설가의 영화",
    "나쁜 영화"
  ];
  
  const years = [2014, 2000, 2010, 2017, 1997]; // 실제 개봉 연도 확인
  const ratings = [8.4, 6.3, 6.7, 6.5, 6.3];
  
  let sum = 0;
  
  for (let i = 0; i < ratings.length; i++) {
    sum = sum + ratings[i];
  }
  
  console.log("합계:", sum);
  
  const average = sum / ratings.length;
  console.log("평균:", average);
  
  let max = ratings[0];
  let maxIndex = 0;
  
  for (let i = 0; i < ratings.length; i++) {
    if (ratings[i] > max) {
      max = ratings[i];
      maxIndex = i;
    }
  }
  
  console.log("최고:", titles[maxIndex], max);
  
  let count = 0;
  
  for (let i = 0; i < ratings.length; i++) {
    if (ratings[i] >= 8) count++;
  }
  
  console.log("8점 이상:", count + "편");
  
  for (let i = 0; i < ratings.length; i++) {
    let label;
  
    if (ratings[i] >= 8.5) {
      label = "명작";
    } else if (ratings[i] >= 7) {
      label = "추천";
    } else {
      label = "보통";
    }
  
    console.log(
      titles[i] + " (" + years[i] + ") : " +
      ratings[i] + " " + label
    );
  }
  
  const avgText = average.toFixed(1);
  const best = titles[maxIndex];
  
  alert(`내 영화 ${titles.length}편, 평균 ${avgText}점, 최고는 ${best}`);
  console.log(`내 영화 ${titles.length}편, 평균 ${avgText}점, 최고는 ${best}`);

// // document.write("Web Script 방법");

// console.log("Console장의 나와야 하는 내용");

// var num = 10+20;

// console.log(num);

// let sum = 80 + 1234;

// console.log(sum);

// let string1= "hello, world";
// let string2= 'Cinema Website';
// console.log(string1, string2);

// let dan = 3;
// let gugu = 8;
// let string = `${dan} plus ${gugu} = ${dan*gugu}`;
// console.log(string);

// let studentScore = [80,70,90,60];
// console.log(studentScore);
// console.log(studentScore[2]);

// let stdScore ={
//     koreanScore :80,
//     engScore: 70,
//     mathScore: 90,
//     scienceScore: 60
// };
// console.log(stdScore);
// console.log(stdScore['koreanScore']); 

// for(dan =2; dan <=9; dan++){
//     for(let i=1; i<=9; i++){
//     console.log(`${dan} x ${i} = ${dan *i}`);
//     }
// }


