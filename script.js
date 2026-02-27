const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const result = document.getElementById('result');

yesBtn.onclick = function() {
  result.textContent = 'Anh biết em sẽ chọn đó mà hihi yêu em :))';
  result.style.color = '#27ae60';
}

noBtn.onclick = function() {
  result.textContent = 'đừng mà cho anh xin lỗi mà được không huhu đừng chọn không mà';
  result.style.color = '#c0392b';
}
