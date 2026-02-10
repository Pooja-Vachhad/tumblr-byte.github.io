const DATA={
  defect:{tag:"Production Project · Transfer Learning · Built Feb 2026",title:"Industrial Defect Detection",desc:"ResNet-18 with transfer learning for metal casting quality control. Built with production standards: augmentation, early stopping, fine-tuning, ONNX export. 0% false positives.",stats:[{v:"99.72%",l:"Validation Accuracy",c:"p"},{v:"99.56%",l:"Defect Detection",c:"p"},{v:"0%",l:"False Positive Rate",c:"p"},{v:"ONNX",l:"Deployment Ready",c:""}],stack:["PyTorch","ResNet-18","Transfer Learning","ONNX","Early Stopping"],ac:"purple",gh:"https://github.com/tumblr-byte/defect-detection",media:"defect.png",mediaType:"img"},
  fall:{tag:"Production Project · Real-Time · Built Oct 2025",title:"Safe Fall Detection — Elderly Care",desc:"Falls lasting 10+ seconds trigger alerts to family dashboard and 3 nearby hospitals with snapshot, location, and patient info.",stats:[{v:"10s",l:"Alert Threshold",c:""},{v:"3",l:"Hospitals Notified",c:""},{v:"YOLO",l:"Model",c:""}],stack:["YOLO","DeepSORT","OpenCV","Streamlit","Python"],ac:"cyan",gh:"https://github.com/tumblr-byte/safe-fall-detection",media:"safe fall.mp4",mediaType:"video"},
  mask:{tag:"Production Project · Two-Stage Detection · Built June 2025",title:"Face Mask Detection — Faster R-CNN",desc:"Faster R-CNN ResNet-50-FPN fine-tuned on 853 annotated images. 3-class: proper mask, no mask, incorrectly worn. Built from COCO weights with Pascal VOC annotations.",stats:[{v:"73.0%",l:"mAP@0.5",c:"p"},{v:"853",l:"Images",c:"p"},{v:"3",l:"Classes",c:"p"},{v:"26",l:"Epochs",c:""}],stack:["Faster R-CNN","ResNet-50-FPN","PyTorch","Pascal VOC"],ac:"purple",gh:"https://github.com/tumblr-byte/Face-Mask-Detection-using-Faster-R-CNN",media:"mask.jpg",mediaType:"img"},
  face:{tag:"Production Project · Real-Time Filters · Built Oct 2025",title:"Custom Face Blur & Overlay Filter",desc:"Real-time webcam face filter with known/unknown discrimination. Apply blur or overlays to specific people or everyone except them. Handles multiple faces simultaneously.",stats:[{v:"Real-Time",l:"Webcam",c:""},{v:"Multi-Face",l:"Simultaneous",c:""},{v:"Known/Unknown",l:"Filter Logic",c:""},{v:"OpenCV",l:"Backend",c:""}],stack:["face_recognition","OpenCV","MediaPipe","Python"],ac:"cyan",gh:"https://github.com/tumblr-byte/Custom-Face-Blur-Overlay-Filter",media:"filter.png",mediaType:"img"},
  yoga:{tag:"Production Project · Pose Estimation · Built May 2025",title:"AI Yoga Pose Classifier — 95.4%",desc:"MediaPipe 33 3D landmarks (99 features) → lightweight FC neural net. 95.4% validation accuracy, confidence scores, annotated landmark visualization, clean train/test split.",stats:[{v:"95.4%",l:"Val. Accuracy",c:""},{v:"97.2%",l:"Train Accuracy",c:""},{v:"99",l:"Input Features",c:""},{v:"~50KB",l:"Model Size",c:""}],stack:["MediaPipe","PyTorch","OpenCV","Pandas","scikit-learn"],ac:"cyan",gh:"https://github.com/tumblr-byte/AI-Yoga-Pose-Classifier",media:"yoga.jpg",mediaType:"img"},
  helmet:{tag:"Production Project · Multi-Model Pipeline · Built Jan 2026",title:"Helmet Detection + Number Plate OCR",desc:"YOLO (4 classes) → DeepSORT tracking → 5-frame violation confirmation → custom CRNN (CNN+Bi-LSTM+CTC) reads plates → evidence auto-collected. Full ONNX deployment pipeline.",stats:[{v:"4 Classes",l:"YOLO Detection",c:"p"},{v:"CRNN",l:"From Scratch",c:"p"},{v:"5-Frame",l:"Violation Rule",c:"p"},{v:"ONNX",l:"Deployment Ready",c:""}],stack:["YOLO","DeepSORT","CRNN","Bi-LSTM","CTC","ONNX","OpenCV"],ac:"purple",gh:"https://github.com/tumblr-byte/Helmet_Detection",media:"helmet.mp4",mediaType:"video"},
  medbridge:{tag:"Hackathon Project · Full-Stack AI · Built Dec 2025",title:"MedBridge — Emergency Healthcare",desc:"Right hospital in under 60 seconds. RAG-grounded matching (no hallucinations), Gemini 2s triage, ElevenLabs voice guidance during transit, Datadog LLM observability. Built after personal experience with emergency healthcare delays.",stats:[{v:"< 60s",l:"Response Time",c:"g"},{v:"RAG",l:"No Hallucinations",c:"g"},{v:"2s",l:"Gemini Triage",c:"g"},{v:"Datadog",l:"LLM Monitoring",c:"g"}],stack:["Gemini 2.5 Flash","Vertex AI","Django","ElevenLabs","RAG","Datadog","GCP"],ac:"green",gh:"https://github.com/tumblr-byte/MedBridge",media:"medbridge.mp4",mediaType:"video"}
};

