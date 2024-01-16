const targetDate = new Date("January 1, 2025 00:00:00").getTime();

  const intervalId = setInterval(function() {
    
    const currentDate = new Date().getTime();

    const remainingTime = targetDate - currentDate;

    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = `${hours}:${minutes}:${seconds}`;

    if (remainingTime <= 0) {
      clearInterval(intervalId); 
      document.getElementById("timer").innerHTML = "Countdown expired!";
    }
  }, 1000); 
