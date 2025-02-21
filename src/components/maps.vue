<template>
  <div class="mainBoxMaps">
    <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.9816095651504!2d-99.21323559999999!3d19.3266043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cdff8cde6750a3%3A0x3753c38c94ec65be!2sPeriferico%20Sur%201661-torre%20A12%20int%201001%2C%20San%20Jer%C3%B3nimo%20L%C3%ADdice%2C%20La%20Magdalena%20Contreras%2C%2010200%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1736985278760!5m2!1ses-419!2smx" 
        style="border:0;" 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade"
        class="map"
    >
    </iframe>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.mainBoxMaps {
    display: flex;
    justify-content: center;
}
.map {
    width: 70%;
    height: 400px;
}

@media(max-width: 1024px) {
  .map {
      width: 100%;
      height: 400px;
  }

}
@media(max-width: 768px){ 
  .map {
    width: 100%;
    height: 290px;
  }
}
</style>