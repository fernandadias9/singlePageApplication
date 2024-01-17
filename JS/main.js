import { Router } from './router.js';

console.log("JS working");

const router = new Router();

router.add("/", "/pages/home.html");
router.add("/oUniverso", "/pages/oUniverso.html");
router.add("/saberMais", "/pages/oUniverso.html");
router.add("/exploracao", "/pages/exploracao.html");

router.handle();

window.onpopstate = () => router.handle();
window.route = () => router.route();