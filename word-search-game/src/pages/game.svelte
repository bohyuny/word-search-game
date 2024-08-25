<!-- src/components/Game.svelte
<script>
    import { onMount } from "svelte";
    import { database, auth } from "../firebaseConfig";
    import { ref, onValue, update } from "firebase/database";
    import { goto } from "svelte-routing";
    import Status from "./Status.svelte";
  
    export let id;
  
    let grid = [];
    let words = [];
    let foundWords = [];
    let userScore = 0;
  
    function generateGrid() {
      const size = 10;
      grid = Array(size)
        .fill(null)
        .map(() =>
          Array(size)
            .fill(null)
            .map(() => String.fromCharCode(65 + Math.floor(Math.random() * 26)))
        );
    }
  
    function handleWordClick(word) {
      if (words.includes(word) && !foundWords.includes(word)) {
        foundWords = [...foundWords, word];
        userScore += 10;
        update(ref(database, `scores/${id}/${auth.currentUser.uid}`), {
          score: userScore,
        });
        checkGameOver();
      }
    }
  
    function checkGameOver() {
      if (foundWords.length === words.length) {
        goto(`/result/${id}`);
      }
    }
  
    onMount(() => {
      const gameRef = ref(database, `games/${id}`);
      onValue(gameRef, (snapshot) => 
   -->