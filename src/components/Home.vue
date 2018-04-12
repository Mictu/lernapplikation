<template>
  <div class="Home">
    <h1>
        Übersicht des Warenflussprozesses
    </h1>
    <div id="event-bus">checkbox is {{ isChecked }}</div>
        <div id="home" class="pictures">
            <div class="row align-items-end">
                <div class="col">
                    <a id="manufacturerImg">
                        <img src="../SupplyChainGraphics/manufacturer.png" alt="Bild" class="image" />
                    </a>
                    <router-link to="/manufacturer">
                        <button id="manufacturer" class="btn btn-success" role="button" :disabled="false">Manufacturer</button>
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
                        <button id="shipper1" class="btn btn-info" role="button" :disabled="!isChecked">Shipper1</button>
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
                        <button id="distributor" class="btn btn-warning" role="button" :disabled="true">Distributor</button>
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
                        <button id="shipper2" class="btn btn-warning" role="button" :disabled="true">Shipper2</button>
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
                        <button id="retailer" class="btn btn-danger" role="button" :disabled="true">Retailer</button>
                    </router-link>
                </div>
            </div>
        </div>
</div>
</template>

<script>
import { eventBus } from "../main.js";

export default {
  name: "Home",
  props: {
    boxchecked: {
      type: Boolean
    }
  },
  data() {
    return {
      isChecked: this.boxchecked
    };
  },
  created() {
    eventBus.$on("checkbox-clicked", checked => {
      console.log("checkbox is " + checked);
    });
    eventBus.$on("checkbox-clicked", boxchecked => {
      this.isChecked = boxchecked;
    });
  }
};
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
