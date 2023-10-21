let arr = ["This is sentence 1.", "This is sentence 2.", "This is sentence 3."];
let count = 0;

function sentences(sentencesList, action, sentence) {
  if (action == "remove") {
    if (sentence) {
      for (i = sentenceList.length - 1; i >= 0; i -= 1) {
				if (sentencesList[i] == sentence) {
					arr.splice(i, 1);
				}
			}
    } else {
      arr.pop();
    }

    count++;
  } else if (action == "add" && sentence) {
    arr.push(sentence);
    count++;
  }
  
  return count;
}

console.log(sentences(arr, "add", "fjdkls;afjdkl;sajfkld;sa"));
console.log(arr)