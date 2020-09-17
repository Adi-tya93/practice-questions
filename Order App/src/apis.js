export function buySmallAPI() {
  return new Promise((res) => {
    setTimeout(() => {
      res({ fulfilled: true });
      console.log("Small order fulfilled");
    }, Math.floor(Math.random() * 1000));
  });
}
export function buyLargeAPI() {
  return new Promise((res) => {
    setTimeout(() => {
      res({ fulfilled: true });
      console.log("Large order fulfilled");
    }, Math.floor(Math.random() * 3000));
  });
}

export function testAPI() {
  return new Promise((res) => {
    res("Hello World");
  });
}
