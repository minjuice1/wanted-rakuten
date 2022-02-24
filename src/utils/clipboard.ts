const clipboard = (text: string | null) => {
  if (!text) return;
  if (!document.queryCommandSupported("copy")) {
    return alert("복사하기가 지원되지 않는 브라우저입니다.");
  }
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.style.top = "0";
  textarea.style.left = "0";
  textarea.style.position = "fixed";
  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
  alert(`${text} 주소가 복사되었습니다.`);
};

export default clipboard;
