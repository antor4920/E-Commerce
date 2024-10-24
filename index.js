// JavaScript to update cart total dynamically
document.addEventListener("DOMContentLoaded", function () {
  // Get all quantity inputs and item total fields
  const quantityInputs = document.querySelectorAll('input[type="number"]');
  const itemTotals = document.querySelectorAll(".item-total p");
  const cartSummaryTotal = document.querySelector(
    ".cart-summary p:nth-child(3)"
  );
  const subtotalDisplay = document.querySelector(
    ".cart-summary p:nth-child(2)"
  );

  // Function to calculate and update total cost
  function updateCartTotal() {
    let subtotal = 0;

    quantityInputs.forEach((input, index) => {
      const quantity = parseInt(input.value);
      const price =
        parseFloat(itemTotals[index].innerText.split("$")[1]) / quantity; // Get unit price

      const newTotal = quantity * price;
      itemTotals[index].innerText = `Total: $${newTotal.toFixed(2)}`; // Update item total
      subtotal += newTotal;
    });

    // Update subtotal and total display
    subtotalDisplay.innerText = `Subtotal: $${subtotal.toFixed(2)}`;
    const shipping = 5.0; // Flat shipping rate (adjustable)
    cartSummaryTotal.innerText = `Total: $${(subtotal + shipping).toFixed(2)}`;
  }

  // Add event listeners to each quantity input to recalculate totals when changed
  quantityInputs.forEach((input) => {
    input.addEventListener("change", updateCartTotal);
  });

  // Call the function once to set initial values
  updateCartTotal();
});

// JavaScript for contact form validation
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.querySelector(".contact-form form");

  contactForm.addEventListener("submit", function (e) {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    // Basic validation checks
    if (nameInput.value === "") {
      alert("Please enter your name.");
      e.preventDefault(); // Prevent form submission
    } else if (!validateEmail(emailInput.value)) {
      alert("Please enter a valid email address.");
      e.preventDefault();
    } else if (messageInput.value === "") {
      alert("Please enter a message.");
      e.preventDefault();
    }
  });

  // Email validation helper function
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }
});

// // JavaScript to toggle dark mode
// document.addEventListener("DOMContentLoaded", function () {
//   const darkModeToggle = document.getElementById("darkModeToggle");
//   const body = document.body;

//   // Check if dark mode is already active (saved in localStorage)
//   if (localStorage.getItem("darkMode") === "enabled") {
//     body.classList.add("dark-mode");
//   }

//   // Toggle dark mode on button click
//   darkModeToggle.addEventListener("click", function () {
//     body.classList.toggle("dark-mode");

//     // Save the user's preference to localStorage
//     if (body.classList.contains("dark-mode")) {
//       localStorage.setItem("darkMode", "enabled");
//     } else {
//       localStorage.setItem("darkMode", "disabled");
//     }
//   });
// });

// JavaScript for smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Auto-suggestions for search bar
const searchInput = document.getElementById("search-bar");
const suggestionBox = document.querySelector(".suggestions");

// Dummy product list (this would be dynamic in a real app)
const products = [
  "Laptop",
  "Smartphone",
  "Headphones",
  "Camera",
  "Keyboard",
  "Mouse",
  "Smartwatch",
  "Tablet",
];

searchInput.addEventListener("keyup", function () {
  const input = searchInput.value.toLowerCase();
  suggestionBox.innerHTML = "";

  if (input) {
    const suggestions = products.filter((product) =>
      product.toLowerCase().includes(input)
    );
    suggestions.forEach((suggestion) => {
      const div = document.createElement("div");
      div.innerText = suggestion;
      div.classList.add("suggestion-item");
      suggestionBox.appendChild(div);
    });
  }
});
