// Smooth scrolling for navigation links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent the default anchor behavior
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth' // Smooth scroll
        });
        // Close the navigation menu after clicking a link (for mobile view)
        if (window.innerWidth <= 768) {
            const navLinks = document.querySelector('.nav-links');
            navLinks.classList.remove('active'); // Hide the menu on small screens
        }
    });
});

// Get references to modal elements
const modal = document.getElementById("notice-modal");
const noticeBtn = document.getElementById("notice-btn");
const closeBtn = document.querySelector(".close");
const noticesContainer = document.getElementById("notices-container");

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

// Function to load notices into the modal
function loadNotices() {
    noticesContainer.innerHTML = ""; // Clear existing content

    notices.forEach(notice => {
        const noticeCard = document.createElement('div');
        noticeCard.classList.add('notice-card');
        
        const title = document.createElement('h3');
        title.textContent = notice.title;
        
        const description = document.createElement('p');
        description.textContent = notice.description;
        
        const date = document.createElement('small');
        date.innerHTML = `<strong>Date:</strong> ${notice.date}`;

        const readMoreLink = document.createElement('a');
        readMoreLink.href = '#';
        readMoreLink.classList.add('read-more');
        readMoreLink.setAttribute('data-image', notice.image);
        readMoreLink.setAttribute('data-description', notice.description);
        readMoreLink.textContent = "Read More";

        // Append all elements to the notice card
        noticeCard.appendChild(title);
        noticeCard.appendChild(description);
        noticeCard.appendChild(date);
        noticeCard.appendChild(readMoreLink);

        // Append notice card to the container
        noticesContainer.appendChild(noticeCard);
    });
}

// Event delegation for handling Read More click event
noticesContainer.addEventListener('click', function(e) {
    if (e.target && e.target.classList.contains('read-more')) {
        e.preventDefault(); // Prevent default anchor link behavior
        
        const noticeCard = e.target.closest('.notice-card');
        const imageSrc = e.target.getAttribute('data-image');
        const description = e.target.getAttribute('data-description');

        const existingImage = noticeCard.querySelector('.notice-image');
        if (!existingImage) {
            const img = document.createElement('img');
            img.classList.add('notice-image');
            img.src = imageSrc;
            img.alt = description;

            const dateElement = noticeCard.querySelector('small');
            noticeCard.insertBefore(img, dateElement.nextSibling);
        }
    }
});

// Show the modal and load notices
noticeBtn.addEventListener("click", () => {
    loadNotices();
    modal.classList.add("show"); // Add 'show' class for fade-in effect
});

// Close the modal
closeBtn.addEventListener("click", () => {
    modal.classList.remove("show"); // Remove 'show' class for fade-out effect
});

// Close modal if user clicks outside
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.classList.remove("show");
    }
});

// Header scroll effect
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Hamburger menu toggle (one listener is sufficient)
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('active'); /* Show/Hide the nav menu */
});
