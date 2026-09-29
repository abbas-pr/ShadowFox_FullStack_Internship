const treatments = [
  ["./Clinic/Dental/Treatments/Aligner.png","Teeth Cleaning & Scaling","Advanced gum care and plaque/tartar removal using modern techniques."],
  ["./Clinic/Dental/Treatments/Tooth-Filling.jpg","Tooth Filling","High-quality restorations for cavities, trauma and tooth wear."],
  ["./Clinic/Dental/Treatments/Extraction.png","Tooth Extraction","Gentle extraction with a focus on comfort and clear guidance."],
  ["./Clinic/Dental/Treatments/Denture.png","Artificial Complete Denture","Customized dentures designed for fit, function and appearance."],
  ["./Clinic/Dental/Treatments/Implants.png","Dental Implants","Modern tooth replacement using implant-supported solutions."],
  ["./Clinic/Dental/Treatments/Laser.png","Laser Dentistry","Precise, minimally invasive procedures supported by laser technology."],
  ["./Clinic/Dental/Treatments/Root-Canal.png","Root Canal Therapy","Treatment to remove infection, relieve pain and preserve natural teeth."],
  ["./Clinic/Dental/Treatments/Wisdom-Tooth.png","Wisdom Tooth Extraction","Careful removal of impacted or problematic wisdom teeth."],
  ["./Clinic/Dental/Treatments/Fixed-Denture.png","Fixed Partial Denture (Bridge)","Custom dental bridges to restore missing teeth and chewing function."],
  ["./Clinic/Dental/Treatments/Whitening.png","Teeth Whitening","Professional whitening for a brighter, more confident smile."],
  ["./Clinic/Dental/Treatments/Veneers.png","Veneers","Custom-made shells designed to improve the appearance of teeth."],
  ["./Clinic/Dental/Treatments/Pediatric.png","Pediatric Dentistry","Gentle dental care that helps children build healthy habits."],
  ["./Clinic/Dental/Treatments/Flap Surgery.png","Flap Surgery","Treatment for advanced gum disease and periodontal concerns."],
  ["./Clinic/Dental/Treatments/Braces.png","Orthodontic Braces","Metal, ceramic or lingual braces for improved tooth alignment."],
  ["./Clinic/Dental/Treatments/Aligners.png","Clear Aligners","Transparent removable trays for discreet orthodontic treatment."]
];

const faqs = [
["Can medication completely relieve tooth pain?","Not entirely. Medication may offer short-term relief, but lasting relief requires identifying and treating the root cause through professional dental care."],
["Does teeth scaling cause enamel damage, sensitivity, or gaps?","No. Scaling safely removes plaque and tartar. Temporary sensitivity may occur, but it usually subsides as gums heal."],
["Can fluorosis stains be removed through scaling?","Scaling can remove surface stains, but fluorosis is an internal stain and may require cosmetic treatments such as bleaching, veneers or crowns."],
["Can painful teeth be treated with fillings?","Not always. If decay has reached the pulp, root canal treatment or extraction may be necessary. Fillings are effective when damage is limited to the outer layers."],
["Is a cap or crown necessary after root canal treatment?","A crown is recommended after RCT to protect the treated tooth and reduce the risk of fracture."],
["Can milk teeth need root canal treatment?","Yes. A deep cavity in a milk tooth may require RCT when preserving the tooth is appropriate."],
["How can I maintain good oral hygiene?","Brush twice daily, rinse after meals, floss regularly and schedule routine dental check-ups."],
["What is the best age to get braces?","Braces are often effective between ages 12 and 14, although earlier intervention may be appropriate in some cases."],
["Do all wisdom teeth need to be removed?","No. Removal is generally considered when wisdom teeth are impacted, infected, painful, crowded or damaging nearby teeth."],
["Is it important to replace missing teeth after extraction?","Replacing missing teeth can help maintain bite alignment and reduce shifting of adjacent teeth."],
["What are the benefits of dental implants?","Dental implants can restore appearance and function and provide a stable solution for missing teeth."],
["Which toothbrush and toothpaste should I use?","A soft or medium-bristled, small-head toothbrush and non-abrasive fluoride toothpaste are recommended in the project brief."],
["What causes tooth sensitivity?","Possible causes listed in the brief include enamel wear, tooth decay, exposed roots and hairline cracks."],
["How often should I see a dentist?","The project brief recommends visiting a dentist every six months for routine check-ups, cleaning and preventive care."]
];

