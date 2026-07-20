const menuButton = document.getElementById("menuButton");
    const sideNav = document.getElementById("sideNav");
    const progressBar = document.getElementById("progressBar");

    menuButton.addEventListener("click", () => {
      const isOpen = sideNav.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
    });

    sideNav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        sideNav.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
      });
    });

    window.addEventListener("scroll", () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
      progressBar.style.width = pct + "%";
    }, {passive:true});

    document.querySelectorAll(".tab-buttons button").forEach(button => {
      button.addEventListener("click", () => {
        const id = button.dataset.tab;
        document.querySelectorAll(".tab-buttons button").forEach(b => b.classList.remove("active"));
        document.querySelectorAll(".tab-panel").forEach(p => p.classList.remove("active"));
        button.classList.add("active");
        document.getElementById(id).classList.add("active");
      });
    });

    const revealTargets = document.querySelectorAll(
      "h2, .single-sentence, .question-visual, .keywords, .intersection, .lineage, .practice-map, .community-subsection, .comparison, .precedent-note, .situated-stack, .method-diagram, .method-output, .method-subsection, .prototype-tabs, .experiment-subsection, .visual-language, .argument, .capstone-map, .capstone-warning, .challenge-grid"
    );
    revealTargets.forEach(el => el.classList.add("reveal"));
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, {threshold:.08});
    revealTargets.forEach(el => observer.observe(el));


