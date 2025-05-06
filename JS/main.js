
document.getElementById('preorder-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    
    if (!name || !email || !phone) {
        alert('Please fill in all required fields.');
        return;
    }
    
    if (!/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    
    Swal.fire({
        icon: 'success',
        title: 'Thank you!',
        text: 'Your pre-order was successful. We will contact you soon with more details.',
        confirmButtonColor: '#3085d6'
    });
    
    
    
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});
