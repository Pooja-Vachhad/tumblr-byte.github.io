const DATA={
  defect: {
    tag: "Production Project · Transfer Learning · Feb 2025",
    title: "Industrial Defect Detection",
    desc: "ResNet-18 with transfer learning for metal casting quality control. Production-ready system with early stopping, ImageNet pretraining, and proper train-val-test split. Zero false rejections of good parts.",
    stats: [
      {v: "99.44%", l: "Test Accuracy", c: "p"},
      {v: "99.17%", l: "Defect Detection", c: "p"},
      {v: "0%", l: "False Positive Rate", c: "p"},
      {v: "100%", l: "Precision (Defective)", c: "p"}
    ],
    stack: ["PyTorch", "ResNet-18", "Transfer Learning", "Early Stopping", "Streamlit"],
    ac: "purple",
    gh: "https://github.com/tumblr-byte/defect-detection",
    demo: "https://detectingdefect.streamlit.app/",  
    media: "defect.png",
    mediaType: "img"
  },
  fall:{
    tag:"Production Project · Real-Time · Built Oct 2025",
    title:"Safe Fall Detection — Elderly Care",
    desc:"Falls lasting 10+ seconds trigger alerts to family dashboard and 3 nearby hospitals with snapshot, location, and patient info.",
    stats:[{v:"10s",l:"Alert Threshold",c:""},{v:"3",l:"Hospitals Notified",c:""},{v:"YOLO",l:"Model",c:""}],
    stack:["YOLO","DeepSORT","OpenCV","Streamlit","Python"],
    ac:"cyan",
    gh:"https://github.com/tumblr-byte/safe-fall-detection",
    media:"safe fall.mp4",
    mediaType:"video"
  },
  mask:{
    tag:"Production Project · Two-Stage Detection · Built June 2025",
    title:"Face Mask Detection — Faster R-CNN",
    desc:"Faster R-CNN ResNet-50-FPN fine-tuned on 853 annotated images. 3-class: proper mask, no mask, incorrectly worn. Built from COCO weights with Pascal VOC annotations.",
    stats:[{v:"73.0%",l:"mAP@0.5",c:"p"},{v:"853",l:"Images",c:"p"},{v:"3",l:"Classes",c:"p"},{v:"26",l:"Epochs",c:""}],
    stack:["Faster R-CNN","ResNet-50-FPN","PyTorch","Pascal VOC"],
    ac:"purple",
    gh:"https://github.com/tumblr-byte/Face-Mask-Detection-using-Faster-R-CNN",
    media:"mask.jpg",
    mediaType:"img"
  },
  face:{
    tag:"Production Project · Real-Time Filters · Built Oct 2025",
    title:"Custom Face Blur & Overlay Filter",
    desc:"Real-time webcam face filter with known/unknown discrimination. Apply blur or overlays to specific people or everyone except them. Handles multiple faces simultaneously.",
    stats:[{v:"Real-Time",l:"Webcam",c:""},{v:"Multi-Face",l:"Simultaneous",c:""},{v:"Known/Unknown",l:"Filter Logic",c:""},{v:"OpenCV",l:"Backend",c:""}],
    stack:["face_recognition","OpenCV","MediaPipe","Python"],
    ac:"cyan",
    gh:"https://github.com/tumblr-byte/Custom-Face-Blur-Overlay-Filter",
    media:"filter.png",
    mediaType:"img"
  },
  yoga:{
    tag:"Production Project · Pose Estimation · Built May 2025",
    title:"AI Yoga Pose Classifier — 95.4%",
    desc:"MediaPipe 33 3D landmarks (99 features) → lightweight FC neural net. 95.4% validation accuracy, confidence scores, annotated landmark visualization, clean train/test split.",
    stats:[{v:"95.4%",l:"Val. Accuracy",c:""},{v:"97.2%",l:"Train Accuracy",c:""},{v:"99",l:"Input Features",c:""},{v:"~50KB",l:"Model Size",c:""}],
    stack:["MediaPipe","PyTorch","OpenCV","Pandas","scikit-learn"],
    ac:"cyan",
    gh:"https://github.com/tumblr-byte/AI-Yoga-Pose-Classifier",
    media:"yoga.jpg",
    mediaType:"img"
  },
  helmet:{
    tag:"Production Project · Multi-Model Pipeline · Built Jan 2026",
    title:"Helmet Detection + Number Plate OCR",
    desc:"YOLO (4 classes) → DeepSORT tracking → 5-frame violation confirmation → custom CRNN (CNN+Bi-LSTM+CTC) reads plates → evidence auto-collected. Full ONNX deployment pipeline.",
    stats:[{v:"4 Classes",l:"YOLO Detection",c:"p"},{v:"CRNN",l:"From Scratch",c:"p"},{v:"5-Frame",l:"Violation Rule",c:"p"},{v:"ONNX",l:"Deployment Ready",c:""}],
    stack:["YOLO","DeepSORT","CRNN","Bi-LSTM","CTC","ONNX","OpenCV"],
    ac:"purple",
    gh:"https://github.com/tumblr-byte/Helmet_Detection",
    media:"helmet.mp4",
    mediaType:"video"
  },
  medbridge:{
    tag:"Hackathon Project · Full-Stack AI · Built Dec 2025",
    title:"MedBridge — Emergency Healthcare",
    desc:"Right hospital in under 60 seconds. RAG-grounded matching (no hallucinations), Gemini 2s triage, ElevenLabs voice guidance during transit, Datadog LLM observability. Built after personal experience with emergency healthcare delays.",
    stats:[{v:"< 60s",l:"Response Time",c:"g"},{v:"RAG",l:"No Hallucinations",c:"g"},{v:"2s",l:"Gemini Triage",c:"g"},{v:"Datadog",l:"LLM Monitoring",c:"g"}],
    stack:["Gemini 2.5 Flash","Vertex AI","Django","ElevenLabs","RAG","Datadog","GCP"],
    ac:"green",
    gh:"https://github.com/tumblr-byte/MedBridge",
    media:"medbridge.mp4",
    mediaType:"video"
  },
  lung:{
    tag:"Production Project · Semantic Segmentation · Built Feb 2026",
    title:"Lung Segmentation — U-Net ResNet34",
    desc:"U-Net with ResNet34 encoder for chest X-ray lung segmentation. 96.34% Dice score with proper train/val split, DiceBCE loss, early stopping. Medical imaging application.",
    stats:[{v:"96.34%",l:"Validation Dice",c:"p"},{v:"96.76%",l:"Training Dice",c:"p"},{v:"256×256",l:"Input Size",c:""},{v:"U-Net",l:"Architecture",c:""}],
    stack:["PyTorch","U-Net","ResNet34","Albumentations","Medical Imaging"],
    ac:"purple",
    gh:"https://github.com/tumblr-byte/lung-segmentation-unet",
    media:"lung.png",
    mediaType:"img"
  }
};

