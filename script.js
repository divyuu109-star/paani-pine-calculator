// =============================================
//   TRANSFORM — 10-Week Youth Workout Program
//   Complete App Logic + Data
// =============================================

// ========== PROGRAM DATA ==========

const MOTIVATIONS = [
  "Champions are made when nobody is watching.",
  "You don't have to be great to start, but you have to start to be great.",
  "Every rep counts. Every meal counts. Every hour of sleep counts.",
  "Small daily improvements lead to stunning results in 10 weeks.",
  "Your only competition is who you were yesterday.",
  "Pain is temporary. Pride is permanent.",
  "The body achieves what the mind believes.",
  "Stop wishing. Start doing.",
  "Soreness is just weakness leaving your body.",
  "10 weeks from now you'll be glad you started today.",
  "Discipline beats motivation every single time.",
  "You are stronger than you think.",
  "Progress, not perfection.",
  "Eat. Sleep. Train. Repeat.",
  "The hard part isn't starting. The hard part is not stopping."
];

// Full 10-Week Schedule
const SCHEDULE = [
  {
    week: 1, theme: "Foundation & Mobility",
    badge: "BEGINNER",
    days: [
      { label: "Day 1", desc: "Upper Body Intro + Bicycle Cardio", tag: "Strength + Cardio" },
      { label: "Day 2", desc: "Lower Body + Core Intro", tag: "Strength + Core" },
      { label: "Day 3", desc: "Active Recovery — Light Cycling 20 min + Stretch", tag: "Recovery" },
      { label: "Day 4", desc: "Upper Body + Pull-Up Bar Intro", tag: "Strength" },
      { label: "Day 5", desc: "Lower Body + Core + Bicycle", tag: "Strength + Cardio" },
      { label: "Day 6", desc: "Full Body Circuit (Light)", tag: "Circuit" },
      { label: "Day 7", desc: "REST — Sleep well, eat well, recover.", tag: "Rest", isRest: true }
    ]
  },
  {
    week: 2, theme: "Building the Base",
    badge: "BEGINNER",
    days: [
      { label: "Day 1", desc: "Push Day — Wall Push-Ups + Dumbbell Work + Cardio", tag: "Push + Cardio" },
      { label: "Day 2", desc: "Pull Day — Dead Hangs + Rows + Core", tag: "Pull + Core" },
      { label: "Day 3", desc: "Leg Day + Bicycle 25 min", tag: "Legs + Cardio" },
      { label: "Day 4", desc: "Full Body Strength + Posture Work", tag: "Full Body" },
      { label: "Day 5", desc: "Push + Core + Cardio Intervals", tag: "Push + Cardio" },
      { label: "Day 6", desc: "Active Recovery + Stretch 30 min", tag: "Recovery" },
      { label: "Day 7", desc: "REST", tag: "Rest", isRest: true }
    ]
  },
  {
    week: 3, theme: "Progressive Overload Begins",
    badge: "BUILDING",
    days: [
      { label: "Day 1", desc: "Push Day — Incline Push-Ups 3x12 + Dumbbell Shoulder Press 3x10", tag: "Push" },
      { label: "Day 2", desc: "Pull Day — Scapular Pulls + Resistance Rows + Bicycle 20 min", tag: "Pull" },
      { label: "Day 3", desc: "Leg Strength — Squats, Lunges, Calf Raises 3x15 + Core", tag: "Legs + Core" },
      { label: "Day 4", desc: "Push + Core + Cardio Circuit 25 min", tag: "Push + Cardio" },
      { label: "Day 5", desc: "Pull + Legs + Posture Work", tag: "Pull + Legs" },
      { label: "Day 6", desc: "Bicycle HIIT 20 min + Full Stretch Routine", tag: "Cardio + Mobility" },
      { label: "Day 7", desc: "REST", tag: "Rest", isRest: true }
    ]
  },
  {
    week: 4, theme: "Strength + Endurance Blend",
    badge: "BUILDING",
    days: [
      { label: "Day 1", desc: "Push Day — Incline Push-Ups 4x10 + Tricep Dips + Cardio", tag: "Push" },
      { label: "Day 2", desc: "Pull Day — Dead Hangs 4x30s + Scapular Pulls + Rows", tag: "Pull" },
      { label: "Day 3", desc: "Legs + Core — Squats 4x12 + Lunges + Plank 3x40s", tag: "Legs + Core" },
      { label: "Day 4", desc: "REST or Light Walk 30 min + Stretch", tag: "Rest", isRest: true },
      { label: "Day 5", desc: "Full Body Strength — All muscle groups light-moderate", tag: "Full Body" },
      { label: "Day 6", desc: "Bicycle 30 min Steady + Core Superset", tag: "Cardio + Core" },
      { label: "Day 7", desc: "ACTIVE RECOVERY — Stretch, foam roll, light yoga", tag: "Recovery" }
    ]
  },
  {
    week: 5, theme: "Knee Push-Ups + Negative Pull-Ups",
    badge: "INTERMEDIATE",
    days: [
      { label: "Day 1", desc: "Push Day — Knee Push-Ups 3x8 + Shoulder Press + Chest Flyes", tag: "Push" },
      { label: "Day 2", desc: "Pull Day — Negative Pull-Ups 3x3 + Rows + Bicep Curls", tag: "Pull" },
      { label: "Day 3", desc: "Legs — Bulgarian Split Squat 3x8 + Calf 3x20 + Core", tag: "Legs + Core" },
      { label: "Day 4", desc: "Bicycle HIIT 25 min + Abs Circuit", tag: "Cardio + Core" },
      { label: "Day 5", desc: "Push + Pull Superset Day + Posture Routine", tag: "Upper Body" },
      { label: "Day 6", desc: "Legs + Cardio — Squats 4x12 + Bike 20 min", tag: "Legs + Cardio" },
      { label: "Day 7", desc: "REST", tag: "Rest", isRest: true }
    ]
  },
  {
    week: 6, theme: "Volume Increase",
    badge: "INTERMEDIATE",
    days: [
      { label: "Day 1", desc: "Push Day — Knee Push-Ups 4x10 + Tricep Dips 4x10 + Cardio 20 min", tag: "Push" },
      { label: "Day 2", desc: "Pull Day — Negatives 4x4 + Rows 4x12 + Rear Delt 3x12", tag: "Pull" },
      { label: "Day 3", desc: "Legs — Squat 4x15 + Reverse Lunges + Nordic Curl Attempt", tag: "Legs" },
      { label: "Day 4", desc: "Core Specialization — Plank 4x50s + Ab Circuit 4 rounds", tag: "Core" },
      { label: "Day 5", desc: "Full Body Circuit — 5 exercises x 4 rounds + Bicycle 25 min", tag: "Full Body" },
      { label: "Day 6", desc: "REST or 30 min walk + Stretch", tag: "Rest", isRest: true },
      { label: "Day 7", desc: "Active Recovery — Yoga-style stretching 30 min", tag: "Recovery" }
    ]
  },
  {
    week: 7, theme: "Push for Full Push-Ups",
    badge: "INTERMEDIATE+",
    days: [
      { label: "Day 1", desc: "Push Day — Mix Knee + Attempt 1-3 Full Push-Ups + Dumbbells 5kg", tag: "Push" },
      { label: "Day 2", desc: "Pull Day — Negatives 4x5 + Attempt Assisted Full Pull-Up", tag: "Pull" },
      { label: "Day 3", desc: "Legs — Squats 5x12 + Lunges + Jump Squats 3x10", tag: "Legs" },
      { label: "Day 4", desc: "Bicycle HIIT — 30 min with sprint intervals every 3 min", tag: "Cardio" },
      { label: "Day 5", desc: "Push + Core — Full attempt push-ups + core circuit 4 rounds", tag: "Push + Core" },
      { label: "Day 6", desc: "Pull + Posture — Negatives + Face Pulls + Posture Routine", tag: "Pull" },
      { label: "Day 7", desc: "REST", tag: "Rest", isRest: true }
    ]
  },
  {
    week: 8, theme: "Full Push-Ups Achieved",
    badge: "ADVANCED",
    days: [
      { label: "Day 1", desc: "Push Day — Full Push-Ups 3x5-8 + Dumbbell Press 5kg + Cardio", tag: "Push" },
      { label: "Day 2", desc: "Pull Day — 1+ Full Pull-Up Attempt + Negatives 4x6 + Rows", tag: "Pull" },
      { label: "Day 3", desc: "Legs Power — Squat 5x12 + Jump Squats + Calf + Core", tag: "Legs" },
      { label: "Day 4", desc: "REST — Full rest. This is a high volume week.", tag: "Rest", isRest: true },
      { label: "Day 5", desc: "Push — Full Push-Ups 4x6 + Triceps Dips 4x12 + Shoulder", tag: "Push" },
      { label: "Day 6", desc: "Pull + Bicycle 30 min — Negatives + Rows + Cardio", tag: "Pull + Cardio" },
      { label: "Day 7", desc: "Active Recovery + Full Body Stretch 30 min", tag: "Recovery" }
    ]
  },
  {
    week: 9, theme: "Max Effort Week",
    badge: "ADVANCED",
    days: [
      { label: "Day 1", desc: "Push Day — Max Push-Ups attempt + 5kg Press + Triceps", tag: "Push" },
      { label: "Day 2", desc: "Pull Day — Max Pull-Up Attempt + Negatives Volume + Rows", tag: "Pull" },
      { label: "Day 3", desc: "Legs — Squat 5x15 + Jump Squat 3x12 + Nordic Curl + Core", tag: "Legs + Core" },
      { label: "Day 4", desc: "Bicycle 35 min HIIT — Full intensity intervals", tag: "Cardio" },
      { label: "Day 5", desc: "Full Body — Push, Pull, Legs, Core each 3 sets", tag: "Full Body" },
      { label: "Day 6", desc: "REST — Very important. Week 10 is the final push.", tag: "Rest", isRest: true },
      { label: "Day 7", desc: "Light Activity — Easy cycling 15 min + Stretch", tag: "Recovery" }
    ]
  },
  {
    week: 10, theme: "TRANSFORMATION COMPLETE",
    badge: "CHAMPION",
    days: [
      { label: "Day 1", desc: "FINAL PUSH TEST — Max push-ups in 1 set. Log your PR!", tag: "PR Day" },
      { label: "Day 2", desc: "FINAL PULL TEST — Max pull-ups or negatives. Log your PR!", tag: "PR Day" },
      { label: "Day 3", desc: "Legs + Core — Best effort. Strong and controlled.", tag: "Legs + Core" },
      { label: "Day 4", desc: "Bicycle 40 min — Long steady ride. Enjoy it!", tag: "Cardio" },
      { label: "Day 5", desc: "CELEBRATION WORKOUT — Full Body. Your best effort.", tag: "Full Body" },
      { label: "Day 6", desc: "Full Body Stretch + Reflection — Log weight, review notes.", tag: "Recovery" },
      { label: "Day 7", desc: "FINAL REST DAY — You did it. Plan what's next.", tag: "Rest", isRest: true }
    ]
  }
];

