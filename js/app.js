/* Renderiza las categorías y recetas desde data/recetas.js. */
const FLECHA = '<svg class="CAT_Arrow" aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>';
const dosDigitos = numero => String(numero).padStart(2, '0');
const urlCategoria = id => `./categoria.html?c=${encodeURIComponent(id)}`;
const IMAGENES_RECETA = {
	'espaguetis-carbonara': 'Recetas_IMG/pasta-carbonara.svg?rev=20261111d',
	'espaguetis-con-cebolla-y-jamon': 'Recetas_IMG/pasta-jamon-cebolla.svg?rev=20261111d',
	'macarrones-con-tomate-y-chorizo': 'Recetas_IMG/pasta-macarrones-chorizo.svg?rev=20261111d',
	'espaguetis-con-ajo-y-aceite': 'Recetas_IMG/pasta-ajo-aceite.svg?rev=20261111d',
	'espaguetis-bolognesa': 'Recetas_IMG/pasta-bolognesa.svg?rev=20261111d',
	'espaguetis-con-gambas-y-ajo': 'Recetas_IMG/pasta-gambas-ajo.svg?rev=20261111d',
	'ensalada-de-pasta': 'Recetas_IMG/pasta-ensalada.svg?rev=20261111d',
	'ensalada-de-pasta-con-gambas': 'Recetas_IMG/pasta-ensalada-gambas.svg?rev=20261111d',
	'fideos-amarillos': 'Recetas_IMG/pasta-fideos-amarillos.svg?rev=20261111d',
	'lasagna': 'Recetas_IMG/pasta-lasagna.svg?rev=20261111d',
	'canelones-abuela-carmen': 'Recetas_IMG/pasta-canelones-carne.svg?rev=20261111d',
	'canelones-abuela-cheli': 'Recetas_IMG/pasta-canelones-pate.svg?rev=20261111d',
	'rollo-de-carne': 'Recetas_IMG/Carnes_Rollo_Carne.jpg?rev=carnes-20261111a',
	'carne-con-tomate': 'Recetas_IMG/Carnes_Carne_Tomate.jpg?rev=carnes-20261111a',
	'albondigas': 'Recetas_IMG/Carnes_Albondigas_Salsa.jpg?rev=carnes-20261111a',
	'solomillo-de-cerdo-de-mama': 'Recetas_IMG/Carnes_Solomillo_Cerdo.jpg?rev=carnes-20261111a',
	'solomillo-de-ternera-de-navidad-de-mama': 'Recetas_IMG/Carnes_Solomillo_Ternera.jpg?rev=carnes-20261111a',
	'carne-en-salsa-de-la-abuela-carmen': 'Recetas_IMG/Carnes_Carne_Salsa.jpg?rev=carnes-20261111a',
	'albondigon': 'Recetas_IMG/Carnes_Albondigon_Casero.jpg?rev=carnes-20261111a',
	'codillo': 'Recetas_IMG/Carnes_Codillo_Cocido.jpg?rev=carnes-20261111a',
	'cinta-de-lomo-a-la-sal': 'Recetas_IMG/Carnes_Lomo_Sal.jpg?rev=carnes-20261111a',
	'carne-estofada': 'Recetas_IMG/Carnes_Carne_Estofada.jpg?rev=carnes-20261111a',
	'cordero-mama': 'Recetas_IMG/Carnes_Cordero_Mama.jpg?rev=carnes-20261111a',
	'cordero-adela': 'Recetas_IMG/Carnes_Cordero_Adela.jpg?rev=carnes-20261111a',
	'cordero-a-mi-manera': 'Recetas_IMG/Carnes_Cordero_Casero.jpg?rev=carnes-20261111a',
	'carne-en-salsa': 'Recetas_IMG/Carnes_Ternera_Salsa.jpg?rev=carnes-20261111a',
	'lomo-al-caramelo': 'Recetas_IMG/Carnes_Lomo_Caramelo.jpg?rev=carnes-20261111a',
	'filetes-rusos': 'Recetas_IMG/Carnes_Filetes_Rusos.jpg?rev=carnes-20261111a',
	'filetes-empanados': 'Recetas_IMG/Carnes_Filetes_Empanados.jpg?rev=carnes-20261111a',
	'flamenquines': 'Recetas_IMG/Carnes_Flamenquines_Jamon.jpg?rev=carnes-20261111a',
	'roast-beef': 'Recetas_IMG/Carnes_Roast_Beef.jpg?rev=carnes-20261111a',
	'albondigas-amarillas': 'Recetas_IMG/Carnes_Albondigas_Amarillas.jpg?rev=carnes-20261111a',
	'carne-mechada': 'Recetas_IMG/Carnes_Carne_Mechada.jpg?rev=carnes-20261111a',
	'cinta-de-lomo-con-ciruelas-orejones-e-higos': 'Recetas_IMG/Carnes_Lomo_Frutas.jpg?rev=carnes-20261111a',
	'cinta-de-lomo-al-horno': 'Recetas_IMG/Carnes_Lomo_Horno.jpg?rev=carnes-20261111a',
	'pollo-en-pepitoria': 'Recetas_IMG/Carnes_Pollo_Pepitoria.jpg?rev=carnes-20261111a',
	'pollo-abuela-carmen': 'Recetas_IMG/Carnes_Pollo_Carmen.jpg?rev=carnes-20261111a',
	'pollo-al-horno-de-la-abuela-cheli': 'Recetas_IMG/Carnes_Pollo_Cheli.jpg?rev=carnes-20261111a',
	'pollo-a-la-sopa-de-cebolla': 'Recetas_IMG/Carnes_Pollo_Cebolla.jpg?rev=carnes-20261111a',
	'pollo-al-horno': 'Recetas_IMG/Carnes_Pollo_Horno.jpg?rev=carnes-20261111a',
	'pollo-con-cerveza-y-yogur': 'Recetas_IMG/Carnes_Pollo_Yogur.jpg?rev=carnes-20261111a',
	'pollo-con-limon': 'Recetas_IMG/Carnes_Pollo_Limon.jpg?rev=carnes-20261111a',
	'pavo-al-oporto': 'Recetas_IMG/Carnes_Pavo_Oporto.jpg?rev=carnes-20261111a'
};
const rutaImagen = valor => {
	const ruta = String(valor ?? '').trim();
	return /^(?:\.\/)?(?:images|Recetas_IMG)\/[\w.-]+\.(?:avif|gif|jpe?g|png|svg|webp)(?:\?[\w=.-]+)?$/i.test(ruta) ? ruta : '';
};
const textoSeguro = valor => String(valor ?? '').replace(/[&<>"']/g, caracter => ({
	'&': '&amp;',
	'<': '&lt;',
	'>': '&gt;',
	'"': '&quot;',
	"'": '&#39;'
}[caracter]));

