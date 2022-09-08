<template>
    <div class="loader mx-auto justify-content-center">
        <div class="spinner">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
</template>
<style scoped>
    .loader{
        height:100vh;
        width:100%
    }
    .spinner {
   /* gap between each circle */
 width: 97%;
 height: 80vh;
 display: flex;
 justify-content: center;
 align-items: center;
 gap: 40px;
}

.spinner span {
 width: 60px;
 height: 60px;
 border-radius: 100%;
 background-color: gray;
 opacity: 0;
}

.spinner span:nth-child(1) {
 animation: fade 1.5s ease-in-out infinite;
}

.spinner span:nth-child(2) {
 animation: fade 1.5s ease-in-out 0.33s infinite;
}

.spinner span:nth-child(3) {
 animation: fade 1.5s ease-in-out 0.66s infinite;
}

@keyframes fade {
 0%, 100% {
  opacity: 1;
 }

 60% {
  opacity: 0;
 }
}

</style>
