const reverseSubsequence = (subsequence) => {
  return subsequence.split("").reverse().join("");
};

const findMax = (a, b) => {
  if (a > b) return a;
  else return b;
};

// Print the longest common subsequence
function printSubsequence(
  lengthString1,
  lengthString2,
  String1,
  String2,
  matrix
) {
  let subsequence = "";
  while (lengthString1 > 0 && lengthString2 > 0) {
    if (String1[lengthString1 - 1] === String2[lengthString2 - 1]) {
      subsequence += String1[lengthString1 - 1];
      lengthString1--;
      lengthString2--;
    } else {
      if (
        matrix[lengthString1][lengthString2 - 1] >
        matrix[lengthString1 - 1][lengthString2]
      ) {
        lengthString2--;
      } else {
        lengthString1--;
      }
    }
  }
  return subsequence;
}

function longestCommonSubsequence(S1, S2) {
  let lengthString1 = S1.length;
  let lengthString2 = S2.length;
  let lcs = [];

  for (let i = 0; i <= lengthString1; i++) {
    lcs[i] = [];
  }

  // Retrieve the length of longest common subsequence between the two strings
  for (let i = 0; i <= lengthString1; i++) {
    for (let j = 0; j <= lengthString2; j++) {
      if (i == 0 || j == 0) {
        lcs[i][j] = 0;
      } else if (S1[i - 1] == S2[j - 1]) {
        lcs[i][j] = 1 + lcs[i - 1][j - 1];
      } else {
        lcs[i][j] = findMax(lcs[i - 1][j], lcs[i][j - 1]);
      }
    }
  }

  let subsequence = printSubsequence(lengthString1, lengthString2, S1, S2, lcs);
  console.log(
    "The longes common subsequence is:",
    reverseSubsequence(subsequence)
  );

  return lcs;
}

let x = "ABAZDC";
let y = "BACBAD";
let lcsArr = longestCommonSubsequence(x, y);
console.log(`The length is:  ${lcsArr[x.length][y.length]}`);

// To display the details in the matrix table
// console.log(lcsArr);
