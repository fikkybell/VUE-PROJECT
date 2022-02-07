<template>
  <div>
    <div>
      <div>
        <!--        <video width="400" controls>-->
        <!--          <source src="https://www.youtube.com/embed/tgbNymZ7vqY">-->
        <!--          <source src="https://www.youtube.com/embed/tgbNymZ7vqY" type="video/ogg">-->
        <!--          Your browser does not support HTML5 video.-->
        <!--        </video>-->

        <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
      </div>
    </div>
    <div class="mob-mt-25">
      <p
        class="purple_variant p-text-center mob-font-size-16 mob-line-height-24"
      >
        Take 1-min Tour
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "mob-responsiveVideo",
};
</script>

<style scoped>
iframe {
  width: 100%;
  max-width: 685px !important;
  height: auto;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.75);
  border-radius: 8px;
}
.responsive-iframe {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  border: 0 !important;
  border-radius: 8px;
  height: auto;
  border: none;
}

@media only screen and (min-width: 768px) {
  .video-container {
    //overflow: hidden;
    width: 241px;
    height: 201px;
    //bottom: 550px;
    //left: 450px;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.75);
    border-radius: 8px;
    //padding-top: 56.25%;
  }
  .mob-mt-25 {
    //display: none;
  }
}

@media only screen and (min-width: 992px) {
  .mob-mt-25 {
    margin-top: 25px !important;
    //height: 250px;
  }
  .video-container {
    position: relative;
    //overflow: hidden;
    width: 400px;
    height: 250px;
    //bottom: 500px;
    //left: 640px;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.75);
    border-radius: 8px;
    //padding-top: 56.25%;
  }

  .custom-iframe {
    background: #4f1a6c;
    /* slightly raised */
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.75);
    border-radius: 8px;
  }
}
</style>
