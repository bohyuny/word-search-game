<!-- src/components/Maker.svelte -->
<script>
    import { auth, database } from "../firebaseConfig";
    import { ref, set } from "firebase/database";
    import { goto } from "svelte-routing";
  
    let title = "";
    let description = "";
    let words = "";
  
    function createGame() {
      const gameId = Date.now().toString();
      set(ref(database, `games/${gameId}`), {
        title,
        description,
        words: words.split(",").map(word => word.trim().toUpperCase()),
        creator: auth.currentUser?.displayName || "Anonymous",
      }).then(() => {
        goto(`/game/${gameId}`);
      });
    }
  </script>
  
  <main class="container">
    <h1>Create Word Search Game</h1>
    <input bind:value={title} placeholder="Game Title" />
    <textarea bind:value={description} placeholder="Game Description"></textarea>
    <input bind:value={words} placeholder="Comma-separated words" />
    <button on:click={createGame}>Create Game</button>
  </main>
  
  <style>
    input, textarea {
      display: block;
      width: 100%;
      margin: 10px 0;
      padding: 15px;
      font-size: 16px;
    }
  </style>
  