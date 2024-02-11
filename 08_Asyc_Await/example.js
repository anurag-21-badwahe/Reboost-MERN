function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let res = {
        message: "Hurrah!! You are Selected for Software Engineering Role",
        package: "20+",
      };
      resolve(res);
    }, 5000);
  });
}

async function fetchData() {
  let result = await getData();
  console.log(result.message);
  console.log(
    `Finally You got the offer of ${result.package} lpa from the company`
  );
}

fetchData();
