// إنشاء النجوم
        function createStars() {
            const starsContainer = document.getElementById('stars');
            const starCount = 200;
            
            for (let i = 0; i < starCount; i++) {
                const star = document.createElement('div');
                star.classList.add('star');
                
                const size = Math.random() * 3 + 1;
                star.style.width = `${size}px`;
                star.style.height = `${size}px`;
                
                star.style.left = `${Math.random() * 100}%`;
                star.style.top = `${Math.random() * 100}%`;
                
                star.style.animationDelay = `${Math.random() * 5}s`;
                
                starsContainer.appendChild(star);
            }
        }
        
        // إنشاء الزهور
        function createFlowers() {
            const flowersContainer = document.getElementById('flowers');
            const flowerTypes = ['🌹', '🌺', '🌸', '🌼', '🌷', '💐', '🥀', '🌻'];
            const flowerCount = 30;
            
            for (let i = 0; i < flowerCount; i++) {
                const flower = document.createElement('div');
                flower.classList.add('flower');
                
                const flowerType = flowerTypes[Math.floor(Math.random() * flowerTypes.length)];
                flower.innerHTML = flowerType;
                
                const size = Math.random() * 50 + 30;
                flower.style.fontSize = `${size}px`;
                
                flower.style.left = `${Math.random() * 100}%`;
                
                if (flowerType !== '🌹' && flowerType !== '🌷') {
                    const hue = Math.random() * 360;
                    flower.style.filter = `hue-rotate(${hue}deg) drop-shadow(0 0 5px rgba(255, 255, 255, 0.7))`;
                }
                
                const duration = Math.random() * 30 + 20;
                flower.style.animationDuration = `${duration}s`;
                
                flower.style.animationDelay = `${Math.random() * 10}s`;
                
                flowersContainer.appendChild(flower);
            }
        }
        
        // إنشاء بتلات الوردة المركزية
        function createRosePetals() {
            // إذا لم تكن هناك ورقة رئيسية، نخرج بدون تنفيذ أي شيء
            const mainRose = document.getElementById('mainRose');
            if (!mainRose) return;
            const petalCount = 12;
            for (let i = 0; i < petalCount; i++) {
                const petal = document.createElement('div');
                petal.classList.add('petal');
                const angle = (360 / petalCount) * i;
                const scale = 0.8 + (i % 3) * 0.2;
                petal.style.transform = `rotate(${angle}deg) translateY(-40px) scale(${scale})`;
                const colorShift = i * 10;
                petal.style.background = `linear-gradient(to bottom, hsl(${330 + colorShift}, 100%, 70%), hsl(${330 + colorShift}, 100%, 50%))`;
                mainRose.appendChild(petal);
            }
            // طبقة داخلية (ستعمل فقط إذا وُجد mainRose)
            const innerCount = 8;
            for (let i = 0; i < innerCount; i++) {
                const innerPetal = document.createElement('div');
                innerPetal.classList.add('petal');
                innerPetal.style.width = '40px';
                innerPetal.style.height = '80px';
                const angle = (360 / innerCount) * i;
                innerPetal.style.transform = `rotate(${angle}deg) translateY(-20px) scale(0.9)`;
                innerPetal.style.background = `linear-gradient(to bottom, hsl(340, 100%, 75%), hsl(340, 100%, 60%))`;
                innerPetal.style.zIndex = '2';
                mainRose.appendChild(innerPetal);
            }
        }
        
        // إنشاء شرر متحرك
        function createSparkles() {
            const sparklesContainer = document.getElementById('sparkles');
            const sparkleCount = 50;
            
            for (let i = 0; i < sparkleCount; i++) {
                const sparkle = document.createElement('div');
                sparkle.classList.add('sparkle');
                
                const size = Math.random() * 8 + 3;
                sparkle.style.width = `${size}px`;
                sparkle.style.height = `${size}px`;
                
                sparkle.style.left = `${Math.random() * 100}%`;
                sparkle.style.top = `${Math.random() * 100}%`;
                
                const hue = Math.random() * 360;
                sparkle.style.backgroundColor = `hsl(${hue}, 100%, 70%)`;
                
                const duration = Math.random() * 4 + 2;
                sparkle.style.animationDuration = `${duration}s`;
                
                sparkle.style.animationDelay = `${Math.random() * 5}s`;
                
                sparklesContainer.appendChild(sparkle);
            }
        }
        
        // إنشاء أزهار عند موضع النقر داخل الحاوية
        function spawnFlowersAt(clientX, clientY, count = 6) {
            const flowersContainer = document.getElementById('flowers');
            if (!flowersContainer) return;

            const rect = flowersContainer.getBoundingClientRect();
            const localX = clientX - rect.left;
            const localY = clientY - rect.top;

            const flowerTypes = ['🌹', '🌺', '🌸', '🌼', '🌷', '💐', '🥀', '🌻'];

            for (let i = 0; i < count; i++) {
                const flower = document.createElement('div');
                flower.classList.add('flower');
                const flowerType = flowerTypes[Math.floor(Math.random() * flowerTypes.length)];
                flower.innerHTML = flowerType;

                const size = Math.random() * 36 + 14; // حجم معقول للنقطة
                flower.style.fontSize = `${size}px`;

                // تمركز الزهرة عند نقطة النقر مع إزاحة عشوائية طفيفة
                const jitterX = (Math.random() - 0.5) * 60; // -30..30
                const jitterY = (Math.random() - 0.5) * 60;
                flower.style.left = `${localX + jitterX}px`;
                flower.style.top = `${localY + jitterY}px`;
                flower.style.marginLeft = `${-size / 2}px`;
                flower.style.marginTop = `${-size / 2}px`;

                if (flowerType !== '🌹' && flowerType !== '🌷') {
                    const hue = Math.random() * 360;
                    flower.style.filter = `hue-rotate(${hue}deg) drop-shadow(0 0 5px rgba(255,255,255,0.7))`;
                }

                const duration = Math.random() * 18 + 8;
                flower.style.animationDuration = `${duration}s`;
                flower.style.animationDelay = `${Math.random() * 0.6}s`;

                flowersContainer.appendChild(flower);
            }
        }
        
        // تبديل الحركة (إيقاف/تشغيل)
        function toggleAnimation() {
            const animatedElements = document.querySelectorAll('.flower, .main-rose, .star, .sparkle, .main-text, .signature');
            if (animatedElements.length === 0) return;
            const isPaused = getComputedStyle(animatedElements[0]).animationPlayState === 'paused';
            
            animatedElements.forEach(el => {
                el.style.animationPlayState = isPaused ? 'running' : 'paused';
            });
            
            const button = document.getElementById('toggleBtn');
            button.textContent = isPaused ? 'إيقاف الحركة' : 'تشغيل الحركة';
        }
        
        // إضافة المزيد من الزهور
        function addMoreFlowers() {
            const flowersContainer = document.getElementById('flowers');
            const flowerTypes = ['🌹', '🌺', '🌸', '🌼', '🌷', '💐', '🥀', '🌻'];
            
            for (let i = 0; i < 10; i++) {
                const flower = document.createElement('div');
                flower.classList.add('flower');
                
                const flowerType = flowerTypes[Math.floor(Math.random() * flowerTypes.length)];
                flower.innerHTML = flowerType;
                
                const size = Math.random() * 50 + 30;
                flower.style.fontSize = `${size}px`;
                
                flower.style.left = `${Math.random() * 100}%`;
                
                if (flowerType !== '🌹' && flowerType !== '🌷') {
                    const hue = Math.random() * 360;
                    flower.style.filter = `hue-rotate(${hue}deg) drop-shadow(0 0 5px rgba(255, 255, 255, 0.7))`;
                }
                
                const duration = Math.random() * 30 + 20;
                flower.style.animationDuration = `${duration}s`;
                
                flower.style.animationDelay = `${Math.random() * 5}s`;
                
                flowersContainer.appendChild(flower);
            }
        }
        
        // تهيئة الصفحة عند التحميل
        window.onload = function() {
            createStars();
            createFlowers();
            createSparkles();

            // تفعيل مستمعي الأحداث فقط إن وُجدت العناصر (الوردة/التاج قد تكون أُزيلت)
            const mainRose = document.getElementById('mainRose');
            if (mainRose) {
                mainRose.addEventListener('mouseenter', function() {
                    this.style.transform = 'scale(1.2)';
                    this.style.transition = 'transform 0.5s';
                });
                mainRose.addEventListener('mouseleave', function() {
                    this.style.transform = '';
                });
            }
            const crown = document.querySelector('.crown');
            if (crown) {
                crown.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateX(-50%) scale(1.2)';
                    this.style.transition = 'transform 0.5s';
                });
                crown.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateX(-50%)';
                });
            }

            // حدث النقر لإنتاج أزهار في موضع النقر (تجاهل النقر داخل عناصر التحكم)
            const container = document.querySelector('.container');
            if (container) {
                container.addEventListener('click', function(e) {
                    if (e.target.closest('.controls')) return;
                    // استخدام إحداثيات النقر على الشاشة
                    spawnFlowersAt(e.clientX, e.clientY, 8);
                });

                // دعم اللمس (اختياري)
                container.addEventListener('touchstart', function(e) {
                    if (e.target.closest('.controls')) return;
                    const touch = e.touches[0];
                    if (touch) spawnFlowersAt(touch.clientX, touch.clientY, 6);
                });
            }
        };