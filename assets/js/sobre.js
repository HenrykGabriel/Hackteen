// Sobre.js - Specific functionality for About page

document.addEventListener('DOMContentLoaded', function() {
    loadTeamMembers();
    animateCounters();
});

// Team Members Data
const teamMembers = [
    {
        id: 1,
        name: "Davi Camargo Campos",
        role: "Desenvolvedor iniciante",
        description: "Cuidando da parte do desenvolvimento front-end e do design.",
        image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=300&h=300&fit=crop&crop=face",
        skills: ["HTML", "CSS", "design"]
    },
    {
        id: 2,
        name: "David Fernando Ferreira Moura",
        role: "Desenvolvedor iniciante",
        description: "Focado em pesquisas sobre acessibilidade e ajudando no desenvolvimento.",
        image: "images/david.jpg",
        skills: ["HTML", "CSS", "Acessibilidade"]
    },
    {
        id: 3,
        name: "Henryk Gabriel Lara Fabiano",
        role: "Desenvolvedor iniciante",
        description: "Auxiliando na parte do desenvolvimento e na organização do projeto.",
        image: "images/henryk.jpg",
        skills: ["HTML", "CSS", "Organização"]
    }
];

// Load and display team members
function loadTeamMembers() {
    const teamGrid = document.getElementById('team-grid');
    if (!teamGrid) return;
    
    const teamHTML = teamMembers.map(member => `
        <div class="team-card" data-member-id="${member.id}">
            <div class="team-image-container">
                <img 
                    src="${member.image}" 
                    alt="Foto de ${member.name}" 
                    class="team-image"
                    loading="lazy"
                />
            </div>
            <div class="team-info">
                <h3 class="team-name">${member.name}</h3>
                <p class="team-role">${member.role}</p>
                <p class="team-description">${member.description}</p>
                <div class="team-skills">
                    ${member.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
    
    teamGrid.innerHTML = teamHTML;
    
    // Add event listeners for expand/collapse
    setupTeamCardInteractions();
}

// Setup team card interactions
function setupTeamCardInteractions() {
    const moreButtons = document.querySelectorAll('.team-more-btn');
    
    moreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const detailsId = this.getAttribute('aria-controls');
            const details = document.getElementById(detailsId);
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            
            // Toggle expanded state
            this.setAttribute('aria-expanded', !isExpanded);
            details.setAttribute('aria-hidden', isExpanded);
            
            // Update button text and icon
            const btnText = this.querySelector('.btn-icon');
            if (isExpanded) {
                this.innerHTML = 'Ver mais <span class="btn-icon">↓</span>';
                details.style.maxHeight = '0';
            } else {
                this.innerHTML = 'Ver menos <span class="btn-icon">↑</span>';
                details.style.maxHeight = details.scrollHeight + 'px';
            }
            
            // Add animation class
            details.classList.toggle('expanded', !isExpanded);
        });
    });
}

// Animate counter numbers
function animateCounters() {
    const counters = document.querySelectorAll('.impact-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });
    
    counters.forEach(counter => {
        observer.observe(counter);
    });
}

function animateCounter(element) {
    const target = element.textContent;
    const isPercentage = target.includes('%');
    const numericValue = parseInt(target.replace(/[^\d]/g, ''));
    
    let current = 0;
    const increment = numericValue / 60; // Animation duration
    const timer = setInterval(() => {
        current += increment;
        if (current >= numericValue) {
            current = numericValue;
            clearInterval(timer);
        }
        
        const displayValue = Math.floor(current);
        if (target.includes('+')) {
            element.textContent = displayValue.toLocaleString() + '+';
        } else if (isPercentage) {
            element.textContent = displayValue + '%';
        } else {
            element.textContent = displayValue.toLocaleString();
        }
    }, 16); // ~60fps
}

// Save team member interaction to localStorage
function trackTeamInteraction(memberId, action) {
    if (window.AccessCode) {
        const interactions = window.AccessCode.getFromLocalStorage('teamInteractions') || {};
        const memberKey = `member_${memberId}`;
        
        if (!interactions[memberKey]) {
            interactions[memberKey] = { views: 0, expanded: 0 };
        }
        
        interactions[memberKey][action] = (interactions[memberKey][action] || 0) + 1;
        
        window.AccessCode.saveToLocalStorage('teamInteractions', interactions);
    }
}

// Track when users expand team member details
document.addEventListener('click', function(e) {
    if (e.target.matches('.team-more-btn')) {
        const card = e.target.closest('.team-card');
        const memberId = card.getAttribute('data-member-id');
        trackTeamInteraction(memberId, 'expanded');
    }
});

// Add CSS for team cards
const teamStyles = `
<style>
.mvv-section {
    padding: var(--spacing-16) 0;
}

.mvv-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--spacing-8);
}

