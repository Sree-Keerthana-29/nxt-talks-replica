// script.js

// ===============================
// MODAL FOR "WHAT YOU WILL LEARN"
// ===============================
function openLearnModal(card) {
  const modal = document.getElementById('learnModal');
  const content = document.getElementById('learnModalContent');

  content.innerHTML = `
    <h2>${card.title}</h2>
    <p><strong>Speaker:</strong> ${card.name} (${card.role})</p>
    <p><strong>Duration:</strong> ${card.time} mins</p>
    <p style="margin-top:10px;">✅ Get insider tips from top companies<br>✅ Learn career advice from ${card.name}<br>✅ Practical lessons, not theory</p>
  `;

  modal.style.display = 'flex';
}

function closeLearnModal() {
  const modal = document.getElementById('learnModal');
  modal.style.display = 'none';
}

// Optional: Close when clicking outside modal
window.addEventListener('click', function (e) {
  const modal = document.getElementById('learnModal');
  if (e.target === modal) {
    closeLearnModal();
  }
});


// ===============================
// VIDEO & SLIDE ROTATION LOGIC
// ===============================
const videos = document.querySelectorAll('video');
const slides = document.querySelectorAll('.slide');
let current = 0;

// Auto-rotate slides and videos every 7 seconds
setInterval(() => {
  videos[current].classList.remove('active');
  slides[current].classList.remove('active');
  current = (current + 1) % videos.length;
  videos[current].classList.add('active');
  slides[current].classList.add('active');
}, 7000);

// ===============================
// MODAL POPUP FOR WATCH TRAILER
// ===============================
  const watchBtn = document.getElementById('watchTrailerBtn');
  const modal = document.getElementById('trailerModal');
  const iframe = document.getElementById('trailerIframe');

  watchBtn.addEventListener('click', function (e) {
    e.preventDefault();
    iframe.src = "https://www.youtube.com/embed/MxF43cZxquo?autoplay=1";
    modal.style.display = "flex";
  });

  function closeModal() {
    modal.style.display = "none";
    iframe.src = ""; // Stop video playback
  }

  // Optional: Close when clicking outside modal content
  window.addEventListener('click', function (e) {
    if (e.target === modal) {
      closeModal();
    }
  });

// ===============================
// TRAILER MODAL FOR TRENDING ONLY
// ===============================
function openTrendingTrailer(videoUrl) {
  const modal = document.getElementById('trendingTrailerModal');
  const iframe = document.getElementById('trendingTrailerIframe');

  // Convert youtu.be or normal URL to embeddable format
  let embedUrl = '';
  if (videoUrl.includes('youtu.be')) {
    const id = videoUrl.split('/').pop();
    embedUrl = `https://www.youtube.com/embed/${id}?autoplay=1`;
  } else if (videoUrl.includes('youtube.com/watch?v=')) {
    const id = new URLSearchParams(new URL(videoUrl).search).get('v');
    embedUrl = `https://www.youtube.com/embed/${id}?autoplay=1`;
  } else {
    embedUrl = videoUrl; // fallback, in case it’s already in embed format
  }

  iframe.src = embedUrl;
  modal.style.display = 'flex';
}

function closeTrendingModal() {
  const modal = document.getElementById('trendingTrailerModal');
  const iframe = document.getElementById('trendingTrailerIframe');
  iframe.src = '';
  modal.style.display = 'none';
}

document.addEventListener('click', function (e) {
  const modal = document.getElementById('trendingTrailerModal');
  if (modal.style.display === 'flex' && e.target.id === 'trendingTrailerModal') {
    closeTrendingModal();
  }
});



