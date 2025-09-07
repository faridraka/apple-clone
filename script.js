document.addEventListener("DOMContentLoaded", () => {
  const carouselItems = document.querySelectorAll(".carousel-item");
  const toggle = document.querySelector(".carousel-control");
  let currentState = 0;

  function transition(toIndex) {
    currentState = toIndex;

    carouselItems.forEach((item, index) => {
      // Hitung posisi relatif dari item terhadap yang aktif
      const offset = (index - toIndex) * 105 - 15;
      item.style.setProperty("--translate-carousel", `${offset}%`);

      // (Opsional) tambahkan class active kalau mau styling khusus
      if (index !== toIndex) {
        item.classList.add("carousel-active");
      } else {
        item.classList.remove("carousel-active");
      }
    });
  }

  // Inisialisasi tombol toggle
  carouselItems.forEach((item, index) => {
    const span = document.createElement("span");
    span.addEventListener("click", () => {
      transition(index);
    });
    toggle.appendChild(span);
  });

  const autoScroll = setInterval(function () {
    if (currentState >= carouselItems.length - 1) {
      clearInterval(autoScroll);
      return;
    }
    currentState += 1;
    transition(currentState);
  }, 3000);

  // State awal
  transition(currentState);
});

function openNavbar() {
  const toggleNavbar = document.getElementById("toggle-navbar");
  const header = document.querySelector(".header")
  
  if(toggleNavbar.checked){
    header.classList.add("active")
    document.body.style.overflow = "hidden"
  } else{
    header.classList.remove("active")
    document.body.style.overflow = ""
  }
}
