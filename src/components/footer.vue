<template>
  <footer>
    <div class="container">
      <div class="row border-top border-dark border-bottom border-1 p-3">
        <div class="col">
          <!-- <div class="vr"></div> -->
          <h6>𝙲𝚞𝚜𝚝𝚘𝚖𝚎𝚛 𝚂𝚞𝚙𝚙𝚘𝚛𝚝</h6>
          <ul>
            <router-link to="contact">𝙲𝚘𝚗𝚝𝚊𝚌𝚝 𝚄𝚜 </router-link>
          </ul>
          <ul>
            <router-link to="about">𝙰𝚋𝚘𝚞𝚝 𝚄𝚜</router-link>
          </ul>
          <ul>
            <router-link to="contact">𝙲𝚘𝚗𝚝𝚊𝚌𝚝 𝚄𝚜 </router-link>
          </ul>
          <ul>
            <router-link to="about">𝙰𝚋𝚘𝚞𝚝 𝚄𝚜</router-link>
          </ul>
        </div>
        <div class="col">
          <h6 id="payment">𝙿𝚊𝚢𝚖𝚎𝚗𝚝 𝙼𝚎𝚝𝚑𝚘𝚍</h6>
          <a href="/help"
            ><img
              src="https://i.postimg.cc/TYkmxwhM/1156729-finance-payment-paypal-icon.png"
          /></a>
          <a href="/help"
            ><img
              src="https://i.postimg.cc/bwsnwh2G/1156735-finance-logo-maestro-payment-icon.png"
          /></a>
          <a href="/help"
            ><img
              src="https://i.postimg.cc/HxC8z8v5/1156753-finance-payment-visa-icon.png"
          /></a>
          <a href="/help"
            ><img
              src="https://i.postimg.cc/sf47nKr2/197847-american-amex-express-icon.png"
          /></a>
          <a href="/help"
            ><img
              src="https://i.postimg.cc/Sx3MXvWg/4373195-card-credit-discover-logo-logos-icon.png"
          /></a>
          <a href="/help"
            ><img src="https://i.postimg.cc/k5StWvsq/4519026-dhl-icon.png"
          /></a>
          <a href="/help"
            ><img
              src="https://i.postimg.cc/gJqXTc17/472318-card-club-diners-dinner-payment-icon.png"
          /></a>
          <a href="/help"
            ><img
              src="https://i.postimg.cc/6qW2JJXp/initial-letter-mr-or-rm-logo-design-template-700-194453514-removebg.png"
          /></a>
        </div>
      </div>
    </div>

    <div>
      <p class="lead text-center">
        <!-- <div class="vr"></div> -->
        𝙲𝚘𝚙𝚢𝚛𝚒𝚐𝚑𝚝&copy;𝟸𝟶𝟸𝟸<img
          class="img-fluid"
          src="https://i.postimg.cc/Y94tKXzc/Screenshot-2022-08-25-114500-3-removebg-preview.png"
          style="height: 2em; width: 7em"
        />
      </p>
    </div>
  </footer>
</template>

<style scoped>
footer {
  width: 100%;
  padding-top: 7px;
  margin-top: 0px;
  /* padding-bottom:10px; */
  height: auto;
  background-color: rgba(174, 174, 174, 0.778);
  /* box-shadow:5px rgb(148, 148, 148); */
}

p {
  padding-top: 8px;
  margin-bottom: 0px;
  /* box-shadow: 10px 5px 15px rgba(178, 163, 163, 0.778); */
  /* background-color:rgb(7, 7, 7); */
  color: black;
}
.vr {
  width: 300px;
  min-height: 1px;
  opacity: 100;
  margin-left: 20px;
  margin-right: 20px;
}
h6 {
  color: rgb(0, 0, 0);
  font-weight: bold;
  font-size: 18px;
  /* margin-left:px; */
}
a {
  margin-left: 0px;
  text-decoration: none;
  color: rgb(46, 46, 46);
}
a:hover {
  color: rgb(210, 14, 70);
  font-weight: bold;
}
img {
  height: 80px;
  margin-left: 5px;
}
@media screen and (max-width: 570px) {
  footer {
    max-width: 100%;
  }
}
</style>