// Detailed workout plans (Week 1 fully detailed, others follow pattern)
const WORKOUT_DETAILS = {
  "1-1": {
    title: "Week 1, Day 1 — Upper Body Intro + Cardio",
    duration: "~50 min",
    phases: [
      {
        name: "WARM-UP",
        emoji: "🔥",
        duration: "5 min",
        exercises: [
          { name: "Arm Circles", sets: "2", reps: "20 each direction", rest: "—", tip: "Forward and backward. Big circles. Loosen up those shoulders." },
          { name: "Hip Circles", sets: "2", reps: "10 each direction", rest: "—", tip: "Hands on hips. Full hip rotation." },
          { name: "Jumping Jacks", sets: "2", reps: "30 reps", rest: "30s", tip: "Warm up your heart rate gradually." },
          { name: "Neck Rolls (gentle)", sets: "1", reps: "5 each direction", rest: "—", tip: "Very slow and gentle. No jerking." }
        ]
      },
      {
        name: "MAIN WORKOUT — Upper Body",
        emoji: "💪",
        duration: "30 min",
        exercises: [
          { name: "Wall Push-Up", sets: "3", reps: "12–15", rest: "60s", tip: "Hands shoulder-width on wall. Body straight as a plank. Chest touches wall." },
          { name: "Dumbbell Lateral Raise (3kg)", sets: "3", reps: "10", rest: "60s", tip: "Slight bend in elbow. Raise to shoulder height. Don't swing your body." },
          { name: "Dumbbell Bicep Curl (3kg)", sets: "3", reps: "10–12", rest: "60s", tip: "Keep elbows at sides. Full range of motion. Squeeze at the top." },
          { name: "Dead Hang on Pull-Up Bar", sets: "3", reps: "10–15 seconds", rest: "90s", tip: "Just hang. Grip shoulder-width. Relax your lats. Build grip strength." },
          { name: "Plank", sets: "3", reps: "20–30 seconds", rest: "60s", tip: "Elbows under shoulders. Body in a straight line. Breathe steadily." }
        ]
      },
      {
        name: "CARDIO",
        emoji: "🚴",
        duration: "15 min",
        exercises: [
          { name: "Stationary Bicycle", sets: "1", reps: "15 minutes", rest: "—", tip: "Moderate pace. You should be able to talk but feel slightly breathless. Aim for steady effort." }
        ]
      },
      {
        name: "COOL-DOWN",
        emoji: "🧘",
        duration: "5 min",
        exercises: [
          { name: "Chest Stretch (doorway)", sets: "2", reps: "30s hold each side", rest: "—", tip: "Place forearm on doorway, rotate body away. Feel the chest stretch." },
          { name: "Shoulder Cross-Body Stretch", sets: "2", reps: "20s each arm", rest: "—", tip: "Pull arm across chest. Hold. Feel the rear shoulder stretch." },
          { name: "Neck Side Tilt", sets: "2", reps: "20s each side", rest: "—", tip: "Tilt ear to shoulder. Hold. Feel the neck stretch." }
        ]
      }
    ]
  },
  "1-2": {
    title: "Week 1, Day 2 — Lower Body + Core",
    duration: "~50 min",
    phases: [
      {
        name: "WARM-UP",
        emoji: "🔥",
        duration: "5 min",
        exercises: [
          { name: "Leg Swings (front-back)", sets: "2", reps: "10 each leg", rest: "—", tip: "Hold wall for balance. Swing relaxed leg forward and back." },
          { name: "Hip Circles", sets: "2", reps: "10 each direction", rest: "—", tip: "Wide stance. Big hip rotation." },
          { name: "Bodyweight Squats (slow)", sets: "2", reps: "10", rest: "—", tip: "Light warm-up pace. Focus on form." }
        ]
      },
      {
        name: "MAIN WORKOUT — Legs",
        emoji: "🦵",
        duration: "25 min",
        exercises: [
          { name: "Bodyweight Squat", sets: "3", reps: "15", rest: "60s", tip: "Feet shoulder-width, toes slightly out. Chest up, knees over toes. Squat to 90°." },
          { name: "Reverse Lunge", sets: "3", reps: "10 each leg", rest: "60s", tip: "Step back, lower knee to 2cm from floor. Front knee stays over ankle." },
          { name: "Calf Raises (on step)", sets: "3", reps: "20", rest: "45s", tip: "Stand on edge of step, heels can drop below. Full range of motion." },
          { name: "Glute Bridge", sets: "3", reps: "15", rest: "60s", tip: "Feet flat, drive hips up. Squeeze glutes at top. Pause 1 second." }
        ]
      },
      {
        name: "CORE CIRCUIT",
        emoji: "🔩",
        duration: "15 min",
        exercises: [
          { name: "Plank", sets: "3", reps: "25 seconds", rest: "45s", tip: "Elbows under shoulders. Hips level — don't sag or pike." },
          { name: "Dead Bug", sets: "3", reps: "8 each side", rest: "45s", tip: "Lie on back. Arms up. Extend opposite arm+leg while keeping lower back pressed to floor." },
          { name: "Bicycle Crunches", sets: "3", reps: "12 each side", rest: "45s", tip: "Slow and controlled. Don't pull neck. Rotate torso, not just elbows." },
          { name: "Mountain Climbers", sets: "2", reps: "15 each leg", rest: "45s", tip: "Plank position. Drive knees to chest alternately at moderate pace." }
        ]
      },
      {
        name: "COOL-DOWN",
        emoji: "🧘",
        duration: "5 min",
        exercises: [
          { name: "Standing Quad Stretch", sets: "2", reps: "30s each leg", rest: "—", tip: "Hold ankle behind you. Stand tall. Feel quad stretch." },
          { name: "Seated Hamstring Stretch", sets: "2", reps: "30s each leg", rest: "—", tip: "Sit on floor, extend one leg, reach for toes." },
          { name: "Hip Flexor Stretch (kneeling)", sets: "2", reps: "30s each side", rest: "—", tip: "Kneeling lunge. Push hips forward. Very important for posture!" }
        ]
      }
    ]
  },
  "1-3": {
    title: "Week 1, Day 3 — Active Recovery",
    duration: "~30 min",
    isRecovery: true,
    phases: [
      {
        name: "ACTIVE RECOVERY",
        emoji: "🧘",
        duration: "30 min",
        exercises: [
          { name: "Light Bicycle", sets: "1", reps: "20 minutes very easy", rest: "—", tip: "Low resistance, easy pace. You should be able to sing. This is recovery, not cardio." },
          { name: "Full Body Stretch", sets: "1", reps: "10 min", rest: "—", tip: "All major muscle groups. Hold each stretch 30–45 seconds. Breathe deeply." },
          { name: "Foam Roll / Massage (if available)", sets: "1", reps: "5 min", rest: "—", tip: "Roll quads, hamstrings, upper back slowly. Pause on tight spots." }
        ]
      }
    ]
  }
};

