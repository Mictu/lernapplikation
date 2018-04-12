<template>
  <div class="Home">
    <h1>
        Übersicht des Warenflussprozesses
    </h1>
        <div id="home" class="pictures">
            <div class="row align-items-end">
                <div class="col">
                    <a id="manufacturerImg">
                        <img src="../SupplyChainGraphics/manufacturer.png" alt="Bild" class="image" />
                    </a>
                    <router-link to="/manufacturer">
                        <b-button id="manufacturer" class="btn btn-success" role="button" :disabled="true">Manufacturer</b-button>
                    </router-link> 
                </div>
                <div class="col">
                    <a>
                        <img src="../SupplyChainGraphics/Pfeil.png" class="pfeil" alt="Bild" />
                    </a>
                </div>
                <div class="col">
                    <a id="shipper1Img">
                        <img src="../SupplyChainGraphics/transport.png" alt="Bild" class="image" />
                    </a>
                    <router-link to="/shipper1">
                        <b-button id="shipper1" class="btn btn-info" role="button" :disabled="true">Shipper1</b-button>
                    </router-link>
                </div>
                <div class="col">
                    <a>
                        <img src="../SupplyChainGraphics/Pfeil.png" class="pfeil" alt="Bild" />
                    </a>
                </div>
                <div class="col">
                    <a id="distributorImg">
                        <img src="../SupplyChainGraphics/distributor.png" alt="Bild" class="image" />
                    </a>
                    <router-link to="/distributor">
                        <b-button id="distributor" class="btn btn-warning" role="button" :disabled="true">Distributor</b-button>
                    </router-link>
                </div>
                <div class="col">
                    <a>
                        <img src="../SupplyChainGraphics/Pfeil.png" class="pfeil" alt="Bild" />
                    </a>
                </div>
                <div class="col">
                    <a id="shipper2Img">
                        <img src="../SupplyChainGraphics/transport2.png" alt="Bild" class="image" />
                    </a>
                    <router-link to="/shipper2">
                        <b-button id="shipper2" class="btn btn-warning" role="button" :disabled="true">Shipper2</b-button>
                    </router-link>
                </div>
                <div class="col">
                    <a>
                        <img src="../SupplyChainGraphics/Pfeil.png" class="pfeil" alt="Bild" />
                    </a>
                </div>
                <div class="col">
                    <a id="retailerImg">
                        <img src="../SupplyChainGraphics/retail.png" alt="Bild" class="image" />
                    </a>
                    <router-link to="/retailer">
                        <b-button id="retailer" class="btn btn-danger" role="button" :disabled="true">Retailer</b-button>
                    </router-link>
                </div>
            </div>
        </div>
</div>
</template>

<script>
export default {
  name: "Home"
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
@import url("https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css");

.pictures {
  padding-top: 250px;
  min-width: 1200px;
  width: auto !important;
}

.col {
  text-align: center;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-size: 2em;
}

h1 {
  text-align: center;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}

.col a {
  display: block;
  width: 100%;
  margin-top: 10px;
}

.row {
  padding-left: 100px;
  padding-right: 100px;
}

body {
  background-color: lightcyan;
}

.image {
  width: 100%;
}

.pfeil {
  padding: 8%;
  width: 84%;
}

#shipper1.disbaled {
  pointer-events: none;
}
</style>
