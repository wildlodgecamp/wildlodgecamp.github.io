const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");

function activatePanel(id) {
  tabs.forEach((tab) => {
    tab.classList.toggle("is-active", tab.dataset.target === id);
  });

  panels.forEach((panel) => {
    panel.classList.toggle("is-active", panel.id === id);
  });

  history.replaceState(null, "", `#${id}`);
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => activatePanel(tab.dataset.target));
});

const initialPanel = location.hash.replace("#", "") || "about";
if (document.getElementById(initialPanel)) {
  activatePanel(initialPanel);
}