const popup=document.getElementById('proj-popup');
let hideTimer=null;

// Show popup
function show(key){
  const d=DATA[key];
  if(!d) return;
  
  clearTimeout(hideTimer);
  
  // Set accent color
  const cm={purple:'#7b61ff',green:'#00ff9d',cyan:'#00e5ff'};
  const c=cm[d.ac]||'#00e5ff';
  document.getElementById('p-accent').style.background=`linear-gradient(90deg,${c},rgba(255,255,255,.07))`;
  
  // Set media
  const m=document.getElementById('p-media');
  if(d.media){
    m.innerHTML=d.mediaType==='video'
      ?`<video src="${d.media}" autoplay muted loop playsinline></video><span class="mbadge v"><i class="fas fa-play"></i> Demo</span>`
      :`<img src="${d.media}" alt="${d.title}" loading="lazy"/><span class="mbadge i"><i class="fas fa-camera"></i> Preview</span>`;
  } else {
    const ic=d.mediaType==='video'
      ?`<i class="fas fa-video" style="font-size:32px"></i>`
      :`<i class="fas fa-image" style="font-size:32px"></i>`;
    m.innerHTML=`<div class="pmedia-ph">${ic}<span>${d.mediaType==='video'?'Add demo.mp4':'Add screenshot'}</span></div>`;
  }
  
  // Set content
  document.getElementById('p-tag').textContent=d.tag;
  document.getElementById('p-title').textContent=d.title;
  document.getElementById('p-desc').textContent=d.desc;
  document.getElementById('p-stats').innerHTML=d.stats.map(s=>`<div class="sb"><span class="sv ${s.c}">${s.v}</span><span class="sl">${s.l}</span></div>`).join('');
  
  // Set stack
  const sc=d.ac==='purple'?'p':d.ac==='green'?'g':'';
  document.getElementById('p-stack').innerHTML=d.stack.map(t=>`<span class="stk ${sc}">${t}</span>`).join('');
  
  // Set GitHub button
  const gh=document.getElementById('p-gh');
  gh.href=d.gh;
  gh.className=`pgh-btn ${sc}`;
  gh.innerHTML=`<i class="fab fa-github"></i> View Code on GitHub`;
  
  // Set Demo button (show/hide based on availability)
  const demo=document.getElementById('p-demo');
  if(d.demo){
    demo.style.display='inline-flex';
    demo.href=d.demo;
    demo.className=`pgh-btn ${sc}`;
    demo.innerHTML=`<i class="fas fa-external-link-alt"></i> Live Demo`;
  } else {
    demo.style.display='none';
  }
  
  popup.classList.add('on');
}