function renderizarCategorias() {
	const lista = document.getElementById('Categorias');
	if (!lista) return;

	lista.innerHTML = CATEGORIAS.map((categoria, indice) => `
		<a href="${urlCategoria(categoria.id)}" class="CAT_Box" style="--i:${indice + 1}">
			<span class="CAT_Number CAT_Index">${dosDigitos(indice + 1)}</span>
			<span class="CAT_Title">${textoSeguro(categoria.nombre)}</span>
			<span class="CAT_Number CAT_Description">${textoSeguro(categoria.descripcion)}</span>
			${FLECHA}
		</a>`).join('');
}

function esRutaInicio(url) {
	return url.pathname.endsWith('/') || /(?:^|\/)index\.html$/.test(url.pathname);
}

function renderizarMenu(categoriaActiva) {
	const menuDesktop = document.querySelector('.MenuDesktop');
	const menuMobile = document.querySelector('.MenuMobile_Categorias');

	if (menuDesktop) {
		menuDesktop.innerHTML = CATEGORIAS.map(categoria => `
			<a href="${urlCategoria(categoria.id)}" data-categoria="${textoSeguro(categoria.id)}"${categoria.id === categoriaActiva ? ' class="activo" aria-current="page"' : ''}>${textoSeguro(categoria.nombre)}</a>`).join('');

		const activo = menuDesktop.querySelector('.MenuDesktop a.activo');
		if (activo) {
			let idAnterior = null;
			try {
				idAnterior = sessionStorage.getItem('categoriaAnterior');
				sessionStorage.removeItem('categoriaAnterior');
			} catch {}

			const anterior = [...menuDesktop.querySelectorAll('a[data-categoria]')]
				.find(enlace => enlace.dataset.categoria === idAnterior) || activo;
			const indicador = document.createElement('span');
			indicador.className = 'MenuDesktop_Indicador';
			indicador.setAttribute('aria-hidden', 'true');
			menuDesktop.append(indicador);

			let anchoIndicador = 1;
			const medirIndicador = () => {
				anchoIndicador = Math.max(1, ...[...menuDesktop.querySelectorAll('a[data-categoria]')].map(enlace => enlace.offsetWidth));
				indicador.style.width = `${anchoIndicador}px`;
			};
			const posicionar = enlace => {
				const escala = enlace.offsetWidth / anchoIndicador;
				const arriba = enlace.offsetTop + enlace.offsetHeight + 5;
				indicador.style.transform = `translate(${enlace.offsetLeft}px, ${arriba}px) scaleX(${escala})`;
			};
			document.fonts.ready.then(() => {
				if (!indicador.isConnected) return;
				medirIndicador();
				posicionar(anterior);
				indicador.getBoundingClientRect();
				requestAnimationFrame(() => requestAnimationFrame(() => {
					indicador.classList.add('is-moving');
					posicionar(activo);
				}));
			});
			window.addEventListener('resize', () => {
				medirIndicador();
				posicionar(activo);
			}, { passive: true });

			menuDesktop.addEventListener('click', evento => {
				const enlace = evento.target.closest('a[data-categoria]');
				if (!enlace || enlace.dataset.categoria === categoriaActiva || evento.button !== 0 ||
					evento.metaKey || evento.ctrlKey || evento.shiftKey || evento.altKey ||
					enlace.target === '_blank'
				) return;

				posicionar(enlace);
				try { sessionStorage.setItem('categoriaAnterior', categoriaActiva); } catch {}
			});
		}
	}

	if (menuMobile) {
		menuMobile.innerHTML = CATEGORIAS.map((categoria, indice) => `
			<a href="${urlCategoria(categoria.id)}" style="--i:${indice + 1}">
				<span class="MenuMobile_Numero">${dosDigitos(indice + 1)}</span>
				<span class="MenuMobile_Nombre">${textoSeguro(categoria.nombre)}</span>
			</a>`).join('');
	}
}

function iniciarTransicionPaginas() {
	// The home brand mark is already the current page: keep it from reloading itself.
	document.addEventListener('click', evento => {
		const enlace = evento.target.closest('a[data-home-logo]');
		if (!enlace || evento.defaultPrevented || evento.button !== 0 || evento.metaKey || evento.ctrlKey || evento.shiftKey || evento.altKey || enlace.target === '_blank') return;
		const destino = new URL(enlace.href, location.href);
		if (esRutaInicio(new URL(location.href)) && esRutaInicio(destino)) evento.preventDefault();
	});
}

function iniciarMenuMovil() {
	const boton = document.querySelector('.MenuToggle');
	const menu = document.querySelector('.MenuMobile');
	const cabecera = document.querySelector('.SiteHeader');
	if (!boton || !menu) return;

	const cerrar = (devolverFoco = false) => {
		boton.setAttribute('aria-expanded', 'false');
		boton.setAttribute('aria-label', 'Abrir menú');
		menu.setAttribute('aria-hidden', 'true');
		menu.inert = true;
		menu.classList.add('is-closing');
		menu.classList.remove('is-open');
		document.body.classList.remove('MenuMobile-open');

		if (devolverFoco) boton.focus();
	};

	boton.addEventListener('click', () => {
		const abierto = boton.getAttribute('aria-expanded') === 'true';
		if (abierto) {
			cerrar();
			return;
		}

		menu.inert = false;
		boton.setAttribute('aria-expanded', 'true');
		boton.setAttribute('aria-label', 'Cerrar menú');
		menu.setAttribute('aria-hidden', 'false');
		cabecera?.style.setProperty('border-bottom-color', 'transparent');
		menu.classList.remove('is-closing');
		menu.classList.add('is-open');
		document.body.classList.add('MenuMobile-open');
	});

	menu.addEventListener('transitionend', evento => {
		if (evento.target !== menu || evento.propertyName !== 'transform' || !menu.classList.contains('is-closing')) return;
		menu.classList.remove('is-closing');
		cabecera?.style.removeProperty('border-bottom-color');
	});

	document.addEventListener('keydown', evento => {
		if (evento.key === 'Escape' && boton.getAttribute('aria-expanded') === 'true') cerrar(true);
	});
}

function crearElementoLista(elemento, textos, mensajeVacio) {
	elemento.replaceChildren();
	const contenido = (Array.isArray(textos) ? textos : [])
		.flatMap(texto => String(texto).split(/\r?\n/))
		.map(texto => texto.trim())
		.filter(Boolean);
	if (!contenido.length) contenido.push(mensajeVacio);
	contenido.forEach(texto => {
		const item = document.createElement('li');
		item.textContent = texto;
		if (contenido.length === 1 && texto === mensajeVacio) item.className = 'ModalReceta_Pendiente';
		elemento.append(item);
	});
}