.mvv-card {
    background: white;
    padding: var(--spacing-8);
    border-radius: var(--radius-xl);
    box-shadow: var(--shadow-lg);
    text-align: center;
    transition: var(--transition);
    border: 1px solid var(--border-color);
}

.mvv-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

.mvv-icon {
    font-size: var(--font-size-3xl);
    margin-bottom: var(--spacing-4);
}

.mvv-title {
    margin-bottom: var(--spacing-3);
    font-size: var(--font-size-xl);
}

.mvv-description {
    color: var(--text-secondary);
    line-height: 1.6;
}

.story-section {
    padding: var(--spacing-16) 0;
    background: var(--background-light);
}

.story-content {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
}

.story-text {
    font-size: var(--font-size-lg);
    line-height: 1.8;
    color: var(--text-secondary);
}

.story-text p {
    margin-bottom: var(--spacing-6);
}

.team-section {
    padding: var(--spacing-16) 0;
}

.team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: var(--spacing-8);
}

.team-card {
    background: white;
    border-radius: var(--radius-xl);
    box-shadow: var(--shadow);
    overflow: hidden;
    transition: var(--transition);
    border: 1px solid var(--border-color);
}

.team-card:hover {
    box-shadow: var(--shadow-lg);
    transform: translateY(-2px);
}

.team-image-container {
    width: 100%;
    height: 250px;
    overflow: hidden;
}

.team-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: var(--transition);
}

.team-card:hover .team-image {
    transform: scale(1.05);
}

.team-info {
    padding: var(--spacing-6);
}

.team-name {
    font-size: var(--font-size-xl);
    margin-bottom: var(--spacing-2);
    color: var(--text-primary);
}

.team-role {
    color: var(--primary-color);
    font-weight: 500;
    margin-bottom: var(--spacing-3);
    font-size: var(--font-size-sm);
}

.team-description {
    color: var(--text-secondary);
    margin-bottom: var(--spacing-4);
    line-height: 1.6;
}

.team-skills {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-2);
    margin-bottom: var(--spacing-4);
}

.skill-tag {
    background: var(--background-light);
    color: var(--text-secondary);
    padding: var(--spacing-1) var(--spacing-3);
    border-radius: var(--radius-xl);
    font-size: var(--font-size-xs);
    font-weight: 500;
}

.team-more-btn {
    background: none;
    border: none;
    color: var(--primary-color);
    font-weight: 500;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: var(--spacing-2);
    transition: var(--transition);
}

.team-more-btn:hover {
    color: var(--primary-dark);
}

.team-details {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
    margin-top: var(--spacing-4);
}

.team-details.expanded {
    padding-top: var(--spacing-4);
    border-top: 1px solid var(--border-color);
}

.team-achievements h4 {
    font-size: var(--font-size-base);
    margin-bottom: var(--spacing-3);
    color: var(--text-primary);
}

.team-achievements ul {
    list-style: none;
    padding-left: 0;
}

.team-achievements li {
    color: var(--text-secondary);
    margin-bottom: var(--spacing-2);
    font-size: var(--font-size-sm);
    position: relative;
    padding-left: var(--spacing-4);
}

.team-achievements li::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: var(--secondary-color);
    font-weight: bold;
}

.impact-section {
    padding: var(--spacing-16) 0;
    background: linear-gradient(135deg, #dbeafe 0%, #dcfce7 100%);
}

.impact-content {
    text-align: center;
}

.impact-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: var(--spacing-6);
    max-width: 800px;
    margin: 0 auto;
}

.impact-card {
    background: white;
    padding: var(--spacing-6);
    border-radius: var(--radius-xl);
    box-shadow: var(--shadow);
    transition: var(--transition);
}

.impact-card:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
}

.impact-icon {
    font-size: var(--font-size-2xl);
    margin-bottom: var(--spacing-3);
}

.impact-number {
    font-size: var(--font-size-3xl);
    font-weight: 700;
    color: var(--primary-color);
    margin-bottom: var(--spacing-2);
}

.impact-label {
    color: var(--text-secondary);
    font-size: var(--font-size-sm);
    font-weight: 500;
}

@media (max-width: 767px) {
    .mvv-grid {
        grid-template-columns: 1fr;
    }
    
    .team-grid {
        grid-template-columns: 1fr;
    }
    
    .impact-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}
</style>
`;

document.head.insertAdjacentHTML('beforeend', teamStyles);