// Hide popup
function hide(){
  hideTimer=setTimeout(()=>popup.classList.remove('on'),150);
}

// Fix GitHub and Demo link clicks - prevents popup from blocking navigation
popup.addEventListener('click', function(e) {
  if(e.target.closest('#p-gh') || e.target.closest('#p-demo')) {
    e.stopPropagation();
  }
});

// Attach popup triggers
document.querySelectorAll('[id^="trigger-"]').forEach(el=>{
  const key=el.id.replace('trigger-','');
  el.addEventListener('mouseenter',()=>show(key));
  el.addEventListener('mouseleave',hide);
});
popup.addEventListener('mouseenter',()=>clearTimeout(hideTimer));
popup.addEventListener('mouseleave',hide);


// Intersection Observer for fade-in elements
const fadeObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if(e.isIntersecting){
      const delay = e.target.dataset.delay || 0;
      setTimeout(() => {
        e.target.classList.add('vis');
      }, parseInt(delay));
      fadeObserver.unobserve(e.target);
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
});

// Observe all fade-in elements
document.querySelectorAll('.fi, .spine-closing').forEach(el => fadeObserver.observe(el));


const chapterObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if(e.isIntersecting){
      // Add pulse animation to node on scroll into view
      const node = e.target.querySelector('.node');
      if(node){
        node.style.animation = 'nodePulse 0.6s ease';
        setTimeout(() => {
          node.style.animation = '';
        }, 600);
      }
      e.target.classList.add('vis');
      chapterObserver.unobserve(e.target);
    }
  });
}, {
  threshold: 0.15,
  rootMargin: '0px 0px -80px 0px'
});

// Observe all chapters
document.querySelectorAll('.chapter').forEach(ch => chapterObserver.observe(ch));

// Add node pulse animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
  @keyframes nodePulse {
    0% { transform: scale(1); box-shadow: 0 0 12px currentColor; }
    50% { transform: scale(1.5); box-shadow: 0 0 35px currentColor; }
    100% { transform: scale(1); box-shadow: 0 0 12px currentColor; }
  }
`;
document.head.appendChild(style);


// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    // Only handle internal anchors, skip external links
    if(href && href.startsWith('#')){
      e.preventDefault();
      const target = document.querySelector(href);
      if(target){
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  });
});


// Parallax effect for orbs
let ticking = false;

function updateOrbsParallax(){
  const scrollY = window.scrollY;
  const orb1 = document.querySelector('.orb1');
  const orb2 = document.querySelector('.orb2');
  
  if(orb1) orb1.style.transform = `translateY(${scrollY * 0.3}px) rotate(${scrollY * 0.05}deg)`;
  if(orb2) orb2.style.transform = `translateY(${scrollY * 0.2}px) rotate(${-scrollY * 0.03}deg)`;
  
  ticking = false;
}

window.addEventListener('scroll', () => {
  if(!ticking){
    window.requestAnimationFrame(updateOrbsParallax);
    ticking = true;
  }
});


// Active navigation highlighting
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

function updateActiveNav(){
  const scrollY = window.scrollY + 100;
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    
    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      navLinks.forEach(link => {
        link.style.color = '';
        if(link.getAttribute('href') === `#${sectionId}`){
          link.style.color = 'var(--accent)';
        }
      });
    }
  });
}

window.addEventListener('scroll', updateActiveNav);
updateActiveNav();


// Hover effects for project triggers
document.querySelectorAll('.ptrig').forEach(trigger => {
  trigger.addEventListener('mouseenter', function(){
    this.style.transform = 'translateY(-3px) scale(1.02)';
  });
  
  trigger.addEventListener('mouseleave', function(){
    this.style.transform = '';
  });
});


// Hover effects for skill cards
document.querySelectorAll('.sg').forEach(card => {
  card.addEventListener('mouseenter', function(){
    this.style.transform = 'translateY(-5px) scale(1.02)';
  });
  
  card.addEventListener('mouseleave', function(){
    this.style.transform = '';
  });
});


// Respect reduced motion preference
if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){
  document.querySelectorAll('*').forEach(el => {
    el.style.animation = 'none';
    el.style.transition = 'none';
  });
}




