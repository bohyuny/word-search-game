<script>
  import { auth, provider } from '../firebaseConfig';
  import { signInWithPopup } from "firebase/auth";
  import { navigate } from 'svelte-routing';
  import 'public/css/main.css'; // CSS 파일을 import 합니다.


  let user = null;

  function login() {
    signInWithPopup(auth, provider)
      .then((result) => {
        user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function register() {
    navigate('/register');
  }
</script>

<main class="home-container">
  <nav class="navbar">
    <div class="nav-left">
      <a href="/" class="nav-link">
        <img src="/home.svg" alt="Home Icon" class="icon" />
        <span>Home</span>
      </a>
    </div>
    <div class="nav-right">
      <button class="nav-item" on:click={login}>
        <img src="/login.svg" alt="Login Icon" class="icon" />
        <span>로그인</span>
      </button>
      <button class="nav-item" on:click={register}>
        <img src="/joinin.svg" alt="Register Icon" class="icon" />
        <span>유저등록</span>
      </button>
    </div>
  </nav>

  <section class="intro-section">
    <h1>Welcome to Word Search Game</h1>
    <h2>Team Part 01</h2>
    {#if user}
      <p>안녕하세요, {user.displayName}님!</p>
    {/if}
  </section>
</main>
