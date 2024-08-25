import App from "./App.svelte";

const app = new App({
  target: document.getElementById("app"), // 여기서 'app'은 index.html의 div ID와 일치해야 합니다.
});

export default app;