// Exercise Library
const EXERCISES = [
  { name: "Wall Push-Up", category: "push", desc: "Standing push-up against wall. Perfect starting point for beginners building pushing strength.", form: "✅ Hands shoulder-width on wall | Body straight plank | Full range of motion | Don't shrug shoulders" },
  { name: "Incline Push-Up", category: "push", desc: "Hands on chair/table, feet on floor. Mid-level push-up progression between wall and floor.", form: "✅ Straight body line | Chest touches surface | Elbows ~45° from body | Core tight" },
  { name: "Knee Push-Up", category: "push", desc: "Full push-up but with knees as pivot point. Building towards a full floor push-up.", form: "✅ Knees on floor, hips down | Body from knees to head straight | Full depth | No sagging hips" },
  { name: "Full Push-Up", category: "push", desc: "Classic full-body push-up from toes. The gold standard of upper body bodyweight strength.", form: "✅ Plank position | Hands slightly wider than shoulders | Lower until chest nearly touches floor | Push all the way up" },
  { name: "Tricep Dip (chair)", category: "push", desc: "Hands on chair behind you, dip down. Targets triceps and shoulders.", form: "✅ Hands on sturdy chair | Hips close to chair | Lower until 90° elbow | Push up fully" },
  { name: "Dumbbell Shoulder Press", category: "push", desc: "Press dumbbells overhead. Builds shoulder strength and width.", form: "✅ Dumbbells at ear level | Press straight up | Don't arch lower back | Controlled descent" },
  { name: "Dumbbell Lateral Raise", category: "push", desc: "Raise dumbbells to sides. Builds the medial deltoid for shoulder width.", form: "✅ Slight elbow bend | Raise to shoulder height only | Avoid momentum | Controlled lowering" },
  { name: "Dead Hang", category: "pull", desc: "Simply hang from the pull-up bar. Foundation for all pulling movements. Builds grip and shoulder stability.", form: "✅ Full grip on bar | Shoulders slightly engaged (don't fully relax) | Straight or slightly bent arms | Breathe steadily" },
  { name: "Scapular Pull", category: "pull", desc: "From dead hang, pull shoulder blades DOWN without bending elbows. Activates the lats.", form: "✅ Start in dead hang | Depress shoulder blades | No elbow bend | Hold 1 sec at top | Return slowly" },
  { name: "Negative Pull-Up", category: "pull", desc: "Jump to bar with chin above, then lower yourself as slowly as possible (5-10 seconds).", form: "✅ Jump to chin-over-bar position | Lower very slowly — 5 to 10 seconds | Full hang at bottom | Jump up again" },
  { name: "Dumbbell Row (3kg/5kg)", category: "pull", desc: "One arm bent over row. Builds back thickness and lat strength.", form: "✅ Knee and hand on bench/chair | Pull elbow back and up | Squeeze shoulder blade at top | Lower slowly" },
  { name: "Bicep Curl", category: "pull", desc: "Classic curl with dumbbells. Builds arm strength and the classic bicep peak.", form: "✅ Elbows fixed at sides | Full range: fully extended to fully contracted | Don't swing body | Controlled descent" },
  { name: "Bodyweight Squat", category: "legs", desc: "The fundamental lower body exercise. Builds quads, glutes, and overall leg strength.", form: "✅ Feet shoulder-width | Chest up, toes slightly out | Knees track over toes | Squat to 90° or below | Drive through heels" },
  { name: "Reverse Lunge", category: "legs", desc: "Step backward into a lunge. Easier on knees than forward lunge. Builds legs and balance.", form: "✅ Step back, lower rear knee near floor | Front knee stays over ankle | Chest tall | Push off front foot to stand" },
  { name: "Glute Bridge", category: "legs", desc: "Lie on back, drive hips up. Activates glutes, hamstrings, and core.", form: "✅ Feet flat, hip-width | Drive through heels | Squeeze glutes at top | Pause 1 second | Lower slowly" },
  { name: "Calf Raise", category: "legs", desc: "Rise up on toes. Builds calf muscles. Do on a step for full range of motion.", form: "✅ Stand on edge of step | Full range: heels below to toes high | Slow and controlled | Pause at top" },
  { name: "Bulgarian Split Squat", category: "legs", desc: "Rear foot elevated single-leg squat. Advanced leg exercise for strength and balance.", form: "✅ Rear foot on chair | Front foot forward | Lower rear knee to floor | Keep chest tall | Don't let front knee cave in" },
  { name: "Plank", category: "core", desc: "Isometric core hold. The foundation of core strength. Builds deep core stability.", form: "✅ Elbows under shoulders | Body straight from head to heels | Breathe steadily | Don't let hips sag or pike" },
  { name: "Dead Bug", category: "core", desc: "Lie on back and extend opposite arm/leg. Excellent for deep core activation and lower back safety.", form: "✅ Back pressed to floor — crucial! | Extend opposite arm and leg simultaneously | Move slowly | Breathe out during extension" },
  { name: "Bicycle Crunch", category: "core", desc: "Rotating ab exercise targeting obliques. More effective than regular crunches when done slowly.", form: "✅ Don't pull neck | Rotate torso fully | Extend opposite leg | Slow and controlled — not fast" },
  { name: "Mountain Climbers", category: "core", desc: "Plank-based exercise alternating knee drives. Builds core and cardio simultaneously.", form: "✅ Plank position maintained | Drive knees to chest alternately | Keep hips level | Moderate controlled pace" },
  { name: "Bicycle (Steady)", category: "cardio", desc: "20–35 minutes at a moderate, conversational pace. Builds aerobic base and burns calories.", form: "✅ Comfortable resistance | Cadence ~70-80 RPM | Sit upright | Breathe steadily | Target: can talk but slightly breathless" },
  { name: "Bicycle HIIT", category: "cardio", desc: "Alternating sprint intervals and recovery on bike. Highly effective for fat loss and fitness.", form: "✅ Sprint 30 sec at max effort | Recover 90 sec easy pace | Repeat 6-10 times | Warm up 3 min first | Cool down 3 min" },
  { name: "Hip Flexor Stretch", category: "mobility", desc: "Kneeling lunge position to stretch the hip flexors. CRITICAL for posture at 14!", form: "✅ Kneeling lunge position | Push hips forward gently | Hold 30-45 seconds | Feel stretch in front of hip | Repeat other side" },
  { name: "Chest/Doorway Stretch", category: "mobility", desc: "Opens the chest and front shoulders. Counteracts hunching from phone and desk use.", form: "✅ Forearm on door frame at 90° | Rotate body away slowly | Hold 30 seconds | Do both sides | Breathe deeply" },
  { name: "Thoracic Spine Rotation", category: "mobility", desc: "Seated rotation to improve upper back mobility. Key for posture and athletic performance.", form: "✅ Sit on floor, legs crossed | Rotate upper body as far as comfortable | Hold 3 seconds | Do 10 each side" }
];

