<template>
    <div id="mySidenav" class="sidenav">
        <router-link to="/" id="sidebarHome">
            <dif class="navText">
                HOME
            </dif>
            <img src="../Bilder_geschnitten/homebuttonCut.png" alt="Bild" class="image" />
        </router-link>
        <router-link to="/manufacturer" id="sidebarManufacturer">
            <dif class="navText">
               HERSTELLER
            </dif>
            <img src="../SupplyChainGraphics/manufacturer.png" alt="Bild" class="image" />
        </router-link>
        <router-link to="/shipper1" id="sidebarShipper1">
            <dif class="navText">
                LIEFERANT 1
            </dif>
            <img src="../SupplyChainGraphics/transport.png" alt="Bild" class="image" />
        </router-link>
            <router-link to="/distributor" id="sidebarDistributor">
            <dif class="navText">
                VERTEILER
            </dif>
            <img src="../SupplyChainGraphics/distributor.png" alt="Bild" class="image" />
        </router-link>
        <router-link to="/shipper2" id="sidebarShipper2">
            <dif class="navText">
                LIEFERANT 2
            </dif>
            <img src="../SupplyChainGraphics/transport2.png" alt="Bild" class="image" />
        </router-link>
        <router-link to="/retailer" id="sidebarRetailer">
            <dif class="navText">
                VERKÄUFER
            </dif>
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
