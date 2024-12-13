// 假名与对应罗马音的映射
const kanaMap = [
  { kana: "あ", romaji: "a" },
  { kana: "い", romaji: "i" },
  { kana: "う", romaji: "u" },
  { kana: "え", romaji: "e" },
  { kana: "お", romaji: "o" },
  { kana: "か", romaji: "ka" },
  { kana: "き", romaji: "ki" },
  { kana: "く", romaji: "ku" },
  { kana: "け", romaji: "ke" },
  { kana: "こ", romaji: "ko" },
  { kana: "さ", romaji: "sa" },
  { kana: "し", romaji: "shi" },
  { kana: "す", romaji: "su" },
  { kana: "せ", romaji: "se" },
  { kana: "そ", romaji: "so" },
  { kana: "た", romaji: "ta" },
  { kana: "ち", romaji: "chi" },
  { kana: "つ", romaji: "tsu" },
  { kana: "て", romaji: "te" },
  { kana: "と", romaji: "to" },
  { kana: "な", romaji: "na" },
  { kana: "に", romaji: "ni" },
  { kana: "ぬ", romaji: "nu" },
  { kana: "ね", romaji: "ne" },
  { kana: "の", romaji: "no" },
  { kana: "は", romaji: "ha" },
  { kana: "ひ", romaji: "hi" },
  { kana: "ふ", romaji: "fu" },
  { kana: "へ", romaji: "he" },
  { kana: "ほ", romaji: "ho" },
  { kana: "ま", romaji: "ma" },
  { kana: "み", romaji: "mi" },
  { kana: "む", romaji: "mu" },
  { kana: "め", romaji: "me" },
  { kana: "も", romaji: "mo" },
  { kana: "や", romaji: "ya" },
  { kana: "ゆ", romaji: "yu" },
  { kana: "よ", romaji: "yo" },
  { kana: "ら", romaji: "ra" },
  { kana: "り", romaji: "ri" },
  { kana: "る", romaji: "ru" },
  { kana: "れ", romaji: "re" },
  { kana: "ろ", romaji: "ro" },
  { kana: "わ", romaji: "wa" },
  { kana: "を", romaji: "wo" },
  { kana: "ん", romaji: "n" },

  // 片假名
  { kana: "ア", romaji: "a" },  { kana: "イ", romaji: "i" },
  { kana: "ウ", romaji: "u" },
  { kana: "エ", romaji: "e" },
  { kana: "オ", romaji: "o" },
  { kana: "カ", romaji: "ka" },
  { kana: "キ", romaji: "ki" },
  { kana: "ク", romaji: "ku" },
  { kana: "ケ", romaji: "ke" },
  { kana: "コ", romaji: "ko" },
  { kana: "サ", romaji: "sa" },
  { kana: "シ", romaji: "shi" },
  { kana: "ス", romaji: "su" },
  { kana: "セ", romaji: "se" },
  { kana: "ソ", romaji: "so" },
  { kana: "タ", romaji: "ta" },
  { kana: "チ", romaji: "chi" },
  { kana: "ツ", romaji: "tsu" },
  { kana: "テ", romaji: "te" },
  { kana: "ト", romaji: "to" },
  { kana: "ナ", romaji: "na" },
  { kana: "ニ", romaji: "ni" },
  { kana: "ヌ", romaji: "nu" },
  { kana: "ネ", romaji: "ne" },
  { kana: "ノ", romaji: "no" },
  { kana: "ハ", romaji: "ha" },
  { kana: "ヒ", romaji: "hi" },
  { kana: "フ", romaji: "fu" },
  { kana: "ヘ", romaji: "he" },
  { kana: "ホ", romaji: "ho" },
  { kana: "マ", romaji: "ma" },
  { kana: "ミ", romaji: "mi" },
  { kana: "ム", romaji: "mu" },
  { kana: "メ", romaji: "me" },
  { kana: "モ", romaji: "mo" },
  { kana: "ヤ", romaji: "ya" },
  { kana: "ユ", romaji: "yu" },
  { kana: "ヨ", romaji: "yo" },
  { kana: "ラ", romaji: "ra" },
  { kana: "リ", romaji: "ri" },
  { kana: "ル", romaji: "ru" },
  { kana: "レ", romaji: "re" },
  { kana: "ロ", romaji: "ro" },
  { kana: "ワ", romaji: "wa" },
  { kana: "ヲ", romaji: "wo" },
  { kana: "ン", romaji: "n" },
  // 可扩展更多假名
];

// 打乱数组顺序的函数
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
// 初始化：打乱假名
shuffleArray(kanaMap);

// 当前索引和错误记录
let currentIndex = 0;
let currentKana = null; // 当前假名
let wrongAnswers = [];  // 错误记录

// 生成下一个假名
function generateKana() {
  const kanaDisplay = document.getElementById("kana");
  const resultDisplay = document.getElementById("result");

  // 检查是否还有假名
  if (currentIndex < kanaMap.length) {
    currentKana = kanaMap[currentIndex]; // 确保正确初始化 currentKana
    kanaDisplay.innerText = currentKana.kana;
    resultDisplay.innerText = "";
    document.getElementById("answer").value = "";
  } else {
    // 显示错误统计
    showResults();
  }
}

// 检查答案
function checkAnswer() {
  const userAnswer = document.getElementById("answer").value.trim().toLowerCase();
  const resultDisplay = document.getElementById("result");

  if (!currentKana) {
    // 如果 currentKana 尚未初始化，避免报错
    resultDisplay.innerText = "请先生成假名！";
    resultDisplay.style.color = "red";
    return;
  }

  if (userAnswer === currentKana.romaji) {
    resultDisplay.innerText = "正确！";
    resultDisplay.style.color = "green";
  } else {
    resultDisplay.innerText = `错误，正确答案是：${currentKana.romaji}`;
    resultDisplay.style.color = "red";

    // 记录错误的假名
    wrongAnswers.push(currentKana);
  }

  // 移动到下一个假名
  currentIndex++;
  setTimeout(generateKana, 1000); // 延迟 1 秒后显示下一个假名
}

// 显示错误统计结果
function showResults() {
  const kanaDisplay = document.getElementById("kana");
  const resultDisplay = document.getElementById("result");

  kanaDisplay.innerText = "游戏结束！";
  if (wrongAnswers.length > 0) {
    const wrongKanaList = wrongAnswers
      .map(item => `${item.kana} (${item.romaji})`)
      .join(", ");
    resultDisplay.innerHTML = `以下假名回答错误：<br>${wrongKanaList}`;
    resultDisplay.style.color = "red";
  } else {
    resultDisplay.innerText = "恭喜！你全部答对了！";
    resultDisplay.style.color = "green";
  }

  // 隐藏输入框和按钮
  document.querySelector(".input-container").style.display = "none";
  document.getElementById("next-btn").style.display = "none";
}

// 初始化游戏
generateKana();