// Checklist data
const CHECKLIST_DATA = [
  { week: 1, items: ["Complete all 6 training days", "Log starting weight", "Log first push-up type and reps", "Log first dead hang time", "Establish sleep schedule (8–10 hrs)", "Complete all warm-ups and cool-downs"] },
  { week: 2, items: ["Complete all 6 training days", "Increase wall push-up reps by 2-3", "Increase dead hang by 5 seconds", "Log weight check", "Drink 2.5L water every day", "No skipped meals this week"] },
  { week: 3, items: ["Progress to incline push-ups", "Add scapular pulls to pull sessions", "Increase squat depth or reps", "Log weight", "Complete bicycle sessions as planned", "Stretch every session post-workout"] },
  { week: 4, items: ["Hit 4 sets of incline push-ups", "Dead hang 30+ seconds", "Squat 4x12 with good form", "Log weight and note any physical changes", "Complete core sessions as planned", "Take a progress photo"] },
  { week: 5, items: ["Begin knee push-ups", "Start negative pull-ups (even 1 rep!)", "Complete HIIT bicycle session", "Log weight", "Notice posture improvements?", "Increase dumbbell to 5kg where possible"] },
  { week: 6, items: ["4x10 knee push-ups achieved", "4 negative pull-ups each set", "4x15 squats completed", "Log weight", "Core plank 50 seconds achieved", "Volume increased — log it!"] },
  { week: 7, items: ["Attempt 1-3 FULL floor push-ups", "Attempt assisted full pull-up", "Jump squats 3x10 completed", "Log weight", "HIIT 30 min completed", "Note any visible physique changes"] },
  { week: 8, items: ["Full push-ups 3x5-8 achieved 🎉", "1+ Full pull-up achieved or very close 🎉", "Max squat session completed", "Log weight", "Take progress photo", "Compare to Week 4 photo"] },
  { week: 9, items: ["Max push-up single set test done", "Max pull-up test done", "Full HIIT 35 min completed", "Log weight", "Full body workout completed", "Prepare mentally for Week 10 final test"] },
  { week: 10, items: ["FINAL PUSH-UP PR logged! 🏆", "FINAL PULL-UP PR logged! 🏆", "Celebration workout completed 🎉", "Final weight logged", "Final progress photos taken", "Wrote Week 10 reflection in Notes", "Planned what's next"] }
];

// ========== STATE MANAGEMENT ==========
const STATE_KEY = 'transform_v1';

