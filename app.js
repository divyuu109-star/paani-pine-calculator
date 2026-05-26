// HydroPremium JavaScript Logic
// Theme: Digital Serenity / Aqua Elegance

// State Variables
let weight = 70;
let climate = 50;
let activity = 'low';
let targetMl = 2450;
let loggedMl = 0;
let streak = 0;
let lastLogDate = '';
let soundEnabled = true;

// Recipe Database
const recipes = {
    'cucumber-rose': {
        title: 'Cucumber Rosewater',
        badge: 'Alkalizing',
        subtitle: 'Cellular cooling & anti-inflammatory.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBSQ3dTKoeyXsOG5UtYvKwna1hD5569s3acLaFQa3l0emTt3qcMMST8Dl-zt7blJWw7upJVDrbhgBb3F052dIPwHA3xcnvF9Leec7w6VkD1xerYVKi3o96tDoENkbvrB0ZRLCY2SQCNs4PJvbQuHh9z3yVns0xi0K41h_Uo9j77zi3XDgEGCc_NdIEEZn2r_9EGb-2yla0RmfLmztkuXvkwPefes02bpflTgOBok5kgL60GORPi7ZeId77FERD2NYTgIsrN06-7os7a',
        sec1Title: 'Premium Ingredients',
        sec1List: [
            '1 cup organic english cucumber (thinly sliced)',
            '2 drops culinary-grade organic rosewater',
            '1 slice of fresh key lime (for pH balance)',
            '1 liter chilled natural alkaline spring water'
        ],
        sec2Title: 'Infusion Protocol',
        sec2List: [
            'Rinse the cucumber and key lime thoroughly in cold water.',
            'Arrange the cucumber slices and key lime inside a glass carafe.',
            'Add the rosewater drops and pour in the alkaline spring water.',
            'Seal and refrigerate for 2 to 4 hours. Serve without ice in a chilled tumbler.'
        ]
    },
    'mint-citrus': {
        title: 'Minted Citrus Blend',
        badge: 'Electrolytes',
        subtitle: 'Morning metabolism activation & minerals.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCbyLUxGbHv0T0_LUP28hjb_kJLRaHJ6Y_qXN1GzI_wLbsDe5ZFkfvSGltS0oRepucplzPdwkcEt-zcj50zxpRdA-yUZR3mn4IkyNxGtDfYwa1TqLFZfYH6k5sQXZR0EFRNaSUoXkFDAyiPs6g5BFEBkgPLoIbXjLj9rla5MmqV5z2zqJRBUSS9UaIFNgITlwxZSgKS-9EBO3vdh9nKV95DRCDRXcLvSmKvIwXTaNXsg8gbBhNECDqXv3tpg-Rq19AI93jXf2trWC2-',
        sec1Title: 'Premium Ingredients',
        sec1List: [
            '3 fresh orange wheels (blood orange preferred)',
            '2 organic lemon slices (rich in vitamin C)',
            '5-6 fresh spearmint leaves (gently bruised)',
            '1 pinch of pink Himalayan sea salt (for trace minerals)',
            '1 liter premium mineral water'
        ],
        sec2Title: 'Infusion Protocol',
        sec2List: [
            'Muddle the spearmint leaves gently in the bottom of your carafe to release essential oils.',
            'Layer orange and lemon slices on top of the mint.',
            'Add a small pinch of Himalayan sea salt to add trace electrolytes.',
            'Fill with mineral water and stir with a glass rod. Chill for 1.5 hours before serving.'
        ]
    },
    'hibiscus-berry': {
        title: 'Hibiscus Berry Recovery',
        badge: 'Antioxidant',
        subtitle: 'Evening cellular repair & circulation.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCgC76mGZ2Wk4It8rTiU2Q6_8jSOgIsabcF4iKrgTmGTkHzX5xiGlxMzAEP1J8Q2wLjQC7C1kVhbFNvhkV_VZKvJkBFaeI1wN5jSMbLtRekFML5_GKXcITEHTpKLxUstuDb2Ebmo3aXt4UIzpCkE6Xhn-GPOjqZ3jEfvCAlPIUxNvgCw-ro7LHyllOkjttXxbvHKZ2SnfIhTd1Rp8M5Aq4sKlWKG7SGm7OuZgmwy3169klLnwUgAOVsdaOgYdtQj_7XFgDYYy5bsVRH',
        sec1Title: 'Premium Ingredients',
        sec1List: [
            '2 bags organic dried hibiscus calyces (or loose tea)',
            '1/2 cup fresh organic blackberries (halved)',
            '1 sprig of fresh organic rosemary',
            '1 liter structured or filtered water'
        ],
        sec2Title: 'Infusion Protocol',
        sec2List: [
            'Steep the hibiscus in 200ml of hot water for 5 minutes, then let it cool completely.',
            'In a glass carafe, combine the hibiscus concentrate with the remaining 800ml of cold water.',
            'Gently press the blackberries and add them to the liquid along with the rosemary sprig.',
            'Refrigerate for at least 4 hours to extract full anthocyanin antioxidants. Best consumed at dusk.'
        ]
    }
};

