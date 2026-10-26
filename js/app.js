/* Renderiza las categorías y recetas desde data/recetas.js. */
const FLECHA = '<svg class="CAT_Arrow" aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>';
const dosDigitos = numero => String(numero).padStart(2, '0');
const urlCategoria = id => `./categoria.html?c=${encodeURIComponent(id)}`;
const rutaImagen = valor => {
	const ruta = String(valor ?? '').trim();
	return /^(?:\.\/)?images\/[\w.-]+\.(?:avif|gif|jpe?g|png|webp)$/i.test(ruta) ? ruta : '';
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

function crearCortinaTransicion() {
	const cortina = document.createElement('div');
	cortina.className = 'CortinaTransicion';
	cortina.setAttribute('aria-hidden', 'true');
	document.body.append(cortina);
	return cortina;
}

function admiteTransicionesEntrePaginas() {
	return location.protocol !== 'file:' && location.origin !== 'null' && typeof CSS !== 'undefined' && CSS.supports('selector(::view-transition-new(root))') && 'onpageswap' in window && 'onpagereveal' in window;
}

function esRutaInicio(url) {
	return url.pathname.endsWith('/') || /(?:^|\/)index\.html$/.test(url.pathname);
}

function direccionDeTransicion(destino) {
	const url = new URL(destino, location.href);
	if (esRutaInicio(url)) return 'izquierda';
	const idDestino = url.searchParams.get('c');
	const idActual = new URLSearchParams(location.search).get('c');
	const indiceDestino = CATEGORIAS.findIndex(categoria => categoria.id === idDestino);
	const indiceActual = CATEGORIAS.findIndex(categoria => categoria.id === idActual);
	return indiceDestino >= 0 && indiceActual >= 0 && indiceDestino < indiceActual ? 'izquierda' : 'derecha';
}

function guardarDestinoTransicion(direccion) {
	try {
		sessionStorage.setItem('transicionPagina', '1');
		sessionStorage.setItem('transicionDireccion', direccion);
	} catch {}
}

function iniciarSalidaPagina(destino, direccion) {
	if (document.documentElement.classList.contains('transicion-activa')) return;
	document.documentElement.classList.add('transicion-activa', `transicion-${direccion}`);
	guardarDestinoTransicion(direccion);
	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
		window.location.href = destino;
		return;
	}
	const continuar = () => {
		document.documentElement.classList.add('transicion-salida');
		const cortina = crearCortinaTransicion();
		requestAnimationFrame(() => requestAnimationFrame(() => cortina.classList.add('is-visible')));
		window.setTimeout(() => { window.location.href = destino; }, 340);
	};
	const intro = document.querySelector('.IntroPortada');
	if (!intro) {
		continuar();
		return;
	}
	intro.classList.add('is-revealing');
	window.setTimeout(() => {
		intro.remove();
		document.body.classList.remove('IntroPortada-activa');
		continuar();
	}, 2250);
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

			const posicionar = (enlace, opciones = {}) => {
				const ancho = opciones.ancho ?? enlace.offsetWidth;
				const escala = opciones.escala ?? 1;
				const arriba = enlace.offsetTop + enlace.offsetHeight + 5;
				indicador.style.width = `${ancho}px`;
				indicador.style.transform = `translate(${enlace.offsetLeft}px, ${arriba}px) scaleX(${escala})`;
			};
			document.fonts.ready.then(() => {
				if (!indicador.isConnected) return;
				const anchoActivo = activo.offsetWidth || 1;
				posicionar(anterior, { ancho: anchoActivo, escala: anterior.offsetWidth / anchoActivo });
				indicador.getBoundingClientRect();
				requestAnimationFrame(() => requestAnimationFrame(() => {
					indicador.classList.add('is-moving');
					posicionar(activo);
				}));
			});
			window.addEventListener('resize', () => posicionar(activo), { passive: true });

			menuDesktop.addEventListener('click', evento => {
				const enlace = evento.target.closest('a[data-categoria]');
				if (!enlace) return;
				if (
					document.documentElement.classList.contains('transicion-activa') ||
					enlace.dataset.categoria === categoriaActiva || evento.button !== 0 ||
					evento.metaKey || evento.ctrlKey || evento.shiftKey || evento.altKey ||
					enlace.target === '_blank'
				) return;

				posicionar(enlace);
				const direccion = direccionDeTransicion(enlace.href);
				try { sessionStorage.setItem('categoriaAnterior', enlace.dataset.categoria); } catch {}
				if (admiteTransicionesEntrePaginas() && !document.querySelector('.IntroPortada')) {
					guardarDestinoTransicion(direccion);
					document.documentElement.classList.add('transicion-activa');
					return;
				}
				evento.preventDefault();
				iniciarSalidaPagina(enlace.href, direccion);
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
	let transicionEntrada = false;
	let direccion = 'derecha';
	try {
		transicionEntrada = sessionStorage.getItem('transicionPagina') === '1';
		direccion = sessionStorage.getItem('transicionDireccion') || direccion;
		sessionStorage.removeItem('transicionPagina');
		sessionStorage.removeItem('transicionDireccion');
	} catch {}
	const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	if (transicionEntrada && !reduceMotion) {
		if (admiteTransicionesEntrePaginas() && !document.querySelector('.IntroPortada')) {
			document.documentElement.classList.add(`transicion-${direccion}`);
			window.setTimeout(() => document.documentElement.classList.remove(`transicion-${direccion}`), 1200);
		} else {
			const revelarPagina = () => {
				document.documentElement.classList.remove('transicion-pendiente');
				document.documentElement.classList.add('transicion-entrada');
				window.setTimeout(() => document.documentElement.classList.remove('transicion-entrada', `transicion-${direccion}`), 420);
			};
			const fuentesListas = document.fonts?.ready || Promise.resolve();
			Promise.race([fuentesListas, new Promise(resolve => window.setTimeout(resolve, 1200))]).then(revelarPagina);
		}
	} else {
		document.documentElement.classList.remove('transicion-entrada', 'transicion-pendiente', `transicion-${direccion}`);
	}

	document.addEventListener('click', evento => {
		const enlace = evento.target.closest('a[href]');
		if (!enlace || evento.defaultPrevented || document.documentElement.classList.contains('transicion-activa') || evento.button !== 0 || evento.metaKey || evento.ctrlKey || evento.shiftKey || evento.altKey || enlace.target === '_blank' || enlace.hasAttribute('download')) return;
		const destino = new URL(enlace.href, location.href);
		if (destino.origin !== location.origin || !/(?:^|\/)categoria\.html$|(?:^|\/)index\.html$/.test(destino.pathname)) return;
		if (enlace.hasAttribute('data-home-logo') && esRutaInicio(new URL(location.href)) && esRutaInicio(destino)) {
			evento.preventDefault();
			return;
		}
		if (destino.href === location.href) return;
		const direccion = direccionDeTransicion(destino.href);
		if (admiteTransicionesEntrePaginas() && !document.querySelector('.IntroPortada')) {
			guardarDestinoTransicion(direccion);
			document.documentElement.classList.add('transicion-activa');
			return;
		}
		evento.preventDefault();
		iniciarSalidaPagina(destino.href, direccion);
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
		if (evento.propertyName !== 'transform' || !menu.classList.contains('is-closing')) return;
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
	rejilla.classList.toggle('Recetas--compactas', recetas.length < 8);
	if (!recetas.length) {
		rejilla.innerHTML = '<p class="Recetas_Vacio">Todavía no hay recetas en esta categoría.</p>';
		return;
	}

	rejilla.innerHTML = recetas.map((receta, indice) => `
		<a href="#${encodeURIComponent(receta.id)}" data-id="${textoSeguro(receta.id)}" aria-label="Ver receta: ${textoSeguro(receta.titulo)}">
			<div class="Tarjeta">
				<div class="bck-image"${rutaImagen(receta.imagen) ? ` style="background-image:url('${rutaImagen(receta.imagen)}')"` : ''} aria-hidden="true"></div>
				<div class="Tarjeta_TXT"><div class="TarjetaTitle" style="--i:${(indice % 12) + 1}"><span class="TarjetaNombre">${textoSeguro(receta.titulo)}</span>${receta.autor ? ` <span class="TarjetaAutor">${textoSeguro(receta.autor)}</span>` : ''}</div></div>
				<div class="TarjetaDescripcion">${textoSeguro([receta.tiempo, receta.dificultad].filter(Boolean).join(' | '))}</div>
			</div>
		</a>`).join('');

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

	const abrir = (id, disparador = null) => {
		const receta = recetas.find(item => item.id === id);
		if (!receta) return;
		window.clearTimeout(temporizadorCierre);
		elementoDisparador = disparador;
		const imagenReceta = rutaImagen(receta.imagen);
		imagen.src = imagenReceta || './images/tor-placeholder.jpg';
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
		const metadatos = [receta.tiempo, receta.dificultad].filter(Boolean);
		datos.replaceChildren(...metadatos.map(valor => {
			const etiqueta = document.createElement('span');
			etiqueta.textContent = valor.toLocaleUpperCase('es');
			return etiqueta;
		}));
		datos.hidden = metadatos.length === 0;
		crearElementoLista(listaIngredientes, receta.ingredientes || [], 'Información pendiente.');
		crearElementoLista(listaPasos, receta.pasos || [], 'Información pendiente.');
		const seccionPasos = listaPasos.closest('.ModalReceta_Pasos');
		seccionPasos?.classList.toggle('tiene-scroll', listaPasos.querySelectorAll('li:not(.ModalReceta_Pendiente)').length > 5);
		modal.classList.remove('is-closing');
		modal.classList.add('activo');
		modal.setAttribute('aria-hidden', 'false');
		document.body.classList.add('ModalReceta-open');
		modal.focus();
	};

	const cerrar = () => {
		if (!modal.classList.contains('activo')) return;
		modal.classList.add('is-closing');
		modal.setAttribute('aria-hidden', 'true');
		history.replaceState(null, '', `${location.pathname}${location.search}`);
		const duracion = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 400;
		temporizadorCierre = window.setTimeout(() => {
			modal.classList.remove('activo', 'is-closing');
			document.body.classList.remove('ModalReceta-open');
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
	let coincidencias = [];

	const ocultarResultados = () => {
		resultados.classList.remove('is-visible');
		input.setAttribute('aria-expanded', 'false');
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

		resultados.classList.add('is-visible');
		input.setAttribute('aria-expanded', 'true');
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
	const limpiarIntro = () => {
		intro?.remove();
		document.body.classList.remove('IntroPortada-activa');
		document.documentElement.classList.remove('intro-pending', 'intro-fonts-ready');
	};
	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { limpiarIntro(); return; }
	try {
		if (sessionStorage.getItem('introPortadaVista') === '4') { limpiarIntro(); return; }
		sessionStorage.setItem('introPortadaVista', '4');
	} catch {}
	if (!intro) return;
	document.body.classList.add('IntroPortada-activa');
	Promise.resolve(document.fonts?.ready).then(() => {
		if (!intro.isConnected) return;
		document.documentElement.classList.remove('intro-pending');
		document.documentElement.classList.add('intro-fonts-ready');
		window.setTimeout(() => intro.classList.add('is-revealing'), 1500);
		window.setTimeout(() => {
			intro.remove();
			document.body.classList.remove('IntroPortada-activa');
			document.documentElement.classList.remove('intro-fonts-ready');
		}, 4250);
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
iniciarTransicionPaginas();
iniciarCursorMorph();
