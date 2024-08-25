<script>
  import { createUserWithEmailAndPassword } from "firebase/auth";
  import { auth } from '../firebaseConfig';
  import 'public/css/register.css'; // CSS 파일을 import 합니다.

  let name = "";
  let email = "";
  let password = "";
  let error = "";

  // 유저 등록 함수
  async function registerUser() {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // 유저 등록 성공 시 추가로 필요한 로직 (예: Firestore에 추가 정보 저장)
      console.log('User registered:', user);
      error = "";
    } catch (err) {
      console.error('Error registering user:', err.message);
      error = err.message;
    }
  }
</script>

<main class="register-container">
  <h1>유저등록</h1>
  <div class="form-group">
    <label for="name">이름</label>
    <input type="text" id="name" bind:value={name} />
  </div>
  <div class="form-group">
    <label for="email">이메일</label>
    <input type="email" id="email" bind:value={email} />
  </div>
  <div class="form-group">
    <label for="password">패스워드</label>
    <input type="password" id="password" bind:value={password} />
  </div>
  <button on:click={registerUser} class="register-button">유저등록하기</button>
  {#if error}
    <p class="error-message">{error}</p>
  {/if}
</main>