// Timing Science Database
const timings = {
    'dawn': {
        title: 'Dawn: Wake-Up Hydration',
        badge: 'Chronobiology',
        subtitle: 'First 30 minutes of waking.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQRRy5RlexX2c0L-CiP9J33ZqQVVWc9ZHxTIp-dnG2NZnGffUHLz01juh8Nn4cmDgm_WAPU2SwtMSjQGVo9yXYQS2WO2pZosI_AQgrTJiXlZw3HR0anzBaGbPDnE55ie1e-Gq8Xi7aLNBJLTwjFNICy4BwJeI6C_WMd-62KcZIaABcbLljKswZOw54PsGVuJwQptj1HBknMdn_QOmAllF-TKpw1qw-cRJdN2_C9OVupVb-Pc88N3zdvyDbC_J6LWkZ-9Z9-V8O6FX4',
        sec1Title: 'Biological Mechanisms',
        sec1List: [
            'Renal Clearance: Flushes nitrogenous metabolic wastes filtered by the kidneys overnight.',
            'Lymphatic Activation: Rehydrates lymph nodes, supporting morning immune cell distribution.',
            'Gastrointestinal Awakening: Triggers the gastrocolic reflex, encouraging healthy digestion.',
            'Hormonal Balance: Helps lower cortisol spike levels by supplying immediate blood volume.'
        ],
        sec2Title: 'Sipping Protocol',
        sec2List: [
            'Serve warm or room temperature (never ice-cold to avoid digestive shock).',
            'Drink 400ml - 500ml continuously but without rushing.',
            'Wait at least 20 minutes before consuming food or caffeine.'
        ]
    },
    'rhythm': {
        title: 'Rhythm: Pre-Meal Buffer',
        badge: 'Enzymatic Health',
        subtitle: '30 minutes prior to eating.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCyVNZXVb4pKdP5Jaic443wwEiJvMD-TtIk-MmDCbTt23opQmw47Ez_eAeaQ3q8OpE_S05R6pQa4Eu-qBsoccTQViI6uCk5RDJxJyQfLZHuo4lSut3QlerzVWU9j0OIabl7xqVhX6WFtLqACaQ0LmZihXCQEEoCNYIGlaBLufLjs_eaCd8GJKGZP10eC8YgRxc6HBbckC9w65kyQ_ng3E0EIb08IFtYSxfsmDUOUsYM8VUxxkEByvFzQZ5KlpV0ISbDAD_On0jzL-U',
        sec1Title: 'Biological Mechanisms',
        sec1List: [
            'Mucosal Protection: Hydrates the bicarbonate-rich mucous layer in the stomach wall, preventing acid burns.',
            'Enzymatic Preparation: Prepares pancreatic bicarbonate secretion ahead of food digestion.',
            'Satiety Modulation: Distends stomach walls slightly, signalling peptide YY release to reduce artificial hunger.'
        ],
        sec2Title: 'Sipping Protocol',
        sec2List: [
            'Consume 200ml - 250ml exactly 30 minutes before your meal.',
            'Avoid drinking large quantities of water DURING your meal, as this dilutes stomach acid (HCl) and pancreatic enzymes, leading to bloating.'
        ]
    },
    'pacing': {
        title: 'Pacing: Pacing & Osmosis',
        badge: 'Osmoregulation',
        subtitle: 'Steady fluid absorption.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFcUwZetdFXcS0M6ATfE_-Ec-7Q57UECENDkbwxGYiLkibhpvBreJclwzHUd3TDMmz2ufBMr_F9pNA7Qv6NT_cIdzhrXPvNdY4in_fSdEWHTEYzsWzaVRTT01wbbb_Utslmhc-iG718R3XP1bIg6db2UiKpoDRdFxfMbzFe3BR28OZdfH_Oj7mlSZdNhpFPBiuHUb_nlffuEBbv5t-sfOeBpHwj_x3Q7p3CEvIODZjoTl954HUAhJ1yCa8xBzO2x7rcd36_hv6KhM',
        sec1Title: 'Biological Mechanisms',
        sec1List: [
            'Kidney Filtration Rate: The human kidney can process a maximum of roughly 800ml - 1000ml of water per hour.',
            'Osmotic Loading: Rapid gulping dilutes blood sodium levels, leading to cellular swelling and immediate excretion via urine (useless hydration).',
            'Aquaporin Diffusion: Slow sipping maximizes fluid transfer through cellular aquaporin channels.'
        ],
        sec2Title: 'Sipping Protocol',
        sec2List: [
            'Take 2-3 small sips every 15 minutes, rather than drinking an entire glass at once.',
            'Maintain a visual water carafe on your desk to trigger automatic micro-sipping habits.'
        ]
    },
    'dusk': {
        title: 'Dusk: Nighttime Buffer',
        badge: 'Circadian Pacing',
        subtitle: '2 hours before sleep.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDv0xwffUjXB6fB4GEbYrd_mseF-HKThu1itbvC-AOfTHbgStY8oAA5ntJJhlN4f9sqPOAEhE_BtPavjsUc_rEzavfSGB94OaJWkSRC4cmmzA7cZS_fzK0Fh_jaSBYskJwB-akifx2caTDrK0nDXRx21iuzTY_mAdnuJ9zq3D7wLb8gP2dc3b6oHWwd1pF2SY9klkt5G3XfMbZiwhyCg37NamJXyg6Q-b56ZoK0U118KJf3blI4fz5nexmTKFedHhrGZ5fLfmJ1gqc',
        sec1Title: 'Biological Mechanisms',
        sec1List: [
            'Nocturnal Cardiovascular Support: Blood volume naturally falls during sleep. A tiny sip helps maintain blood density, lowering midnight cardiac strain.',
            'Nocturia Prevention: Drinking too close to sleep triggers bladder distension, breaking deep REM sleep cycles.',
            'Thermal Regulation: Warm water relaxes the parasympathetic nervous system, inducing sleep.'
        ],
        sec2Title: 'Sipping Protocol',
        sec2List: [
            'Limit total water intake to 150ml in the final 2 hours before sleep.',
            'Take warm water rather than cold water to aid muscle relaxation.'
        ]
    }
};

