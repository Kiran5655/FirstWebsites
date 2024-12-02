const addItem = async (item) => {
    await randomDelay();
    let div = document.createElement("div");
    div.innerHTML = item;
    document.body.append(div);
  };
  
  const randomDelay = () => {
    return new Promise((resolve) => {
      const timeout = 1 + 6 * Math.random();
      setTimeout(() => {
        resolve();
      }, timeout * 1000);
    });
  };
  
  async function main() {
    // Start the loading dots animation
    let t = setInterval(() => {
      let last = document.body.getElementsByTagName("div");
      if (last.length > 0) {
        last = last[last.length - 1];
        if (last.innerHTML.endsWith("...")) {
          last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length - 3);
        } else {
          last.innerHTML = last.innerHTML + ".";
        }
      }
    }, 100);
  
    // List of text messages to display
    let text = [
      "Initializing hacking process",
      "Reading your files",
      "Password files detected",
      "Sending all passwords and personal files to the server",
      "Cleaning up",
    ];
  
    // Add each message with a random delay
    for (const item of text) {
      await addItem(item);
    }
  
    // Wait for a final random delay before stopping the animation
    await randomDelay();
    clearInterval(t);
  }
  
  main();
  