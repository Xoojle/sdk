export function renderSearch() {
  const app = document.getElementById("app");
  app.innerHTML += `
    <input aria-label="Search" placeholder="Search clearly..." />
  `;
}
