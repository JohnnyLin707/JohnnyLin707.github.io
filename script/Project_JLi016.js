function checkAnswer(correctAnswer) {
    const selectElement = document.getElementById('city-select');
    const selectedValue = selectElement.value;
    
    if (!selectedValue) {
        alert('Please select a city first!');
        return;
    }
    
    if (selectedValue === correctAnswer) {

        const checkmark = document.createElement('div');
        checkmark.innerHTML = '✓';
        checkmark.style.color = 'green';
        checkmark.style.fontSize = '200px';
        checkmark.style.fontWeight = 'bold';
        checkmark.style.position = 'fixed';
        checkmark.style.top = '50%';
        checkmark.style.left = '50%';
        checkmark.style.transform = 'translate(-50%, -50%)';
        checkmark.style.zIndex = '1000';
        checkmark.style.animation = 'fadeInOut 2s';
        
        document.body.appendChild(checkmark);
        
        
        setTimeout(() => {
            document.body.removeChild(checkmark);
        }, 2000);
        
        
        celebrate();
    } else {
       
        const xmark = document.createElement('div');
        xmark.innerHTML = '✗';
        xmark.style.color = 'red';
        xmark.style.fontSize = '200px';
        xmark.style.fontWeight = 'bold';
        xmark.style.position = 'fixed';
        xmark.style.top = '50%';
        xmark.style.left = '50%';
        xmark.style.transform = 'translate(-50%, -50%)';
        xmark.style.zIndex = '1000';
        xmark.style.animation = 'shake 0.5s';
        
        document.body.appendChild(xmark);
        
        
        setTimeout(() => {
            document.body.removeChild(xmark);
        }, 2000);
    }
}


function celebrate() {
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.top = '0';
    container.style.left = '0';
    container.style.width = '100%';
    container.style.height = '100%';
    container.style.pointerEvents = 'none';
    container.style.zIndex = '999';
    
    document.body.appendChild(container);
    

    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'absolute';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = '-10px';
        confetti.style.borderRadius = '50%';
        

        const animation = confetti.animate([
            { top: '-10px', transform: 'rotate(0deg)' },
            { top: '100vh', transform: 'rotate(360deg)' }
        ], {
            duration: Math.random() * 3000 + 2000,
            easing: 'cubic-bezier(0.1, 0.8, 0.9, 1)'
        });
        
        container.appendChild(confetti);
        

        animation.onfinish = () => {
            container.removeChild(confetti);
        };
    }
    

    setTimeout(() => {
        document.body.removeChild(container);
    }, 5000);
}


const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInOut {
        0% { opacity: 0; transform: translate(-50%, -50%) scale(0.5); }
        50% { opacity: 1; transform: translate(-50%, -50%) scale(1.5); }
        100% { opacity: 0; transform: translate(-50%, -50%) scale(0.5); }
    }
    
    @keyframes shake {
        0% { transform: translate(-50%, -50%) rotate(0deg); }
        25% { transform: translate(-50%, -50%) rotate(10deg); }
        50% { transform: translate(-50%, -50%) rotate(-10deg); }
        75% { transform: translate(-50%, -50%) rotate(10deg); }
        100% { transform: translate(-50%, -50%) rotate(0deg); }
    }
`;
document.head.appendChild(style);


document.addEventListener('DOMContentLoaded', function() {
    const attractions = document.querySelectorAll('.attractions li');
    
    attractions.forEach(item => {
        item.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#f0f0f0';
            this.style.transition = 'background-color 0.3s';
        });
        
        item.addEventListener('mouseout', function() {
            this.style.backgroundColor = 'transparent';
        });
    });
});



document.addEventListener('DOMContentLoaded', function() {

    const showAvatarBtn = document.getElementById('showAvatarBtn');
    const avatarContainer = document.querySelector('.avatar-container');
    
    showAvatarBtn.addEventListener('click', function() {
        avatarContainer.classList.add('show');
        this.style.display = 'none'; // Hide the button after click
    });
    

    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        
        if (isElementInViewport(item)) {
            item.classList.add('active');
        }
        
        // Add hover effect
        item.addEventListener('mouseenter', function() {
            this.classList.add('active');
            const img = this.querySelector('img');
            img.style.transform = 'scale(1.05)';
        });
        
        item.addEventListener('mouseleave', function() {
            const img = this.querySelector('img');
            img.style.transform = 'scale(1)';
        });
    });
    
    // Also trigger slide-in when scrolling
    window.addEventListener('scroll', function() {
        galleryItems.forEach(item => {
            if (isElementInViewport(item)) {
                item.classList.add('active');
            }
        });
    });
    
    
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
});