// ===============================
// PODCAST CARD CAROUSEL LOGIC
// ===============================
document.addEventListener('DOMContentLoaded', () => {
  const cards = [
    {
      title: 'An Engineering Manager at Uber Teaches Programming',
      img: 'https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/podcast/rare-collection-of-insider-knowledge/sandeep.png',
      time: '45:17',
      name: 'Sandeep Gorthi',
      role: 'Engineering Manager at Uber',
      category: 'trending',
      trending: true,
      trailer: 'https://youtu.be/YDfL0TfKS3M'
    },
    {
      title: 'A Sr. Recruiter at Amazon Teaches Acing Interviews',
      img: 'images/pritesh.png',
      time: '41.07',
      name: 'Pritesh Malode',
      role: 'Senior Recruiter at Amazon',
      category: 'trending',
      trending: true,
      trailer: 'https://youtu.be/pDpwlapFss8'
    },
    {
      title: 'A Global CEO Teaches Mastering Time Management',
      img: 'images/sanjay.png',
      time: '56:32',
      name: 'Sanjay Sehgal',
      role: 'Chairman & CEO at Msys Technologies',
      category: 'trending',
      trending: true,
      trailer: 'https://youtu.be/BKe0tIy4u0k'
    },

 {
      title: 'An Engineer at Meta Teaches You About Designing Technology',
      img: 'images/goutam.png',
      time: '50:46',
      name: 'Goutam Reddy',
      role: 'Platform Security Engineer Meta USA',
      category: 'tech'  
    },
{
      title: 'A Software Engineer at Twitter Teaches Coder\'s Mindset',
      img: 'images/abhinav.png',
      time: '50:36',
      name: 'Abhinav Reddy',
      role: 'Software Development Engineer, Twitter',
      category: 'tech' 
    },

    {
      title: 'A Software Engineer at Uber Teaches You About Coding',
      img: 'images/nikhil.avif',
      time: '14:18',
      name: 'Nikhil VAVS',
      role: 'Software Engineer at Uber',
      category: 'tech' 
    },
{
      title: 'Software Engineer at Google Teaches Google Mindset',
      img: 'images/ashok-vardhan.png',
      time: '1:23:53',
      name: 'Ashok Vardhan Viswanadha',
      role: 'Staff Software Engineer at Google',
      category: 'tech'      
    },
    {
      title: 'Research Engineer at IBM Teaches Building Coding Skills',
      img: 'images/abhinav.png',
      time: '45:48',
      name: 'giridhar',
      role: 'Research Engineer, IBM New York',
      category: 'tech' 
    },
    {
      title: 'A Machine Learning Engineer at Liftoff Teaches Data Science',
      img: 'images/shyama.png',
      time: '46:57',
      name: 'Shyama Dorbala',
      role: 'ML Engineer at Liftoff Mobiles',
      category: 'tech' 
    },
{
      title: 'HR Lead of ADP Teaches Mastering Interviews',
      img: 'images/deepa-wadhwani.png',
      time: '31:09',
      name: 'Deepa Wadhwani',
      role: 'Director - Lead Acquisition of ADP',
      category: 'career'
    },
{
      title: 'The HR Head of Big Basket Teaches You About Building a Career',
      img: 'images/hari-tn.avif',
      time: '41:07',
      name: 'Hari TN',
      role: 'Head HR, Big Basket',
      category: 'career'
    },
{
      title: 'A Sr. Manager at Microsoft Teaches  Product Management',
      img: 'images/siva-ghani-reddy.png',
      time: '01:01:13',
      name: 'Siva Ghani Reddy',
      role: 'Senior Product Manager at Microsoft',
      category: 'career'
    },
{
      title: 'The DCP of Cyberabad Teaches Building Cyber-Safe Cities',
      img: 'images/kalmeshwar.png',
      time: '35 :10',
      name: 'Shri Kalmeshwar Shingenavar',
      role: 'DCP of Cyberabad, IPS',
      category: 'career'
    },
    {
      title: 'Amazon: Ace Interviews',
      img: 'images/architha-nagelli.png',
      time: '41:07',
      name: 'Pritesh Malode',
      role: 'Recruiter at Amazon',
      category: 'career'
    },
    {
      title: 'An Engineer at Google Teaches Thriving in Tech & Life',
      img: 'https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/podcast/rare-collection-of-insider-knowledge/kiran.png',
      time: '54:27',
      name: 'Sai Kiran Gorthi',
      role: 'Software Engineer at Google',
      category: 'productivity'
    },
    {
      title: 'A Global CEO Teaches Mastering Time Management',
      img:'https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/podcast/rare-collection-of-insider-knowledge/sanjay.png',
      time: '56:32',
      name: 'Sanjay Sehgal',
      role: 'Chairman & CEO at Msys Technologies',
      category: 'productivity'
    },
    {
      title: 'Discover what the Top 1% Professionals do differently',
      img: 'https://cdn.prod.website-files.com/64362e90abbff481a6d25ce8/6690c3b977eb17ab2fe49ddb_krishna-raghavan-thumbnail.webp',
      time: '41:23',
      name: 'Krishna Raghavan',
      role: 'People and Tech Leader',
      category: 'productivity'
    },
    {
      title: 'GSOC Alumuni Teaches You About Cracking GSOC',
      img: 'https://nxtwave.imgix.net/ccbp-website/podcast/rare-collection-of-insider-knowledge/rahul-garg.png?auto=format,compress&q=80',
      time: '45',
      name: 'Rahul Garg',
      role: 'IIIT Hyderabad, GSOC Alumnus',
      category: 'gsoc'
    },
    {
      title: 'GSOC Alumuni Teaches You About the GSOC Process',
      img: 'https://nxtwave.imgix.net/ccbp-website/podcast/rare-collection-of-insider-knowledge/nirmal-manoj.png?auto=format,compress&q=80',
      time: '46',
      name: 'Nirmal Manoj',
      role: 'IIIT Hyderabad, GSOC Alumnus',
      category: 'gsoc'
    },
    {
      title: 'GSOC Mentor Teaches You About Success Strategies for GSOC',
      img: 'https://nxtwave.imgix.net/ccbp-website/podcast/rare-collection-of-insider-knowledge/sivay-lamba.png?auto=format,compress&q=80',
      time: '47',
      name: 'Mr. Shivay Lamba',
      role: 'CTO, DarkHorse',
      category: 'gsoc'
    },
    {
      title: 'GSOC Mentor Teaches You About Acing GSOC Applications',
      img: 'https://nxtwave.imgix.net/ccbp-website/podcast/rare-collection-of-insider-knowledge/govind-goyal.png?auto=format,compress&q=80',
      time: '47',
      name: 'Govind Goyal',
      role: '2x GSOC Mentor',
      category: 'gsoc'
    },
    {
      title: 'A Chief Technology Officer at Slice Teaches  Leadership',
      img:'https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/podcast/rare-collection-of-insider-knowledge/shiva-kumar.png',
      time: '01:06:52',
      name: 'Shiva Kumar',
      role: 'Chief Technology Officer at Slice',
      category: 'cxo'
    },
    {
      title: 'A CEO at Msys Teaches Innovation & Entrepreneurship',
      img:'https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/podcast/rare-collection-of-insider-knowledge/sanjay-sehgal.png',
      time: '49:07',
      name: 'Sanjay Sehgal',
      role: 'Chairman & CEO at Msys Technologies',
      category: 'cxo'
    },
    {
      title: 'The Co-founder of Uhana Teaches You About 5G',
      img:'https://nxtwave.imgix.net/ccbp-website/podcast/rare-collection-of-insider-knowledge/rakesh-mishra.png?auto=format,compress&q=80',
      time: '48:49',
      name: 'Rakesh Mishra',
      role: 'Co-founder of Uhana (Acquired by VMware), PhD at Stanford University',
      category: 'cxo'
    },
    {
      title: 'The CEO of Cyber Eye Teaches You About Cyber Security',
      img:'https://nxtwave.imgix.net/ccbp-website/podcast/rare-collection-of-insider-knowledge/ram-ganesh.png?auto=format,compress&q=80',
      time: '41:34',
      name: 'Ram Ganesh',
      role: 'CEO of CyberEye',
      category: 'cxo'
    },
    {
      title: 'MAANG Experts Teach About Securing Dream Jobs',
      img: 'https://nxtwave.imgix.net/ccbp-website/podcast/rare-collection-of-insider-knowledge/panel-2.png?auto=format,compress&q=80',
      time: '1:00:11',
      name: '',
      role: 'Expert Panel',
      category: 'panel'
    },
    {
      title: 'HR Leaders Teach You About Acing Interviews',
      img: 'https://nxtwave.imgix.net/ccbp-website/podcast/rare-collection-of-insider-knowledge/panel-1.png?auto=format,compress&q=80',
      time: '1:09:54',
      name: '',
      role: 'Expert Panel',
      category: 'panel'
    },
    {
      title: 'Expert Engineers Teach You About 4.0 Technologies',
      img: 'https://nxtwave.imgix.net/ccbp-website/podcast/rare-collection-of-insider-knowledge/panel-3.png?auto=format,compress&q=80',
      time: '1:00:11',
      name: '',
      role: 'Expert Panel',
      category: 'panel'
    }
  ];

  let currentCategory = 'trending';
  let startIndex = 0;

  function getFilteredCards() {
    if (currentCategory === 'trending') {
      return cards.filter(c => c.trending);
    } else if (currentCategory === 'all') {
      return cards.filter(c => !c.trending); // show all except trending
    } else {
      return cards.filter(c => c.category === currentCategory);
    }
  }

  function renderCards() {
   const container = document.getElementById('card-wrapper');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    if (!container) return;

    container.innerHTML = '';
    const filtered = getFilteredCards();
    const visible = filtered.slice(startIndex, startIndex + 3);

    // Show/hide nav arrows
    if (filtered.length > 3) {
      prevBtn.style.display = 'inline-block';
      nextBtn.style.display = 'inline-block';
    } else {
      prevBtn.style.display = 'none';
      nextBtn.style.display = 'none';
    }

    visible.forEach(card => {
      container.innerHTML += `
        <div class="card" style="position: relative;">
          <img src="${card.img}" />
          ${card.trending ? `
            <div class="video-overlay" onclick="openTrendingTrailer('${card.trailer}')">
              <img src="images/play-icon.png" alt="Watch Trailer" class="play-icon" />
            </div>` : ``}
          <h4>${card.title}</h4>
          <p>⏱️ ${card.time} Mins</p>
          <p><strong>${card.name}</strong><br>${card.role}</p>
          <a href="javascript:void(0)" onclick='openLearnModal(${JSON.stringify(card)})'>What You Will Learn →</a>
        </div>`;
    });
  }

  window.filter = function (category) {
    currentCategory = category;
    startIndex = 0;
    document.querySelectorAll('.filters button').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    renderCards();
  };

  window.next = function () {
    const filtered = getFilteredCards();
    if (startIndex + 3 < filtered.length) {
      startIndex += 3;
      renderCards();
    }
  };

  window.prev = function () {
    if (startIndex - 3 >= 0) {
      startIndex -= 3;
      renderCards();
    }
  };

  renderCards();


// ===============================
// STUDENT FEEDBACK CAROUSEL
// ===============================

  
  const feedbacks = [
    { name: 'Rahul Gunturi', image: 'https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/podcast/student-testimonials/rahul-gunturi-linkedin-profile-pic.png', text: 'These podcasts are beneficial...', linkedin: 'https://www.linkedin.com/in/example1' },
    { name: 'Sai Rohith', image: 'https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/podcast/student-testimonials/sai-rohith-linkedin-profile-pic.png', text: 'As a CCBP 4.0 Academy student...', linkedin: 'https://www.linkedin.com/in/example2' },
{
    name: 'Neha Panakanapalli',
    image: 'https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/podcast/student-testimonials/neha-panakanapalli-linkedin-profile-pic.png',
    text: 'These podcasts are really special from a student perspective and enriching from a manager’s perspective ...',
    linkedin: 'https://www.linkedin.com/in/example3'
  },
  {
    name: 'Rahul Gunturi',
    image: 'https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/podcast/student-testimonials/rahul-gunturi-linkedin-profile-pic.png',
    text: 'The podcast with Sanjay Sehgal, CEO of MSys Technologies, is the best and incredibly valuable. I took nine pages of notes and ...',
    linkedin: 'https://www.linkedin.com/in/example4'
  },
  {
    name: 'Rupesh Reddy Loka',
    image: 'https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/podcast/student-testimonials/rupesh-reddy-loka-linkedin-profile-pic.png',
    text: 'After Gowtham sirs podcast, I got really motivated with some of his insights and experiences and also noted some points! He enlightened ...',
    linkedin: 'https://www.linkedin.com/in/example5'
  },
  {
    name: 'Gunda Vamshi',
    image: 'https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/podcast/student-testimonials/gunda-vamshi-linkedin-profile-pic.png',
    text: 'Very excellent and learnt many insights from the podcast. I really thank to Archita mam for delivering such great insights in the podcast. ...!',
    linkedin: 'https://www.linkedin.com/in/example6'
  },
  {
    name: 'Narasimha Naidu Talari',
    image: 'https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/podcast/student-testimonials/narasimha-naidu-talari-linkedin-profile-pic.png',
    text: 'Mam answered all our student questions and shared her experience on how to build the best career in IT! It is very useful to me , Thank you ...',
    linkedin: 'https://www.linkedin.com/in/example7'
  },
  {
    name: 'N S Nafiya',
    image: 'https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/podcast/student-testimonials/nafiya-linkedin-profile-pic.png',
    text: 'I learned about Amazon 4Cs of hiring. The podcast provided great insights into the recruiter perspective and the company evaluation ..',
    linkedin: 'https://www.linkedin.com/in/example8'
  },
  {
    name: 'Neha Panakanapalli',
    image: 'https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/podcast/student-testimonials/neha-panakanapalli-linkedin-profile-pic.png',
    text: 'I got all my doubts about interviews cleared by Pritesh and Avinash Sir, These podcast has really very good insights! ...',
    linkedin: 'https://www.linkedin.com/in/example8'
  }
    // Add more feedback objects...
  ];

  let feedbackIndex = 0;

  function renderFeedbacks() {
  const container = document.querySelector('.car-section #feedback-wrapper');
  if (!container) return;
  container.innerHTML = '';

  const visible = feedbacks.slice(feedbackIndex, feedbackIndex + 3);

  visible.forEach(item => {
    const cardHTML = `
      <div class="testimonial-card">
        <a href="${item.linkedin}" target="_blank" class="linkedin-icon">
          <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" />
        </a>
        <div class="testimonial-header">
          <img src="${item.image}" alt="${item.name}" />
          <div>
            <strong>${item.name}</strong><br><br>
            <small>Fellow at CCBP 4.0 academy | NxtWave</small>
          </div>
        </div>
<br>
        <p>${item.text} </p> <br><a href="${item.linkedin}" target="_blank">Read More on LinkedIn</a>
      </div>
    `;
    container.innerHTML += cardHTML;
  });

  renderDots();
}


  function renderDots() {
    const dotsContainer = document.querySelector('.car-section #feedback-dots');
    if (!dotsContainer) return;
    dotsContainer.innerHTML = '';
    const totalPages = Math.ceil(feedbacks.length / 3);

    for (let i = 0; i < totalPages; i++) {
      const isActive = i === Math.floor(feedbackIndex / 3);
      dotsContainer.innerHTML += `<span onclick="goToPage(${i})" style="display:inline-block; width:10px; height:10px; margin:5px; border-radius:50%; background:${isActive ? '#facc15' : '#475569'}; cursor:pointer;"></span>`;
    }
  }

  window.goToPage = function (page) {
    feedbackIndex = page * 3;
    renderFeedbacks();
  };

  window.nextFeedback = function () {
    if (feedbackIndex + 3 < feedbacks.length) {
      feedbackIndex += 3;
      renderFeedbacks();
    }
  };

  window.prevFeedback = function () {
    if (feedbackIndex - 3 >= 0) {
      feedbackIndex -= 3;
      renderFeedbacks();
    }
  };

  renderFeedbacks();

// ===============================
//  FORM VALIDATION FOR OTP CLAIM
// ===============================
  const form = document.querySelector('.car-section #claimForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const nameInput = form.querySelector('#name');
      const phoneInput = form.querySelector('#phone');
      const nameError = form.querySelector('#nameError');
      const phoneError = form.querySelector('#phoneError');

      const name = nameInput.value.trim();
      const phone = phoneInput.value.trim().replace(/\D/g, '');

      let isValid = true;
      nameError.textContent = '';
      phoneError.textContent = '';

      if (name === '') {
        nameError.textContent = 'Please enter your name.';
        isValid = false;
      }

      const phoneRegex = /^[6-9]\d{9}$/;
      if (!phoneRegex.test(phone)) {
        phoneError.textContent = 'Enter a valid 10-digit mobile number starting with 6–9.';
        isValid = false;
      }

      if (isValid) {
        alert(`We will send OTP to ${phone}`);
        nameInput.value = '';
        phoneInput.value = '';
      }
    });
  }
});
tr