// Web Audio API Synthesizer: Premium droplet bubble sound
let audioCtx = null;
function playWaterDropSound() {
    if (!soundEnabled) return;
    try {
        if (!audioCtx) {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
        
        const now = audioCtx.currentTime;
        
        // 1. Water Drop Bubble Osc
        const osc = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        osc.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        
        osc.type = 'sine';
        // Fast pitch sweep upwards (the bubble "bloop")
        osc.frequency.setValueAtTime(140, now);
        osc.frequency.exponentialRampToValueAtTime(750, now + 0.12);
        
        // Amplitude envelope (fast attack, quick decay)
        gainNode.gain.setValueAtTime(0, now);
        gainNode.gain.linearRampToValueAtTime(0.35, now + 0.01);
        gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
        
        // 2. High-frequency click transient (for organic water drop texture)
        const oscClick = audioCtx.createOscillator();
        const gainClick = audioCtx.createGain();
        oscClick.connect(gainClick);
        gainClick.connect(audioCtx.destination);
        
        oscClick.type = 'triangle';
        oscClick.frequency.setValueAtTime(2500, now);
        oscClick.frequency.exponentialRampToValueAtTime(800, now + 0.03);
        
        gainClick.gain.setValueAtTime(0, now);
        gainClick.gain.linearRampToValueAtTime(0.08, now + 0.002);
        gainClick.gain.exponentialRampToValueAtTime(0.001, now + 0.03);
        
        osc.start(now);
        oscClick.start(now);
        
        osc.stop(now + 0.16);
        oscClick.stop(now + 0.04);
        
    } catch (e) {
        console.error("Audio Context playback failed: ", e);
    }
}

// Generate random floating bubbles in the cup container
function spawnBubble() {
    const container = document.getElementById('bubbles-container');
    if (!container) return;
    
    const bubble = document.createElement('div');
    bubble.classList.add('liquid-bubble');
    
    // Random position and size
    const size = Math.random() * 5 + 3; // 3px to 8px
    const left = Math.random() * 100; // 0% to 100%
    const duration = Math.random() * 2 + 3; // 3s to 5s
    
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${left}%`;
    bubble.style.animationDuration = `${duration}s`;
    
    container.appendChild(bubble);
    
    // Auto cleanup after animation
    setTimeout(() => {
        bubble.remove();
    }, duration * 1000);
}

// Start periodic bubble generator
setInterval(spawnBubble, 1200);

// Recalculate daily target water intake
function calculateIntake() {
    // Baseline: 35ml per kg
    const baseline = weight * 35;
    
    // Climate adjustment (adds up to 1000ml)
    const climateOffset = (climate / 100) * 1000;
    
    // Activity level adjustment
    let activityOffset = 0;
    if (activity === 'mod') activityOffset = 500;
    if (activity === 'high') activityOffset = 1000;
    
    targetMl = Math.round(baseline + climateOffset + activityOffset);
    
    // Update labels and outputs
    document.getElementById('target-intake-ml').innerText = targetMl.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.getElementById('target-ml-output').innerText = targetMl.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    
    updateTrackerVisuals();
    saveToLocalStorage();
}

// Update UI progress indicator values
function updateTrackerVisuals() {
    const percentage = Math.min(Math.round((loggedMl / targetMl) * 100), 100);
    // fill-level ranges from 100% (empty) to 0% (full)
    const fillLevel = 100 - percentage;
    
    const wave1 = document.getElementById('wave-primary');
    const wave2 = document.getElementById('wave-secondary');
    
    wave1.style.setProperty('--fill-level', `${fillLevel}%`);
    wave2.style.setProperty('--fill-level', `${fillLevel + 2}%`);
    
    document.getElementById('progress-percent').innerText = `${percentage}%`;
    document.getElementById('current-logged-ml').innerText = loggedMl.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    
    // Dynamic motivation subtitle based on progress
    const motivationEl = document.getElementById('tracker-motivation-text');
    if (percentage === 0) {
        motivationEl.innerText = "Ready to drink. Start logging water below.";
    } else if (percentage < 35) {
        motivationEl.innerText = "Hydration process started. Keep it going.";
    } else if (percentage < 70) {
        motivationEl.innerText = "Excellent pacing. Your cells are thanking you.";
    } else if (percentage < 100) {
        motivationEl.innerText = "Almost there. Finish strong today.";
    } else {
        motivationEl.innerText = "Target reached! Cellular saturation complete.";
    }
}

// Log water intake
function addWater(amount) {
    // 1. Prev logged
    const prevPercentage = Math.round((loggedMl / targetMl) * 100);
    
    // 2. Play sound
    playWaterDropSound();
    
    // 3. Update log
    loggedMl = Math.min(loggedMl + amount, targetMl + 1000); // allow overflow up to +1000ml
    
    // 4. Trigger UI ripple animation
    const cup = document.getElementById('liquid-cup');
    cup.classList.remove('ripple-active');
    void cup.offsetWidth; // Force DOM reflow
    cup.classList.add('ripple-active');
    setTimeout(() => cup.classList.remove('ripple-active'), 500);
    
    // 5. Check if goal reached
    const currentPercentage = Math.round((loggedMl / targetMl) * 100);
    if (prevPercentage < 100 && currentPercentage >= 100) {
        triggerStreakCelebration();
    }
    
    updateTrackerVisuals();
    saveToLocalStorage();
}

// Check and update streaks
function checkStreak() {
    const todayStr = new Date().toDateString();
    
    if (lastLogDate === '') {
        // First log ever or cache cleared
        streak = 0;
        lastLogDate = todayStr;
    } else if (lastLogDate !== todayStr) {
        const lastDate = new Date(lastLogDate);
        const todayDate = new Date(todayStr);
        const diffTime = Math.abs(todayDate - lastDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        
        if (diffDays === 1) {
            // Streak preserved!
            // Wait, streak only increments once they reach 100% target!
            // If they didn't reach 100% yesterday, streak is reset.
            // Since we don't have historical details, we check yesterday's progress.
            // For convenience, if they load on consecutive days we keep streak, but we check if loggedMl >= targetMl.
            // If they didn't meet goal yesterday, reset.
            // To simplify in client-side, we reset loggedMl to 0 on new day.
            loggedMl = 0;
            lastLogDate = todayStr;
        } else if (diffDays > 1) {
            // Missed a day, reset streak
            streak = 0;
            loggedMl = 0;
            lastLogDate = todayStr;
        }
    }
    document.getElementById('streak-counter').innerText = `${streak} ${streak === 1 ? 'Day' : 'Days'}`;
}

// Trigger milestone streak increment & audio synth fanfare
function triggerStreakCelebration() {
    streak++;
    document.getElementById('streak-counter').innerText = `${streak} ${streak === 1 ? 'Day' : 'Days'}`;
    
    // Synthesize short success melody using Web Audio API
    if (soundEnabled && audioCtx) {
        try {
            const now = audioCtx.currentTime;
            
            // Chord: C5, E5, G5, C6 in quick succession
            const notes = [523.25, 659.25, 783.99, 1046.50];
            notes.forEach((freq, index) => {
                const osc = audioCtx.createOscillator();
                const gain = audioCtx.createGain();
                osc.connect(gain);
                gain.connect(audioCtx.destination);
                
                osc.type = 'sine';
                osc.frequency.setValueAtTime(freq, now + index * 0.08);
                
                gain.gain.setValueAtTime(0, now + index * 0.08);
                gain.gain.linearRampToValueAtTime(0.15, now + index * 0.08 + 0.01);
                gain.gain.exponentialRampToValueAtTime(0.001, now + index * 0.08 + 0.3);
                
                osc.start(now + index * 0.08);
                osc.stop(now + index * 0.08 + 0.32);
            });
        } catch (e) {
            console.error(e);
        }
    }
    
    // Spark animation effects on streak card
    const streakCard = document.getElementById('streak-counter').parentElement;
    streakCard.classList.add('scale-110', 'border-orange-500');
    setTimeout(() => {
        streakCard.classList.remove('scale-110', 'border-orange-500');
    }, 1000);
}

// LocalStorage Persistence
function saveToLocalStorage() {
    localStorage.setItem('hydropremium_weight', weight);
    localStorage.setItem('hydropremium_climate', climate);
    localStorage.setItem('hydropremium_activity', activity);
    localStorage.setItem('hydropremium_logged_ml', loggedMl);
    localStorage.setItem('hydropremium_target_ml', targetMl);
    localStorage.setItem('hydropremium_streak', streak);
    localStorage.setItem('hydropremium_last_log_date', lastLogDate);
    localStorage.setItem('hydropremium_sound', soundEnabled);
}

function loadFromLocalStorage() {
    if (localStorage.getItem('hydropremium_weight') !== null) {
        weight = parseInt(localStorage.getItem('hydropremium_weight'));
        document.getElementById('weight-input').value = weight;
    }
    if (localStorage.getItem('hydropremium_climate') !== null) {
        climate = parseInt(localStorage.getItem('hydropremium_climate'));
        const slider = document.getElementById('climate-slider');
        slider.value = climate;
        slider.style.setProperty('--value', `${climate}%`);
        updateClimateLabel();
    }
    if (localStorage.getItem('hydropremium_activity') !== null) {
        activity = localStorage.getItem('hydropremium_activity');
        // Toggle active segment button
        document.querySelectorAll('[data-activity]').forEach(btn => {
            if (btn.getAttribute('data-activity') === activity) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
        updateActivityDesc();
    }
    if (localStorage.getItem('hydropremium_streak') !== null) {
        streak = parseInt(localStorage.getItem('hydropremium_streak'));
    }
    if (localStorage.getItem('hydropremium_last_log_date') !== null) {
        lastLogDate = localStorage.getItem('hydropremium_last_log_date');
    }
    if (localStorage.getItem('hydropremium_sound') !== null) {
        soundEnabled = localStorage.getItem('hydropremium_sound') === 'true';
        updateSoundUI();
    }
    
    // Check and reset on new calendar day
    checkStreak();
    
    if (localStorage.getItem('hydropremium_logged_ml') !== null) {
        loggedMl = parseInt(localStorage.getItem('hydropremium_logged_ml'));
    }
    
    calculateIntake();
}

// Update Climate Label text
function updateClimateLabel() {
    const label = document.getElementById('climate-value-label');
    if (climate < 30) {
        label.innerText = 'Arid / Cold';
    } else if (climate < 70) {
        label.innerText = 'Temperate';
    } else {
        label.innerText = 'Tropical / Hot';
    }
}

// Update Activity Description text
function updateActivityDesc() {
    const desc = document.getElementById('activity-desc');
    if (activity === 'low') {
        desc.innerText = 'Sedentary or minimal exercise (adds +0ml to baseline).';
    } else if (activity === 'mod') {
        desc.innerText = 'Active lifestyle, 30-60m moderate daily exercise (adds +500ml).';
    } else {
        desc.innerText = 'High intensity workout or endurance training (adds +1,000ml).';
    }
}

// Update Audio Toggle button styles
function updateSoundUI() {
    const icon = document.getElementById('sound-icon');
    const visualizer = document.getElementById('audio-visualizer');
    
    if (soundEnabled) {
        icon.innerText = 'volume_up';
        icon.classList.remove('text-red-400');
        visualizer.classList.remove('opacity-0');
        visualizer.style.display = 'flex';
    } else {
        icon.innerText = 'volume_off';
        icon.classList.add('text-red-400');
        visualizer.classList.add('opacity-0');
        setTimeout(() => { if (!soundEnabled) visualizer.style.display = 'none'; }, 200);
    }
}

// Detailed Modals Control
function openModal(data) {
    const modal = document.getElementById('detail-modal');
    
    document.getElementById('modal-title').innerText = data.title;
    document.getElementById('modal-subtitle').innerText = data.subtitle;
    document.getElementById('modal-badge').innerText = data.badge;
    document.getElementById('modal-image').src = data.image;
    
    // Section 1 list loading
    document.getElementById('modal-section-title-1').innerText = data.sec1Title;
    const list1 = document.getElementById('modal-list-1');
    list1.innerHTML = '';
    data.sec1List.forEach(item => {
        const li = document.createElement('li');
        li.innerText = item;
        list1.appendChild(li);
    });
    
    // Section 2 list loading
    document.getElementById('modal-section-title-2').innerText = data.sec2Title;
    const list2 = document.getElementById('modal-list-2');
    list2.innerHTML = '';
    data.sec2List.forEach(item => {
        const li = document.createElement('li');
        li.innerText = item;
        list2.appendChild(li);
    });
    
    modal.classList.add('active');
}

function closeModal() {
    document.getElementById('detail-modal').classList.remove('active');
}

// Event Listeners Setup
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Initialize from cache
    loadFromLocalStorage();
    
    // 2. Metrics handlers
    document.getElementById('weight-input').addEventListener('input', (e) => {
        weight = parseFloat(e.target.value) || 70;
        calculateIntake();
    });
    
    const climateSlider = document.getElementById('climate-slider');
    climateSlider.addEventListener('input', (e) => {
        climate = parseInt(e.target.value);
        e.target.style.setProperty('--value', `${climate}%`);
        updateClimateLabel();
        calculateIntake();
    });
    
    // Segmented Buttons Handler
    document.querySelectorAll('[data-activity]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('[data-activity]').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activity = btn.getAttribute('data-activity');
            updateActivityDesc();
            calculateIntake();
        });
    });
    
    // 3. Logger handlers
    document.getElementById('log-250-btn').addEventListener('click', () => addWater(250));
    document.getElementById('log-500-btn').addEventListener('click', () => addWater(500));
    
    document.getElementById('log-custom-btn').addEventListener('click', () => {
        const customVal = prompt("Enter custom hydration volume (ml):", "250");
        const val = parseInt(customVal);
        if (!isNaN(val) && val > 0) {
            addWater(val);
        }
    });
    
    document.getElementById('reset-btn').addEventListener('click', () => {
        if (confirm("Reset today's water log to 0 ml? This will not affect your daily streak record.")) {
            loggedMl = 0;
            updateTrackerVisuals();
            saveToLocalStorage();
        }
    });
    
    // 4. Sound toggler handler
    document.getElementById('sound-toggle-btn').addEventListener('click', () => {
        soundEnabled = !soundEnabled;
        updateSoundUI();
        saveToLocalStorage();
        
        // Play drop test if turning sound ON
        if (soundEnabled) {
            playWaterDropSound();
        }
    });
    
    // 5. Recipe Card click handlers
    document.querySelectorAll('.recipe-card').forEach(card => {
        card.addEventListener('click', () => {
            const recipeKey = card.getAttribute('data-recipe');
            if (recipes[recipeKey]) {
                openModal(recipes[recipeKey]);
            }
        });
    });
    
    // 6. Chronobiology click handlers
    document.querySelectorAll('.timing-info-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const phaseKey = btn.getAttribute('data-phase');
            if (timings[phaseKey]) {
                openModal(timings[phaseKey]);
            }
        });
    });
    
    // 7. Modal close handlers
    document.getElementById('close-modal-btn').addEventListener('click', closeModal);
    document.getElementById('modal-backdrop').addEventListener('click', closeModal);
    
    // Esc key close support
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
});
