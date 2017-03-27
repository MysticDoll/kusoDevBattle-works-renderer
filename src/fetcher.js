export default url => {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open(url);
    xhr.send();
    xhr.addEventListener("load", () => resolve(xhr.responseText));
    xhr.addEventListener("error", e => reject(e));
  });
};
