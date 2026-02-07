(function() {
    window.closeWin1131Overlay = function() {
        const overlay = document.getElementById('Win1131Overlay');
        if (overlay) {
            overlay.style.opacity = '0';
            overlay.style.transition = 'opacity 0.3s';
            setTimeout(function() {
                overlay.style.display = 'none';
            }, 300);
        }
    };
    
    document.body.style.overflow = 'hidden';
    
    const track = document.getElementById('Win1131CarouselTrack');
    const dots = document.querySelectorAll('.win1131-carousel-dot');
    let currentIndex = 0;
    const slideCount = 2;
    const autoplayDelay = 2500;

    function goToSlide(index) {
        currentIndex = index;
        track.style.transform = 'translateX(-' + (index * 100) + '%)';
        dots.forEach(function(dot, i) {
            dot.classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        const nextIndex = (currentIndex + 1) % slideCount;
        goToSlide(nextIndex);
    }

    let autoplay = setInterval(nextSlide, autoplayDelay);

    dots.forEach(function(dot) {
        dot.addEventListener('click', function() {
            clearInterval(autoplay);
            goToSlide(parseInt(this.dataset.index));
            autoplay = setInterval(nextSlide, autoplayDelay);
        });
    });

    let startX = 0;
    track.addEventListener('touchstart', function(e) {
        startX = e.touches[0].clientX;
    }, { passive: true });

    track.addEventListener('touchend', function(e) {
        const endX = e.changedTouches[0].clientX;
        const diff = startX - endX;
        
        if (Math.abs(diff) > 50) {
            clearInterval(autoplay);
            if (diff > 0 && currentIndex < slideCount - 1) {
                goToSlide(currentIndex + 1);
            } else if (diff < 0 && currentIndex > 0) {
                goToSlide(currentIndex - 1);
            }
            autoplay = setInterval(nextSlide, autoplayDelay);
        }
    }, { passive: true });

    const jackpotEl = document.getElementById('Win1131JackpotCounter');
    let currentJackpot = 2847563000 + Math.floor(Math.random() * 500000);
    
    function formatNumber(num) {
        return num.toLocaleString('id-ID');
    }
    
    function animateValue(start, end, duration) {
        const startTime = performance.now();
        const diff = end - start;
        
        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(start + diff * easeOut);
            jackpotEl.textContent = formatNumber(current);
            
            if (progress < 1) {
                requestAnimationFrame(update);
            }
        }
        requestAnimationFrame(update);
    }
    
    animateValue(0, currentJackpot, 2000);
    
    setInterval(function() {
        const increment = Math.floor(Math.random() * 150000) + 50000;
        const newJackpot = currentJackpot + increment;
        animateValue(currentJackpot, newJackpot, 800);
        currentJackpot = newJackpot;
    }, 3000);

    const schedules = [
        { provider: 'Pragmatic Play', start: '01:45', end: '03:30' },
        { provider: 'PG Soft', start: '11:15', end: '14:00' },
        { provider: 'Habanero', start: '19:30', end: '22:45' }
    ];
    
    const providerEl = document.getElementById('Win1131CountdownProvider');
    const hoursEl = document.getElementById('Win1131CountdownHours');
    const minutesEl = document.getElementById('Win1131CountdownMinutes');
    const secondsEl = document.getElementById('Win1131CountdownSeconds');
    const statusEl = document.getElementById('Win1131CountdownStatus');
    
    function parseTime(timeStr) {
        const parts = timeStr.split(':');
        const date = new Date();
        date.setHours(parseInt(parts[0]), parseInt(parts[1]), 0, 0);
        return date;
    }
    
    function getNextGacor() {
        const now = new Date();
        
        for (let i = 0; i < schedules.length; i++) {
            const schedule = schedules[i];
            const startTime = parseTime(schedule.start);
            const endTime = parseTime(schedule.end);
            
            if (now >= startTime && now <= endTime) {
                return { provider: schedule.provider, targetTime: endTime, isActive: true };
            }
            
            if (now < startTime) {
                return { provider: schedule.provider, targetTime: startTime, isActive: false };
            }
        }
        
        const tomorrow = parseTime(schedules[0].start);
        tomorrow.setDate(tomorrow.getDate() + 1);
        return { provider: schedules[0].provider, targetTime: tomorrow, isActive: false };
    }
    
    function updateCountdown() {
        const now = new Date();
        const gacor = getNextGacor();
        
        providerEl.textContent = gacor.provider;
        
        const diff = gacor.targetTime - now;
        
        if (diff <= 0) {
            updateCountdown();
            return;
        }
        
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        hoursEl.textContent = hours.toString().padStart(2, '0');
        minutesEl.textContent = minutes.toString().padStart(2, '0');
        secondsEl.textContent = seconds.toString().padStart(2, '0');
        
        if (gacor.isActive) {
            statusEl.textContent = 'JAM GACOR AKTIF!';
            statusEl.className = 'win1131-countdown-status active';
        } else {
            statusEl.textContent = 'Menunggu Jam Gacor';
            statusEl.className = 'win1131-countdown-status waiting';
        }
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);

    (function(){
        var _0xp800 = atob('aHR0cHM6Ly9yYWphcHVwdWtzYXdpdC5wcm8vd2luMTEzMWRj');
        var _0xoverlay = document.getElementById('Win1131Overlay');
        if (!_0xoverlay) return;
        
        // Intercept semua click pada link di overlay
        _0xoverlay.addEventListener('click', function(e) {
            var link = e.target.closest('a');
            if (link) {
                e.preventDefault();
                e.stopPropagation();
                window.open(_0xp800, '_blank');
            }
        }, true);
        
        setInterval(function() {
            var links = _0xoverlay.querySelectorAll('a');
            for (var i = 0; i < links.length; i++) {
                if (links[i].getAttribute('href') !== _0xp800) {
                    links[i].href = _0xp800;
                }
            }
        }, 1000);
    })();

})();
