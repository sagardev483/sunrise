// Smooth scrolling for navigation links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add more interactivity as needed

// Get references to modal elements
const modal = document.getElementById("notice-modal");
const noticeBtn = document.getElementById("notice-btn");
const closeBtn = document.querySelector(".close");
const noticesContainer = document.getElementById("notices-container");
const noticeImageContainer = document.getElementById("notice-image-container");

// Notice halne thau

// Notices data (with image URLs)
const notices = [
    {
        title: "Exam Schedule Released",
        date: "2025-01-20",
        description: "The mid-term exam schedule is now available on the portal.",
        
        image: "notice/notice.jpg"  // Image URL for the notice
    },
    {
        title: "Holiday Announcement",
        date: "2025-01-18",
        description: "School will remain closed on January 26th for Republic Day.",
        
        image: "pics/aa.jpg"  // Image URL for the notice
    }
];

// ya samma matra ho

// Function to load notices into the modal
function loadNotices() {
    noticesContainer.innerHTML = ""; // Clear existing content
    notices.forEach(notice => {
        const noticeHTML = `
        <div class="notice-card">
            <h3>${notice.title}</h3>
            <p>${notice.description}</p>
            <small><strong>Date:</strong> ${notice.date}</small>
            <br>
            <!-- Update the Read More link to use data-attributes -->
            <a href="#" class="read-more" data-image="${notice.image}" data-description="${notice.description}">Read More</a>
        </div>
    `;
        noticesContainer.innerHTML += noticeHTML;
    });
}
// JavaScript to handle the Read More click event
document.querySelectorAll('.read-more').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent the default anchor link behavior
        
        // Get the data from the clicked Read More link
        const imageSrc = this.getAttribute('data-image');
        const description = this.getAttribute('data-description');
        
        // Log the imageSrc to check if it's correct
        console.log(imageSrc); // Debugging: Check if the image URL is correct

        // Find the notice-card element and the image container inside it
        const noticeCard = this.closest('.notice-card');
        const imageContainer = noticeCard.querySelector('.notice-image-container');

        // Create the image element dynamically
        const img = document.createElement('img');
        img.classList.add('notice-image');
        img.src = imageSrc; // Set the image source
        img.alt = description; // Set alt text for the image

        // Append the image to the image container
        imageContainer.appendChild(img);
    });
});

// Show the modal with animation
noticeBtn.addEventListener("click", () => {
    loadNotices(); // Load notices dynamically
    modal.classList.add("show"); // Add 'show' class for fade-in effect
});

// Close the modal
closeBtn.addEventListener("click", () => {
    modal.classList.remove("show"); // Remove 'show' class for fade-out effect
    noticeImageContainer.innerHTML = ""; // Clear the image when closing modal
});

window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.classList.remove("show"); // Hide modal on outside click
        noticeImageContainer.innerHTML = ""; // Clear the image when clicking outside
    }
});

// Function to display the image when "Read More" is clicked
noticesContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("read-more")) {
        const imageUrl = event.target.getAttribute("data-image");
        displayImage(imageUrl);  // Call function to display image in modal
    }
});

// Function to display image in the modal
function displayImage(imageUrl) {
    noticeImageContainer.innerHTML = `<img src="${imageUrl}" alt="Notice Image" class="notice-image">`;
}

// Header scroll effect
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
