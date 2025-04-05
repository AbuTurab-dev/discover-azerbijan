        // Navigation scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.remove('nav-transparent');
                navbar.classList.add('nav-solid');
            } else {
                navbar.classList.remove('nav-solid');
                navbar.classList.add('nav-transparent');
            }
        });
        
        // Mobile menu toggle
        document.getElementById('menu-toggle').addEventListener('click', function() {
            document.getElementById('mobile-menu').classList.add('active');
        });
        
        document.getElementById('close-menu').addEventListener('click', function() {
            document.getElementById('mobile-menu').classList.remove('active');
        });
        
        // Close mobile menu when clicking a navigation link
        const mobileLinks = document.querySelectorAll('#mobile-menu a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                document.getElementById('mobile-menu').classList.remove('active');
            });
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });