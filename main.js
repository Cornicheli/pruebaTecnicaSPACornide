










// <!-- nav header -->
const route = (event) => {
      event = event || window.event;
      event.preventDefault();
      const targetRoute = event.target.getAttribute('href');
      window.history.pushState({}, '', targetRoute);
      handleLocation();
}

const routes = {
      '/': '/index.html',
      '/about': '/about.html',
      '/lorem': '/lorem.html',
}

const handleLocation = async () => {
      const path = window.location.pathname;
      const routePath = routes[path] || '404.html'; // Ruta predeterminada para errores
      console.log('=>', routePath)
      const html = await fetch(routePath).then((data) => data.text());
      console.log('!->', html)
      document.getElementById('main-page').innerHTML = html;
}

window.onpopstate = handleLocation;
// <!-- nav header -->