const testimonials = [
["“The doctors are extremely kind and attentive. My braces treatment is progressing really well. 5/5.”","Manisha M"],
["“I got my teeth cleaned and whitened here, and the results were amazing. The staff is so humble and professional. I’ve recommended Sakthi Dental Clinic to my entire family.”","Mr. Arun Kumar"],
["“Their attention to detail is outstanding. My daughter needed braces and the entire process from consultation to regular follow ups has been so smooth. Really grateful for their care.”","Mrs. Revathi S."]
];

const grid = document.getElementById("treatmentGrid");
let shown = 9;
function renderTreatments() {
  grid.innerHTML = treatments.slice(0, shown).map(t => `
    <article class="treatment reveal visible">
    <img src=${t[0]} alt="" class="treatment-icon"><h3>${t[1]}</h3><p>${t[2]}</p>
   
    </article>`).join("");
  document.getElementById("loadMore").style.display = shown >= treatments.length ? "none" : "inline-flex";
}
renderTreatments();
document.getElementById("loadMore").addEventListener("click", () => { shown = treatments.length; renderTreatments(); });

document.getElementById("faqList").innerHTML = faqs.map((f,i)=>`
  <div class="faq-item ${i===0?"open":""}">
    <button class="faq-question"><span>${f[0]}</span><span class="plus">＋</span></button>
    <div class="faq-answer">${f[1]}</div>
  </div>`).join("");
document.querySelectorAll(".faq-question").forEach(btn => btn.addEventListener("click",()=>btn.parentElement.classList.toggle("open")));

let current = 0;
const testimonial = document.getElementById("testimonial");
const dots = document.getElementById("dots");
function renderTestimonial(){
  testimonial.innerHTML = `<div class="quote">${testimonials[current][0]}</div><div class="author">— ${testimonials[current][1]}</div>`;
  dots.innerHTML = testimonials.map((_,i)=>`<span class="dot ${i===current?"active":""}"></span>`).join("");
}
renderTestimonial();
document.querySelector(".next").addEventListener("click",()=>{current=(current+1)%testimonials.length;renderTestimonial()});
document.querySelector(".prev").addEventListener("click",()=>{current=(current-1+testimonials.length)%testimonials.length;renderTestimonial()});
setInterval(()=>{current=(current+1)%testimonials.length;renderTestimonial()},6000);

const menuToggle=document.querySelector(".menu-toggle"), nav=document.querySelector(".nav");
menuToggle.addEventListener("click",()=>{const open=nav.classList.toggle("open");menuToggle.setAttribute("aria-expanded",open)});
document.querySelectorAll(".nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

const form=document.getElementById("contactForm"), status=document.getElementById("formStatus");
form.addEventListener("submit",e=>{
  e.preventDefault();
  const name=document.getElementById("name").value.trim();
  const email=document.getElementById("email").value.trim();
  const phone=document.getElementById("phone").value.trim();
  if(!name||!email||!phone){status.textContent="Please fill in all required fields.";return;}
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){status.textContent="Please enter a valid email address.";return;}
  if(!/^[+()\-\s\d]{8,}$/.test(phone)){status.textContent="Please enter a valid phone number.";return;}
  status.textContent="Thank you. Your message is ready to be handled by the clinic team.";
  form.reset();
});

const topBtn=document.getElementById("topBtn");
window.addEventListener("scroll",()=>topBtn.classList.toggle("show",window.scrollY>500));
topBtn.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));
document.getElementById("year").textContent=new Date().getFullYear();

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting) entry.target.classList.add("visible")});
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