function loadState() {
  try {
    const raw = localStorage.getItem(STATE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch { return {}; }
}

function saveState(data) {
  try {
    const current = loadState();
    localStorage.setItem(STATE_KEY, JSON.stringify({ ...current, ...data }));
  } catch (e) { console.warn('localStorage unavailable'); }
}

function getState(key, def = null) {
  const state = loadState();
  return key in state ? state[key] : def;
}

function setState(key, val) {
  saveState({ [key]: val });
}

// ========== NAVIGATION ==========
function initNav() {
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const page = link.dataset.page;
      navigateTo(page);
      closeSidebar();
    });
  });

  document.getElementById('menuBtn').addEventListener('click', toggleSidebar);
  document.getElementById('overlay').addEventListener('click', closeSidebar);
}

function navigateTo(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  
  const pageEl = document.getElementById(`page-${page}`);
  if (pageEl) pageEl.classList.add('active');
  
  const navLink = document.querySelector(`[data-page="${page}"]`);
  if (navLink) navLink.classList.add('active');

  // Trigger page-specific renders
  if (page === 'dashboard') renderDashboard();
  if (page === 'schedule') renderSchedule();
  if (page === 'library') renderLibrary();
  if (page === 'pushup') renderTrackerHistory('pushup');
  if (page === 'pullup') renderTrackerHistory('pullup');
  if (page === 'weight') renderWeightHistory();
  if (page === 'checklist') renderChecklist();
  if (page === 'notes') renderNotes();
  if (page === 'print') renderPrint();
}

function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');
  sidebar.classList.toggle('open');
  overlay.classList.toggle('show');
}

function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('overlay').classList.remove('show');
}

// ========== WEEK MANAGEMENT ==========
function getCurrentWeek() { return getState('currentWeek', 1); }

function setCurrentWeek(w) {
  setState('currentWeek', w);
  updateWeekDisplays();
  renderDashboard();
}

function updateWeekDisplays() {
  const w = getCurrentWeek();
  document.getElementById('sidebarWeek').textContent = w;
  document.getElementById('topbarWeek').textContent = `W${w}`;
  document.getElementById('dashWeek').textContent = w;
}

