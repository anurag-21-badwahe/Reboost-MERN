// Fetch data from a URL
const myData = (()=>{
  setInterval(()=>{
    fetch('https://api.thingspeak.com/channels/2444043/fields/1.json?api_key=NKIHDO428VD1WBQC&results=2')
  .then(response => response.json())
  .then(data => {
    // Access the feeds array inside the fetched data
    const feeds = data.feeds;

    // Iterate over the feeds array and print the value of field1
    feeds.forEach(feed => {
      console.log(feed.field1);
    });
  })
  .catch(error => {
    // Handle any errors
    console.error('Error fetching data:', error);
  });
  },5000)
})


myData();