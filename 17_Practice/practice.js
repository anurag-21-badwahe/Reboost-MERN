const getItem = async (item) => {
  await generateRandomDelay();
  let div = document.createElement("div");
  div.innerHTML = item;
  document.body.append(div);
};

const generateRandomDelay = () => {
  return new Promise((resolve, reject) => {
    let timeout = 1 + 6 * Math.random();
    setTimeout(() => {
      resolve();
    }, timeout * 1000);
  });
};
async function main() {

    setInterval(() => {
      let last = document.body.getElementsByTagName("div");
      last = last[last.length-1]
      if(last.innerHTML.endsWith("....")){
        last.innerHTML = last.innerHTML.slice(0,last.innerHTML.length-3);
      }
      last.innerHTML = last.innerHTML+"."
    }, 200);

  const hackingStr = [
    "Intilize Hacking",
    "Fetching Data",
    "Connecting to server",
    "Storing the data",
    "Cleaning the data",
  ];

  for (const item of hackingStr) {
    await getItem(item); // get item is a function here
  }
}

main();
