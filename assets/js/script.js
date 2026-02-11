'use strict';

/**
 * navbar toggle
 */

const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navLinks = document.querySelectorAll("[data-navbar-link]");

navToggleBtn.addEventListener("click", function () {
  this.classList.toggle("active");
  header.classList.toggle("nav-active");
});

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    header.classList.toggle("nav-active");
    navToggleBtn.classList.toggle("active");
  });
}



/**
 * header scroll active state & go to top
 */

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 100) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});

// 原有代码保留，新增/修改以下逻辑
document.addEventListener('DOMContentLoaded', function() {
  // 导航切换按钮逻辑
  const navToggleBtn = document.querySelector('[data-nav-toggle-btn]');
  const header = document.querySelector('.header');
  
  navToggleBtn.addEventListener('click', function() {
    navToggleBtn.classList.toggle('active');
    header.classList.toggle('nav-active');
  });

  // 下拉菜单逻辑
  const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
  
  dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', function(e) {
      e.preventDefault();
      const parentItem = this.closest('.navbar-item');
      
      // 关闭其他下拉
      document.querySelectorAll('.navbar-item').forEach(item => {
        if (item !== parentItem) item.classList.remove('active');
      });
      
      // 切换当前下拉
      parentItem.classList.toggle('active');
    });
  });

  // 点击空白处关闭下拉
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.navbar')) {
      document.querySelectorAll('.navbar-item').forEach(item => {
        item.classList.remove('active');
      });
    }
  });

  // 原有go-top逻辑保留
  const goTopBtn = document.querySelector('[data-go-top]');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY >= 500) {
      goTopBtn.classList.add('active');
      header.classList.add('active');
    } else {
      goTopBtn.classList.remove('active');
      header.classList.remove('active');
    }
  });

  goTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});