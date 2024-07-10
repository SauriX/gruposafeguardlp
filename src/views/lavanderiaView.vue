<template>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand" href="#">Lavandería Premium</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Inicio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Servicios</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Sobre Nosotros</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contacto</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <div class="hero">
        <h1>Lavandería Premium</h1>
        <p>Calidad Premium para clientes Premium.</p>
    </div>

    <!-- About Section -->
    <div class="container my-5">
        <div class="row">
            <div class="col-md-6">
                <img src="https://placehold.co/500x300" alt="Calidad Premium" class="img-fluid">
            </div>
            <div class="col-md-6 d-flex flex-column justify-content-center">
                <h2>Calidad Premium, para clientes Premium.</h2>
                <p>Una lavandería sustentable que viene a revolucionar el modo de lavado en Chetumal, desde lo más
                    sencillo hasta lo más importante.</p>
                <a href="#" class="btn btn-primary">¡Vamos a chatear!</a>
            </div>
        </div>
    </div>

    <!-- Testimonials Section -->
    <div class="testimonials text-center">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <blockquote class="blockquote">
                        <p>"Best laundry service in Chetumal! La mejor lavandería de Chetumal!"</p>
                        <footer class="blockquote-footer">Alejandro P.</footer>
                    </blockquote>
                </div>
                <div class="col-md-4">
                    <blockquote class="blockquote">
                        <p>"Hasta ahorita es la mejor lavandería que he encontrado en Chetumal y el plus es que aceptan
                            tarjetas!"</p>
                        <footer class="blockquote-footer">Victor D.</footer>
                    </blockquote>
                </div>
                <div class="col-md-4">
                    <blockquote class="blockquote">
                        <p>"Súper rápido en 1 día todo estaba limpio y personal muy agradable!"</p>
                        <footer class="blockquote-footer">Javier V.</footer>
                    </blockquote>
                </div>
            </div>
        </div>
    </div>

    <!-- Services Section -->
    <div class="container my-5">
        <h2 class="text-center">Nuestros Servicios</h2>
        <div class="row text-center services">
            <div class="col-md-3">
                <img src="https://placehold.co/150" alt="Servicio 1">
                <h5>Lavado, Secado y Doblado</h5>
                <p>Descripción del servicio.</p>
            </div>
            <div class="col-md-3">
                <img src="https://placehold.co/150" alt="Servicio 2">
                <h5>Servicio Prendas Delicadas</h5>
                <p>Descripción del servicio.</p>
            </div>
            <div class="col-md-3">
                <img src="https://placehold.co/150" alt="Servicio 3">
                <h5>Servicio Limpieza Profunda</h5>
                <p>Descripción del servicio.</p>
            </div>
            <div class="col-md-3">
                <img src="https://placehold.co/150" alt="Servicio 4">
                <h5>Servicio a Domicilio</h5>
                <p>Descripción del servicio.</p>
            </div>
        </div>
        <div class="text-center mt-4">
            <a href="#" class="btn btn-primary">Más Servicios</a>
        </div>
    </div>

    <!-- Branches Section -->
    <div class="container my-5">
        <h2 class="text-center">Sucursales</h2>
        <div class="row text-center">
            <div class="col-md-6">
                <h5>Suc. Erick Paolo</h5>
                <p>Av. Erick Paolo entre Av. Magisterio y Miguel Alemán</p>
                <p>Tel: 983 133 81 11</p>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.0870457985434!2d-88.31167992420299!3d18.524968169038765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f5ba4a363940a1b%3A0xf33826ef64921713!2sLavanderia%20Premium!5e0!3m2!1ses-419!2smx!4v1720576627889!5m2!1ses-419!2smx"
                    width="600" height="450" style="border:0;" allowfullscreen="false" loading="lazy"
                    class="branch-map"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div class="col-md-6">
                <h5>Suc. Américas I</h5>
                <p>Av. Luis Manuel Sevilla entre Guyana y Paraguay</p>
                <p>Tel: 983 139 22 89</p>
                <iframe class="branch-map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.870057086622!2d-73.97932508459218!3d40.75126677932721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z0KHQsNC90LDRjyDQvtCx0Lsu!5e0!3m2!1sru!2sus!4v1640029161743!5m2!1sru!2sus"
                    loading="lazy"></iframe>
            </div>
        </div>
    </div>

    <!-- Clients Section -->
    <div class="container my-5 text-center">
        <h2>Algunos de nuestros Clientes</h2>
        <div class="row">
            <div class="col-md-2">
                <img src="https://placehold.co/100" alt="Client 1">
            </div>
            <div class="col-md-2">
                <img src="https://placehold.co/100" alt="Client 2">
            </div>
            <div class="col-md-2">
                <img src="https://placehold.co/100" alt="Client 3">
            </div>
            <div class="col-md-2">
                <img src="https://placehold.co/100" alt="Client 4">
            </div>
            <div class="col-md-2">
                <img src="https://placehold.co/100" alt="Client 5">
            </div>
            <div class="col-md-2">
                <img src="https://placehold.co/100" alt="Client 6">
            </div>
        </div>
        <div class="text-center mt-4">
            <a href="#" class="btn btn-primary">Solicita una Cotización</a>
        </div>
    </div>
</template>
<script setup lang="ts"></script>
<style lang="css">
.hero {
    background: url('https://placehold.co/1920x600') no-repeat center center;
    background-size: cover;
    color: white;
    text-align: center;
    padding: 100px 0;
}

.services img {
    max-width: 100%;
}

.testimonials {
    background-color: #2c3e50;
    color: white;
    padding: 50px 0;
}

.branch-map {
    width: 100%;
    height: 200px;
    border: none;
}

footer {
    background-color: #2c3e50;
    color: white;
    padding: 20px 0;
}
</style>