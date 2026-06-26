function showtask(id, btn) {
  // sembunyikan semua halaman
  document.querySelectorAll(".task-page").forEach((el) => {
    el.classList.remove("active");
  });

  const target = document.getElementById(id);

  if (!target) {
    console.error("❌ Element tidak ditemukan:", id);
    return;
  }

  // Delay untuk smooth transition
  setTimeout(() => {
    target.classList.add("active");
  }, 150);

  // update tombol aktif
  document.querySelectorAll(".btn-tugas").forEach((b) => {
    b.classList.remove("active");
  });

  if (btn) btn.classList.add("active");
}

function loadTask(id, file) {
  const el = document.getElementById(id);

  if (!el) {
    console.error("❌ Element tidak ditemukan:", id);
    return;
  }

  // 🔥 loading state
  el.innerHTML = "<p style='padding:20px'>Loading...</p>";

  fetch(file)
    .then((res) => {
      if (!res.ok) throw new Error("File tidak ditemukan");
      return res.text();
    })
    .then((data) => {
      el.innerHTML = data;
    })
    .catch((err) => {
      el.innerHTML = "<p style='color:red'>Gagal load konten</p>";
      console.error("❌ Gagal load:", err);
    });
}

document.addEventListener("DOMContentLoaded", () => {
  loadTask("tugas1", "tasks/tugas1.html");
  loadTask("tugas2", "tasks/tugas2.html");
  loadTask("tugasUts", "tasks/tugasUts.html");
  loadTask("tugas4", "tasks/tugas4.html");
  loadTask("tugasUas", "tasks/tugasUas.html");

  // 🔥 default buka halaman pertama
  const first = document.querySelector(".task-page");
  if (first) first.classList.add("active");
});