function renderWeekButtons() {
  const container = document.getElementById('weekButtons');
  const current = getCurrentWeek();
  container.innerHTML = '';
  for (let i = 1; i <= 10; i++) {
    const btn = document.createElement('button');
    btn.className = `week-btn${i === current ? ' active' : ''}`;
    btn.textContent = `Week ${i}`;
    btn.addEventListener('click', () => {
      setCurrentWeek(i);
      document.querySelectorAll('.week-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
    container.appendChild(btn);
  }
}

// ========== DASHBOARD ==========
function renderDashboard() {
  const w = getCurrentWeek();
  document.getElementById('dashWeek').textContent = w;
  
  const progress = ((w - 1) / 10) * 100;
  document.getElementById('overallProgress').style.width = progress + '%';
  document.getElementById('progressLabel').textContent = `Week ${w} of 10 — ${getProgressMsg(w)}`;
  
  // Stats
  const pushups = getState('pushupLog', []);
  const pullups = getState('pullupLog', []);
  const workouts = getState('workoutsCompleted', 0);
  
  const bestPush = pushups.reduce((max, e) => Math.max(max, parseInt(e.reps || 0)), 0);
  const bestPull = pullups.reduce((max, e) => Math.max(max, parseInt(e.reps || 0)), 0);
  
  document.getElementById('dashWorkouts').textContent = workouts;
  document.getElementById('dashPushup').textContent = bestPush;
  document.getElementById('dashPullup').textContent = bestPull;

  // Motivation
  const idx = new Date().getDay() + Math.floor(Math.random() * 3);
  document.getElementById('motivationText').textContent = MOTIVATIONS[idx % MOTIVATIONS.length];

  renderWeekButtons();
  updateWeekDisplays();
}

function getProgressMsg(w) {
  const msgs = ['Just getting started!','Building momentum!','Finding your rhythm!','Getting stronger!','Halfway there!','Pushing through!','Almost advanced!','Looking noticeably fitter!','Final push incoming!','10 weeks — CHAMPION!'];
  return msgs[w - 1] || 'Keep going!';
}

// ========== SCHEDULE ==========
function renderSchedule() {
  const container = document.getElementById('scheduleContent');
  const currentWeek = getCurrentWeek();
  container.innerHTML = '';
  
  SCHEDULE.forEach(weekData => {
    const block = document.createElement('div');
    block.className = 'week-block';
    
    const isCurrent = weekData.week === currentWeek;
    
    block.innerHTML = `
      <div class="week-block-header" onclick="this.nextElementSibling.classList.toggle('open')">
        <span class="week-block-title" style="${isCurrent ? 'color:var(--accent)' : ''}">
          WEEK ${weekData.week} — ${weekData.theme.toUpperCase()}
          ${isCurrent ? ' ← CURRENT' : ''}
        </span>
        <span class="week-block-badge">${weekData.badge}</span>
      </div>
      <div class="week-block-body${isCurrent ? ' open' : ''}">
        ${weekData.days.map(d => `
          <div class="day-row${d.isRest ? ' day-rest' : ''}">
            <span class="day-label">${d.label}</span>
            <span class="day-desc">${d.desc}</span>
            <span class="day-tag">${d.tag}</span>
          </div>
        `).join('')}
      </div>
    `;
    container.appendChild(block);
  });
}

// ========== DAILY WORKOUT ==========
function initWorkoutSelectors() {
  const weekSel = document.getElementById('workoutWeek');
  for (let i = 1; i <= 10; i++) {
    const opt = document.createElement('option');
    opt.value = i;
    opt.textContent = `Week ${i}`;
    weekSel.appendChild(opt);
  }
  weekSel.value = getCurrentWeek();

  document.getElementById('loadWorkoutBtn').addEventListener('click', loadWorkout);
}

function loadWorkout() {
  const week = document.getElementById('workoutWeek').value;
  const day = document.getElementById('workoutDay').value;
  const key = `${week}-${day}`;
  const container = document.getElementById('workoutDisplay');
  
  if (day == 7) {
    container.innerHTML = `
      <div class="rest-day-card">
        <div class="rest-day-icon">😴</div>
        <div class="rest-day-title">REST DAY</div>
        <div class="rest-day-desc">
          Today is a full rest day. This is when your muscles repair and GROW.<br><br>
          ✅ Sleep 8-10 hours<br>
          ✅ Eat nutritious food<br>
          ✅ Stay hydrated<br>
          ✅ Light walk is fine if you feel restless<br><br>
          You've earned this. See you tomorrow.
        </div>
      </div>`;
    return;
  }

  const workout = WORKOUT_DETAILS[key];
  
  if (!workout) {
    // Generate a generic workout based on the schedule
    const scheduleDay = SCHEDULE[parseInt(week)-1]?.days[parseInt(day)-1];
    container.innerHTML = `
      <div class="workout-phase">
        <div class="phase-title">📋 WEEK ${week}, DAY ${day}</div>
        <p style="color:var(--text2);font-size:14px;margin-bottom:16px;">${scheduleDay?.desc || 'Follow your training plan for this day.'}</p>
        <p style="color:var(--text3);font-size:13px;">Full detailed breakdown for this day: follow the exercise library for form guidance and use the push-up/pull-up trackers to log your progress.</p>
        <br>
        <p style="color:var(--accent);font-size:13px;font-family:var(--font-mono);">📝 TIP: Use the Notes section to log how this session went!</p>
      </div>
      ${generateGenericWorkout(parseInt(week), parseInt(day))}
    `;
    return;
  }

  let html = `<div style="margin-bottom:16px;display:flex;gap:16px;align-items:center;flex-wrap:wrap;">
    <span style="font-family:var(--font-display);font-size:20px;letter-spacing:2px;">${workout.title}</span>
    <span style="font-family:var(--font-mono);font-size:12px;color:var(--text3);">⏱ ${workout.duration}</span>
  </div>`;

  workout.phases.forEach(phase => {
    html += `
      <div class="workout-phase">
        <div class="phase-title">${phase.emoji} ${phase.name} <span style="font-size:12px;color:var(--text3);font-family:var(--font-mono);font-weight:400;">${phase.duration}</span></div>
        <table class="exercise-table">
          <thead>
            <tr>
              <th>EXERCISE</th>
              <th>SETS</th>
              <th>REPS / TIME</th>
              <th>REST</th>
            </tr>
          </thead>
          <tbody>
            ${phase.exercises.map(ex => `
              <tr>
                <td>
                  <span class="ex-name">${ex.name}</span>
                  <span class="ex-tip">💡 ${ex.tip}</span>
                </td>
                <td>${ex.sets}</td>
                <td>${ex.reps}</td>
                <td>${ex.rest}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  });

  html += `<div style="margin-top:16px;">
    <button class="btn-primary" onclick="markWorkoutDone()">✅ MARK WORKOUT COMPLETE</button>
  </div>`;

  container.innerHTML = html;
}

function generateGenericWorkout(week, day) {
  // Generate contextual workout based on week phase
  const phase = week <= 2 ? 'foundation' : week <= 5 ? 'building' : week <= 8 ? 'intermediate' : 'advanced';
  const pushUp = week <= 2 ? 'Wall Push-Up' : week <= 4 ? 'Incline Push-Up' : week <= 6 ? 'Knee Push-Up' : 'Full Push-Up';
  const pushReps = week <= 2 ? '3x12' : week <= 4 ? '3x10' : week <= 6 ? '4x10' : '4x8-12';
  const pullType = week <= 2 ? 'Dead Hang (15-20 sec)' : week <= 4 ? 'Scapular Pulls' : week <= 6 ? 'Negative Pull-Ups' : 'Full Pull-Ups';
  const squatSets = week <= 2 ? '3x12' : week <= 5 ? '3x15' : week <= 8 ? '4x12' : '5x12';
  
  const isCardioDay = day % 3 === 0;
  const isLegDay = day % 2 === 0;
  
  return `
    <div class="workout-phase">
      <div class="phase-title">🔥 WARM-UP <span style="font-size:12px;color:var(--text3);font-family:var(--font-mono);">5 min</span></div>
      <table class="exercise-table">
        <thead><tr><th>EXERCISE</th><th>SETS</th><th>REPS</th><th>REST</th></tr></thead>
        <tbody>
          <tr><td><span class="ex-name">Arm Circles</span></td><td>2</td><td>20 each</td><td>—</td></tr>
          <tr><td><span class="ex-name">Jumping Jacks</span></td><td>2</td><td>30</td><td>30s</td></tr>
          <tr><td><span class="ex-name">Hip Circles</span></td><td>2</td><td>10 each</td><td>—</td></tr>
        </tbody>
      </table>
    </div>
    <div class="workout-phase">
      <div class="phase-title">💪 MAIN WORKOUT — Week ${week} ${phase.toUpperCase()} <span style="font-size:12px;color:var(--text3);font-family:var(--font-mono);">30-35 min</span></div>
      <table class="exercise-table">
        <thead><tr><th>EXERCISE</th><th>SETS</th><th>REPS</th><th>REST</th></tr></thead>
        <tbody>
          <tr><td><span class="ex-name">${pushUp}</span><span class="ex-tip">💡 Full range of motion. Control the descent.</span></td><td>${pushReps.split('x')[0]}</td><td>${pushReps.split('x')[1]}</td><td>60-90s</td></tr>
          <tr><td><span class="ex-name">${pullType}</span><span class="ex-tip">💡 This is your most important progression. Never skip this.</span></td><td>${week > 4 ? '4' : '3'}</td><td>${week <= 2 ? '15-20 sec' : week <= 4 ? '10' : week <= 6 ? '4-5 reps' : 'max'}</td><td>90s</td></tr>
          ${isLegDay ? `<tr><td><span class="ex-name">Bodyweight Squat</span><span class="ex-tip">💡 Knees over toes, chest up, full depth.</span></td><td>${squatSets.split('x')[0]}</td><td>${squatSets.split('x')[1]}</td><td>60s</td></tr>
          <tr><td><span class="ex-name">Reverse Lunge</span></td><td>3</td><td>10 each leg</td><td>60s</td></tr>` : ''}
          <tr><td><span class="ex-name">Dumbbell Row (${week <= 4 ? '3' : '5'}kg)</span></td><td>3</td><td>10-12</td><td>60s</td></tr>
          <tr><td><span class="ex-name">Plank</span><span class="ex-tip">💡 Time increases each week.</span></td><td>3</td><td>${week <= 2 ? '25s' : week <= 4 ? '35s' : week <= 6 ? '45s' : week <= 8 ? '50s' : '60s'}</td><td>45s</td></tr>
          <tr><td><span class="ex-name">Bicycle Crunches</span></td><td>3</td><td>12 each side</td><td>45s</td></tr>
        </tbody>
      </table>
    </div>
    ${isCardioDay ? `<div class="workout-phase">
      <div class="phase-title">🚴 CARDIO <span style="font-size:12px;color:var(--text3);font-family:var(--font-mono);">${week <= 3 ? '15' : week <= 6 ? '20' : '25'} min</span></div>
      <table class="exercise-table">
        <thead><tr><th>EXERCISE</th><th>DURATION</th><th>EFFORT</th><th>REST</th></tr></thead>
        <tbody>
          <tr><td><span class="ex-name">Stationary Bicycle</span><span class="ex-tip">💡 ${week > 5 ? 'Include 4-6 sprint intervals of 30 seconds each.' : 'Moderate steady pace. Conversational effort.'}</span></td><td>${week <= 3 ? '15' : week <= 6 ? '20-25' : '25-30'} min</td><td>Moderate${week > 5 ? ' + Intervals' : ''}</td><td>—</td></tr>
        </tbody>
      </table>
    </div>` : ''}
    <div class="workout-phase">
      <div class="phase-title">🧘 COOL-DOWN <span style="font-size:12px;color:var(--text3);font-family:var(--font-mono);">5 min</span></div>
      <table class="exercise-table">
        <thead><tr><th>STRETCH</th><th>HOLD</th></tr></thead>
        <tbody>
          <tr><td>Hip Flexor Stretch (IMPORTANT for posture)</td><td>30s each side</td></tr>
          <tr><td>Chest / Doorway Stretch</td><td>30s each side</td></tr>
          <tr><td>Hamstring Stretch</td><td>30s each leg</td></tr>
          <tr><td>Upper Back Stretch (hug yourself)</td><td>30s</td></tr>
        </tbody>
      </table>
    </div>
    <div style="margin-top:16px;">
      <button class="btn-primary" onclick="markWorkoutDone()">✅ MARK WORKOUT COMPLETE</button>
    </div>
  `;
}

function markWorkoutDone() {
  const count = getState('workoutsCompleted', 0) + 1;
  setState('workoutsCompleted', count);
  document.getElementById('dashWorkouts').textContent = count;
  showToast('💪 WORKOUT LOGGED!');
}

// ========== EXERCISE LIBRARY ==========
function renderLibrary() {
  const grid = document.getElementById('exerciseGrid');
  renderFilteredExercises('all');
  
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderFilteredExercises(btn.dataset.filter);
    });
  });
}

