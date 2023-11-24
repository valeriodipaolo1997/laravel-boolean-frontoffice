
<script>
export default {
  name: 'About'
}
</script>
  
<template>
  <div class="about-us-section container py-5 mt-5 rounded-3">
    <h2 class="text-center mb-4">La Nostra Storia</h2>
    <div class="row">
      <div class="col-md-6 text-center">
        <img src="../assets/images/img-about-us.png" alt="Our Story Image" class="img-fluid rounded w-75">
      </div>
      <div class="col-md-6">
        <p class="lead">
          Benvenuti nel mondo colorato e vibrante di <strong>Creative Cocktails Inc.</strong>, la tua destinazione
          definitiva per cocktail
          innovativi e indimenticabili. Fondata nel 1990, la nostra missione è stata da sempre quella di rivoluzionare
          l'arte della mixologia.Alla Creative Cocktails Inc., crediamo che ogni cocktail sia un'opera d'arte, un
          equilibrio perfetto tra sapore, aroma e presentazione. La nostra squadra di mixologi esperti, con la loro
          passione e conoscenza approfondita, crea esperienze uniche che risvegliano i sensi. Utilizzando ingredienti di
          alta qualità, ricette innovative e tecniche di mixaggio all'avanguardia, siamo in grado di offrire un'ampia
          gamma di bevande, da quelle classiche rivisitate a creazioni completamente originali.
        </p>
      </div>
    </div>
  </div>

  <div class="container mt-5">
    <div class="row align-items-center">
      <!-- indirizzo -->
      <div class="col-md-6 text-center bg-dark rounded-3 text-light py-5">
        <h2 class="text-danger mb-4">Dove ci troviamo?</h2>
        <p>Potete trovarci nella nostra sede principale: </p>
        <p> Via Roma 1, 12345 Roma, Italia - Orario 08.00/13.00 e 16.00/20.00</p>
        <p>oppure presso i nostri rivenditori autorizzati <strong>ABCocktails</strong></p>

        <p><strong>Telefono:</strong> +39 0123 456789</p>
        <p><strong>Email:</strong> infococktail@gmail.com</p>
      </div>
      <!-- mappa-->
      <div class="col-md-6">
        <img src="../assets/images/map.png" class="img-fluid h-75 rounded">
      </div>
    </div>
  </div>


  <!-- Carosello -->
  <div class="container mt-5 text-center">
    <span class="mb-4 fs-2 p-2 bg-dark text-light rounded-3">Brand partners</span>
    <div id="brandsCarousel" class="carousel slide mt-4" data-ride="carousel">

      <!-- Carousel indicators -->
      <ol class="carousel-indicators">
        <li data-target="#brandsCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#brandsCarousel" data-slide-to="1"></li>
        <li data-target="#brandsCarousel" data-slide-to="2"></li>

      </ol>

      <!-- Wrapper for carousel items -->
      <div class="carousel-inner">

        <div class="carousel-item active">
          <div class="row">
            <div class="col-lg-3 col-md-6 col-12"><img src="../assets/images/logo-brand-1.png" alt="Brand 1"
                class="img-fluid"></div>
            <div class="col-lg-3 col-md-6 col-12"><img src="../assets/images/logo-brand-2.png" alt="Brand 2"
                class="img-fluid"></div>
            <div class="col-lg-3 col-md-6 col-12"><img src="../assets/images/logo-brand-3.png" alt="Brand 3"
                class="img-fluid"></div>
            <div class="col-lg-3 col-md-6 col-12"><img src="../assets/images/logo-brand-4.png" alt="Brand 4"
                class="img-fluid"></div>
          </div>
        </div>

        <!-- Items -->
        <div class="carousel-item">
          <div class="row">
            <div class="col-lg-3 col-md-6 col-12"><img src="../assets/images/logo-brand-5.png" alt="Brand 5"
                class="img-fluid"></div>
            <div class="col-lg-3 col-md-6 col-12"><img src="../assets/images/logo-brand-6.png" alt="Brand 6"
                class="img-fluid"></div>
            <div class="col-lg-3 col-md-6 col-12"><img src="../assets/images/logo-brand-7.png" alt="Brand 7"
                class="img-fluid"></div>
            <div class="col-lg-3 col-md-6 col-12"><img src="../assets/images/logo-brand-8.png" alt="Brand 8"
                class="img-fluid"></div>
          </div>
        </div>


      </div>

      <!-- Carousel controls -->
      <a class="carousel-control-prev" href="#brandsCarousel" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </a>
      <a class="carousel-control-next" href="#brandsCarousel" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </a>
    </div>
  </div>
</template>
  
 
  
<style scoped>
.about-us-section {
  background-color: #f8f9fa;
  color: #333;
}

.carousel-inner img {
  width: 100%;
  margin: auto;
}

.carousel-caption {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  bottom: 0;
}

.carousel-control-prev,
.carousel-control-next {
  width: 5%;
}

li::marker {
  content: "";

}
</style>
  