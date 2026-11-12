(function () {
  "use strict";

  var menuBtn = document.querySelector(".menu-btn");
  var menu = document.getElementById("menu");
  if (menuBtn && menu) {
    menuBtn.addEventListener("click", function () {
      var open = menu.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  var countEl = document.getElementById("count");
  var toast = document.getElementById("toast");
  var count = 0;
  var toastTimer;
  var addButtons = document.querySelectorAll("[data-add]");
  for (var i = 0; i < addButtons.length; i++) {
    addButtons[i].addEventListener("click", function () {
      var btn = this;
      count += 1;
      if (countEl) {
        countEl.textContent = String(count);
        countEl.classList.add("bump");
        window.setTimeout(function () {
          countEl.classList.remove("bump");
        }, 200);
      }
      var prev = btn.textContent;
      btn.classList.add("added");
      btn.textContent = "Added";
      window.setTimeout(function () {
        btn.classList.remove("added");
        btn.textContent = prev;
      }, 1200);
      if (toast) {
        toast.textContent = "Added to cart";
        toast.classList.add("show");
        window.clearTimeout(toastTimer);
        toastTimer = window.setTimeout(function () {
          toast.classList.remove("show");
        }, 1800);
      }
    });
  }

  var form = document.getElementById("newsForm");
  var ok = document.getElementById("ok");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (ok) {
        ok.textContent = "Thank you. This is a mockup, so nothing was sent.";
      }
      form.reset();
    });
  }
})();