function renderFilteredExercises(filter) {
  const grid = document.getElementById('exerciseGrid');
  const filtered = filter === 'all' ? EXERCISES : EXERCISES.filter(e => e.category === filter);
  
  grid.innerHTML = filtered.map(ex => `
    <div class="ex-card">
      <div class="ex-card-header">
        <span class="ex-card-name">${ex.name}</span>
        <span class="ex-card-category">${ex.category.toUpperCase()}</span>
      </div>
      <div class="ex-card-desc">${ex.desc}</div>
      <div class="ex-card-form">${ex.form}</div>
    </div>
  `).join('');
}

// ========== TRACKERS ==========
function initTrackers() {
  // Dates default to today
  const today = new Date().toISOString().split('T')[0];
  document.getElementById('pushupDate').value = today;
  document.getElementById('pullupDate').value = today;
  document.getElementById('weightDate').value = today;

  document.getElementById('logPushup').addEventListener('click', logPushup);
  document.getElementById('logPullup').addEventListener('click', logPullup);
  document.getElementById('logWeight').addEventListener('click', logWeight);
}

function logPushup() {
  const date = document.getElementById('pushupDate').value;
  const type = document.getElementById('pushupType').value;
  const reps = document.getElementById('pushupReps').value;
  const sets = document.getElementById('pushupSets').value;
  
  if (!date || !reps) { showToast('⚠️ Fill in date and reps!'); return; }
  
  const log = getState('pushupLog', []);
  log.unshift({ date, type, reps: parseInt(reps), sets: parseInt(sets) || 1, id: Date.now() });
  setState('pushupLog', log);
  renderTrackerHistory('pushup');
  showToast('🔥 PUSH-UPS LOGGED!');
  document.getElementById('pushupReps').value = '';
}

function logPullup() {
  const date = document.getElementById('pullupDate').value;
  const type = document.getElementById('pullupType').value;
  const reps = document.getElementById('pullupReps').value;
  const sets = document.getElementById('pullupSets').value;
  
  if (!date || !reps) { showToast('⚠️ Fill in date and reps!'); return; }
  
  const log = getState('pullupLog', []);
  log.unshift({ date, type, reps: parseInt(reps), sets: parseInt(sets) || 1, id: Date.now() });
  setState('pullupLog', log);
  renderTrackerHistory('pullup');
  showToast('🎯 PULL-UPS LOGGED!');
  document.getElementById('pullupReps').value = '';
}

function logWeight() {
  const date = document.getElementById('weightDate').value;
  const weight = document.getElementById('weightValue').value;
  const note = document.getElementById('weightNote').value;
  
  if (!date || !weight) { showToast('⚠️ Fill in date and weight!'); return; }
  
  const log = getState('weightLog', []);
  log.unshift({ date, weight: parseFloat(weight), note, id: Date.now() });
  setState('weightLog', log);
  renderWeightHistory();
  showToast('⚖️ WEIGHT LOGGED!');
  document.getElementById('weightValue').value = '';
  document.getElementById('weightNote').value = '';
}

const TYPE_LABELS = {
  wall: 'Wall Push-Up', incline: 'Incline', knee: 'Knee Push-Up', floor: 'Full Push-Up',
  hang: 'Dead Hang', scapular: 'Scapular Pull', negative: 'Negative', assisted: 'Assisted', full: 'Full Pull-Up'
};

function renderTrackerHistory(type) {
  const log = getState(`${type}Log`, []);
  const container = document.getElementById(`${type}History`);
  
  if (log.length === 0) {
    container.innerHTML = '<p style="color:var(--text3);font-size:13px;text-align:center;padding:20px;">No entries yet. Log your first session!</p>';
    return;
  }
  
  container.innerHTML = log.slice(0, 20).map(entry => `
    <div class="history-entry">
      <div>
        <div class="history-main">${entry.reps} ${type === 'pullup' ? 'reps/sec' : 'reps'} × ${entry.sets} sets</div>
        <div class="history-type">${TYPE_LABELS[entry.type] || entry.type}</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px;">
        <span class="history-date">${entry.date}</span>
        <button class="history-delete" onclick="deleteEntry('${type}Log', ${entry.id})">✕</button>
      </div>
    </div>
  `).join('');
}

function renderWeightHistory() {
  const log = getState('weightLog', []);
  const container = document.getElementById('weightHistory');
  const statsEl = document.getElementById('weightStats');
  
  if (log.length === 0) {
    container.innerHTML = '<p style="color:var(--text3);font-size:13px;text-align:center;padding:20px;">No entries yet. Log your starting weight!</p>';
    statsEl.innerHTML = '';
    return;
  }
  
  const first = log[log.length - 1];
  const latest = log[0];
  const diff = (latest.weight - first.weight).toFixed(1);
  const sign = diff >= 0 ? '+' : '';
  
  statsEl.innerHTML = `
    <div style="margin-top:8px;padding:12px;background:var(--bg3);border-radius:6px;">
      <div>Start: <strong>${first.weight} kg</strong> (${first.date})</div>
      <div>Latest: <strong>${latest.weight} kg</strong> (${latest.date})</div>
      <div>Change: <strong style="color:${diff > 0 ? 'var(--accent2)' : 'var(--green)'}">${sign}${diff} kg</strong></div>
    </div>
  `;
  
  container.innerHTML = log.slice(0, 20).map(entry => `
    <div class="history-entry">
      <div>
        <div class="history-main">${entry.weight} kg</div>
        ${entry.note ? `<div class="history-type">${entry.note}</div>` : ''}
      </div>
      <div style="display:flex;align-items:center;gap:8px;">
        <span class="history-date">${entry.date}</span>
        <button class="history-delete" onclick="deleteEntry('weightLog', ${entry.id})">✕</button>
      </div>
    </div>
  `).join('');
}