function iniciarReveladoFilas(rejilla, claseRevelado = 'Recetas--revelado-listo') {
	if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
	const tarjetas = [...rejilla.querySelectorAll(':scope > a')];
	if (!tarjetas.length) return;
	rejilla.classList.add(claseRevelado);
	const observer = new IntersectionObserver(entradas => {
		entradas.forEach(entrada => {
			if (!entrada.isIntersecting) return;
			const tarjeta = entrada.target;
			const arriba = tarjeta.getBoundingClientRect().top;
			const fila = tarjetas
				.filter(item => Math.abs(item.getBoundingClientRect().top - arriba) < 3)
				.sort((a, b) => a.getBoundingClientRect().left - b.getBoundingClientRect().left);
			tarjeta.style.setProperty('--reveal-delay', `${fila.indexOf(tarjeta) * 64}ms`);
			tarjeta.classList.add('is-revealed');
			observer.unobserve(tarjeta);
		});
	}, { threshold: 0.14, rootMargin: '0px 0px -24px 0px' });
	tarjetas.forEach(tarjeta => observer.observe(tarjeta));
}


function iniciarReveladoCategorias() {
	const lista = document.getElementById('Categorias');
	if (!lista || !('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
	lista.classList.add('Categorias--revelado-listo');
	const iniciar = () => iniciarReveladoFilas(lista, 'Categorias--revelado-listo');
	if (document.body.classList.contains('IntroPortada-activa')) {
		document.addEventListener('intro:home-reveal', iniciar, { once: true });
	} else {
		iniciar();
	}
	lista.addEventListener('focusin', evento => {
		const categoria = evento.target.closest('.CAT_Box');
		if (!categoria) return;
		categoria.style.setProperty('--reveal-delay', '0ms');
		categoria.classList.add('is-revealed');
	});
}

function renderizarRecetas() {
	const rejilla = document.getElementById('Recetas');
	if (!rejilla) return;

	const params = new URLSearchParams(location.search);
	const idSolicitado = params.get('c');
	const categoria = idSolicitado
		? CATEGORIAS.find(item => item.id === idSolicitado)
		: CATEGORIAS.find(item => item.id === 'pasta');
	renderizarMenu(categoria?.id);

	if (!categoria) {
		document.title = 'Categoría no encontrada · Cuaderno de recetas';
		document.getElementById('CatTitulo').textContent = 'Categoría no encontrada';
		rejilla.innerHTML = '<p class="Recetas_Vacio">No encontramos esta categoría. <a href="./index.html">Volver al inicio</a>.</p>';
		return;
	}

	const titulo = document.getElementById('CatTitulo');
	document.title = `${categoria.nombre} · Cuaderno de recetas`;
	titulo.innerHTML = `<span>${textoSeguro(categoria.nombre.toLocaleLowerCase('es'))}</span>${textoSeguro(categoria.nombre)}<span>${textoSeguro(categoria.nombre.toLocaleLowerCase('es'))}</span>`;
	const recetas = RECETAS.filter(receta => receta.categoria === categoria.id);
	rejilla.dataset.categoria = categoria.id;
	rejilla.classList.toggle('Recetas--compactas', recetas.length < 8);
	if (!recetas.length) {
		rejilla.innerHTML = '<p class="Recetas_Vacio">Todavía no hay recetas en esta categoría.</p>';
		return;
	}

	rejilla.innerHTML = recetas.map((receta, indice) => {
		const foto = rutaImagen(receta.imagen || IMAGENES_RECETA[receta.id]);
		return `
		<a href="#${encodeURIComponent(receta.id)}" data-id="${textoSeguro(receta.id)}" aria-label="Ver receta: ${textoSeguro(receta.titulo)}">
			<div class="Tarjeta">
				<div class="bck-image${foto ? '' : ' bck-image--placeholder'}"${foto ? ` style="background-image:url('${foto}')"` : ''} aria-hidden="true"></div>
				<div class="Tarjeta_TXT"><div class="TarjetaTitle" style="--i:${(indice % 12) + 1}"><span class="TarjetaNombre">${textoSeguro(receta.titulo)}</span>${receta.autor ? ` <span class="TarjetaAutor">${textoSeguro(receta.autor)}</span>` : ''}</div></div>
				<div class="TarjetaDescripcion">${textoSeguro([receta.tiempo || '25 min', receta.dificultad || 'Fácil'].join(' · '))}</div>
			</div>
		</a>`;
	}).join('');

	iniciarReveladoFilas(rejilla);
	iniciarModal(recetas, categoria.id, rejilla);
}

function iniciarModal(recetas, categoriaId, rejilla) {
	const modal = document.getElementById('ModalReceta');
	if (!modal) return;

	const imagen = document.getElementById('ModalImg');
	const titulo = document.getElementById('ModalTitulo');
	const datos = document.getElementById('ModalDatos');
	const listaIngredientes = document.getElementById('ModalIng');
	const listaPasos = document.getElementById('ModalPasos');
	const botonCerrar = modal.querySelector('.ModalReceta_Cerrar');
	let elementoDisparador = null;
	let temporizadorCierre;
	let scrollFondoGuardado = null;
	let estilosBloqueoFondo = null;
	const propiedadesBloqueo = ['position', 'top', 'left', 'right', 'width'];
	const bloquearScrollFondo = () => {
		if (!window.matchMedia('(max-width:700px)').matches || scrollFondoGuardado !== null) return;
		scrollFondoGuardado = window.scrollY;
		estilosBloqueoFondo = Object.fromEntries(propiedadesBloqueo.map(propiedad => [propiedad, document.body.style[propiedad]]));
		document.body.style.position = 'fixed';
		document.body.style.top = `-${scrollFondoGuardado}px`;
		document.body.style.left = '0';
		document.body.style.right = '0';
		document.body.style.width = '100%';
	};
	const restaurarScrollFondo = () => {
		if (scrollFondoGuardado === null) return;
		const posicion = scrollFondoGuardado;
		propiedadesBloqueo.forEach(propiedad => { document.body.style[propiedad] = estilosBloqueoFondo[propiedad]; });
		const scrollBehavior = document.documentElement.style.scrollBehavior;
		document.documentElement.style.scrollBehavior = 'auto';
		window.scrollTo(0, posicion);
		document.documentElement.style.scrollBehavior = scrollBehavior;
		scrollFondoGuardado = null;
		estilosBloqueoFondo = null;
	};

	const abrir = (id, disparador = null) => {
		const receta = recetas.find(item => item.id === id);
		if (!receta) return;
		window.clearTimeout(temporizadorCierre);
		modal.querySelector('.ModalReceta_Contenedor').scrollTop = 0;
		const zonaDesplazable = modal.querySelector('.ModalReceta_Desplazable');
		if (zonaDesplazable) zonaDesplazable.scrollTop = 0;
		elementoDisparador = disparador;
		const imagenReceta = rutaImagen(receta.imagen || IMAGENES_RECETA[receta.id]);
		const marcoImagen = imagen.closest('.ModalReceta_Imagen');
		marcoImagen?.classList.toggle('is-placeholder', !imagenReceta);
		if (imagenReceta) imagen.src = imagenReceta;
		else imagen.removeAttribute('src');
		imagen.alt = imagenReceta ? `Imagen de ${receta.titulo}` : '';
		titulo.replaceChildren();
		const nombre = document.createElement('span');
		nombre.textContent = receta.titulo;
		titulo.append(nombre);
		if (receta.autor) {
			const autor = document.createElement('span');
			autor.className = 'TarjetaAutor';
			autor.textContent = ` · ${receta.autor}`;
			titulo.append(autor);
		}
		// Datos de muestra hasta que la fuente editable incluya tiempo y dificultad.
		const metadatos = [receta.tiempo || '25 min', receta.dificultad || 'Fácil'];
		datos.replaceChildren(...metadatos.map(valor => {
			const etiqueta = document.createElement('span');
			etiqueta.textContent = valor.toLocaleUpperCase('es');
			return etiqueta;
		}));
		const ingredientesReceta = receta.ingredientes || [];
		const pasosReceta = receta.pasos || [];
		crearElementoLista(listaIngredientes, ingredientesReceta, 'Información pendiente.');
		listaIngredientes.classList.toggle('ModalReceta_Ingredientes--compactos', ingredientesReceta.length >= 11);
		crearElementoLista(listaPasos, pasosReceta, 'Información pendiente.');
		modal.classList.remove('is-closing');
		modal.classList.add('activo');
		modal.setAttribute('aria-hidden', 'false');
		bloquearScrollFondo();
		document.body.classList.add('ModalReceta-open');
		modal.focus();
	};

	const cerrar = () => {
		if (!modal.classList.contains('activo')) return;
		modal.classList.add('is-closing');
		modal.setAttribute('aria-hidden', 'true');
		history.replaceState(null, '', `${location.pathname}${location.search}`);
		const duracion = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0
			: window.matchMedia('(max-width:700px)').matches ? 640 : 400;
		temporizadorCierre = window.setTimeout(() => {
			modal.classList.remove('activo', 'is-closing');
			document.body.classList.remove('ModalReceta-open');
			restaurarScrollFondo();
			if (elementoDisparador?.isConnected) elementoDisparador.focus();
			else rejilla.focus();
		}, duracion);
	};

	rejilla.addEventListener('click', evento => {
		const enlace = evento.target.closest('a[data-id]');
		if (!enlace) return;
		evento.preventDefault();
		history.replaceState(null, '', `${urlCategoria(categoriaId)}#${encodeURIComponent(enlace.dataset.id)}`);
		abrir(enlace.dataset.id, enlace);
	});

	botonCerrar.addEventListener('click', cerrar);
	modal.querySelector('.ModalReceta_Volver').addEventListener('click', cerrar);
	modal.addEventListener('click', evento => { if (evento.target === modal) cerrar(); });

	modal.addEventListener('keydown', evento => {
		if (evento.key === 'Escape') {
			evento.preventDefault();
			cerrar();
			return;
		}
		if (evento.key !== 'Tab') return;

		const elementos = [...modal.querySelectorAll('button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])')]
			.filter(elemento => !elemento.hidden);
		const primero = elementos[0];
		const ultimo = elementos[elementos.length - 1];
		if (evento.shiftKey && (document.activeElement === primero || document.activeElement === modal)) {
			evento.preventDefault();
			ultimo.focus();
		} else if (!evento.shiftKey && document.activeElement === ultimo) {
			evento.preventDefault();
			primero.focus();
		}
	});

	if (location.hash) {
		let id;
		try { id = decodeURIComponent(location.hash.slice(1)); } catch { id = ''; }
		abrir(id);
	}
}

function iniciarBuscador() {
	const input = document.getElementById('BuscadorInput');
	const resultados = document.getElementById('BuscadorResultados');
	const botonBorrar = document.querySelector('.Buscador_Borrar');
	if (!input || !resultados || !botonBorrar) return;

	const catalogo = RECETAS.map(receta => ({
		nombre: [receta.titulo, receta.autor].filter(Boolean).join(' '),
		id: receta.id,
		categoriaId: receta.categoria,
		categoria: CATEGORIAS.find(item => item.id === receta.categoria)?.nombre || 'OTROS'
	}));
	const normalizar = valor => String(valor ?? '').toLocaleLowerCase('es').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
	const buscador = input.closest('.Buscador');
	const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
	let coincidencias = [];
	let animacionResultados = null;

	const mostrarResultados = () => {
		const yaVisible = resultados.classList.contains('is-visible') && input.getAttribute('aria-expanded') === 'true';
		if (yaVisible) return;
		animacionResultados?.cancel();
		resultados.classList.add('is-visible');
		buscador?.classList.add('Buscador--resultados-abiertos');
		input.setAttribute('aria-expanded', 'true');
		if (reduceMotion.matches || typeof resultados.animate !== 'function') return;
		animacionResultados = resultados.animate([
			{ opacity: 0, clipPath: 'inset(0 0 100% 0 round 0 0 18px 18px)', transform: 'translateY(-5px)' },
			{ opacity: 1, clipPath: 'inset(0 0 0 0 round 0 0 18px 18px)', transform: 'translateY(0)' }
		], { duration: 380, easing: 'cubic-bezier(.22,1,.36,1)', fill: 'both' });
	};

	const ocultarResultados = () => {
		input.setAttribute('aria-expanded', 'false');
		if (!resultados.classList.contains('is-visible')) {
			buscador?.classList.remove('Buscador--resultados-abiertos');
			return;
		}
		animacionResultados?.cancel();
		if (reduceMotion.matches || typeof resultados.animate !== 'function') {
			resultados.classList.remove('is-visible');
			buscador?.classList.remove('Buscador--resultados-abiertos');
			return;
		}
		animacionResultados = resultados.animate([
			{ opacity: 1, clipPath: 'inset(0 0 0 0 round 0 0 18px 18px)', transform: 'translateY(0)' },
			{ opacity: 0, clipPath: 'inset(0 0 100% 0 round 0 0 18px 18px)', transform: 'translateY(-5px)' }
		], { duration: 180, easing: 'cubic-bezier(.4,0,1,1)', fill: 'both' });
		animacionResultados.onfinish = () => {
			if (input.getAttribute('aria-expanded') !== 'true') {
				resultados.classList.remove('is-visible');
				buscador?.classList.remove('Buscador--resultados-abiertos');
				animacionResultados = null;
			}
		};
	};

	const actualizar = () => {
		const busqueda = normalizar(input.value.trim());
		resultados.replaceChildren();
		botonBorrar.hidden = !busqueda;
		coincidencias = busqueda
			? catalogo.filter(receta => normalizar(receta.nombre).includes(busqueda)).slice(0, 8)
			: [];

		if (!busqueda) {
			ocultarResultados();
			return;
		}

		if (!coincidencias.length) {
			const estado = document.createElement('p');
			estado.className = 'BuscadorSinResultados';
			estado.textContent = `No encontramos “${input.value.trim()}”. Prueba con otro nombre.`;
			resultados.append(estado);
		} else {
			const lista = document.createElement('div');
			lista.className = 'BuscadorLista';
			coincidencias.forEach(receta => {
				const enlace = document.createElement('a');
				enlace.className = 'BuscadorResultado';
				enlace.href = `${urlCategoria(receta.categoriaId)}#${encodeURIComponent(receta.id)}`;

				const nombre = document.createElement('span');
				nombre.className = 'BuscadorResultado_Nombre';
				nombre.textContent = receta.nombre;
				const categoria = document.createElement('span');
				categoria.className = 'BuscadorResultado_Categoria';
				categoria.textContent = receta.categoria;
				enlace.append(nombre, categoria);
				lista.append(enlace);
			});
			resultados.append(lista);
		}

		mostrarResultados();
	};

	input.addEventListener('input', actualizar);
	input.addEventListener('keydown', evento => {
		if (evento.key === 'ArrowDown') {
			const primerResultado = resultados.querySelector('a');
			if (primerResultado) {
				evento.preventDefault();
				primerResultado.focus();
			}
		} else if (evento.key === 'ArrowUp') {
			const enlaces = resultados.querySelectorAll('a');
			if (enlaces.length) {
				evento.preventDefault();
				enlaces[enlaces.length - 1].focus();
			}
		} else if (evento.key === 'Enter') {
			if (coincidencias.length) {
				const receta = coincidencias[0];
				window.location.href = `${urlCategoria(receta.categoriaId)}#${encodeURIComponent(receta.id)}`;
			}
		} else if (evento.key === 'Escape') {
			ocultarResultados();
		}
	});
	input.addEventListener('focus', () => { if (input.value.trim()) actualizar(); });
	botonBorrar.addEventListener('click', () => {
		input.value = '';
		actualizar();
		input.focus();
	});
	resultados.addEventListener('keydown', evento => {
		if (evento.key === 'Escape') {
			evento.preventDefault();
			ocultarResultados();
			input.focus();
			return;
		}
		if (evento.key !== 'ArrowDown' && evento.key !== 'ArrowUp') return;
		const enlaces = [...resultados.querySelectorAll('a')];
		const indice = enlaces.indexOf(document.activeElement);
		const siguiente = evento.key === 'ArrowDown' ? indice + 1 : indice - 1;
		if (siguiente < 0) input.focus();
		else if (siguiente < enlaces.length) enlaces[siguiente].focus();
		evento.preventDefault();
	});
	input.closest('.Buscador')?.addEventListener('focusout', evento => {
		if (!evento.currentTarget.contains(evento.relatedTarget)) ocultarResultados();
	});
}

function iniciarIntroPortada() {
	if (!document.querySelector('.SEC_Titulo--home')) return;
	const intro = document.querySelector('.IntroPortada');
	const versionIntro = '28';
	const limpiarIntro = () => {
		intro?.remove();
		document.body.classList.remove('IntroPortada-activa', 'IntroPortada-saliente', 'IntroPortada-esperando-logo', 'IntroPortada-logo-entrando', 'IntroPortada-home-cargada');
		document.documentElement.classList.remove('intro-pending');
		document.dispatchEvent(new Event('intro:home-reveal'));
	};
	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { limpiarIntro(); return; }
	try {
		if (sessionStorage.getItem('introPortadaVista') === versionIntro) { limpiarIntro(); return; }
		sessionStorage.setItem('introPortadaVista', versionIntro);
	} catch {}
	if (!intro) { document.documentElement.classList.remove('intro-pending'); return; }
	document.body.classList.add('IntroPortada-activa');
	document.documentElement.classList.remove('intro-pending');
	const duracionRelleno = 2050;
	const pausaTrasRelleno = 200;
	const pausaLogo = 0;
	const esperar = ms => new Promise(resolve => window.setTimeout(resolve, ms));
	const esperarTransicion = (elemento, propiedad, limite) => new Promise(resolve => {
		let resuelta = false;
		const terminar = evento => {
			if (evento && (evento.target !== elemento || evento.propertyName !== propiedad)) return;
			if (resuelta) return;
			resuelta = true;
			elemento.removeEventListener('transitionend', terminar);
			elemento.removeEventListener('transitioncancel', terminar);
			window.clearTimeout(respaldo);
			resolve();
		};
		elemento.addEventListener('transitionend', terminar);
		elemento.addEventListener('transitioncancel', terminar);
		const respaldo = window.setTimeout(() => terminar(), limite);
	});
	const ejecutarIntro = async () => {
		try {
			await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
			if (!intro.isConnected) { limpiarIntro(); return; }
			const logoRelleno = intro.querySelector('.IntroPortada_Logo--fill');
			const barraRelleno = intro.querySelector('.IntroPortada_Progreso span');
			const finLogo = esperarTransicion(logoRelleno, 'clip-path', duracionRelleno + 500);
			const finBarra = esperarTransicion(barraRelleno, 'clip-path', duracionRelleno + 500);
			intro.classList.add('is-filling');
			await Promise.all([finLogo, finBarra]);
			await esperar(pausaTrasRelleno);
			if (!intro.isConnected) { limpiarIntro(); return; }
			const fondo = intro.querySelector('.IntroPortada_Fondo');
			const finSalida = esperarTransicion(fondo, 'transform', 1400);
			intro.classList.add('is-revealing');
			document.body.classList.add('IntroPortada-saliente');
			document.dispatchEvent(new Event('intro:home-reveal'));
			await finSalida;
			if (!intro.isConnected) { limpiarIntro(); return; }
			document.body.classList.add('IntroPortada-esperando-logo');
			intro.remove();
			document.body.classList.remove('IntroPortada-activa', 'IntroPortada-saliente');
			document.documentElement.classList.remove('intro-pending');
			await esperar(pausaLogo);
			const logoCabecera = document.querySelector('header [data-home-logo] img');
			const finEntradaLogo = logoCabecera && esperarTransicion(logoCabecera, 'transform', 1200);
			document.body.classList.add('IntroPortada-logo-entrando');
			document.body.classList.remove('IntroPortada-esperando-logo');
			if (finEntradaLogo) await finEntradaLogo;
			document.body.classList.remove('IntroPortada-logo-entrando');
			document.body.classList.add('IntroPortada-home-cargada');
		} catch {
			limpiarIntro();
		}
	};
	void ejecutarIntro();
}

function iniciarLogoAnimado() {
	const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
	document.querySelectorAll('[data-animated-src]').forEach(imagen => {
		imagen.src = reduceMotion.matches ? imagen.dataset.staticSrc : imagen.dataset.animatedSrc;
	});
}

function iniciarCursorMorph() {
	if (!matchMedia('(hover: hover) and (pointer: fine)').matches) return;
	const cursor = document.createElement('div');
	cursor.className = 'CursorMorph';
	cursor.setAttribute('aria-hidden', 'true');
	cursor.innerHTML = '<img class="CursorMorph_Flecha" src="./images/cursor-arrow.svg" alt=""><img class="CursorMorph_Mano" src="./images/cursor-hand.svg" alt="">';
	document.body.append(cursor);
	document.documentElement.classList.add('has-morph-cursor');
	window.addEventListener('pointermove', evento => {
		if (evento.pointerType === 'touch') return;
		cursor.style.transform = `translate3d(${evento.clientX}px,${evento.clientY}px,0)`;
		cursor.classList.add('is-visible');
		cursor.classList.toggle('is-hidden', Boolean(evento.target.closest('input,textarea,[contenteditable="true"]')));
		cursor.classList.toggle('is-interactive', Boolean(evento.target.closest('a,button,[role="button"]')));
	}, { passive: true });
	document.documentElement.addEventListener('pointerleave', () => cursor.classList.remove('is-visible'));
}

renderizarCategorias();
renderizarRecetas();
iniciarMenuMovil();
iniciarBuscador();
iniciarIntroPortada();
iniciarReveladoCategorias();
iniciarTransicionPaginas();
iniciarLogoAnimado();
iniciarCursorMorph();
