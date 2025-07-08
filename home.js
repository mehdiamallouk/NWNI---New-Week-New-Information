
function updateDate() {
    const now = new Date();
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    };

    const formatted = now.toLocaleDateString('en-US', options);
    document.getElementById('liveDate').textContent = formatted;
  }

  // Update every second
  setInterval(updateDate, 1000);

  // Initial call to show it right away
  updateDate();



let Sprichwort = document.getElementById("NWNI");
Sprichwort.innerText = "New Week New Information" ;
Sprichwort.style.color = "black"
Sprichwort.style.animation;