const GH=`<svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/></svg>`;
const popup=document.getElementById('proj-popup');
let hideTimer=null;

function show(key){
  const d=DATA[key];if(!d)return;
  clearTimeout(hideTimer);
  const cm={purple:'#7b61ff',green:'#00ff9d',cyan:'#00e5ff'};
  const c=cm[d.ac]||'#00e5ff';
  document.getElementById('p-accent').style.background=`linear-gradient(90deg,${c},rgba(255,255,255,.07))`;
  const m=document.getElementById('p-media');
  if(d.media){
    m.innerHTML=d.mediaType==='video'
      ?`<video src="${d.media}" autoplay muted loop playsinline></video><span class="mbadge v">▶ Demo</span>`
      :`<img src="${d.media}" alt="${d.title}" loading="lazy"/><span class="mbadge i">📷 Preview</span>`;
  } else {
    const ic=d.mediaType==='video'
      ?`<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="5 3 19 12 5 21 5 3"/></svg>`
      :`<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>`;
    m.innerHTML=`<div class="pmedia-ph">${ic}<span>${d.mediaType==='video'?'Add demo.mp4':'Add screenshot'}</span></div>`;
  }
  document.getElementById('p-tag').textContent=d.tag;
  document.getElementById('p-title').textContent=d.title;
  document.getElementById('p-desc').textContent=d.desc;
  document.getElementById('p-stats').innerHTML=d.stats.map(s=>`<div class="sb"><span class="sv ${s.c}">${s.v}</span><span class="sl">${s.l}</span></div>`).join('');
  const sc=d.ac==='purple'?'p':d.ac==='green'?'g':'';
  document.getElementById('p-stack').innerHTML=d.stack.map(t=>`<span class="stk ${sc}">${t}</span>`).join('');
  const gh=document.getElementById('p-gh');
  gh.href=d.gh;gh.className=`pgh-btn ${sc}`;gh.innerHTML=`${GH} View Code on GitHub`;
  popup.classList.add('on');
}
function hide(){hideTimer=setTimeout(()=>popup.classList.remove('on'),150)}

document.querySelectorAll('[id^="trigger-"]').forEach(el=>{
  const key=el.id.replace('trigger-','');
  el.addEventListener('mouseenter',()=>show(key));
  el.addEventListener('mouseleave',hide);
});
popup.addEventListener('mouseenter',()=>clearTimeout(hideTimer));
popup.addEventListener('mouseleave',hide);

const obs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('vis');obs.unobserve(e.target)}});
},{threshold:.07,rootMargin:'0px 0px -44px 0px'});
document.querySelectorAll('.fi').forEach(el=>obs.observe(el));