function deleteEntry(logKey, id) {
  let log = getState(logKey, []);
  log = log.filter(e => e.id !== id);
  setState(logKey, log);
  if (logKey === 'weightLog') renderWeightHistory();
  else if (logKey === 'pushupLog') renderTrackerHistory('pushup');
  else if (logKey === 'pullupLog') renderTrackerHistory('pullup');
  showToast('Entry deleted');
}

// ========== CHECKLIST ==========
function renderChecklist() {
  const container = document.getElementById('checklistContent');
  const savedChecks = getState('checklist', {});
  
  container.innerHTML = CHECKLIST_DATA.map(weekData => {
    const items = weekData.items.map((item, i) => {
      const key = `${weekData.week}-${i}`;
      const checked = savedChecks[key] ? 'checked' : '';
      return `
        <div class="checklist-item">
          <input type="checkbox" id="chk-${key}" ${checked} onchange="toggleCheck('${key}', this.checked)" />
          <label for="chk-${key}">${item}</label>
        </div>
      `;
    }).join('');
    
    const total = weekData.items.length;
    const done = weekData.items.filter((_, i) => savedChecks[`${weekData.week}-${i}`]).length;
    
    return `
      <div class="checklist-week">
        <h3>WEEK ${weekData.week} MILESTONES
          <span style="font-family:var(--font-mono);font-size:12px;color:var(--text3);margin-left:12px;">${done}/${total}</span>
        </h3>
        ${items}
      </div>
    `;
  }).join('');
}

function toggleCheck(key, checked) {
  const savedChecks = getState('checklist', {});
  savedChecks[key] = checked;
  setState('checklist', savedChecks);
}

// ========== NOTES ==========
function renderNotes() {
  const notes = getState('notes', []);
  const list = document.getElementById('notesList');
  
  if (notes.length === 0) {
    list.innerHTML = '<p style="color:var(--text3);font-size:13px;">No notes yet. Start journaling your journey!</p>';
    return;
  }
  
  list.innerHTML = notes.map((note, i) => `
    <div class="note-card">
      <div class="note-card-title">${note.title || 'Untitled'}</div>
      <div class="note-card-date">${note.date}</div>
      <div class="note-card-body">${note.body}</div>
      <div class="note-card-actions">
        <button class="btn-secondary" onclick="deleteNote(${i})">Delete</button>
      </div>
    </div>
  `).join('');
}

function saveNote() {
  const title = document.getElementById('noteTitle').value.trim();
  const body = document.getElementById('noteBody').value.trim();
  
  if (!body) { showToast('⚠️ Write something first!'); return; }
  
  const notes = getState('notes', []);
  const date = new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' });
  notes.unshift({ title, body, date });
  setState('notes', notes);
  
  document.getElementById('noteTitle').value = '';
  document.getElementById('noteBody').value = '';
  renderNotes();
  showToast('📝 NOTE SAVED!');
}

function deleteNote(i) {
  const notes = getState('notes', []);
  notes.splice(i, 1);
  setState('notes', notes);
  renderNotes();
}

// ========== PRINT ==========
function renderPrint() {
  const container = document.getElementById('printContent');
  container.innerHTML = `
    <h2 style="font-family:var(--font-display);font-size:36px;letter-spacing:4px;margin-bottom:8px;">10-WEEK ATHLETIC TRANSFORMATION</h2>
    <p style="color:var(--text3);margin-bottom:24px;">Age: 14 | Height: 173cm | Starting Weight: 66kg | Goal: Get lean, strong, athletic</p>
    
    <h3 style="font-family:var(--font-display);font-size:20px;letter-spacing:2px;color:var(--accent);margin-bottom:12px;">OVERVIEW</h3>
    <p>This is a 10-week home workout program designed for a 14-year-old complete beginner. Equipment: stationary bicycle, 3kg & 5kg dumbbells, pull-up bar.</p>
    
    <h3 style="font-family:var(--font-display);font-size:20px;letter-spacing:2px;color:var(--accent);margin:20px 0 12px;">WEEKLY STRUCTURE</h3>
    ${SCHEDULE.map(week => `
      <div style="margin-bottom:20px;">
        <strong style="font-family:var(--font-display);font-size:16px;">WEEK ${week.week} — ${week.theme.toUpperCase()}</strong>
        <div style="margin-top:8px;">
          ${week.days.map(d => `<div style="padding:4px 0;border-bottom:1px solid var(--border);">${d.label}: ${d.desc}</div>`).join('')}
        </div>
      </div>
    `).join('')}
    
    <h3 style="font-family:var(--font-display);font-size:20px;letter-spacing:2px;color:var(--accent);margin:20px 0 12px;">PUSH-UP PROGRESSION</h3>
    <p>Weeks 1-2: Wall Push-Up → Weeks 3-4: Incline Push-Up → Weeks 5-6: Knee Push-Up → Weeks 7-10: Full Floor Push-Up</p>
    
    <h3 style="font-family:var(--font-display);font-size:20px;letter-spacing:2px;color:var(--accent);margin:20px 0 12px;">PULL-UP PROGRESSION</h3>
    <p>Weeks 1-2: Dead Hang → Weeks 3-4: Scapular Pulls → Weeks 5-7: Negative Pull-Ups → Weeks 8-10: Full Pull-Ups</p>
    
    <h3 style="font-family:var(--font-display);font-size:20px;letter-spacing:2px;color:var(--accent);margin:20px 0 12px;">NUTRITION GUIDELINES</h3>
    <p>• Include protein at every meal (eggs, dal, paneer, chicken, fish)<br>
    • Prioritize calcium: milk, dahi, paneer — important for height growth<br>
    • Eat fruits and vegetables daily<br>
    • Drink 2.5-3 litres of water daily<br>
    • Do NOT skip meals<br>
    • Sleep 8-10 hours every night — growth hormone is released during sleep<br>
    • Avoid excessive junk food and sugary drinks<br>
    • Small calorie deficit is okay; severe dieting is NOT recommended at this age</p>
    
    <h3 style="font-family:var(--font-display);font-size:20px;letter-spacing:2px;color:var(--accent);margin:20px 0 12px;">KEY RULES</h3>
    <p>• Always warm up before every session<br>
    • Always stretch after every session<br>
    • Never skip rest days<br>
    • Progress slowly — form before weight<br>
    • Consistency beats perfection every time</p>
  `;
}

// ========== TOAST ==========
function showToast(msg) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}

// ========== INIT ==========
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initWorkoutSelectors();
  initTrackers();
  
  // Save note button
  document.getElementById('saveNote').addEventListener('click', saveNote);
  
  // Render initial dashboard
  renderDashboard();
  
  // Set today as default for all date inputs
  const today = new Date().toISOString().split('T')[0];
  document.querySelectorAll('input[type="date"]').forEach(d => {
    if (!d.value) d.value = today;
  });
});