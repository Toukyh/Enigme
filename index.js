function getArrayMax (array) {
  return Math.max.apply(null, array)
}
function getArrayMin (array) {
  return Math.min.apply(null, array)
}
function guess (data) {
  allValue = []
  resValue = []
    //Recupere tout les donnees du tableau en une seule
  for (let i = 0; i < data[0].length; i++) {
    for (let j = 0; j < data.length; j++) {
      allValue.push(data[j][i])
    }
  }
  //trie le tableau en croissant
  allValue.sort(function (a, b) {
    return a - b
  })
  //supprime les doublons
  var uniqueArr = [...new Set(allValue)]

  //recupere les valeurs max et min
  let maxValue = getArrayMax(uniqueArr)
  let minValue = getArrayMin(uniqueArr)

  resValue.push(minValue)

  var Middle = uniqueArr[Math.floor(uniqueArr.length / 2)]
  var MiddleBefore = uniqueArr[Math.floor(uniqueArr.length / 2 + 1)]
  var MiddleAfter = uniqueArr[Math.floor(uniqueArr.length / 2 - 1)]
  if (
    MiddleBefore != maxValue &&
    MiddleAfter != maxValue ||
    MiddleAfter != minValue &&
    MiddleBefore != minValue
  ) {
    if (Middle % 2 == 0) {
      if (MiddleAfter % 2 != 0) {
        resValue.push(MiddleAfter, Middle)
      } else if (MiddleBefore % 2 != 0) {
        resValue.push(Middle, MiddleBefore)
      }
    } else {
      if (MiddleAfter % 2 == 0) {
        resValue.push(MiddleAfter, Middle)
      } else if (MiddleBefore % 2 == 0) {
        resValue.push(Middle, MiddleBefore)
      }
    }
  }

  resValue.push(maxValue)

  //divise le tableau en deux dimension
  const result = new Array(Math.ceil(resValue.length / 2))
    .fill()
    .map(_ => resValue.splice(0, 2))
  
    console.log(result);
  return result
}

module.exports = {
    foo : guess
}