<script setup lang="ts">
</script>

<template>
<!--   <div class="parallax_wrapper">
    <div class="parallax_group intro_screen" id="intro">
      Parallax Tutorial
    </div>
    <div class="parallax_group" id="group-1">
      <div class="parallax_layer base_layer">
        <div class="parallax_layer mid_layer"></div>
      </div>
    </div>
    <div class="parallax_group" id="group-2">
      <div class="parallax_layer mid_layer">
        <div class="parallax_layer top_layer"></div>
      </div>
    </div>
    <div class="parallax_group outro_screen" id="outro">
    </div>
  </div> -->
</template>

<style scoped>
body .parallax_wrapper {
  height: 100vh;
  overflow-x: hidden;
  /* overflow-y: auto; */
  overflow-y: scroll;
  /* use scroll instead of auto */
  scrollbar-width: none;
  /* hide the scrollbar */
  -ms-overflow-style: none;
  /* hide the scrollbar for IE/Edge */
  perspective: 300px;
}

body .parallax_wrapper::-webkit-scrollbar {
  display: none;
  /* hide the scrollbar for WebKit browsers such as Safari and Chrome. */
}

body .parallax_wrapper .intro_screen {
  height: 100vh;
  /* background-color: tomato; */
  background: url("/images/pexels-cottonbro-studio-7621779.jpg") center 100% / cover no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
}

body .parallax_wrapper .outro_screen {
  height: 100vh;
  /* background-color: teal; */
  display: flex;
  justify-content: center;
  align-items: center;
}

body .parallax_wrapper .parallax_group {
  position: relative;
  height: 100vh;
  transform-style: preserve-3d;
}

body .parallax_wrapper .parallax_group .parallax_layer {
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

body .parallax_wrapper .parallax_group .base_layer {
  transform: translateZ(-300px) scale(2);
}

body .parallax_wrapper .parallax_group .mid_layer {
  transform: translateZ(0);
}

body .parallax_wrapper .parallax_group .top_layer {
  transform: translateZ(210px) scale(0.3);
}

body .parallax_wrapper #intro {
  z-index: 0;
}

body .parallax_wrapper #group-1 {
  z-index: -1;
}

body .parallax_wrapper #group-1>.base_layer {
  /* background-color: crimson; */
}

body .parallax_wrapper #group-2>.mid_layer {
  /* background-color: yellowgreen; */
}
</style>