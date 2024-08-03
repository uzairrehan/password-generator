const input = document.querySelector("#gen-text");
const text =
  "qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM1234567890";

function generatePassword() {
  let generated = "";
  for (let i = 0; i < 16; i++) {
    const random = Math.floor(Math.random() * text.length);
    generated += text.charAt(random);
  }
  input.value = generated;
}
generatePassword()

function copyToClipboard() {
  input.select();
  document.execCommand("copy");
}