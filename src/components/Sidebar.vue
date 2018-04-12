<template>
    <div id="mySidenav" class="sidenav">
        <router-link to="/" id="sidebarHome">
            <div class="navText">
                HOME
            </div>
            <img src="../Bilder_geschnitten/homebuttonCut.png" alt="Bild" class="image" />
        </router-link>
        <router-link to="/manufacturer" id="sidebarManufacturer">
            <div class="navText">
               HERSTELLER
            </div>
            <img src="../SupplyChainGraphics/manufacturer.png" alt="Bild" class="image" />
        </router-link>
        <router-link to="/shipper1" id="sidebarShipper1">
            <div class="navText">
                LIEFERANT 1
            </div>
            <img src="../SupplyChainGraphics/transport.png" alt="Bild" class="image" />
        </router-link>
            <router-link to="/distributor" id="sidebarDistributor">
            <div class="navText">
                VERTEILER
            </div>
            <img src="../SupplyChainGraphics/distributor.png" alt="Bild" class="image" />
        </router-link>
        <router-link to="/shipper2" id="sidebarShipper2">
            <div class="navText">
                LIEFERANT 2
            </div>
            <img src="../SupplyChainGraphics/transport2.png" alt="Bild" class="image" />
        </router-link>
        <router-link to="/retailer" id="sidebarRetailer">
            <div class="navText">
                VERKÄUFER
            </div>
            <img src="../SupplyChainGraphics/retail.png" alt="Bild" class="image" />
        </router-link>
     </div> 
</template>

<script>
export default {
    name: 'Sidebar',
};
</script>

<style scoped src="../sidebar.css">

</style>
