$(document).ready(function() {
    // عند النقر على شاشة الترحيب
    $('.welcome-screen').click(function() {
        $(this).fadeOut(800, function() {
            $('.main-content').removeClass('d-none');
            
            // تشغيل الكونفيتي
            for (let i = 0; i < 50; i++) {
                createConfetti();
            }
            
            // عداد العمر
            $('.counter').counterUp({
                delay: 20,
                time: 2000
            });
        });
    });
    
    // إنشاء قطع الكونفيتي
    function createConfetti() {
        const colors = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4CAF50', '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800', '#FF5722'];
        
        const confetti = $('<div class="confetti"></div>');
        $('.birthday-card').append(confetti);
        
        // تحديد موقع عشوائي
        const leftPos = Math.random() * 100;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const size = Math.random() * 10 + 5;
        const animationDuration = Math.random() * 3 + 3;
        
        // تطبيق الأنماط
        confetti.css({
            'left': leftPos + '%',
            'background-color': color,
            'width': size + 'px',
            'height': size + 'px',
            'animation-delay': Math.random() * 5 + 's',
            'animation-duration': animationDuration + 's'
        });
        
        // إزالة الكونفيتي بعد الانتهاء
        setTimeout(() => {
            confetti.remove();
        }, animationDuration * 1000);
    }
    
    // زر تشغيل الموسيقى
    let isPlaying = false;
    const audio = $('.birthday-song')[0];
    
    $('.music-btn').click(function() {
        if (isPlaying) {
            audio.pause();
            $(this).html('<i class="fas fa-music"></i> تشغيل الموسيقى');
        } else {
            audio.play();
            $(this).html('<i class="fas fa-pause"></i> إيقاف الموسيقى');
        }
        isPlaying = !isPlaying;
    });
    
    // زر عرض الأمنيات
    $('.wishes-btn').click(function() {
        $('.wishes-modal').fadeIn();
    });
    
    // زر إغلاق الأمنيات
    $('.close-btn').click(function() {
        $('.wishes-modal').fadeOut();
    });
    
    // إغلاق بالنقر خارج النافذة
    $(window).click(function(e) {
        if ($(e.target).hasClass('wishes-modal')) {
            $('.wishes-modal').fadeOut();
        }
    });
});