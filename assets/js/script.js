document.addEventListener("DOMContentLoaded", function () {
  const bookBtn = document.getElementById("book-table");

  bookBtn.addEventListener("click", function (e) {
    e.preventDefault();

    const name = prompt("Enter your name:");
    if (!name) {
      alert("Booking cancelled");
      return;
    }

    const date = prompt("Enter booking date (DD-MM-YYYY):");
    if (!date) {
      alert("Booking cancelled");
      return;
    }

    const time = prompt("Enter time (e.g. 7:30 PM):");
    if (!time) {
      alert("Booking cancelled");
      return;
    }

    const guests = prompt("Number of guests:");
    if (!guests) {
      alert("Booking cancelled");
      return;
    }

    alert(
      "Booking Confirmed!\n\n" +
      "Name: " + name + "\n" +
      "Date: " + date + "\n" +
      "Time: " + time + "\n" +
      "Guests: " + guests + "\n\n" +
      "We look forward to serving you at MyCafe ☕"
    );
  });
});
