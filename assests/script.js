const roles = [
    'an Aspiring Frontend Developer',
    'a Web Developer',
    'a Technical Writer',
    'an Instructor'
];
let roleIndex = 0;

// Function to change the role
function changeRole() {
    const roleTitle = document.getElementById('role-title');
    roleTitle.textContent = roles[roleIndex];

    roleIndex = (roleIndex + 1) % roles.length;
}

// Call changeRole every 800ms to switch roles
setInterval(changeRole, 800);

// skills level
// Define skill levels for technical skills (percentages)
const skillLevels = {
    'htmllevel': 90,
    'csslevel': 85,
    'pythonlevel': 65,
    'jslevel': 80,
    'writinglevel': 80,
    'spsslevel': 80,
    'mslevel': 95
};

// Function to update skill levels next to each skill
function displaySkillLevels() {
    for (let skill in skillLevels) {
        const skillElement = document.getElementById(skill);
        if (skillElement) {
            skillElement.textContent = ` - ${skillLevels[skill]}%`;
        }
    }
}

// Call the function to display skill levels when the page loads
document.addEventListener('DOMContentLoaded', displaySkillLevels);

// Toggle visibility of technical skills when the button is clicked
document.getElementById('toggleTechSkills').addEventListener('click', function() {
    const techSkills = document.querySelector('.techskills');
    if (techSkills.style.display === 'none') {
        techSkills.style.display = 'block'; // Show the list
    } else {
        techSkills.style.display = 'none';  // Hide the list
    }
});



//contact us
// form submission
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Form validation
    if (name === '' || email === '' || message === '') {
        document.getElementById('formMessage').textContent = 'Please fill out all required fields.';
        document.getElementById('formMessage').style.color = 'red';
    } else if (!validateEmail(email)) {
        document.getElementById('formMessage').textContent = 'Please enter a valid email address.';
        document.getElementById('formMessage').style.color = 'red';
    } else {
        document.getElementById('formMessage').textContent = `Thank you, ${name}! Your message has been sent.`;
        document.getElementById('formMessage').style.color = 'green';
    }
});

// Email validation function
function validateEmail(email) {
    const symbols = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return symbols.test(email);
}



