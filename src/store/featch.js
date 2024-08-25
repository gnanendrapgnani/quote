export const data = () => {
  fetch("https://dummyjson.com/quotes/1")
    .then((res) => res.json())
    .then(console.log);
};
