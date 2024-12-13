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
  // 可扩展更多假名
];

// 当前假名
let currentKana = kanaMap[0];

// 生成随机假名
function generateKana() {
  const randomIndex = Math.floor(Math.random() * kanaMap.length);
  currentKana = kanaMap[randomIndex];
  document.getElementById("kana").innerText = currentKana.kana;
  document.getElementById("result").innerText = "";
  document.getElementById("answer").value = "";
}

// 检查答案
function checkAnswer() {
  const userAnswer = document.getElementById("answer").value.trim().toLowerCase();
  const result = document.getElementById("result");

  if (userAnswer === currentKana.romaji) {
    result.innerText = "正确！";
    result.style.color = "green";
  } else {
    result.innerText = `错误，正确答案是：${currentKana.romaji}`;
    result.style.color = "red";
  }
}
