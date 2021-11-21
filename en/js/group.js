// var quantityStudentsInt = 24;
// var quantityGroupsInt = 6;

// function randomFunc() {
//   let result = document.getElementById("result");
//   let quantityStudents = document.getElementById("quantityStudents").value;
//   let quantityGroups = document.getElementById("quantityGroups").value;
//   let sameGroup = document.getElementById("sameGroup").value;
//   let notSameGroup = document.getElementById("notSameGroup").value;
//   let menn = document.getElementById("men").value;

//   quantityStudentsInt = parseInt(quantityStudents);
//   quantityGroupsInt = parseInt(quantityGroups);
//   var men = parseInt(menn);

//   result.value = "";
//   if (quantityStudents == "") quantityStudentsInt = 24;
//   if (quantityGroups == "") quantityGroupsInt = 6;
//   if (menn == "") men = 9;

//   let arraySequence = getRandArray();

//   if (document.getElementById("checkCondition").checked) {
//     sameGroup = sameGroup.slice(1, -1);
//     sameGroup = sameGroup.split("),(");
//     notSameGroup = notSameGroup.slice(1, -1);
//     notSameGroup = notSameGroup.split("),(");

//     for (let i = 0; i < sameGroup.length; i++) {
//       sameGroup[i] = sameGroup[i].split(",").map((x) => +x);
//     }
//     for (let i = 0; i < notSameGroup.length; i++) {
//       notSameGroup[i] = notSameGroup[i].split(",").map((x) => +x);
//     }

//     while (
//       !isCorrect(arraySequence, sameGroup, notSameGroup, men, quantityGroupsInt)
//     )
//       arraySequence = getRandArray();
//   }
//   for (let i = 0; i < arraySequence.length; i++) {
//     if (document.getElementById("showIndex").checked)
//       result.value += "กลุ่มที่ " + (i + 1).toString() + " :  ";
//     for (let j = 0; j < arraySequence[i].length; j++) {
//       result.value += arraySequence[i][j] + ", ";
//     }
//     result.value = result.value.slice(0, -2);
//     result.value += "\n";
//   }
// } // JavaScript Document// JavaScript Document// JavaScript Document

// function getRandArray() {
//   let ind = 0;
//   let arraySequence2d = [];
//   let temp = [];
//   let arraySequence = Array.from(
//     { length: quantityStudentsInt },
//     (_, i) => i + 1
//   ).sort(() => Math.random() - 0.5);
//   for (let i = 0; i < quantityGroupsInt; i++) {
//     temp = [];
//     for (
//       let j = 0;
//       j <
//       Math.floor(quantityStudentsInt / quantityGroupsInt) +
//         ((quantityStudentsInt % quantityGroupsInt) - i > 0 ? 1 : 0);
//       j++
//     ) {
//       temp.push(arraySequence[ind]);
//       ind++;
//     }
//     temp.sort((a, b) => a - b);
//     console.log(temp);
//     arraySequence2d.push(temp);
//   }
//   return arraySequence2d;
// }

// function isCorrect(arraySequence, sameGroup, notSameGroup, men) {
//   for (let i = 0; i < arraySequence.length; i++) {
//     let setArraySequence = new Set(arraySequence[i]);
//     for (let j = 0; j < notSameGroup.length; j++) {
//       let setNotSameGroup = new Set(notSameGroup[j]);
//       let con1 = new Set(
//         [...setArraySequence].filter((x) => setNotSameGroup.has(x))
//       );
//       if (con1.size > 1) return false;
//     }
//   }
//   if (document.getElementById("sameGroup").value != "")
//     for (let i = 0; i < sameGroup.length; i++) {
//       let con = false;
//       for (let j = 0; j < arraySequence.length; j++) {
//         if (sameGroup[i].every((val) => arraySequence[j].includes(val)))
//           con = true;
//       }
//       if (!con) return false;
//     }
//   if (document.getElementById("checkMenCondition").checked)
//     for (let i = 0; i < arraySequence.length; i++) {
//       let qmen = 0;
//       for (let j = 0; j < arraySequence[i].length; j++) {
//         if (arraySequence[i][j] <= men) qmen++;
//         console.log(arraySequence[i][j]);
//       }
//       if (qmen < Math.floor(men / quantityGroupsInt)) {
//         console.log(Math.floor(qmen));
//         console.log(Math.floor(men / quantityGroupsInt));
//         console.log(men);
//         return false;
//       }
//     }
//   return true;
// }
function checkMenConditionFunc() {
  // Get the checkbox
  let checkBox = document.getElementById("checkMenCondition");
  // Get the output text
  let div = document.getElementById("menDiv");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true) {
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
}

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

function randomFunc() {
  // input

  let result = document.getElementById("result");
  let quantityStudents = document.getElementById("quantityStudents").value;
  let quantityGroups = document.getElementById("quantityGroups").value;
  let menn = parseInt(document.getElementById("men").value);
  let headGroup = JSON.parse(
    "[" + document.getElementById("headGroup").value + "]"
  );
  let notInGroup = JSON.parse(
    "[" + document.getElementById("notInGroup").value + "]"
  );

  let quantityStudentsInt = parseInt(quantityStudents);
  let quantityGroupsInt = parseInt(quantityGroups);

  // definition
  let table = new Array(quantityGroupsInt);
  for (let i = 0; i < table.length; i++) {
    table[i] = new Array(Math.ceil(quantityStudentsInt / quantityGroupsInt));
  }

  let arraySequence = Array.from(
    { length: quantityStudentsInt },
    (_, i) => i + 1
  );

  // process

  if (document.getElementById("checkCondition").checked) {
    if (document.getElementById("checkMenCondition").checked) {
      let maleArraySequence = Array.from({ length: menn }, (_, i) => i + 1);
      let femaleArraySequence = Array.from(
        { length: quantityStudentsInt - menn },
        (_, i) => i + 1 + menn
      );
      shuffle(maleArraySequence);
      shuffle(femaleArraySequence);
      arraySequence = maleArraySequence.concat(femaleArraySequence);
    } else {
      shuffle(arraySequence);
    }
    notInGroup.concat(headGroup).forEach((i) => {
      const index = arraySequence.indexOf(i);
      if (index > -1) {
        arraySequence.splice(arraySequence.indexOf(i), 1);
      }
    });
  } else {
    shuffle(arraySequence);
  }

  arraySequence = headGroup.concat(arraySequence);
  //   const index = array.indexOf(5);
  //   if (index > -1) {
  //     array.splice(index, 1);
  //   }

  console.log(table);

  for (let i = 0; i < table[0].length; i++) {
    for (let j = 0; j < table.length; j++) {
      table[j][i] = arraySequence[i * table.length + j];
    }
  }

  // output

  result.value = "";

  for (let i = 0; i < table.length; i++) {
    if (document.getElementById("showIndex").checked)
      result.value += "Group " + (i + 1).toString() + " :  ";
    for (let j = 0; j < table[i].length; j++) {
      if (typeof table[i][j] !== "undefined") {
        result.value += table[i][j] + ", ";
      }
    }
    result.value = result.value.slice(0, -2);
    result.value += "\n";
  }
}