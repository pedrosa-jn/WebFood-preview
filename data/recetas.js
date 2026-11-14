// Fuente única de contenido. Añade recetas copiando un bloque de RECETAS.
const CATEGORIAS = [
  {
    "id": "salsas",
    "nombre": "SALSAS",
    "descripcion": "Bases y acompañamientos"
  },
  {
    "id": "frios",
    "nombre": "FRÍOS",
    "descripcion": "Ensaladas y platos para el calor"
  },
  {
    "id": "guisos",
    "nombre": "GUISOS",
    "descripcion": "Sopas, potajes y arroces"
  },
  {
    "id": "pasta",
    "nombre": "PASTA",
    "descripcion": "Espaguetis, lasañas y canelones"
  },
  {
    "id": "carnes",
    "nombre": "CARNES",
    "descripcion": "Carne, pollo y pavo"
  },
  {
    "id": "pescado",
    "nombre": "PESCADO",
    "descripcion": "Del mar al horno"
  },
  {
    "id": "huevos",
    "nombre": "HUEVOS",
    "descripcion": "Tortillas y huevos de mil formas"
  },
  {
    "id": "otros",
    "nombre": "OTROS",
    "descripcion": "Empanadas, bocadillos y más"
  },
  {
    "id": "postres",
    "nombre": "POSTRES",
    "descripcion": "Dulces y repostería"
  }
];

// Tiempos orientativos (≈), incluidos reposos; ver tiempoNota. Kebab pendiente de revisión.
const RECETAS = [
  {
    "id": "mayonesa",
    "categoria": "salsas",
    "titulo": "Mayonesa",
    "autor": "",
    "tiempo": "≈10 min",
    "dificultad": "Fácil",
    "imagen": "",
    "ingredientes": [
      "Uno o dos huevos",
      "Una cucharada de vinagre",
      "Sal",
      "Un vaso de aceite suave",
      "½  vaso de vino blanco"
    ],
    "pasos": [
      "En el vaso de la batidora poner dos huevos o uno  según la cantidad de mayonesa que queramos hacer, el vinagre, la sal y añadimos un poco de aceite.",
      "Batimos con la minipimer sin moverla y cuando haya emulsionado echar el resto del aceite poco a poco y mover la batidora de forma ascendente y descendente.",
      "SALSA DE VINO (para acompañar unos filetes)",
      "Después de haber frito los filetes en la sartén añadimos el vino y lo dejamos reducir un par de minutos.",
      "Añadir a la fuente de los filetes y servir."
    ],
    "tiempoNota": "Tiempo total estimado: 10 min. Elaboración (preparación y cocción): 10 min. Provisional; ficha pendiente de aclarar. Solo mayonesa: reunir ingredientes y emulsionar con batidora; se excluye la salsa de vino mezclada en la ficha."
  },
  {
    "id": "tomate-frito",
    "categoria": "salsas",
    "titulo": "Tomate Frito",
    "autor": "",
    "tiempo": "≈45 min",
    "dificultad": "Fácil",
    "imagen": "",
    "ingredientes": [
      "1 cebolla",
      "Una lata pequeña de tomate triturado natural"
    ],
    "pasos": [
      "Se pica la cebolla y  se dora en una sartén con el fondo cubierto de aceite.",
      "Cuando la cebolla esté dorada se añade el tomate un poco de sal y una cucharada pequeña de azúcar."
    ],
    "tiempoNota": "Tiempo total estimado: 45 min. Elaboración (preparación y cocción): 45 min. Picar y pochar cebolla, reducir una lata pequeña de tomate; la reducción no tiene duración en el original."
  },
  {
    "id": "bechamel",
    "categoria": "salsas",
    "titulo": "Bechamel",
    "autor": "",
    "tiempo": "≈20 min",
    "dificultad": "Media",
    "imagen": "",
    "ingredientes": [
      "2 cucharadas soperas de aceite",
      "50 gramos de mantequilla",
      "2 cucharadas soperas de aceite fino",
      "¼ leche fría",
      "Media cebolla picada (opcional)"
    ],
    "pasos": [
      "En una sartén se pone la mantequilla a derretir con el aceite. Una vez derretida se añade la harina y la cebolla rehogada no dorada.",
      "Se remueve bien todo con una cuchara de madera y se va añadiendo la leche poco a poco sin dejar que se formen grumos. (Si se forman se puede pasar por la minipimer)",
      "Se tiene hirviendo unos 8 minutos y está lista para usar",
      "Si se quiere más líquida se añade más leche."
    ],
    "tiempoNota": "Tiempo total estimado: 20 min. Elaboración (preparación y cocción): 20 min. Provisional; ficha pendiente de aclarar. Incluye preparar el roux, añadir leche sin grumos y los 8 minutos de hervor indicados; pendiente de aclarar harina y unidades."
  },
  {
    "id": "salsa-cesar",
    "categoria": "salsas",
    "titulo": "Salsa César",
    "autor": "",
    "tiempo": "≈10 min",
    "dificultad": "Fácil",
    "imagen": "",
    "ingredientes": [
      "120 gramos de parmesano\n5 Cucharadas de aceite de oliva\n1 huevo\n4 anchoas\n2 Cucharadas de Salsa Perrins\n1 Cucharada de mostaza en grano\n1 ajo pequeño\nSal\nPimienta\nUnas gotas de vinagre"
    ],
    "pasos": [],
    "tiempoNota": "Tiempo total estimado: 10 min. Elaboración (preparación y cocción): 10 min. Provisional; ficha pendiente de aclarar. Orientación por una salsa César de batidora comparable, añadiendo mise en place; faltan todos los pasos del original."
  },
  {
    "id": "salmorejo-abuelo-mariano",
    "categoria": "frios",
    "titulo": "Salmorejo",
    "autor": "Abuelo Mariano",
    "tiempo": "≈1 h",
    "dificultad": "Fácil",
    "imagen": "",
    "ingredientes": [
      "6 - 8 tomates maduros",
      "1 pimiento verde",
      "1 diente de ajo",
      "Un trozo de pan mojado o media barra empapada y escurrida del agua",
      "Sal",
      "Aceite",
      "Vinagre ( el abuelo no le echa vinagre)"
    ],
    "pasos": [
      "Se escaldan los tomates y se pelan.",
      "En el vaso de la batidora se echan los tomates troceados, el pimiento limpio y sin semillas, el diente de ajo y el trozo de pan mojado.",
      "Se bate todo bien y se va añadiendo poco a poco el aceite.",
      "Cuando está bien trabado se añade (el vinagre) y la sal y agua al gusto.",
      "Se cuela bien todo y se añade jamón picado, huevo duro."
    ],
    "tiempoNota": "Tiempo total estimado: 1 h. Elaboración (preparación y cocción): 30 min. Remojo, maceración, enfriado o reposo: 30 min. Escaldar y pelar tomates, triturar y colar; se presupone media hora de frío para servir fresco."
  },
  {
    "id": "ajo-blanco",
    "categoria": "frios",
    "titulo": "Ajo Blanco",
    "autor": "",
    "tiempo": "≈45 min",
    "dificultad": "Fácil",
    "imagen": "",
    "ingredientes": [
      "Un puñado de almendras blancas",
      "1 diente de ajo",
      "Un trozo de pan mojado",
      "Aceite, sal y vinagre"
    ],
    "pasos": [
      "En el vaso de la batidora se ponen todos los ingredientes y se baten bien. Se añade agua al gusto.",
      "Se sirve muy frío con trocitos de manzana y uvas."
    ],
    "tiempoNota": "Tiempo total estimado: 45 min. Elaboración (preparación y cocción): 15 min. Remojo, maceración, enfriado o reposo: 30 min. Triturar con almendras peladas y pan remojado; media hora orientativa de frío, reducible usando agua ya fría."
  },
  {
    "id": "ensaladilla-rusa",
    "categoria": "frios",
    "titulo": "Ensaladilla Rusa",
    "autor": "",
    "tiempo": "≈2 h 15 min",
    "dificultad": "Fácil",
    "imagen": "",
    "ingredientes": [
      "Un kilo de patatas",
      "Dos huevos cocidos",
      "dos latas de atún",
      "Una lata de pimientos rojos",
      "Aceitunas",
      "Mayonesa"
    ],
    "pasos": [
      "En la olla a presión se ponen a cocer las patatas con su piel en agua con sal durante 10 minutos.",
      "Una vez cocidas, se dejan enfriar, se pelan y se trocean o aplastan al gusto.",
      "Añadimos el atún en aceite de oliva con el aceite, un huevo picado, pimientos troceados con un poquito del aceite en el que están envasados y algunas aceitunas.",
      "Se mezcla todo con la mayonesa y se decora con algunos pimientos, aceitunas y huevo rallado.",
      "Enfriar en la nevera",
      "Para hacer la mayonesa"
    ],
    "tiempoNota": "Tiempo total estimado: 2 h 15 min. Elaboración (preparación y cocción): 45 min. Remojo, maceración, enfriado o reposo: 1 h 30 min. 10 minutos de presión más subida y bajada de presión, pelado y montaje; enfriado de patatas y nevera estimados."
  },
  {
    "id": "mousse-de-esparragos",
    "categoria": "frios",
    "titulo": "Mousse de Espárragos",
    "autor": "",
    "tiempo": "≈4 h",
    "dificultad": "Media",
    "imagen": "",
    "ingredientes": [
      "8 huevos",
      "2 latas de leche ideal",
      "1 bote de espárragos blancos",
      "Queso rallado",
      "Sal y pimienta"
    ],
    "pasos": [
      "Poner los ingredientes en la batidora y batir.",
      "Cubrir un molde con mantequilla y verter la mezcla dentro.",
      "Poner al baño maría en una  cacerola con agua hirviendo.",
      "Meter en el horno hasta que se cuaje todo bien.",
      "Servir frío y cubrir con mayonesa."
    ],
    "tiempoNota": "Tiempo total estimado: 4 h. Elaboración (preparación y cocción): 1 h. Remojo, maceración, enfriado o reposo: 3 h. Mezclar y cuajar al baño maría, aproximadamente 45 minutos de horno; se estiman 3 horas para enfriar, según tamaño del molde."
  },
  {
    "id": "pudin-de-pescado",
    "categoria": "frios",
    "titulo": "Pudin de Pescado",
    "autor": "",
    "tiempo": "≈4 h 15 min",
    "dificultad": "Media",
    "imagen": "",
    "ingredientes": [
      "1 paquete de pescada congelada o una pescada entera",
      "3 huevos",
      "½ cebolla",
      "2 hojas de laurel",
      "Una lata pequeña de tomate natural triturado"
    ],
    "pasos": [
      "Cocer el pescado en un caldo corto: agua, media cebolla, 2 hojas de laurel y chorreón de vino durante unos 10 minutos.",
      "Cuando esté blando el pescado, se saca, se deja enfriar y se desmenuza.",
      "Se baten las claras a punto de nieve y se añaden las yemas.",
      "Se mezcla con el pescado, añadimos tomate frito (mejor si es casero)  y batimos todo bien para que el pescado quede bien desmenuzado.",
      "Rectificamos de sal.",
      "Cogemos un molde, lo untamos con aceite y espolvoreamos pan rallado.",
      "Ponemos la mezcla en el molde y el molde al baño maría en el fuego mientras se calienta el horno hasta que hierva el agua.",
      "Meter en el horno unos 30 minutos.",
      "Para saber si está listo metemos una aguja o un cuchillo y si sale limpio es que ya está hecho.",
      "Dejamos enfriar en la nevera y servimos cubierto de mayonesa."
    ],
    "tiempoNota": "Tiempo total estimado: 4 h 15 min. Elaboración (preparación y cocción): 1 h 15 min. Remojo, maceración, enfriado o reposo: 3 h. 10 minutos de pescado, desmenuzado y claras montadas, 30 de horno, preparación y templado; frío adicional orientativo."
  },
  {
    "id": "ensalada-mixta",
    "categoria": "frios",
    "titulo": "Ensalada Mixta",
    "autor": "",
    "tiempo": "≈15 min",
    "dificultad": "Fácil",
    "imagen": "",
    "ingredientes": [
      "Lechuga",
      "Tomate",
      "¼ ó ½ cebolla",
      "Atún",
      "Sal, aceite y vinagre"
    ],
    "pasos": [
      "Se pica la lechuga y se lava bien.",
      "Se escurre bien el agua y se pone en una fuente.",
      "Se lava bien el tomate y se trocea.",
      "Se pela la cebolla y se trocea.",
      "Se abre la lata de atún, se escurre de su aceite y se añade a la ensalada.",
      "Se pone todo en la fuente y se aliña con sal, vinagre y aceite en este orden."
    ],
    "tiempoNota": "Tiempo total estimado: 15 min. Elaboración (preparación y cocción): 15 min. Lavar, escurrir, cortar y aliñar; atún en conserva, sin cocción."
  },
  {
    "id": "ensalada-de-queso-jamon-tomate",
    "categoria": "frios",
    "titulo": "Ensalada de Queso, Jamón, Tomate",
    "autor": "",
    "tiempo": "≈15 min",
    "dificultad": "Fácil",
    "imagen": "",
    "ingredientes": [
      "Lechuga",
      "Tomate",
      "Queso feta, fresco, en daditos",
      "Embutido: jamón york, pavo, mortadela, jamón serrano ...troceado",
      "Sal, aceite y vinagre",
      "Y"
    ],
    "pasos": [
      "Se pica la lechuga y se lava bien.",
      "Se escurre bien del agua y se pone en una fuente.",
      "Se lava bien el tomate y se trocea.",
      "Se trocea el embutido.",
      "Se añade el queso.",
      "Se pone todo en la fuente y se aliña con sal, vinagre y aceite en este orden.",
      "* Lo mismo se puede hacer sustituyendo la lechuga por pasta."
    ],
    "tiempoNota": "Tiempo total estimado: 15 min. Elaboración (preparación y cocción): 15 min. Versión principal con lechuga; cortar queso y embutido. La alternativa de pasta requiere cocerla y enfriarla aparte."
  },
  {
    "id": "ensalada-de-tomate-atun-y-pina",
    "categoria": "frios",
    "titulo": "Ensalada de Tomate, Atún y Piña",
    "autor": "",
    "tiempo": "≈10 min",
    "dificultad": "Fácil",
    "imagen": "",
    "ingredientes": [
      "Una bolsa de mezclum de lechugas",
      "Una lata de atún",
      "Un tomate o varios tomatitos cherry",
      "Una rodaja de piña  natural troceada",
      "Sal, aceite y vinagre"
    ],
    "pasos": [
      "Se pone  la lechuga en un bol y se añade el resto de los ingredientes.",
      "Se aliña con sal, aceite y vinagre."
    ],
    "tiempoNota": "Tiempo total estimado: 10 min. Elaboración (preparación y cocción): 10 min. Mezclum preparado, atún en conserva y fruta; lavar y cortar tomate, mezclar y aliñar."
  },
  {
    "id": "ensalada-de-pasta-y-rucula",
    "categoria": "frios",
    "titulo": "Ensalada de Pasta y Ŕúcula",
    "autor": "",
    "tiempo": "≈55 min",
    "dificultad": "Fácil",
    "imagen": "",
    "ingredientes": [
      "Una bolsa de rúcula",
      "Pasta de ensalada",
      "2 latas de atún",
      "Tomate",
      "Queso fresco o quesito",
      "Salmón ahumado o pollo troceado",
      "Se puede añadir manzana troceada y piña",
      "Se puede añadir también algo de lechuga"
    ],
    "pasos": [
      "Se cuece la pasta y se deja enfriar",
      "Una vez fría se mezcla con la rúcula y el resto de los ingredientes.",
      "Se aliña con sal, vinagre y aceite"
    ],
    "tiempoNota": "Tiempo total estimado: 55 min. Elaboración (preparación y cocción): 25 min. Remojo, maceración, enfriado o reposo: 30 min. Calentar agua y cocer pasta mientras se cortan los acompañamientos; enfriado orientativo antes de mezclar."
  },
  {
    "id": "pimientos-rellenos-de-clara",
    "categoria": "frios",
    "titulo": "Pimientos Rellenos",
    "autor": "de Clara",
    "tiempo": "≈25 min",
    "dificultad": "Fácil",
    "imagen": "",
    "ingredientes": [
      "Una tarrina de queso Philadelphia grande",
      "2 latas de atún",
      "5 o 6 palitos de surimi",
      "20 pimientos rojos de bote",
      "Una cebolleta"
    ],
    "pasos": [
      "Se mezcla el queso, el atún y el surimi en un bol. Si se queda muy espeso se añade un chorrito de leche. Se puede batir un poco.",
      "Se rellenan los pimientos y se van colocando sobre una cama de cebolleta y pimientos verdes previamente picados y aliñados.",
      "Se añade el caldo de los pimientos por encima.",
      "Se sirve frío pero no mucho."
    ],
    "tiempoNota": "Tiempo total estimado: 25 min. Elaboración (preparación y cocción): 25 min. Mezclar relleno frío y rellenar unos 20 pimientos; sin horno ni cocción y con ingredientes refrigerados."
  },
  {
    "id": "ensalada-campera",
    "categoria": "frios",
    "titulo": "Ensalada Campera",
    "autor": "",
    "tiempo": "≈1 h 45 min",
    "dificultad": "Fácil",
    "imagen": "",
    "ingredientes": [
      "4 ó 5 patatas medianas",
      "2 latas de atún",
      "1 pimiento rojo y uno verde medianos",
      "1 tomate",
      "Media cebolla o cebolleta",
      "1 huevo duro"
    ],
    "pasos": [
      "Se cuecen las patatas enteras y con piel en la olla a presión durante unos diez minutos en una cacerola unos veinte minutos.",
      "Se pican los pimientos, cebolla, tomate.",
      "Se añade el atún y se reserva el aceite para hacer la vinagreta.",
      "Cuando se hayan cocido las patatas se pelan y se trocean en cuadraditos.",
      "Se mezclan con la verdura y el atún.",
      "Con el aceite de las latas de atún, un chorreón de vinagre, sal y unos 50 ml más de aceite de oliva hacemos una vinagreta.",
      "Lo ponemos por encima de las patatas aún templadas y se mezcla todo bien.",
      "Se mete en la nevera un buen rato hast que esté fría y está listo para comer."
    ],
    "tiempoNota": "Tiempo total estimado: 1 h 45 min. Elaboración (preparación y cocción): 45 min. Remojo, maceración, enfriado o reposo: 1 h. Patatas en olla a presión con calentamiento y despresurización, picado y montaje; una hora orientativa de frío."
  },
  {
    "id": "pastel-de-salmon-de-clara",
    "categoria": "frios",
    "titulo": "Pastel de Salmón",
    "autor": "de Clara",
    "tiempo": "≈2 h 20 min",
    "dificultad": "Fácil",
    "imagen": "",
    "ingredientes": [
      "Trucha, salmón y palometa ahumada.",
      "Rebanadas de pan de molde sin corteza."
    ],
    "pasos": [
      "En una fuente se pone una capa de ahumados, una capa de pan untada con mayonesa por los dos lados, otra capa de ahumados, pan.. así hasta un mínimo de tres capas, siendo la última una de pan.",
      "Se envuelve en papel albal y se mete en la nevera con algo que pese encima.",
      "Cuando esté prensado se unta con mayonesa por todos lados y se adorna."
    ],
    "tiempoNota": "Tiempo total estimado: 2 h 20 min. Elaboración (preparación y cocción): 20 min. Remojo, maceración, enfriado o reposo: 2 h. Montar capas con pan y ahumados, prensar en nevera; se estiman 2 horas de prensado, no fijadas por el original."
  },
  {
    "id": "ensalada-de-arroz",
    "categoria": "frios",
    "titulo": "Ensalada de Arroz",
    "autor": "",
    "tiempo": "≈55 min",
    "dificultad": "Fácil",
    "imagen": "",
    "ingredientes": [
      "Arroz basmati",
      "Tortilla",
      "Jamón york",
      "(Guisantes, gambas...)"
    ],
    "pasos": [
      "Se hace un arroz blanco.",
      "Se hace una tortilla francesa y se trocea.",
      "En un bol se pone el arroz y se añade la tortilla troceada y el jamón cortado finito.",
      "Se remueve todo bien y se añade sal al gusto."
    ],
    "tiempoNota": "Tiempo total estimado: 55 min. Elaboración (preparación y cocción): 35 min. Remojo, maceración, enfriado o reposo: 20 min. Cocer arroz, hacer tortilla y trocear jamón; se estima un enfriado breve para mezclar, sin reposo prolongado obligatorio."
  },
  {
    "id": "huevos-rellenos",
    "categoria": "frios",
    "titulo": "Huevos Rellenos",
    "autor": "",
    "tiempo": "≈1 h 40 min",
    "dificultad": "Fácil",
    "imagen": "",
    "ingredientes": [
      "1 huevo por persona",
      "Atún",
      "Mayonesa",
      "Tomate"
    ],
    "pasos": [
      "En un cazo ponemos agua a hervir con sal.",
      "Cuando hierva añadimos los huevos y los dejamos hervir durante unos 15 minutos.",
      "Pasado este tiempo los retiramos del fuego y los dejamos enfriar.",
      "Una vez fríos, los pelamos y abrimos por la mitad.",
      "Retiramos las yemas y las ponemos en un bol.",
      "Añadimos el atún, mayonesa y un poquito de tomate frito.",
      "Mezclamos y rellenamos los huevos con esta pasta.",
      "Preparamos un poco de mayonesa y cubrimos los huevos con ella.",
      "Adornamos con pimiento rojo y aceitunas.",
      "Metemos en la nevera y servimos frío."
    ],
    "tiempoNota": "Tiempo total estimado: 1 h 40 min. Elaboración (preparación y cocción): 40 min. Remojo, maceración, enfriado o reposo: 1 h. 15 minutos de hervor originales, enfriar para pelar, rellenar y decorar; una hora orientativa de nevera."
  },
  {
    "id": "sopa-al-cuarto-de-hora",
    "categoria": "guisos",
    "titulo": "Sopa al Cuarto de Hora",
    "autor": "",
    "tiempo": "≈50 min",
    "dificultad": "Media",
    "imagen": "",
    "ingredientes": [],
    "pasos": [
      "Cuando hayan cogido color apartaremos los picatostes sobre papel de cocina para que escurran.\n3. Pelar las gambas, reservar los cuerpos al frío y comenzar a dorar las cáscaras en la cacerola anterior. Una vez que estén bien fritas las apartaremos y las desecharemos.Esta parte es opcional)\n4.  En ese mismo aceite rehogamos la cebolla y el jamón picados. Dejaremos rehogar 5 minutos.\n5. Limpiar el rape, retirar la espina y cortar los lomos en trozos más pequeños.\n6. Cubrir entonces con agua y añadir 3 cucharadas de tomate frito.\n7. Mientras el caldo comienza a hervir haremos un “majao” en el mortero con la sal, los ajos, el azafrán, las yemas de los huevos cocidos y el vino blanco. Lo echaremos sobre la sopa junto con el arroz y los guisantes. Cocinaremos a fuego medio durante 10 minutos; desespumando si fuera preciso.\n8. Pasado este tiempo incorporar las almejas bien lavadas, el rape troceado y los cuerpos de las gambas. Mantener a fuego medio-alto durante 5 minutos.\n9.Como guarnición picaremos las claras de los huevos y las mezclaremos con el perejil picado y los dados de pan frito."
    ],
    "tiempoNota": "Tiempo total estimado: 50 min. Elaboración (preparación y cocción): 50 min. Provisional; ficha pendiente de aclarar. Orientación provisional: limpiar pescado y gambas, preparar base, 5 minutos de sofrito más 10 de arroz y 5 de pescado. Faltan ingredientes e inicio."
  },
  {
    "id": "crema-de-calabacin",
    "categoria": "guisos",
    "titulo": "Crema de Calabacín",
    "autor": "",
    "tiempo": "≈45 min",
    "dificultad": "Fácil",
    "imagen": "",
    "ingredientes": [
      "3 calabacines",
      "1  cebolla",
      "1 puerro",
      "7 u 8 quesitos",
      "3 ó 4 patatas"
    ],
    "pasos": [
      "Pelar y trocear la verdura.",
      "Poner un poco de aceite en la olla y sofreír todo.",
      "Añadir agua, sal y avecrem.",
      "Cocer todo en la olla unos 15’.",
      "Pasado este tiempo abrir la olla, y triturar con la batidora y los quesitos."
    ],
    "tiempoNota": "Tiempo total estimado: 45 min. Elaboración (preparación y cocción): 45 min. Pelar y trocear, sofreír, calentar y despresurizar la olla, 15 minutos de cocción indicados y triturado."
  },
  {
    "id": "gazpachuelo-o-sopa-de-mayonesa-de-la-abuela-carmen",
    "categoria": "guisos",
    "titulo": "Gazpachuelo o Sopa de Mayonesa",
    "autor": "de la Abuela Carmen",
    "tiempo": "≈35 min",
    "dificultad": "Media",
    "imagen": "",
    "ingredientes": [
      "Tres o cuatro patatas dependiendo de los comensales",
      "Agua",
      "Sal",
      "Una pastilla de avecrem",
      "Mayonesa"
    ],
    "pasos": [
      "Ponemos a hervir agua en una cacerola y añadimos sal y avecrem.",
      "Pelamos las patatas y las cortamos en rodajas gruesas.",
      "Cuando el agua esté hirviendo añadimos las patatas y las dejamos cocer hasta que estén blandas, unos 10- 15 minutos.Sacamos las patatas aparte.",
      "Preparamos una mayonesa.",
      "En una sopera ponemos la mayonesa y poco a poco vamos echando el agua no muy caliente de las patatas y batimos con la minipimer.",
      "Añadimos las patatas y servimos."
    ],
    "tiempoNota": "Tiempo total estimado: 35 min. Elaboración (preparación y cocción): 35 min. Pelar patatas, cocerlas 10–15 minutos y ligar mayonesa con caldo templado para no cortarla; sin fumet largo."
  },
  {
    "id": "sopa-de-mayonesa-de-la-abuela-cheli",
    "categoria": "guisos",
    "titulo": "Sopa de Mayonesa",
    "autor": "de la Abuela Cheli",
    "tiempo": "≈45 min",
    "dificultad": "Media",
    "imagen": "",
    "ingredientes": [
      "Mayonesa",
      "½ kg de gambas arroceras",
      "Rape o pescada",
      "Una pastilla de avecrem"
    ],
    "pasos": [
      "Ponemos  a hervir agua en una cacerola y añadimos sal.",
      "Cuando el agua esté hirviendo añadimos cocemos las gambas con el pescado y  con la pastilla de avecrem de pescado unos 10- 15 minutos.",
      "Cuando el pescado y las gambas estén frías las pelamos y reservamos.",
      "Preparamos una mayonesa.",
      "En una sopera ponemos la mayonesa y poco a poco vamos echando el agua no muy caliente de las gambas y el pescado y batimos con la minipimer.",
      "Añadimos las gambas y servimos.Se puede tomar caliente o fría."
    ],
    "tiempoNota": "Tiempo total estimado: 45 min. Elaboración (preparación y cocción): 45 min. Cocer pescado y gambas 10–15 minutos, templar y limpiar, preparar mayonesa e incorporarla gradualmente."
  },
  {
    "id": "lentejas",
    "categoria": "guisos",
    "titulo": "Lentejas",
    "autor": "",
    "tiempo": "≈13 h",
    "dificultad": "Fácil",
    "imagen": "",
    "ingredientes": [
      "½ Kg de lentejas que se mantienen en remojo la noche anterior",
      "½ cebolla",
      "3 ó 4 dientes de ajo",
      "1 tomate",
      "1 zanahoria",
      "1 trozo de pimiento",
      "1 hoja de laurel",
      "½ vaso de aceite",
      "1 hueso de jamón",
      "1 pastilla de avecrem",
      "Chorizo",
      "1 cucharada de pimentón"
    ],
    "pasos": [
      "Se lavan las lentejas, siempre con agua fría y se ponen en una olla con agua.",
      "Le damos un hervor durante 5’.",
      "Añadimos todos los ingredientes y los tenemos en la olla a presión unos 20’. También se pueden cocinar  en la cacerola una hora más o menos moviéndolas con frecuencia para que no se agarren."
    ],
    "tiempoNota": "Tiempo total estimado: 13 h. Elaboración (preparación y cocción): 1 h. Remojo, maceración, enfriado o reposo: 12 h. Método de olla a presión: hervor previo de 5 minutos y cocción de 20, más preparación y gestión de presión. Remojo nocturno estimado en 12 horas."
  },
  {
    "id": "alubias",
    "categoria": "guisos",
    "titulo": "Alubias",
    "autor": "",
    "tiempo": "≈13 h",
    "dificultad": "Fácil",
    "imagen": "",
    "ingredientes": [
      "½ Kg de alubias que se mantienen en remojo la noche anterior",
      "½ cebolla",
      "3 ó 4 dientes de ajo",
      "1 tomate",
      "1 zanahoria",
      "1 trozo de pimiento",
      "1 hoja de laurel",
      "½ vaso de aceite",
      "1 hueso de jamón",
      "1 pastilla de avecrem",
      "Chorizo",
      "1 cucharada de pilar n y azafrán"
    ],
    "pasos": [
      "Se lavan las alubias , siempre con agua fría y se ponen en una olla con agua.",
      "Le damos un hervor durante 5’, tiramos el agua y volvemos a echar agua fría.",
      "Añadimos todos los ingredientes y los tenemos en la olla a presión unos 20’."
    ],
    "tiempoNota": "Tiempo total estimado: 13 h. Elaboración (preparación y cocción): 1 h. Remojo, maceración, enfriado o reposo: 12 h. Método de presión con hervor previo de 5 minutos y 20 de cocción; calentamiento y liberación de presión incluidos. Remojo nocturno estimado en 12 horas."
  },
  {
    "id": "alubias-de-miguel-angel",
    "categoria": "guisos",
    "titulo": "Alubias",
    "autor": "de Miguel Angel",
    "tiempo": "≈13 h",
    "dificultad": "Fácil",
    "imagen": "",
    "ingredientes": [
      "1 cabeza de ajo entera",
      "1 cebolla entera",
      "2 hojas de laurel",
      "Tocineta o punta de jamón ibérico",
      "Alubias en remojo 12 horas"
    ],
    "pasos": [
      "Se ponen en la olla todos los ingredientes con agua y sal y se cuecen durante unos 30’."
    ],
    "tiempoNota": "Tiempo total estimado: 13 h. Elaboración (preparación y cocción): 1 h. Remojo, maceración, enfriado o reposo: 12 h. 30 minutos en olla según el original, más preparación, calentamiento y liberación de presión; remojo de 12 horas explícito."
  },
  {
    "id": "cocido",
    "categoria": "guisos",
    "titulo": "Cocido",
    "autor": "",
    "tiempo": "≈13 h 30 min",
    "dificultad": "Fácil",
    "imagen": "",
    "ingredientes": [
      "½ kg de garbanzos",
      "Un pedazo de tocino salado gordo ( un par de trozos)",
      "1 hueso  canilla y otro de vaca",
      "Una punta  de jamón",
      "Dos trozos de chorizo y morcilla (opcional)",
      "½ kg de morcillo y cuarto trasero de pollo",
      "Sal"
    ],
    "pasos": [
      "Dejar los garbanzos en remojo la noche anterior.",
      "Se ponen los garbanzos en la olla con agua caliente hasta cubrirlos ligeramente.",
      "Se añade el tocino, los huesos y la carne y se tiene en la olla hirviendo durante unos 15’.",
      "Se le va quitando la espuma con la espumadera.",
      "Se saca el caldo que se ha formado y se cuela en otra cacerola.",
      "Se vuelve a echar agua en la olla con los huesos y carne y se cubre algo más que antes.",
      "Se cierra la olla y se tiene hirviendo unos 20’.",
      "Transcurrido este tiempo, se abre la olla. Se le añade el chorizo y la morcilla, se cierra y se tiene hirviendo unos 5’.(esto es opcional)",
      "Se mezclan los dos caldos dejando un poco con los garbanzos...",
      "Servir la sopa con fideos de primer plato y de segundo los garbanzos con la carne.",
      "Se pueden añadir patatas cocidas, judías verdes."
    ],
    "tiempoNota": "Tiempo total estimado: 13 h 30 min. Elaboración (preparación y cocción): 1 h 30 min. Remojo, maceración, enfriado o reposo: 12 h. Hervor de 15 minutos, presión de 20 y 5, manejo de caldos, preparación y fideos; remojo nocturno estimado en 12 horas."
  },
  {
    "id": "potaje-de-garbanzos",
    "categoria": "guisos",
    "titulo": "Potaje de Garbanzos",
    "autor": "",
    "tiempo": "≈13 h",
    "dificultad": "Fácil",
    "imagen": "",
    "ingredientes": [
      "½ kg de garbanzos previamente remojados",
      "½ cebolla",
      "Siete dientes de ajos sin pelar",
      "2 tomates",
      "1 pimiento",
      "1 hoja de laurel",
      "1 cucharada de pimentón de la Vera",
      "1 trozo de tocino",
      "Chorizo",
      "Morcilla",
      "Avecrem",
      "Aceite",
      "Sal"
    ],
    "pasos": [
      "Ponemos todos los ingredientes en la olla menos la morcilla y el chorizo  y cocemos durante unos 20’.",
      "Pasado este tiempo, abrir la olla y añadir un chorreón de tomate frito.Se le da un hervor, se añade el chorizo y la morcilla y se tiene unos 5 minutos para que suelten el sabor.",
      "Se sirve caliente."
    ],
    "tiempoNota": "Tiempo total estimado: 13 h. Elaboración (preparación y cocción): 1 h. Remojo, maceración, enfriado o reposo: 12 h. 20 minutos de olla y 5 de acabado, más preparación y presión; se parte de garbanzos secos con remojo previo orientativo de 12 horas."
  },
  {
    "id": "patatas-con-mejillones",
    "categoria": "guisos",
    "titulo": "Patatas con Mejillones",
    "autor": "",
    "tiempo": "≈50 min",
    "dificultad": "Media",
    "imagen": "",
    "ingredientes": [
      "1kg de patatas 3/4 de mejillones",
      "1 cebolla",
      "3 dientes de ajo",
      "2 hojas de laurel",
      "½ guindilla",
      "Vino blanco"
    ],
    "pasos": [
      "Se sofríe la cebolla con el ajo.",
      "Se marean las patatas en rodajas gordas.",
      "Se le echa el vino y el laurel y cuando las patatas estén casi tiernas se le echa el pimentón, perejil, guindilla y los mejillones( limpios).",
      "Se tapa y se deja cocer."
    ],
    "tiempoNota": "Tiempo total estimado: 50 min. Elaboración (preparación y cocción): 50 min. Limpiar mejillones y cortar verduras, sofreír y guisar patatas antes de abrir el marisco; su punto condiciona el final."
  },
  {
    "id": "sopa",
    "categoria": "guisos",
    "titulo": "Sopa",
    "autor": "",
    "tiempo": "≈1 h",
    "dificultad": "Fácil",
    "imagen": "",
    "ingredientes": [
      "1 cuarto trasero de pollo",
      "1 hueso de jamón",
      "4 ó 5 zanahorias",
      "1 ó 2 puerros",
      "Avecrem"
    ],
    "pasos": [
      "Se pone todo en la olla a presión con agua y se tiene una media hora o más.",
      "Pasado este tiempo abrir la olla y añadir fideos.",
      "Es mejor cocer los fideos en una cacerola aparte con un poco de la sopa."
    ],
    "tiempoNota": "Tiempo total estimado: 1 h. Elaboración (preparación y cocción): 1 h. Preparar verduras, 30 minutos o más en olla, calentamiento y despresurización; fideos al final."
  },
  {
    "id": "paella",
    "categoria": "guisos",
    "titulo": "Paella",
    "autor": "",
    "tiempo": "≈1 h 30 min",
    "dificultad": "Media",
    "imagen": "",
    "ingredientes": [
      "2 Tomates",
      "5 pimientos pequeños",
      "Dos dientes de ajo",
      "½ cebolla",
      "Pollo troceado",
      "Laurel",
      "Pimentón",
      "Azafrán",
      "Arroz",
      "Un vaso de vino"
    ],
    "pasos": [
      "Sofreímos la verdura, ajo, cebolla, pimiento y tomate previamente troceado.",
      "Se apartan los ajos y se majan en el mortero con sal.",
      "Dorar el pollo con el sofrito y añadir vino y una hoja de laurel.",
      "Pasar todo a la olla junto con el ajo del mortero y agua.",
      "Se tiene unos 20’ en la olla.",
      "En una paellera se vierte el contenido de la olla y se añade el arroz, rectificando de sal, vino, pimentón, chorizo…",
      "Dejar reposar unos 5’ y servir."
    ],
    "tiempoNota": "Tiempo total estimado: 1 h 30 min. Elaboración (preparación y cocción): 1 h 30 min. Provisional; ficha pendiente de aclarar. Incluye preparación y sofrito, 20 minutos de olla más gestión de presión, unos 18 de arroz inferidos del comparable y 5 de reposo; falta esa cocción en el original."
  },
  {
    "id": "arroz-blanco",
    "categoria": "guisos",
    "titulo": "Arroz Blanco",
    "autor": "",
    "tiempo": "≈30 min",
    "dificultad": "Fácil",
    "imagen": "",
    "ingredientes": [
      "Dos puñados de arroz por persona",
      "Dos o tres dientes de ajo",
      "Avecrem",
      "Sal",
      "Aceite",
      "Agua"
    ],
    "pasos": [
      "En una sartén dorar los dientes de ajo con un poco de aceite en el fondo.",
      "Añadir el arroz y sofreir unos segundos.",
      "Cubrir con agua y desmenuzar una pastilla de avecrem.",
      "Cuando el agua se consuma añadir más e ir rectificando de agua y sal hasta que el arroz esté al gusto.",
      "Servir sólo o con tomate frito. Se puede acompañar de un huevo frito, salchichas..."
    ],
    "tiempoNota": "Tiempo total estimado: 30 min. Elaboración (preparación y cocción): 30 min. Dorar ajo, calentar agua y cocer arroz hasta su punto; referencia de cacerola, no del método exprés."
  },
  {
    "id": "pisto",
    "categoria": "guisos",
    "titulo": "Pisto",
    "autor": "",
    "tiempo": "≈1 h",
    "dificultad": "Fácil",
    "imagen": "",
    "ingredientes": [
      "2 calabacines",
      "2 berenjenas",
      "1 cebolla",
      "4  pimientos verdes",
      "4 ó 5 tomates",
      "Tomate frito",
      "Aceite",
      "Sal"
    ],
    "pasos": [
      "Pelar y trocear la verdura.",
      "Freír  cada cosa por separado.",
      "En una sartén la cebolla, el pimiento y el tomate y en otra el calabacín y la berenjena.",
      "Se van poniendo en un escurridor para eliminar el aceite.",
      "Poner todo en una cacerola y añadir un buen chorreón de tomate Orlando y avecrem.",
      "Hervir un rato y servir con patatas fritas y un huevo frito."
    ],
    "tiempoNota": "Tiempo total estimado: 1 h. Elaboración (preparación y cocción): 1 h. Picar bastantes verduras, freír en dos sartenes, escurrir y terminar juntas; no incluye guarniciones opcionales de huevo y patatas."
  },
  {
    "id": "sopa-bouillabaisse-abuela-carmen",
    "categoria": "guisos",
    "titulo": "Sopa Bouillabaisse",
    "autor": "Abuela Carmen",
    "tiempo": "≈1 h",
    "dificultad": "Media",
    "imagen": "",
    "ingredientes": [
      "Rape o pescada, ¼ almejas, ¼ gambas",
      "Un puñado de almendras crudas",
      "Cebolla, tomate, pimiento y ajo, una patata y zanahorias",
      "Una rama de perejil",
      "Dos pastillas de avecrem"
    ],
    "pasos": [
      "Cocemos el pescado y dos pastillas de avecrem, la cebolla cortada en cascos y la patata troceada, el pimiento, el tomate y la zanahoria con un chorreón de aceite.",
      "Cuando el pescado esté tierno se aparta y se saca el pescado a un plato para limpiarlo y desmenuzar.",
      "Se pasa toda la verdura y se cuela por un chino y el caldo que queda se cuela también.",
      "Se mezcla todo y se pone a hervir.",
      "Las almendras se cuecen solas hasta que estén tiernas se baten y se añaden a la sopa ya colada."
    ],
    "tiempoNota": "Tiempo total estimado: 1 h. Elaboración (preparación y cocción): 1 h. Cocer pescado, verduras y almendras, limpiar, triturar, colar y dar hervor final; varios procesos coordinados."
  },
  {
    "id": "espaguetis-carbonara",
    "categoria": "pasta",
    "titulo": "Espaguetis Carbonara",
    "autor": "",
    "tiempo": "≈25 min",
    "dificultad": "Media",
    "imagen": "",
    "ingredientes": [
      "Medio paquete de espaguetis",
      "Bacon",
      "1 huevo por persona",
      "1 paquete de queso rallado",
      "Aceite y sal"
    ],
    "pasos": [
      "Se cuecen los espaguetis en abundante agua con sal durante unos 8-10 minutos.",
      "Pasado este tiempo, se cuela la pasta y se reserva.",
      "En una sartén se fríe el bacon troceado.",
      "Se mezcla con la pasta bien.",
      "En un bol se baten los huevos, se salan y se añade el queso rallado.",
      "Se mezcla todo bien y se añade a los espaguetis calientes pero fuera del fuego.",
      "Se puede añadir un poquito de pimienta."
    ],
    "tiempoNota": "Tiempo total estimado: 25 min. Elaboración (preparación y cocción): 25 min. Calentar agua, cocer 8–10 minutos y preparar bacon y huevo; terminar fuera del fuego requiere controlar la emulsión."
  },
  {
    "id": "espaguetis-con-cebolla-y-jamon",
    "categoria": "pasta",
    "titulo": "Espaguetis con Cebolla y Jamón",
    "autor": "",
    "tiempo": "≈30 min",
    "dificultad": "Fácil",
    "imagen": "",
    "ingredientes": [
      "Medio paquete de espaguetis",
      "1 cebolla",
      "Jamón serrano troceado",
      "Aceite y sal"
    ],
    "pasos": [
      "Se cuecen los espaguetis en abundante agua con sal durante unos 8-10 minutos.",
      "Pasado este tiempo, se cuela la pasta y se reserva.",
      "En una sartén se fríe la cebolla bien picada y una vez dorada se añade el jamón.",
      "Se dora todo junto unos minutos y luego añadimos la pasta a la sartén.",
      "Mantenemos en el fuego unos minutos y removemos bien."
    ],
    "tiempoNota": "Tiempo total estimado: 30 min. Elaboración (preparación y cocción): 30 min. Pasta y cebolla se preparan parcialmente en paralelo; picar, dorar y saltear con jamón."
  },
  {
    "id": "macarrones-con-tomate-y-chorizo",
    "categoria": "pasta",
    "titulo": "Macarrones con Tomate y Chorizo",
    "autor": "",
    "tiempo": "≈45 min",
    "dificultad": "Fácil",
    "imagen": "",
    "ingredientes": [
      "Medio paquete de macarrones",
      "1 cebolla",
      "1 pimiento",
      "Chorizo",
      "Tomate frito",
      "Queso rallado",
      "Aceite y sal"
    ],
    "pasos": [
      "Se cuecen los macarrones en abundante agua con sal durante unos 8-10 minutos.",
      "Pasado este tiempo, se cuela la pasta y se reserva.",
      "Picamos la cebolla y el pimiento.",
      "En una sartén se fríe la cebolla y una vez dorada se añade el pimiento.",
      "Se dora todo junto unos minutos y luego añadimos el tomate frito.",
      "Mantenemos en el fuego, removemos bien y añadimos un chorrito de vino y el chorizo troceado unos 10 minutos.",
      "En una fuente de horno ponemos la pasta y el tomate y cubrimos con queso rallado.",
      "Precalentamos el horno y gratinamos la pasta."
    ],
    "tiempoNota": "Tiempo total estimado: 45 min. Elaboración (preparación y cocción): 45 min. Pasta 8–10 minutos, sofrito, 10 minutos de salsa con vino y chorizo y gratinado, con preparación y precalentado."
  },
  {
    "id": "espaguetis-con-ajo-y-aceite",
    "categoria": "pasta",
    "titulo": "Espaguetis con Ajo y Aceite",
    "autor": "",
    "tiempo": "≈25 min",
    "dificultad": "Fácil",
    "imagen": "",
    "ingredientes": [
      "Medio paquete de espaguetis",
      "4 ó 5 dientes de ajo",
      "Aceite"
    ],
    "pasos": [
      "Se cuece la pasta en abundante agua con sal durante unos 8-10 minutos.",
      "Pasado este tiempo, se cuela la pasta y se reserva.",
      "Pelamos los dientes de ajos y picamos.",
      "En una sartén se fríen los dientes de ajo.",
      "Se mezcla la pasta con los ajos en la sartén.",
      "Mantenemos en el fuego unos cinco minutos."
    ],
    "tiempoNota": "Tiempo total estimado: 25 min. Elaboración (preparación y cocción): 25 min. Cocción de pasta 8–10 minutos, ajo y salteado final de 5; agua y picado incluidos."
  },
  {
    "id": "espaguetis-bolognesa",
    "categoria": "pasta",
    "titulo": "Espaguetis Bolognesa",
    "autor": "",
    "tiempo": "≈40 min",
    "dificultad": "Fácil",
    "imagen": "",
    "ingredientes": [
      "Medio paquete de espaguetis",
      "½  kg de carne picada",
      "½  cebolla",
      "1 pimiento",
      "1 diente de ajo",
      "Tomate frito",
      "Queso rallado",
      "Aceite y sal"
    ],
    "pasos": [
      "Se cuece la pasta en abundante agua con sal durante unos 8-10 minutos.",
      "Pasado este tiempo, se cuela la pasta y se reserva.",
      "Picamos la cebolla y el pimiento.",
      "En una sartén se fríe la cebolla y una vez dorada se añade el pimiento.",
      "En un bol ponemos la carne picada y  la salamos.",
      "Una vez dorada la cebolla añadimos la carne picada y cuando deje de estar cruda añadimos un chorreón de vino.",
      "Se dora todo junto unos minutos y luego añadimos el tomate frito.",
      "Mantenemos en el fuego y removemos bien.",
      "En una fuente ponemos la pasta y el tomate y cubrimos con queso rallado."
    ],
    "tiempoNota": "Tiempo total estimado: 40 min. Elaboración (preparación y cocción): 40 min. Versión familiar con tomate ya frito y sofrito corto; no se traslada el tiempo de un ragú de varias horas."
  },
  {
    "id": "espaguetis-con-gambas-y-ajo",
    "categoria": "pasta",
    "titulo": "Espaguetis con Gambas y Ajo",
    "autor": "",
    "tiempo": "≈40 min",
    "dificultad": "Fácil",
    "imagen": "",
    "ingredientes": [
      "Espaguettis",
      "300 grs de gambas frescas",
      "3 ó 4 dientes de ajo",
      "Aceite"
    ],
    "pasos": [
      "Se cuecen las gambas en agua con sal 10 minutos.",
      "Una vez cocidas se sacan y se cuela el agua.",
      "En ese agua se cuecen los espaguetis.",
      "Se sacan del agua cuando estén.",
      "En una sartén  con un poco de aceite se doran los dientes de ajo.",
      "Se añaden las gambas a la sartén y se marean un poco.",
      "Se añaden los espaguetis y se marea todo junto un poco.",
      "Están listos para servir."
    ],
    "tiempoNota": "Tiempo total estimado: 40 min. Elaboración (preparación y cocción): 40 min. Los 10 minutos iniciales de gambas y la pasta posterior son consecutivos; pelado, colado y salteado incluidos."
  },
  {
    "id": "ensalada-de-pasta",
    "categoria": "pasta",
    "titulo": "Ensalada de Pasta",
    "autor": "",
    "tiempo": "≈25 min",
    "dificultad": "Fácil",
    "imagen": "",
    "ingredientes": [
      "Pasta",
      "Tomate natural",
      "Queso feta o fresco, en daditos",
      "Embutido: jamón york, pavo, mortadela, jamón serrano… troceado",
      "Sal, aceite y vinagre",
      "Rúcula (opcional)"
    ],
    "pasos": [
      "Se cuece la pasta en agua hirviendo con sal y un chorreón de aceite durante unos 8 minutos.",
      "Se escurre bien del agua y se pone en una fuente.",
      "Se lava bien el tomate y se trocea.",
      "Se trocea el embutido.",
      "Se añade el queso.",
      "Se pone todo en la fuente y se aliña con sal, vinagre y aceite en este orden."
    ],
    "tiempoNota": "Tiempo total estimado: 25 min. Elaboración (preparación y cocción): 25 min. Cocer pasta y cortar acompañamientos en paralelo; el original no exige nevera, se sirve recién aliñada."
  },
  {
    "id": "ensalada-de-pasta-con-gambas",
    "categoria": "pasta",
    "titulo": "Ensalada de Pasta con Gambas",
    "autor": "",
    "tiempo": "≈1 h 25 min",
    "dificultad": "Fácil",
    "imagen": "",
    "ingredientes": [
      "Pasta",
      "Mayonesa",
      "Gambas cocidas",
      "Media lata de maíz",
      "Aceite y Sal"
    ],
    "pasos": [
      "Se cuece la pasta en agua hirviendo con sal y un chorreón de aceite durante unos 8 minutos.",
      "Se escurre bien del agua y se pone en una fuente. Lo rociamos con un poco de aceite.",
      "Se añade el maíz, las gambas y la mayonesa y se revuelve bien.",
      "Se mete en la nevera y se deja enfriar."
    ],
    "tiempoNota": "Tiempo total estimado: 1 h 25 min. Elaboración (preparación y cocción): 25 min. Remojo, maceración, enfriado o reposo: 1 h. Se parte de gambas ya cocidas; cocción de pasta y montaje, más una hora orientativa de frío."
  },
  {
    "id": "fideos-amarillos",
    "categoria": "pasta",
    "titulo": "Fideos Amarillos",
    "autor": "",
    "tiempo": "≈1 h 30 min",
    "dificultad": "Media",
    "imagen": "",
    "ingredientes": [
      "¼ de chirlas",
      "¼ de calamares",
      "¼ de gambas arroceras",
      "2 dientes de ajo",
      "3 o 4 tomates",
      "1 pimiento verde",
      "½ cebolla",
      "Azafrán",
      "1 cucharada de Pimentón de la Vera",
      "Espaguetis",
      "Aceite y Sal"
    ],
    "pasos": [
      "Se cuecen las chirlas, gambas y calamares todo junto con sal durante unos 10’.",
      "Se hace un sofrito con el ajo,la cebolla, pimiento y tomates y se pasa por el chino.",
      "Se cuela el agua de cocer las gambas, chirlas y calamares y se reserva.",
      "Se pelan las gambas, chirlas y calamares y se reservan también.Algunas de las cabezas de gambas se sofríen un poco con aceite y se pasan por la minipimer con un poco de caldo y vino.",
      "Se añade el sofrito al agua previamente colada y se cuece todo junto con medio vaso de vino blanco, el laurel, pimentón y el avecrem. Se mete en la olla unos veinte minutos.",
      "Añadimos las gambas, chirlas y calamares y cocemos un rato.",
      "Cuando haya hervido un poco y justo antes de comer cocer los espaguetis en ese caldo."
    ],
    "tiempoNota": "Tiempo total estimado: 1 h 30 min. Elaboración (preparación y cocción): 1 h 30 min. Limpiar marisco, 10 minutos de cocción, sofrito y colado, 20 de olla con su presión y pasta cocida al final."
  },
  {
    "id": "lasagna",
    "categoria": "pasta",
    "titulo": "Lasagna",
    "autor": "",
    "tiempo": "≈1 h 5 min",
    "dificultad": "Media",
    "imagen": "",
    "ingredientes": [
      "6 Placas de lasaña El Pavo",
      "Carne picada ¾ o 1 kg",
      "Tomate triturado natural",
      "Tomate frito",
      "Bechamel",
      "Cebolla"
    ],
    "pasos": [
      "Se ponen las placas en remojo mientras se cocinan el resto de los ingredientes.",
      "Se pica la cebolla finita y se dora.",
      "Se salpimenta la carne y se añade al sofrito. Se sofrie un ratito hasta que la carne esté hecha. Se añade el tomate triturado y cuatro cucharadas de tomate frito.",
      "Se sofríe un poquito todo junto durante unos 10 minutos.",
      "Se sacan las placas del remojo y se secan.",
      "Se cubre el fondo de una fuente con una capa de pasta otra de carne, otra de pasta y otra de carne y se cubre con una capa final de pasta.",
      "Se cubre con bechamel( se puede hacer o comprar hecha).",
      "Se le pone queso rallado por encima y se mete en el horno hasta que se gratine."
    ],
    "tiempoNota": "Tiempo total estimado: 1 h 5 min. Elaboración (preparación y cocción): 1 h 5 min. Láminas de remojo y relleno corto de carne; incluye bechamel casera preparada en paralelo y gratinado. Comprarla hecha reduce trabajo."
  },
  {
    "id": "canelones-abuela-carmen",
    "categoria": "pasta",
    "titulo": "Canelones",
    "autor": "Abuela Carmen",
    "tiempo": "≈1 h 5 min",
    "dificultad": "Media",
    "imagen": "",
    "ingredientes": [
      "1\\2 kg carne picada ternera",
      "1 bote de paté ibérico",
      "Ajo, sal y pimienta",
      "Tomate frito (opcional)"
    ],
    "pasos": [
      "Se dora la carne aliñada con sal ajo y pimienta, no mucho.",
      "Se añade fuera del fuego el paté y se remueve bien.",
      "Se cuecen los canelones y se rellenan con la mezcla.( se puede añadir un poquito de tomate para que quede más jugoso).",
      "Se cubre una fuente con un poquito de tomate( esto es opcional) y se van poniendo los canelones.",
      "Se hace una bechamel y se le echa por encima a los canelones con queso rallado y se gratina."
    ],
    "tiempoNota": "Tiempo total estimado: 1 h 5 min. Elaboración (preparación y cocción): 1 h 5 min. Provisional; ficha pendiente de aclarar. Dorar carne, cocer y rellenar pasta, hacer bechamel y gratinar; no es el ragú largo del comparable. Faltan ingredientes en la ficha."
  },
  {
    "id": "canelones-abuela-cheli",
    "categoria": "pasta",
    "titulo": "Canelones",
    "autor": "Abuela Cheli",
    "tiempo": "≈45 min",
    "dificultad": "Media",
    "imagen": "",
    "ingredientes": [
      "¼ de Carne picada",
      "½ Cebolla",
      "Tomate frito",
      "Canelones"
    ],
    "pasos": [
      "Se adereza la carne con un poco de sal.",
      "En una sartén con un poco de aceite se dora la cebolla.",
      "Se añade la carne picada  y se le echa un poquito de tomate. Se marea durante unos minutos hasta que la carne esté hecha.",
      "En una cacerola se cuecen los canelones según las indicaciones del envase.",
      "Una vez cocidos y secos los canelones se extienden en un paño limpio y se van rellenando con la masa y enrollando."
    ],
    "tiempoNota": "Tiempo total estimado: 45 min. Elaboración (preparación y cocción): 45 min. Relleno corto con tomate frito y enrollado manual; el original termina al rellenar y no prescribe bechamel ni gratinado."
  },
  {
    "id": "tortilla-francesa",
    "categoria": "huevos",
    "titulo": "Tortilla Francesa",
    "autor": "",
    "tiempo": "≈10 min",
    "dificultad": "Fácil",
    "imagen": "",
    "ingredientes": [
      "1 o 2 huevos",
      "aceite",
      "sal"
    ],
    "pasos": [
      "Cubrir el fondo de una sartén con un poquito de aceite.",
      "Batir un huevo con sal.",
      "Cuando el aceite esté caliente, verter el huevo batido y dejar que se cuaje un poquito.",
      "Con una espumadera doblar la tortilla y cuando el huevo esté cuajado servir en un plato.",
      "Al huevo se le puede añadir queso, jamón…"
    ],
    "tiempoNota": "Tiempo total estimado: 10 min. Elaboración (preparación y cocción): 10 min. Batir, calentar sartén, cuajar y plegar; sin rellenos elaborados."
  },
  {
    "id": "tortilla-de-patatas",
    "categoria": "huevos",
    "titulo": "Tortilla de Patatas",
    "autor": "",
    "tiempo": "≈50 min",
    "dificultad": "Media",
    "imagen": "",
    "ingredientes": [
      "5 o 6 huevos",
      "5 o 6 patatas",
      "Cebolla (opcional)",
      "Aceite",
      "Sal"
    ],
    "pasos": [
      "Se pelan las patatas, se cortan en rodajas finitas o en cuadraditos.",
      "Se salan y se fríen en abundante aceite (se puede añadir la cebolla).",
      "Cuando estén doradas se sacan y se escurren bien del aceite.",
      "En un bol se baten bien los huevos y se echa un poquito de sal.",
      "Retiramos el aceite de freír las patatas de la sartén y dejamos un poquito que cubra el fondo.",
      "Añadimos la mezcla de las patatas con el huevo y dejamos que se cuaje la mezcla un poco.",
      "Con otro plato o con un vuelca tortillas le damos la vuelta y lo tenemos al fuego un poco más dependiendo de cómo nos guste la tortilla muy cuajada o poco cuajada.",
      "Servir en un plato y dividir entre el número de comensales."
    ],
    "tiempoNota": "Tiempo total estimado: 50 min. Elaboración (preparación y cocción): 50 min. Pelar y freír 5–6 patatas, escurrir, mezclar y voltear; dificultad por el giro y el punto de cuajado."
  },
  {
    "id": "huevos-fritos",
    "categoria": "huevos",
    "titulo": "Huevos Fritos",
    "autor": "",
    "tiempo": "≈10 min",
    "dificultad": "Fácil",
    "imagen": "",
    "ingredientes": [
      "Un huevo por persona",
      "Aceite",
      "Sal"
    ],
    "pasos": [
      "Se pone bastante aceite en una sartén y cuando esté caliente se casca un huevo y se fríe hasta que la clara esté blanca y la yema no esté muy cruda.",
      "Se escurre de aceite y se pone en un plato.",
      "Se sirve con patatas fritas, jamón o chorizo."
    ],
    "tiempoNota": "Tiempo total estimado: 10 min. Elaboración (preparación y cocción): 10 min. Calentar aceite y freír una tanda doméstica; las patatas y el chorizo son acompañamientos opcionales no incluidos."
  },
  {
    "id": "huevos-con-bechamel",
    "categoria": "huevos",
    "titulo": "Huevos con Bechamel",
    "autor": "",
    "tiempo": "≈1 h",
    "dificultad": "Media",
    "imagen": "",
    "ingredientes": [
      "1 huevo duro por persona",
      "Jamón serrano picado",
      "Leche",
      "Cebolla",
      "Queso rallado"
    ],
    "pasos": [
      "Se cuecen los huevos duros durante 15 minutos y se dejan enfriar.",
      "Cuando estén fríos se pelan y se saca la yema.",
      "Se hace una masa con la yema, el jamón y un poquito de leche.",
      "Se cortan los huevos por la mitad por la parte más ancha y se van rellenando con la mezcla.",
      "Se hace una bechamel clarita con un poco de cebolla dorada.",
      "Se ponen los huevos en una fuente y se vierte por encima la bechamel. Se espolvorea con el queso rallado y se gratina en el horno."
    ],
    "tiempoNota": "Tiempo total estimado: 1 h. Elaboración (preparación y cocción): 1 h. 15 minutos de huevos y enfriado para pelar; rellenado, bechamel y gratinado, con tareas en paralelo."
  },
  {
    "id": "huevos-en-salsa-amarilla",
    "categoria": "huevos",
    "titulo": "Huevos en Salsa Amarilla",
    "autor": "",
    "tiempo": "≈1 h 5 min",
    "dificultad": "Media",
    "imagen": "",
    "ingredientes": [
      "1 huevo por persona",
      "Jamón picado",
      "Harina",
      "1 diente de ajo",
      "Azafrán (o colorante)",
      "Aceite"
    ],
    "pasos": [
      "Se cuecen los huevos durante 15 minutos y se dejan enfriar.",
      "Cuando estén fríos se pelan y se les saca la yema.",
      "Se hace una masa con con la yema, el jamón y un poquito de leche.",
      "Se cortan los huevos por la mitad y se rellenan con la masa anterior.",
      "Se pasan los huevos por harina y se fríen en aceite.",
      "Una vez fritos se reservan.",
      "Se majan tres dientes de ajo en el mortero con sal y un poquito de agua.",
      "En una olla o fuente de barro se pone un poco de aceite y el diente de ajo machacado.",
      "Se añade agua como hasta la mitad de la cacerola, un trozo de jamón o tocino y cuando hierve se ponen los huevos con azafrán y se añade un poco del aceite de freírlos.",
      "Se tienen cociendo un ratito."
    ],
    "tiempoNota": "Tiempo total estimado: 1 h 5 min. Elaboración (preparación y cocción): 1 h 5 min. Cocer 15 minutos, enfriar, rellenar, enharinar, freír y guisar con majado; más fases que los huevos rellenos fríos."
  },
  {
    "id": "huevos-al-plato",
    "categoria": "huevos",
    "titulo": "Huevos al Plato",
    "autor": "",
    "tiempo": "≈25 min",
    "dificultad": "Fácil",
    "imagen": "",
    "ingredientes": [
      "1 huevo por persona",
      "Tomate frito",
      "Chorizo picado, jamón, patatas fritas en cuadraditos, guisantes…"
    ],
    "pasos": [
      "En una cazuela de barro se pone un fondo de aceite, tomate frito y se casca un huevo por persona.",
      "Se añade a un lado la guarnición y se mete en el horno con el fuego solo por abajo hasta que se cuaje la yema."
    ],
    "tiempoNota": "Tiempo total estimado: 25 min. Elaboración (preparación y cocción): 25 min. Montaje y horneado corto, partiendo de tomate y guarniciones ya cocinadas como indica la receta."
  },
  {
    "id": "huevos-rellenos-2",
    "categoria": "huevos",
    "titulo": "Huevos Rellenos",
    "autor": "",
    "tiempo": "≈1 h 40 min",
    "dificultad": "Fácil",
    "imagen": "",
    "ingredientes": [
      "1 huevo por persona",
      "Una lata o dos de atún",
      "Mayonesa",
      "Leche",
      "Tomate frito"
    ],
    "pasos": [
      "Se cuecen los huevos duros en bastante agua durante unos 15 minutos desde que empieza a hervir el agua.",
      "Se apartan y se dejan enfriar.",
      "Una vez fríos se pelan  y se abren por la mitad.",
      "Se sacan las yemas y se ponen en un bol junto con el bonito, un chorrito de leche y otro de tomate. Reservamos una para decorar.",
      "Se mezcla todo bien y se rellenan los huevos.",
      "Se van poniendo en una fuente.",
      "Se añade la mayonesa por encima de cada huevo.  Se ralla la yema de huevo reservada por encima y se decoran con aceitunas pimiento rojo…",
      "Se mete en la nevera y se deja enfriar.",
      "Se puede cambiar el atún por salmón ahumado y paté de salmón."
    ],
    "tiempoNota": "Tiempo total estimado: 1 h 40 min. Elaboración (preparación y cocción): 40 min. Remojo, maceración, enfriado o reposo: 1 h. 15 minutos de cocción, pelado y montaje, con enfriado y una hora orientativa de nevera. Técnica equivalente a la otra variante."
  },
  {
    "id": "rollo-de-carne",
    "categoria": "carnes",
    "titulo": "Rollo de Carne",
    "autor": "",
    "tiempo": "≈2 h 20 min",
    "dificultad": "Media",
    "imagen": "",
    "ingredientes": [
      "1 aleta de ternera 1kg",
      "Cebollas",
      "Vino",
      "Ajos",
      "Relleno",
      "Carne picada de cerdo con ajo y perejil",
      "Jamón serrano en tiras",
      "2 huevos duros cocidos"
    ],
    "pasos": [
      "Se extiende la carne y se pone a carne picada en medio en una tira y entre medias se añade el jamón en tiras y el huevo duro en rodajas.",
      "Se enrolla bien y se atan con un cordel y en los extremos se pone un palillo.",
      "Se marea el rollo solo.",
      "Se dora cebolla, vino y ajo y cuando esté dorado se añade el rollo que se marea.",
      "Se mete en la olla a presión tres cuartos de hora, se pasa la salsa y se deja que se enfría la carne antes de cortarlo y se sirve."
    ],
    "tiempoNota": "Tiempo total estimado: 2 h 20 min. Elaboración (preparación y cocción): 1 h 50 min. Remojo, maceración, enfriado o reposo: 30 min. Rellenar y atar la aleta, dorar y preparar salsa, 45 minutos de presión con calentamiento y despresurización; enfriado antes de cortar aparte."
  },
  {
    "id": "carne-con-tomate",
    "categoria": "carnes",
    "titulo": "Carne con Tomate",
    "autor": "",
    "tiempo": "≈1 h 15 min",
    "dificultad": "Fácil",
    "imagen": "",
    "ingredientes": [
      "Carne de ternera troceada 1 kg y ½",
      "3 dientes de ajo",
      "2 Cebollas",
      "Vino blanco y vino tinto",
      "1 lata de tomate triturado",
      "Dos hojas de laurel",
      "Sal y pimienta"
    ],
    "pasos": [
      "Se salpimenta y se dora la carne. Se dora la  cebolla y los dientes de ajo muy picados.",
      "Se rehoga con la carne en la sartén unos diez minutos y se añade el tomate, el laurel, el vino  y medio vaso de agua.",
      "Se cuece a fuego lento 40 minutos, o se mete en la olla unos 20 minutos para asegurarnos de que la carne quede tierna.",
      "Se sirve acompañada de patatas fritas, puré de patatas o asadas."
    ],
    "tiempoNota": "Tiempo total estimado: 1 h 15 min. Elaboración (preparación y cocción): 1 h 15 min. Se elige la cacerola: picado y sellado, 10 minutos de rehogado y 40 a fuego lento. La alternativa a presión puede acortar el tiempo."
  },
  {
    "id": "albondigas",
    "categoria": "carnes",
    "titulo": "Albóndigas",
    "autor": "",
    "tiempo": "≈1 h 5 min",
    "dificultad": "Media",
    "imagen": "",
    "ingredientes": [
      "½ Kg de carne picada (¼ de cerdo y ¼ de ternera o ¼ de cerdo y ¼ de pollo)",
      "1 cebolla grande",
      "2 dientes de ajo",
      "Vino blanco",
      "Perejil",
      "Pan rallado"
    ],
    "pasos": [
      "En un bol se pone la carne picada, se salpimenta y se le pica un diente de ajo pequeño, un huevo batido, un chorrito de vino y dos puñados de pan rallado.",
      "Se mezcla todo bien y se van haciendo bolas pequeñas.",
      "Se pasan por harina y se fríen en una cacerola con un poco de aceite.",
      "Cuando estén doradas se sacan y se apartan en un plato.",
      "Se pica la cebolla y se dora en la cacerola, cuando esté dorada se añade medio vaso de vino y se deja cocer un poco, añadimos agua y echamos las albóndigas.",
      "Añadimos una pastilla de avecrem desleída y colorante y dejamos hervir un rato hasta que las albóndigas estén tiernas y sin dejar que se consuma el líquido."
    ],
    "tiempoNota": "Tiempo total estimado: 1 h 5 min. Elaboración (preparación y cocción): 1 h 5 min. Mezclar, formar bolas, enharinar y freír por tandas, preparar salsa y guisar; no se añade el largo reposo del comparable que aquí no se exige."
  },
  {
    "id": "solomillo-de-cerdo-de-mama",
    "categoria": "carnes",
    "titulo": "Solomillo de Cerdo",
    "autor": "de Mamá",
    "tiempo": "≈35 min",
    "dificultad": "Fácil",
    "imagen": "",
    "ingredientes": [
      "Dos solomillos de cerdo",
      "Limón",
      "Sal",
      "Aceite",
      "Ajo y Perejil",
      "Una pastilla de avecrem"
    ],
    "pasos": [
      "Se pican el ajo y el perejil.",
      "Se salpimenta la carne.",
      "En una fuente se pone la carne y se adereza con el ajo y el perejil, el zumo de limón, un chorro de aceite y el caldo de avecrem y se mete en el horno con el fuego arriba y abajo durante unos 20 minutos."
    ],
    "tiempoNota": "Tiempo total estimado: 35 min. Elaboración (preparación y cocción): 35 min. Majado y preparación con precalentado en paralelo, más los 20 minutos de horno indicados; depende del grosor."
  },
  {
    "id": "solomillo-de-ternera-de-navidad-de-mama",
    "categoria": "carnes",
    "titulo": "Solomillo de Ternera de Navidad",
    "autor": "de Mamá",
    "tiempo": "≈45 min",
    "dificultad": "Media",
    "imagen": "",
    "ingredientes": [
      "Un solomillo de ternera",
      "Ajo",
      "Aceite",
      "Una pastilla de avecrem",
      "Una copa de coñac u oporto"
    ],
    "pasos": [
      "Se sala el solomillo y se pone en una fuente en el horno previamente precalentado muy fuerte.",
      "Se añade un chorreón de aceite.",
      "Se pica ajo y se le echa por encima a la carne.",
      "Se añade un chorreón de coñac u oporto.",
      "Se disuelve una pastilla de avecrem en agua y se le echa a la carne  cuando se haya evaporado el alcohol.",
      "Después de una media hora se saca del horno y se corta en rodajas."
    ],
    "tiempoNota": "Tiempo total estimado: 45 min. Elaboración (preparación y cocción): 45 min. Provisional; ficha pendiente de aclarar. Preparación y precalentado, 30 minutos de horno y corte; comparable de solomillo de 600 g con media hora de horno. Falta peso de la pieza familiar: no garantiza su punto."
  },
  {
    "id": "carne-en-salsa-de-la-abuela-carmen",
    "categoria": "carnes",
    "titulo": "Carne en Salsa",
    "autor": "de la Abuela Carmen",
    "tiempo": "≈1 h",
    "dificultad": "Fácil",
    "imagen": "",
    "ingredientes": [
      "Uno o dos solomillos de cerdo según el tamaño",
      "Dos dientes de ajo",
      "Sal y Pimienta",
      "Un vaso de vino",
      "Dos o tres cebollas"
    ],
    "pasos": [
      "Se unta la carne con el ajo majado, sal y un vaso de vino.",
      "Se dora la carne en una sartén y se saca cuando esté.",
      "En ese mismo aceite se dora bastante cebolla previamente picada.",
      "Cuando esté dorada se añade un puñado de almendras, la carne, avecrem y agua y se cuece unos 15 minutos en la olla.",
      "Se pasa la salsa y se corta la carne.",
      "Se puede acompañar de una patatas fritas."
    ],
    "tiempoNota": "Tiempo total estimado: 1 h. Elaboración (preparación y cocción): 1 h. Sellar, pochar cebollas y preparar salsa, más 15 minutos de olla y tiempos de presión."
  },
  {
    "id": "albondigon",
    "categoria": "carnes",
    "titulo": "Albondigón",
    "autor": "",
    "tiempo": "≈1 h 15 min",
    "dificultad": "Media",
    "imagen": "",
    "ingredientes": [
      "1Kg de carne picada (½ de cerdo y ½ de ternera)",
      "1 cebolla grande",
      "2 dientes de ajo",
      "Vino blanco",
      "Pan rallado",
      "Avecrem"
    ],
    "pasos": [
      "En un bol se pone la carne picada, se salpimenta y se le pica un diente de ajo pequeño, dos huevos batidos, un chorrito de vino y tres puñados de pan rallado.",
      "Se mezcla todo bien y se deja reposar un poco.",
      "Se hace una bola grande alargada y se pasa por harina.",
      "Se dora la cebolla en una cacerola con un poco de aceite y cuando esté dorada se añade la carne y se sofrie con la cebolla.",
      "Se añade un vaso de vino blanco y se deja evaporar.",
      "Pasamos a la olla con agua y una pastilla de avecrem y se cierra.",
      "Se tiene a fuego una vez que suba la pesa unos 15 minutos.",
      "Cuando estén doradas se sacan y se apartan en un plato.",
      "Se pica la cebolla y se dora en la cacerola, cuando esté dorada se añade medio vaso de vino y se deja cocer un poco, añadimos agua y echamos las albóndigas.",
      "Añadimos una pastilla de avecrem desleída y colorante y dejamos hervir un rato hasta que las albóndigas estén tiernas y sin dejar que se consuma el líquido."
    ],
    "tiempoNota": "Tiempo total estimado: 1 h 15 min. Elaboración (preparación y cocción): 1 h 5 min. Remojo, maceración, enfriado o reposo: 10 min. Provisional; ficha pendiente de aclarar. Solo pasos 1–7: mezclar, reposar brevemente, formar pieza y dorar, 15 minutos de presión y gestión de olla; se excluyen los pasos de albóndigas mezclados."
  },
  {
    "id": "codillo",
    "categoria": "carnes",
    "titulo": "Codillo",
    "autor": "",
    "tiempo": "≈2 h 10 min",
    "dificultad": "Fácil",
    "imagen": "",
    "ingredientes": [
      "Un codillo",
      "½ vaso de vino blanco",
      "Una bandeja de verduras variada",
      "Una hoja de laurel"
    ],
    "pasos": [
      "En la olla se pone el codillo con todos los ingredientes y se cubre de agua. No añadir sal.",
      "Se cuece durante unos 90 minutos."
    ],
    "tiempoNota": "Tiempo total estimado: 2 h 10 min. Elaboración (preparación y cocción): 2 h 10 min. El original exige 90 minutos en olla; se añaden preparación, calentamiento y despresurización. Comparable de técnica, no se sustituyen esos 90 minutos."
  },
  {
    "id": "cinta-de-lomo-a-la-sal",
    "categoria": "carnes",
    "titulo": "Cinta de Lomo a la Sal",
    "autor": "",
    "tiempo": "≈1 h",
    "dificultad": "Fácil",
    "imagen": "",
    "ingredientes": [
      "1Kg de cinta de lomo para 8 personas",
      "½ kg para 4",
      "Sal gorda: el doble de lo que pese la carne"
    ],
    "pasos": [
      "Se limpia la carne de la grasa más gorda.",
      "Se cubre una fuente con parte de la sal y se coloca la carne con el resto de la sal de manera que quede bien cubierta.",
      "Se mete en el horno hasta que la sal se vaya abriendo.Se pincha la carne, si sale sangre es que no está.",
      "Se saca la carne de la sal y se corta en rodajas.",
      "Se puede servir con puré de manzana, ensalada de pimientos..."
    ],
    "tiempoNota": "Tiempo total estimado: 1 h. Elaboración (preparación y cocción): 1 h. Se toma la opción de 1 kg: cubrir con sal y asar unos 45 minutos, preparar, precalentar y retirar costra; la pieza de medio kilo requiere ajustar."
  },
  {
    "id": "carne-estofada",
    "categoria": "carnes",
    "titulo": "Carne Estofada",
    "autor": "",
    "tiempo": "≈1 h 5 min",
    "dificultad": "Fácil",
    "imagen": "",
    "ingredientes": [
      "1 kg y ¼ de carne para estofar",
      "4 ó 5 dientes de ajo",
      "1 cebolla",
      "4 ó 5 zanahorias",
      "Dos tomates",
      "Una hoja de laurel",
      "2 cucharadas de pimentón dulce",
      "Cuatro patatas troceadas",
      "Vinagre y Vino"
    ],
    "pasos": [
      "Se marea el ajo, la cebolla, el tomate, el pimiento y las zanahorias previamente troceadas.",
      "Se añade un vaso de vino, un chorreón de vinagre y una hoja de laurel y se marea todo junto unos 10 minutos.",
      "Se pasa todo a la olla con las patatas troceadas y se añade una cucharadita muy pequeña de pimentón y se deja cocer unos 20 minutos."
    ],
    "tiempoNota": "Tiempo total estimado: 1 h 5 min. Elaboración (preparación y cocción): 1 h 5 min. Provisional; ficha pendiente de aclarar. Picado y sofrito, 10 minutos con vino y 20 de olla, más presión; estimación provisional porque falta incorporar la carne en los pasos."
  },
  {
    "id": "cordero-mama",
    "categoria": "carnes",
    "titulo": "Cordero",
    "autor": "Mamá",
    "tiempo": "≈6 h 30 min",
    "dificultad": "Fácil",
    "imagen": "",
    "ingredientes": [
      "Una pierna de cordero o una paletilla",
      "Vinagre y sal",
      "Ajo y aceite",
      "Limón",
      "Aceite"
    ],
    "pasos": [
      "Se unta el cordero con el vinagre y la sal.",
      "Se maja bastante ajo ( no una cabeza entera), limón y aceite.",
      "Se unta bien el cordero con ello.",
      "Se deja macerar unas cuantas horas.",
      "Se pone el cordero en una fuente de horno con un chorreón de aceite.",
      "Se mete en el horno bajo, menos de 200ºC.",
      "Aparte se disuelven dos pastillas de avecrem con agua.",
      "Se baña el cordero constantemente.",
      "Cuando esté hecho se pone ¼ de hora más con el horno fuerte arriba y abajo."
    ],
    "tiempoNota": "Tiempo total estimado: 6 h 30 min. Elaboración (preparación y cocción): 2 h 30 min. Remojo, maceración, enfriado o reposo: 4 h. Provisional; ficha pendiente de aclarar. Se orienta el asado de pierna/paletilla en torno a 2 horas más preparación; unas cuantas horas de maceración se estiman en 4. Peso y temperatura pendientes."
  },
  {
    "id": "cordero-adela",
    "categoria": "carnes",
    "titulo": "Cordero",
    "autor": "Adela",
    "tiempo": "≈2 h 45 min",
    "dificultad": "Media",
    "imagen": "",
    "ingredientes": [
      "Una pierna de cordero",
      "Sal y Aceite",
      "Cebolla",
      "Una cabeza de ajo sin pelar",
      "Una hoja de laurel",
      "Vinagre",
      "Una patata por persona"
    ],
    "pasos": [
      "Se pone el  horno arriba y abajo muy fuerte.",
      "Se pone el cordero en una fuente de barro untado con sal y aceite.",
      "Se achicharra en el horno y se le da la vuelta.",
      "En un cazo se pone una cebolla cortada en cuatro, un cabeza de ajo sin pelar, una hoja de laurel, un chorreón de vinagre (medio vaso) con agua y se tiene hirviendo unos cinco minutos.",
      "Cuando el cordero esté chamuscado se pone el fuego solo por abajo al mínimo, se le echa el caldo del cazo y algo más de sal.",
      "Se añade una patata por persona y se va moviendo el cordero."
    ],
    "tiempoNota": "Tiempo total estimado: 2 h 45 min. Elaboración (preparación y cocción): 2 h 45 min. Provisional; ficha pendiente de aclarar. Dorado fuerte, cocción lenta y patatas; se estima algo más de 2 horas de horno por la técnica. Faltan peso y tiempos para afinarlo."
  },
  {
    "id": "cordero-a-mi-manera",
    "categoria": "carnes",
    "titulo": "Cordero a Mi Manera",
    "autor": "",
    "tiempo": "≈5 h 5 min",
    "dificultad": "Media",
    "imagen": "",
    "ingredientes": [
      "Cordero",
      "vinagre",
      "sal, perejil y limón",
      "cebolla"
    ],
    "pasos": [
      "Untar el cordero con vinagre y sal y dejar macerar unas horas.",
      "Hacer un majado de ajo, aceite, perejil y limón.",
      "Batir y untar el cordero.",
      "Precalentar el horno a 200ºC y meter el cordero unos 20 minutos.",
      "En un cazo poner agua, vinagre (un poco menos de medio vaso) una cebolla cortada y ajo y hervir cinco minutos con el avecrem.",
      "Regar el cordero con la mezcla del cazo y poner más fuerte el horno durante unos 20 minutos más.",
      "Ir regando el cordero y darle la vuelta.",
      "Después de unos 10 minutos, apagar el horno y servir."
    ],
    "tiempoNota": "Tiempo total estimado: 5 h 5 min. Elaboración (preparación y cocción): 1 h 5 min. Remojo, maceración, enfriado o reposo: 4 h. Provisional; ficha pendiente de aclarar. Se conservan los 20 + 20 + 10 minutos de horno del original, preparación y 4 horas orientativas de maceración. Corte y peso no especificados: estimación provisional."
  },
  {
    "id": "carne-en-salsa",
    "categoria": "carnes",
    "titulo": "Carne en Salsa",
    "autor": "",
    "tiempo": "≈1 h 15 min",
    "dificultad": "Fácil",
    "imagen": "",
    "ingredientes": [
      "Un rollo de 1kg y ½ de ternera.",
      "Una cebolla y media",
      "Casi una cabeza de ajo",
      "Aceite",
      "½ vaso de vino blanco"
    ],
    "pasos": [
      "En un perol se pone un chorro de aceite, una cebolla grande troceada y unos seis dientes de ajo enteros.Se dora todo bien.",
      "Se añade la carne y se marea hasta dorarse.",
      "Se añade el vaso de vino blanco y se deja al fuego unos 5 minutos para que se evapore el vino.",
      "Se pone todo en la olla a presión y se añade agua cubriendo un poquito la carne durante 30 minutos.",
      "Se pasa la salsa.Este mismo guiso sirve para el pollo y el albondigón."
    ],
    "tiempoNota": "Tiempo total estimado: 1 h 15 min. Elaboración (preparación y cocción): 1 h 15 min. Pochar, sellar y reducir vino, 30 minutos de presión, subida y bajada de presión; pieza de ternera de 1,5 kg."
  },
  {
    "id": "lomo-al-caramelo",
    "categoria": "carnes",
    "titulo": "Lomo al Caramelo",
    "autor": "",
    "tiempo": "≈1 h",
    "dificultad": "Fácil",
    "imagen": "",
    "ingredientes": [
      "Un par de solomillos de cerdo",
      "Una cebolla y media",
      "Dos o tres dientes de ajo",
      "Aceite",
      "½ vaso de vino blanco",
      "Una cucharada de caramelo líquido",
      "Zumo de una naranja",
      "Un sobre de crema de champiñones"
    ],
    "pasos": [
      "Se salpimenta la carne y se dora en una sartén con un chorreón de aceite.",
      "Batir y untar el cordero.",
      "Lo mareamos todo bien y se añade el vino.",
      "Después de unos 5 minutos añadimos la cucharada de caramelo líquido, el zumo de naranja y agua y se mete en la olla unos 15 minutos.",
      "Se prepara una crema de champiñón aparte y se añade a la olla cuando la carne ya esté blanda.",
      "Se corta la carne y se sirve con patatas fritas, puré…"
    ],
    "tiempoNota": "Tiempo total estimado: 1 h. Elaboración (preparación y cocción): 1 h. Provisional; ficha pendiente de aclarar. Sellado, base y reducción, 15 minutos de presión con calentamiento y apertura, crema y corte; provisional por un paso de cordero ajeno a esta ficha."
  },
  {
    "id": "filetes-rusos",
    "categoria": "carnes",
    "titulo": "Filetes Rusos",
    "autor": "",
    "tiempo": "≈40 min",
    "dificultad": "Fácil",
    "imagen": "",
    "ingredientes": [
      "½ Kg de carne picada (¼ de cerdo y ¼ de ternera o ¼ de cerdo y ¼ de pollo)",
      "2 dientes de ajo",
      "Vino blanco",
      "Perejil",
      "Pan rallado",
      "Jamón (Una punta o un trozo de tocino)",
      "Media cebolla doradita",
      "Un chorreón de leche",
      "Una pastilla de avecrem desmenuzada (opcional)"
    ],
    "pasos": [
      "En un bol se bate un huevo y se añade la carne picada salpimentada y el diente de ajo picado.",
      "Añadimos la leche, pan rallado, la cebolla dorada y el avecrem.",
      "Se van haciendo bolitas, se pasan por pan rallado, se aplastan con la mano y se fríen."
    ],
    "tiempoNota": "Tiempo total estimado: 40 min. Elaboración (preparación y cocción): 40 min. Pochar media cebolla, mezclar carne, formar, empanar y freír; no lleva la salsa ni el guiso del comparable."
  },
  {
    "id": "filetes-empanados",
    "categoria": "carnes",
    "titulo": "Filetes Empanados",
    "autor": "",
    "tiempo": "≈20 min",
    "dificultad": "Fácil",
    "imagen": "",
    "ingredientes": [
      "Filete de vaca por persona",
      "Sal",
      "Pan rallado",
      "Huevo"
    ],
    "pasos": [
      "Se adereza  la carne con sal  y se pasa por el huevo y el pan rallado.",
      "Se fríe en abundante aceite."
    ],
    "tiempoNota": "Tiempo total estimado: 20 min. Elaboración (preparación y cocción): 20 min. Filetes ya cortados: salar, empanar y freír una tanda doméstica; no hay relleno ni enrollado."
  },
  {
    "id": "flamenquines",
    "categoria": "carnes",
    "titulo": "Flamenquines",
    "autor": "",
    "tiempo": "≈40 min",
    "dificultad": "Media",
    "imagen": "",
    "ingredientes": [
      "Filetes de pollo o cerdo",
      "Jamón serrano",
      "Limón",
      "Pan rallado",
      "Huevo",
      "Aceite"
    ],
    "pasos": [
      "1Kg de filetes de pechuga muy finos.",
      "Se extienden bien, se salan y se rocían con un limón.",
      "Se pone una loncha de jamón serrano muy fino sobre cada filete.",
      "Se enrolla el filete (se sujeta con palillos si se quedase abierto).",
      "Se pasa por huevo y pan rallado.",
      "Se fríen."
    ],
    "tiempoNota": "Tiempo total estimado: 40 min. Elaboración (preparación y cocción): 40 min. Extender, rellenar y enrollar, empanar y freír por tandas; el sellado exige más cuidado que un filete empanado."
  },
  {
    "id": "roast-beef",
    "categoria": "carnes",
    "titulo": "Roast Beef",
    "autor": "",
    "tiempo": "≈1 h 35 min",
    "dificultad": "Media",
    "imagen": "",
    "ingredientes": [
      "Una pieza de tapa de carne de 1 kg y 800 gramos",
      "1 cebolla",
      "Aceite",
      "Majado de aceite, ajo, perejil y coñac o vino y pimienta (opcional)"
    ],
    "pasos": [
      "Se unta la carne con el majado o se salpimenta solo.Si hemos elegido la opción del majado dejamos macerar un poco.",
      "Se pone la carne en el horno alto a tope por arriba y por abajo en la rejilla con un chorreón de aceite si no hemos añadido el majado.",
      "En la parte de abajo del horno en la bandeja se pone una cebolla troceada.",
      "Después de 15 minutos  se da la vuelta a la carne y se le echa otro chorreón de aceite otros 15 minutos.",
      "Se apaga el horno y se baja la rejilla a la altura mínima dejando la carne dentro con el horno apagado unos 20 minutos.",
      "Se saca la cebolla y se hace una salsa con ella añadiendo agua y avecrem si hace falta. Se pasa la salsa.",
      "Pasados los 20 minutos se saca la carne y se deja enfriar. se sirve en rodajas con la salsa aparte."
    ],
    "tiempoNota": "Tiempo total estimado: 1 h 35 min. Elaboración (preparación y cocción): 1 h 5 min. Remojo, maceración, enfriado o reposo: 30 min. Provisional; ficha pendiente de aclarar. Se conservan 15 + 15 minutos de asado y 20 de horno apagado; preparación y salsa, más enfriado orientativo antes del corte. El comparable usa otro método más largo; temperatura y punto familiar pendientes de precisar."
  },
  {
    "id": "albondigas-amarillas",
    "categoria": "carnes",
    "titulo": "Albóndigas Amarillas",
    "autor": "",
    "tiempo": "≈1 h",
    "dificultad": "Media",
    "imagen": "",
    "ingredientes": [
      "½ Kg de carne picada (¼ de cerdo y ¼ de ternera o ¼ de cerdo y ¼ de pollo)",
      "2 dientes de ajo",
      "Vino blanco",
      "Perejil",
      "Pan rallado",
      "Jamón (una punta o un trozo de tocino)"
    ],
    "pasos": [
      "En un bol se pone la carne picada, se salpimenta y se le pica un diente de ajo pequeño, un huevo batido, un chorrito de vino y dos puñados de pan rallado.",
      "Se mezcla todo bien y se van haciendo bolas pequeñas y se pasan por harina.",
      "Se majan tres dientes de ajo en el mortero con sal y un poquito de agua.",
      "En una olla o fuente de barro se pone un poco de aceite y el diente de ajo machacado. Se añade agua como hasta la mitad de la cacerola, un trozo de jamón o tocino y vino blanco, cuando hierva se añaden las albóndigas.",
      "Añadimos una pastilla de avecrem desleída y colorante y dejamos hervir un rato hasta que las albóndigas estén tiernas y sin dejar que se consuma el líquido."
    ],
    "tiempoNota": "Tiempo total estimado: 1 h. Elaboración (preparación y cocción): 1 h. Formar bolas enharinadas, preparar majado y cocer en caldo hasta tiernas; sin la fritura previa de la otra variante."
  },
  {
    "id": "carne-mechada",
    "categoria": "carnes",
    "titulo": "Carne Mechada",
    "autor": "",
    "tiempo": "≈1 h 55 min",
    "dificultad": "Media",
    "imagen": "",
    "ingredientes": [
      "Carne de babilla o de cadera",
      "Ajos",
      "Perejil",
      "Pimienta en grano",
      "Dos clavos",
      "Tocino de jamón o salado",
      "Salsa: 2 cebollas, pimiento, ajo, un tomate y ajo asado opcional",
      "Aceite",
      "Tres cebollas",
      "Cinco dientes de ajo",
      "1 kg de carrillada",
      "Vino blanco",
      "Sal y pimienta",
      "Laurel"
    ],
    "pasos": [
      "Se pican 4 o 5 dientes de ajo picado, pimienta, perejil, los dos clavos y el tocino troceado y se mete dentro de la carne a puñaditos.",
      "Una vez rellena, untar sal por fuera y se sella.",
      "Se pasa a la olla y en ese aceite se hace el sofrito con la verdura a fuego lento.",
      "Se añade a la olla, agua medio cubierta y dos pastillas de avecrem, en la olla a presión media hora más o menos.",
      "Una vez hecha se pasa toda la salsa y se corta la carne en filetes.",
      "CARRIlLADA",
      "Se pelan los ajos y la cebolla y se doran en la sartén.",
      "Se salpimenta la carne.",
      "Una vez dorada la cebolla, se añade la carne y se sofríe todo.",
      "Se añade un vaso de vino blanco y se deja cocer hasta que se evapore el vino y una hojita de laurel.",
      "Se pasa todo a la olla express cubierto con agua y se tiene una media hora.",
      "Pasado este tiempo se deja enfriar la olla y se abre.",
      "Se puede servir con una guarnición de patatas fritas, arroz, puré de patatas…"
    ],
    "tiempoNota": "Tiempo total estimado: 1 h 55 min. Elaboración (preparación y cocción): 1 h 40 min. Remojo, maceración, enfriado o reposo: 15 min. Provisional; ficha pendiente de aclarar. Solo carne mechada, pasos 1–5: mechar y sellar, sofrito y salsa, 30 minutos de presión más calentamiento y apertura; reposo de corte orientativo. Se excluye la carrillada mezclada."
  },
  {
    "id": "cinta-de-lomo-con-ciruelas-orejones-e-higos",
    "categoria": "carnes",
    "titulo": "Cinta de Lomo con Ciruelas, Orejones e Higos",
    "autor": "",
    "tiempo": "≈1 h 15 min",
    "dificultad": "Fácil",
    "imagen": "",
    "ingredientes": [
      "Cinta de lomo de cerdo",
      "Cebolla",
      "Ajos",
      "Ciruelas, orejones e higos",
      "Vino tinto y/u oporto"
    ],
    "pasos": [
      "Se sella la cinta salpimentada.",
      "Se aparta.",
      "Se fríen las cebollas, y dientes de ajo y a eso se le añade vino tinto y se dora con la carne.",
      "En una fuente de horno se pone la carne con la cebolla y los orejones por encima, unos tres cuartos de hora."
    ],
    "tiempoNota": "Tiempo total estimado: 1 h 15 min. Elaboración (preparación y cocción): 1 h 15 min. Sellado y sofrito con vino antes de los 45 minutos de horno explícitos; no hay maceración previa obligatoria."
  },
  {
    "id": "cinta-de-lomo-al-horno",
    "categoria": "carnes",
    "titulo": "Cinta de Lomo al Horno",
    "autor": "",
    "tiempo": "≈1 h 10 min",
    "dificultad": "Fácil",
    "imagen": "",
    "ingredientes": [
      "Una pieza de 1kg ¼ de cinta de lomo",
      "2 cebollas",
      "8 dientes de ajo",
      "Aceite",
      "Sal y laurel",
      "½ vaso de Vino tinto y otro de vino blanco"
    ],
    "pasos": [
      "Se doran los ajos y la cebolla con un poco de aceite, y una vez dorados se retiran y en ese aceite se sella la carne.",
      "Se añade vino tinto y vino blanco y el laurel y se dejan al fuego hasta que se evapore.",
      "Se mete en el horno con un poquito de aguauna media hora.",
      "Se ponen alrededor unas patatas cocidas previamente doradas con sal, avecrem, ajo en polvo y perejil."
    ],
    "tiempoNota": "Tiempo total estimado: 1 h 10 min. Elaboración (preparación y cocción): 1 h 10 min. Cebolla, sellado y reducción antes de 30 minutos de horno; patatas cocidas y doradas en paralelo, incluidas porque forman parte del acabado."
  },
  {
    "id": "pollo-en-pepitoria",
    "categoria": "carnes",
    "titulo": "Pollo en Pepitoria",
    "autor": "",
    "tiempo": "≈1 h",
    "dificultad": "Media",
    "imagen": "",
    "ingredientes": [
      "Un pollo troceado o pechugas de pollo",
      "1 cebolla",
      "Tres dientes de ajo",
      "Vino",
      "Colorante",
      "Zumo de un limón",
      "Laurel"
    ],
    "pasos": [
      "Se dora la cebolla y el ajo sin tostar.",
      "Se añade el pollo salpimentado, una hoja de laurel, el vino y el zumo del limón.",
      "Se marea todo y se mete en la olla con un poco de azafrán unos 20 minutos.",
      "Se añade una yema para trabar la salsa."
    ],
    "tiempoNota": "Tiempo total estimado: 1 h. Elaboración (preparación y cocción): 1 h. Dorar base y pollo, 20 minutos de presión con su gestión y ligar con yema sin cortarla; comparable de ave, manda la olla del original."
  },
  {
    "id": "pollo-abuela-carmen",
    "categoria": "carnes",
    "titulo": "Pollo",
    "autor": "Abuela Carmen",
    "tiempo": "≈1 h 15 min",
    "dificultad": "Fácil",
    "imagen": "",
    "ingredientes": [
      "Un pollo troceado o muslos de pollo.",
      "Ajo (2 ó 3 dientes)",
      "2 cebollas",
      "Un vaso de vino blanco",
      "Aceite",
      "Avecrem"
    ],
    "pasos": [
      "Se salpimenta el pollo y se sofrie con varios ajos picados en una sartén bien cubierta con aceite.",
      "Cuando estén dorados se apartan.",
      "En ese mismo aceite se dora la cebolla previamente picada.",
      "Cuando esté dorada se le añade el pollo y el  vino blanco que se deja evaporar unos minutos.",
      "Añadimos luego agua hasta cubrirlo y avecrem. Se deja cocer un buen rato o se mete en la olla a presión."
    ],
    "tiempoNota": "Tiempo total estimado: 1 h 15 min. Elaboración (preparación y cocción): 1 h 15 min. Se estima la opción de cacerola: dorados y unos 40 minutos de guiso; no se presupone olla rápida para reducir artificialmente el total."
  },
  {
    "id": "pollo-al-horno-de-la-abuela-cheli",
    "categoria": "carnes",
    "titulo": "Pollo al Horno",
    "autor": "de la Abuela Cheli",
    "tiempo": "≈1 h 50 min",
    "dificultad": "Fácil",
    "imagen": "",
    "ingredientes": [
      "Un pollo entero",
      "Un limón",
      "Una pastilla de avecrem",
      "Aceite",
      "Sal y perejil",
      "Un vaso de vino blanco"
    ],
    "pasos": [
      "Precalentamos el horno unos 10 minutos.",
      "Se salpimenta el pollo y se  mete un limón y la pastilla de avecrem en su interior.",
      "Se pone en una fuente de horno y se embadurna bien con aceite y el vaso de vino.",
      "Metemos en el horno unos 90  minutos a horno fuerte al principio y luego un poco más suave."
    ],
    "tiempoNota": "Tiempo total estimado: 1 h 50 min. Elaboración (preparación y cocción): 1 h 50 min. 90 minutos de horno originales más preparación, precalentado en paralelo y unos minutos para sacar y trinchar; peso no indicado."
  },
  {
    "id": "pollo-a-la-sopa-de-cebolla",
    "categoria": "carnes",
    "titulo": "Pollo a la Sopa de Cebolla",
    "autor": "",
    "tiempo": "≈1 h 15 min",
    "dificultad": "Fácil",
    "imagen": "",
    "ingredientes": [
      "Un pollo troceado",
      "Un sobre de sopa de cebolla",
      "Aceite",
      "Un vaso de vino blanco"
    ],
    "pasos": [
      "Precalentamos el horno unos 10 minutos.",
      "Se salpimenta el pollo y se pone en una fuente de horno y se embadurna bien con el sobre de sopa de cebolla, el aceite y el vaso de vino.",
      "Metemos en el horno unos 60  minutos a horno fuerte al principio y luego un poco más suave."
    ],
    "tiempoNota": "Tiempo total estimado: 1 h 15 min. Elaboración (preparación y cocción): 1 h 15 min. Pollo troceado: 60 minutos de horno y preparación con precalentado en paralelo."
  },
  {
    "id": "pollo-al-horno",
    "categoria": "carnes",
    "titulo": "Pollo al Horno",
    "autor": "",
    "tiempo": "≈1 h 20 min",
    "dificultad": "Fácil",
    "imagen": "",
    "ingredientes": [
      "Un pollo entero",
      "2 o 3 dientes de ajo",
      "Perejil",
      "Aceite",
      "Un vaso de vino blanco"
    ],
    "pasos": [
      "Precalentamos el horno unos 10 minutos.",
      "Hacemos un majado con el ajo, el perejil y aceite.",
      "Se salpimenta el pollo y con un pincel se unta con el majado anterior.",
      "Se pone en una fuente de horno, añadimos el vino y  metemos  en el horno unos 60 minutos a horno fuerte al principio y luego un poco más suave."
    ],
    "tiempoNota": "Tiempo total estimado: 1 h 20 min. Elaboración (preparación y cocción): 1 h 20 min. 60 minutos de horno prescritos más majado, preparación, precalentado y trinchado; depende del tamaño del pollo entero."
  },
  {
    "id": "pollo-con-cerveza-y-yogur",
    "categoria": "carnes",
    "titulo": "Pollo con Cerveza y Yogur",
    "autor": "",
    "tiempo": "≈1 h 35 min",
    "dificultad": "Fácil",
    "imagen": "",
    "ingredientes": [
      "Un pollo troceado",
      "Una cabeza de ajos",
      "Una cerveza",
      "Un yogur natural",
      "Aceite y sal"
    ],
    "pasos": [
      "Se limpia bien el pollo y se salpimenta.",
      "Se embadurna el pollo troceado con cuatro dientes de ajo y se tiene un rato.",
      "Una vez dorado se fríen tres o cuatro  dientes de  ajo.",
      "En el vaso de la batidora se añade un diente crudo, una cerveza y un yogur natural. Se bate todo.",
      "Se vierte la salsa en la cacerola y se añade el pollo.",
      "Se tiene cociendo un buen rato."
    ],
    "tiempoNota": "Tiempo total estimado: 1 h 35 min. Elaboración (preparación y cocción): 1 h 5 min. Remojo, maceración, enfriado o reposo: 30 min. Provisional; ficha pendiente de aclarar. Preparar y dorar pollo, salsa y guiso estimado de 35–40 minutos; un rato de adobo se orienta en 30 minutos. Faltan duración de guiso y paso de dorado explícito."
  },
  {
    "id": "pollo-con-limon",
    "categoria": "carnes",
    "titulo": "Pollo con Limón",
    "autor": "",
    "tiempo": "≈2 h 5 min",
    "dificultad": "Fácil",
    "imagen": "",
    "ingredientes": [
      "Un pollo",
      "Limón",
      "Aceite",
      "Sal y pimienta",
      "Avecrem"
    ],
    "pasos": [
      "Se limpia bien el pollo y se salpimenta.",
      "Se coloca en una fuente y se le añade el zumo de un limón y un poco de aceite y se deja macerar un rato.",
      "Cuando esté macerado se le añade vino blanco, agua y avecrem y se mete en el horno unos 80 minutos."
    ],
    "tiempoNota": "Tiempo total estimado: 2 h 5 min. Elaboración (preparación y cocción): 1 h 35 min. Remojo, maceración, enfriado o reposo: 30 min. 80 minutos de horno y preparación con precalentado en paralelo; macerar un rato se interpreta provisionalmente como media hora."
  },
  {
    "id": "pavo-al-oporto",
    "categoria": "carnes",
    "titulo": "Pavo al Oporto",
    "autor": "",
    "tiempo": "≈37 h 30 min",
    "dificultad": "Media",
    "imagen": "",
    "ingredientes": [
      "2kg de pavo",
      "24 higos",
      "50cc de oporto",
      "Avecrem",
      "Aceite",
      "Mantequilla"
    ],
    "pasos": [
      "Se dejan los higos en maceración con el vino de oporto en un recipiente bien cerrado durante 36 horas.",
      "Se dora el pavo con aceite y mantequilla durante  se riega con el vino y los higos hasta que el vino se vaya consumiendo.",
      "Se mezcla con un caldo hecho con ½ litro de agua y avecrem y se mete en el horno precalentado  a 150 grados durante 45 minutos.",
      "Si la salsa queda clara se le añade un poco de maizena."
    ],
    "tiempoNota": "Tiempo total estimado: 37 h 30 min. Elaboración (preparación y cocción): 1 h 30 min. Remojo, maceración, enfriado o reposo: 36 h. Provisional; ficha pendiente de aclarar. 36 horas de maceración expresas; preparación, dorado y reducción más 45 minutos de horno. El tamaño/corte de los 2 kg y la frase de dorado incompleta requieren confirmación; no garantiza punto de cocción."
  },
  {
    "id": "salmon-a-la-naranja-de-mariano",
    "categoria": "pescado",
    "titulo": "Salmón a la Naranja",
    "autor": "de Mariano",
    "tiempo": "≈40 min",
    "dificultad": "Fácil",
    "imagen": "",
    "ingredientes": [
      "Salmón fresco cortado en lonchas finas",
      "1 cebolla",
      "1 naranja",
      "Sal",
      "Aceite"
    ],
    "pasos": [
      "Se pocha/fríe  la cebolla a fuego lento hasta que esté blandita pero no dorada.",
      "En esa sartén se añade el salmón y se mezcla todo bien.",
      "Se añade el zumo de una naranja y se tiene cociendo a fuego lento 15 minutos hasta que la naranja se consuma.",
      "Se sirve acompañado de unas patatitas cocidas."
    ],
    "tiempoNota": "Tiempo total estimado: 40 min. Elaboración (preparación y cocción): 40 min. Pochar cebolla, añadir salmón y cocer 15 minutos con naranja; patatas cocidas en paralelo como guarnición."
  },
  {
    "id": "pescado-frito",
    "categoria": "pescado",
    "titulo": "Pescado Frito",
    "autor": "",
    "tiempo": "≈30 min",
    "dificultad": "Media",
    "imagen": "",
    "ingredientes": [
      "Cualquier pescado troceado o boquerones, bacaladillas, pijotas, calamares …",
      "Sal",
      "Harina preferiblemente de pescado",
      "Aceite"
    ],
    "pasos": [
      "Se lava bien el pescado y se sala",
      "Se pone el aceite a calentar",
      "Se enharina el pescado y cuando el aceite esté muy caliente se va echando el pescado en la sartén o freidora.",
      "Se puede servir con una ensalada."
    ],
    "tiempoNota": "Tiempo total estimado: 30 min. Elaboración (preparación y cocción): 30 min. Limpiar una tanda doméstica de pescado, enharinar y freír por tandas; el aceite y el tamaño de las piezas requieren atención."
  },
  {
    "id": "calamares-en-salsa-de-la-abuela-carmen",
    "categoria": "pescado",
    "titulo": "Calamares en Salsa",
    "autor": "de la Abuela Carmen",
    "tiempo": "≈1 h 15 min",
    "dificultad": "Media",
    "imagen": "",
    "ingredientes": [
      "2Kg de calamares",
      "Cebolla",
      "1 tomate (opcional)",
      "1 pimiento verde (opcional)",
      "Aceite",
      "Un vaso de vino blanco"
    ],
    "pasos": [
      "Se limpian bien los calamares quitando la piel y el interior.Se le da la vuelta y se lava bien bajo el grifo.",
      "Se trocean y se salan.",
      "Se hace un sofrito con la cebolla muy picada, (el tomate y el pimiento) y cuando esté dorada se echan los calamares y el vino y se tienen cociendo un ratito.",
      "Si está flojo de sabor, se puede añadir un chorreón de tomate frito.",
      "Se pueden servir con un arroz blanco o unas patatas fritas."
    ],
    "tiempoNota": "Tiempo total estimado: 1 h 15 min. Elaboración (preparación y cocción): 1 h 15 min. Limpiar 2 kg requiere tiempo; se estiman unos 25 minutos de limpieza y picado y 50 de sofrito y guiso. Arroz opcional no incluido."
  },
  {
    "id": "calamares-en-su-tinta",
    "categoria": "pescado",
    "titulo": "Calamares en su Tinta",
    "autor": "",
    "tiempo": "≈1 h 10 min",
    "dificultad": "Media",
    "imagen": "",
    "ingredientes": [
      "1kg de calamares",
      "1 cebolla grande",
      "3 dientes de ajo",
      "½ vaso de vino",
      "Una hoja de laurel",
      "Una bolsa de tinta (se pide en la pescadería)"
    ],
    "pasos": [
      "Se limpian bien los calamares (ver receta anterior) y se trocean.",
      "Se hace un sofrito con la cebolla muy picada y el ajo y cuando esté dorada se echan los calamares, una hoja de laurel y el vino y se tienen cociendo unos 10 minutos hasta que se consuma el vino.",
      "Se mete todo en la olla con dos tazas de agua durante 10 minutos.",
      "Se abre la olla y se añade un chorreón de tomate frito y la tinta.",
      "Si se queda muy clara la salsa se le añade un poco de harina y se deja cocer unos 5 minutos y se rectifica de sal.",
      "Se sirve con arroz blanco."
    ],
    "tiempoNota": "Tiempo total estimado: 1 h 10 min. Elaboración (preparación y cocción): 1 h 10 min. Limpieza de 1 kg, sofrito, 10 minutos con vino, 10 en olla y 5 de acabado, con calentamiento y despresurización; arroz opcional aparte."
  },
  {
    "id": "dorada-a-la-espalda",
    "categoria": "pescado",
    "titulo": "Dorada a la Espalda",
    "autor": "",
    "tiempo": "≈30 min",
    "dificultad": "Media",
    "imagen": "",
    "ingredientes": [
      "Una lubina o dorada para dos personas.",
      "Ajo",
      "Sal",
      "Vinagre",
      "Aceite"
    ],
    "pasos": [
      "Se sala el pescado.",
      "Se precalienta el horno.",
      "Se pone el pescado en una fuente y se añade aceite por encima.",
      "Se mete en el horno unos 15 minutos.",
      "Mientras se fríen varios dientes de ajo en la sartén con un par de cucharadas de aceite.",
      "Cuando estén dorados los ajos echamos un chorreón de vinagre con cuidado de que no nos salte el aceite y dejamos un par de minutos en el fuego cubiertos con una tapa.",
      "Sacar el pescado del horno y añadir por encima el contenido de la sartén."
    ],
    "tiempoNota": "Tiempo total estimado: 30 min. Elaboración (preparación y cocción): 30 min. 15 minutos de horno más preparación y precalentado; ajada con vinagre en paralelo y cuidado de la emulsión caliente."
  },
  {
    "id": "pescado-dominga",
    "categoria": "pescado",
    "titulo": "Pescado Dominga",
    "autor": "",
    "tiempo": "≈1 h",
    "dificultad": "Media",
    "imagen": "",
    "ingredientes": [
      "Una pescada",
      "3 ó 4 patatas",
      "La raspa y cabeza de la pescada",
      "1 cebolla",
      "Avecrem",
      "Perejil",
      "Aceite",
      "Vino blanco"
    ],
    "pasos": [
      "Se fríen las patatas con la cebolla cortada en tiras.",
      "Se cuece la raspa y la cabeza.",
      "Se pone en una fuente las patatas con la  cebolla, la pescada, avecrem, perejil, el aceite de freír las patatas y el vino blanco.",
      "Justo antes de comer se le echa el caldo de cocer la raspa y se cuece un ratito."
    ],
    "tiempoNota": "Tiempo total estimado: 1 h. Elaboración (preparación y cocción): 1 h. Freír patatas y cebolla mientras se prepara caldo de espinas; montaje y cocción final del pescado. Tamaño sin especificar."
  },
  {
    "id": "merluza-al-horno",
    "categoria": "pescado",
    "titulo": "Merluza al Horno",
    "autor": "",
    "tiempo": "≈55 min",
    "dificultad": "Fácil",
    "imagen": "",
    "ingredientes": [
      "Patatas",
      "Aceite",
      "Una merluza o cualquier otro pescado",
      "Limón",
      "Vino",
      "Avecrem"
    ],
    "pasos": [
      "Se limpia el pescado y se sala.",
      "Se unta la bandeja del horno con aceite.",
      "Se frien un poco las patatas y una vez fritas se ponen en la fuente.",
      "Se pone el pescado en la fuente sobre las patatas y se echa el zumo de limón, aceite y vino además de ½ pastilla de avecrem.",
      "Se mete en el horno no más de 30 minutos."
    ],
    "tiempoNota": "Tiempo total estimado: 55 min. Elaboración (preparación y cocción): 55 min. Preparar y freír parcialmente patatas antes de los hasta 30 minutos de horno del original."
  },
  {
    "id": "pescado-al-horno",
    "categoria": "pescado",
    "titulo": "Pescado al Horno",
    "autor": "",
    "tiempo": "≈1 h",
    "dificultad": "Fácil",
    "imagen": "",
    "ingredientes": [
      "Patatas",
      "Aceite",
      "Pescado",
      "Limón",
      "Vino",
      "Sal y ajo",
      "Avecrem"
    ],
    "pasos": [
      "Se limpia el pescado y se sala y se le mete dentro un trozo de tomate partido. Se hace un par de rajas en el lomo del pescado y se mete un gajo de limón en cada una de ellas.",
      "Se unta la bandeja del horno con aceite.",
      "Se frien un poco las patatas con la cebolla cortada en gajos y una vez fritas se ponen en la fuente.",
      "Se pone el pescado en la fuente sobre las patatas y se echa el zumo de limón, tres dientes de ajo picados, aceite perejil.",
      "Se mete en el horno no más de 30 minutos."
    ],
    "tiempoNota": "Tiempo total estimado: 1 h. Elaboración (preparación y cocción): 1 h. Limpieza, cortes y patatas con cebolla antes de los hasta 30 minutos de horno; mayor preparación que la merluza sencilla."
  },
  {
    "id": "pescado-al-horno-de-ana",
    "categoria": "pescado",
    "titulo": "Pescado al Horno",
    "autor": "de Ana",
    "tiempo": "≈40 min",
    "dificultad": "Fácil",
    "imagen": "",
    "ingredientes": [
      "Pescado",
      "1 cebolla",
      "Una cucharada de tomate frito",
      "Vino blanco",
      "Pimienta",
      "Avecrem de pescado"
    ],
    "pasos": [
      "Se sofrie la cebolla y se pasa por la batidora.",
      "Se sala el pescado y se pone en la fuente.",
      "Echamos la salsa por encima, una cucharada de tomate frito sobre cada trozo de pescado.",
      "Se mete en el horno 20 minutos a 200 ºC."
    ],
    "tiempoNota": "Tiempo total estimado: 40 min. Elaboración (preparación y cocción): 40 min. Sofreír y triturar cebolla y preparar pescado, más 20 minutos de horno a 200 °C indicados."
  },
  {
    "id": "lubina-al-horno",
    "categoria": "pescado",
    "titulo": "Lubina al Horno",
    "autor": "",
    "tiempo": "≈45 min",
    "dificultad": "Fácil",
    "imagen": "",
    "ingredientes": [
      "45min 3 raciones",
      "3 Lubinas hermosas",
      "1 Patata",
      "1 Cebolla",
      "1 Pimiento verde",
      "1 Limón",
      "1 Tomate hermoso",
      "Sal",
      "Orégano",
      "Pimienta de molinillo (4 pimientas)",
      "1 vaso vino blanco",
      "1 vaso agua",
      "1/2 vaso de aceite",
      "Dos lomos de lubina sin raspas",
      "Huevos",
      "Limón",
      "Sal y aceite"
    ],
    "pasos": [
      "Precalentar el horno a 180º\n2.Partimos la cebolla en juliana y formamos una cama esparciéndola por la bandeja.\n3.Hacemos lo mismo con el pimiento la patata y el tomate, éstos últimos en rodajitas.\n4.En un frasco mezclamos y agitamos, el aceite, el agua, la sal (al gusto), el orégano y el vino. Lo vertemos por la bandeja regando las verduras.\n5.Ponemos la bandeja al horno unos 10 minutos.\n6.Una vez metida la bandeja de las verduras en el horno nos disponemos a \"arreglar\" las lubinas así que cuando las compremos le decimos al pescadero que nos las arregle para horno, esto es, escamarlas y quitarles el interior.\n7.Les hacemos dos hendiduras transversales (hasta la raspa) y en oblicuo (se ve mejor presentado el limón) y salpimentamos con el molinillo.\n8.Transcurridos los 10 minutos abrimos el horno y extraemos la bandeja hacia fuera colocando las lubinas en ella.\n9.Cerramos el horno y lo dejamos unos 20 minutos o hasta que está a nuestro gusto (hay gente que les gusta más tostada). Y a disfrutar con un buen vino blanco. Buen provecho.",
      "Lubina al champán",
      "Se cuece el pescado al vapor 5 minutos",
      "Salsa(textura mayonesa)",
      "Un huevo entero y una yema, medio limón, sal , champán poco a poco, chorrito de aceite muy poco a poco alternando mientras se bate con varilla",
      "Se saca el pescado y se le quita la piel",
      "Se pone el pescado en una fuente",
      "Se pone por encima la salsa y se gratina fuerte hasta que tenga un ligero tono dorado."
    ],
    "tiempoNota": "Tiempo total estimado: 45 min. Elaboración (preparación y cocción): 45 min. Provisional; ficha pendiente de aclarar. Solo lubina al horno: el original ya indica 45 minutos, con 10 de verduras y 20 de pescado. Se excluye la lubina al champán mezclada."
  },
  {
    "id": "chirlas",
    "categoria": "pescado",
    "titulo": "Chirlas",
    "autor": "",
    "tiempo": "≈1 h 20 min",
    "dificultad": "Fácil",
    "imagen": "",
    "ingredientes": [
      "1Kg de chirlas (previamente puestas en remojo en agua con sal para que suelten la arena)",
      "4 o 5 dientes de ajo",
      "Un vaso de vino blanco",
      "Aceite"
    ],
    "pasos": [
      "Se ponen los ajos picados en el aceite caliente y justo antes de que se doren se añaden las chirla  con sal.",
      "Cuando se han abierto un poco se añade el vino y se dejan cocer hasta que se abren del todo y el vino se ha evaporado.."
    ],
    "tiempoNota": "Tiempo total estimado: 1 h 20 min. Elaboración (preparación y cocción): 20 min. Remojo, maceración, enfriado o reposo: 1 h. Picar ajo y abrir las chirlas con vino; una hora orientativa de remojo previo para desarenar, exigido sin duración por el original."
  },
  {
    "id": "empanadillas",
    "categoria": "otros",
    "titulo": "Empanadillas",
    "autor": "",
    "tiempo": "≈50 min",
    "dificultad": "Media",
    "imagen": "",
    "ingredientes": [
      "Un paquete de obleas “la cocinera” o similar, pueden ser grandes o pequeñas al gusto.",
      "Una o dos latas de atún",
      "Cebolla",
      "Tomate frito",
      "Pimiento morrón",
      "Aceitunas",
      "Huevo duro"
    ],
    "pasos": [
      "En una sartén se pone un poco de aceite, que la cubra.",
      "Se pica la cebolla y se pone blanda en ese aceite sin dejar que se dore.",
      "Se añade el tomate frito, unas tres o cuatro cucharadas y se sofrie todo un rato.",
      "Cuando esté listo (el aceite del tomate sube a la superficie), se aparta del fuego y se mezcla en un bol con el atún bien picadito.",
      "A esa mezcla le añadimos un huevo duro muy picado y pimiento rojo también muy troceado.",
      "En una superficie limpia y plana extendemos las obleas sin quitarles el papel que las protege aún para evitar que se resequen.",
      "Se pone una cucharada de la mezcla anterior en el centro de cada oblea y se doblan sobre sí mismas, cuidando que no se salga la masa.",
      "Con un tenedor vamos sellando cada oblea presionando los bordes con las púas del tenedor.",
      "Se pone bastante aceite a calentar en una sartén y se quita el papel protector y se van van friendo.",
      "Se pueden cocinar también en el horno precalentado a 180 grados durante unos 10 minutos, pintandolas previamente con una yema de huevo batida."
    ],
    "tiempoNota": "Tiempo total estimado: 50 min. Elaboración (preparación y cocción): 50 min. Sofrito, huevo duro preparado en paralelo, rellenar y sellar obleas compradas, freír por tandas; horno alternativo de 10 minutos."
  },
  {
    "id": "croquetas",
    "categoria": "otros",
    "titulo": "Croquetas",
    "autor": "",
    "tiempo": "≈3 h 30 min",
    "dificultad": "Media",
    "imagen": "",
    "ingredientes": [
      "750 grs de leche fría",
      "4 cucharadas de harina",
      "Media cebolla",
      "Jamón serrano, pollo sobrante de hacer una sopa…",
      "Aceite"
    ],
    "pasos": [
      "Se dora la cebolla y una vez dorada se echa el jamón. Se sofríe unos minutos.",
      "En una cacerola aparte se pone un poco de aceite y un trozo de mantequilla (esto es opcional).",
      "Se añade la harina y se sofrie un poco.",
      "Añadimos la leche poco a poco y vamos moviendo bien deshaciendo grumos. Si los grumos no se deshacen se bate la mezcla con la minipimer.",
      "Cuando esta mezcla esté trabada, se añaden la cebolla y el jamón y se remueve todo bien durante un buen rato.",
      "Cuando la masa se separe del fondo y de las paredes de la cacerola quiere decir que está lista.",
      "Se vierte todo en una fuente y se deja enfriar.",
      "Cuando la masa esté fría y sólida se van troceando y se pasan por huevo batido primero y luego por pan rallado.",
      "Se van friendo en aceite caliente."
    ],
    "tiempoNota": "Tiempo total estimado: 3 h 30 min. Elaboración (preparación y cocción): 1 h 30 min. Remojo, maceración, enfriado o reposo: 2 h. Bechamel con cebolla y jamón, formar, empanar y freír; se estima un mínimo orientativo de 2 horas de frío para dar cuerpo, ampliable según espesor."
  },
  {
    "id": "emparedados",
    "categoria": "otros",
    "titulo": "Emparedados",
    "autor": "",
    "tiempo": "≈25 min",
    "dificultad": "Fácil",
    "imagen": "",
    "ingredientes": [
      "Pan de molde sin corteza",
      "Jamón york",
      "Tranchetes",
      "Huevo",
      "Leche"
    ],
    "pasos": [
      "Se cogen varias rodajas de pan y se rellenan con jamón york y un tranchete.",
      "Se cortan por la mitad.",
      "En un plato se pone un poco de leche y se empapan los sándwiches en la leche.",
      "Se escurren bien y luego se pasan por huevo previamente batido en un plato.",
      "Mientras tanto se ha puesto bastante aceite en una sartén. Cuando esté caliente el aceite se van friendo los sandwiches.",
      "Se ponen en una fuente sobre papel de cocina para que absorba el aceite y se sirve con patatas fritas o ensalada."
    ],
    "tiempoNota": "Tiempo total estimado: 25 min. Elaboración (preparación y cocción): 25 min. Montaje con jamón y queso, baño de leche y huevo, escurrir y freír una tanda doméstica; patatas opcionales aparte."
  },
  {
    "id": "empanada",
    "categoria": "otros",
    "titulo": "Empanada",
    "autor": "",
    "tiempo": "≈1 h 40 min",
    "dificultad": "Media",
    "imagen": "",
    "ingredientes": [
      "2 láminas de hojaldre\n4 latas de atún de 80 gramos (de peso neto)(el peso escurrido es de 56 gramos)\n3 cebollas medianas\n1 pimiento rojo (de los gordos para asar)\n1 pimiento verde italiano (de los alargados para sofrito)\n2 tomates grandes maduros\n3 dientes de ajo\n1 cucharada pequeña de pimentón (del normal o dulce)\n1/2 vaso de aceite de girasol (unos 125 ml)\nSal y pimienta negra molida"
    ],
    "pasos": [
      "Pela la cebolla y trocéala. Limpia los pimientos y trocéalos. Pela los ajos y córtalos en rodajas. Pon en una sartén el aceite y añade todas la cebolla, los pimientos, el ajo y media cuchara pequeña con sal. Deja que se pochen todas las verduras a fuego medio",
      "Mientras se pochan las verduras pela los tomates, quítales las semillas y pícalos muy finos. Cuando las verduras estén en su punto añade el pimentón (opcional), remueve durante unos segundos y añade el tomate. Deja al fuego unos 5 minutos.",
      "Pon el atún a escurrir y cuando hayan pasado los 5 minutos lo añadimos al sofrito y removemos bien. Prueba de sal y si hace falta añade un poco más. Si te gusta puedes añadir una pizca de pimienta negra molida.",
      "Coloca un colador sobre un bol grande y vuelca sobre el colador el sofrito. Queremos separar el aceite (para pintar luego la empanada) y que el sofrito quede menos aceitoso.",
      "Deja que se enfríe el sofrito mientras escurre y luego espárcelo sobre una de las láminas de hojaldre dejando uno o dos centímetros libres por cada lado. Pon a calentar el horno a 200ºC (calor arriba y abajo).",
      "Luego coloca encima la otra lámina de hojaldre y cierra los bordes apretando bien. Pincela con el aceite del sofrito la superficie de la empanada y haz una chimenea (un agujero) en el centro de la empanada para que salga el vapor.",
      "Mete en el horno a 180ºC y deja durante 20 a 30 minutos o hasta que veas el hojaldre bien dorado (vigila de vez en cuando para evitar que se queme). Luego saca del horno, deja enfriar y tu empanada de atún está lista para comer."
    ],
    "tiempoNota": "Tiempo total estimado: 1 h 40 min. Elaboración (preparación y cocción): 1 h 20 min. Remojo, maceración, enfriado o reposo: 20 min. Picar y pochar verduras, escurrir, montar y hornear 20–30 minutos; enfriado breve del relleno y final estimado en 20 minutos."
  },
  {
    "id": "sandwich-club",
    "categoria": "otros",
    "titulo": "Sandwich Club",
    "autor": "",
    "tiempo": "≈25 min",
    "dificultad": "Fácil",
    "imagen": "",
    "ingredientes": [
      "Pan de molde (tres rebanadas por unidad)",
      "Lechuga",
      "Tomate",
      "Bacon",
      "Filetes de pechuga",
      "Mayonesa",
      "Queso en lonchas"
    ],
    "pasos": [
      "Se tuestan un poco las rebanadas y se untan con un poquito de mayonesa.",
      "Sobre una de las rebanadas de pone un poco de lechuga, varias rodajas de tomate, una loncha de queso y una de jamón york.",
      "Se cubre con otra rebanada y encima ponemos otro poco de mayonesa un filete de pechuga previamente frito a la plancha y una par de lonchas de bacon también fritas.",
      "Cubrimos con la tercera loncha y cortamos en cuatro triángulos.",
      "Servir con patatas fritas."
    ],
    "tiempoNota": "Tiempo total estimado: 25 min. Elaboración (preparación y cocción): 25 min. Tostar pan, planchar pollo y bacon y montar; no incluye las patatas fritas sugeridas para acompañar."
  },
  {
    "id": "paninis",
    "categoria": "otros",
    "titulo": "Paninis",
    "autor": "",
    "tiempo": "≈25 min",
    "dificultad": "Fácil",
    "imagen": "",
    "ingredientes": [
      "Pan de barra cortado como para bocadillo",
      "Tomate orlando",
      "Tranchetes o quesitos",
      "Jamón york o atún, bacon, salchichas…",
      "Queso para gratinar"
    ],
    "pasos": [
      "Se pone el horno a precalentar durante unos 10 minutos a unos 200 grados.",
      "Mientras tanto cortamos una barra de pan o baguette en varios trozos como para bocadillo dependiendo del número de comensales.",
      "Se abre cada trozo en dos mitades y se extiende tomate frito, una loncha de queso suave y encima ponemos lo que queramos: jamón york picado, atún, salchichas...y se cubre con queso rallado.",
      "Se mete en la bandeja del horno y se tiene ahí unos 10-15 minutos hasta que veamos que el queso esté dorado.",
      "Podemos servir acompañados de una ensalada."
    ],
    "tiempoNota": "Tiempo total estimado: 25 min. Elaboración (preparación y cocción): 25 min. Montar durante el precalentado de 10 minutos, más 10–15 minutos de gratinado indicados; masa de pan ya hecha."
  },
  {
    "id": "burritos",
    "categoria": "otros",
    "titulo": "Burritos",
    "autor": "",
    "tiempo": "≈35 min",
    "dificultad": "Fácil",
    "imagen": "",
    "ingredientes": [
      "Un paquete de burritos o tortas de maíz o trigo Old El Paso",
      "Una pechuga de pollo troceada",
      "Cebolla",
      "Pimiento verde y rojo",
      "Aceite y Sal",
      "Sazonador (viene en el burrito kit) o si se compra aparte.",
      "Lechuga",
      "Tomate",
      "Guacamole ( Mercadona tiene uno muy rico)"
    ],
    "pasos": [
      "Pelamos y cortamos la cebolla en juliana (en tiras finas).",
      "Cortamos el rabo y abrimos por la mitad cada pimiento eliminando las pepitas.",
      "Ponemos aceite cubriendo el fondo de una sartén y cuando esté un poco caliente el aceite ponemos a dorar la verdura.",
      "Mientras tanto cortamos la pechuga en tiras y le añadimos sal.",
      "Cuando la cebolla empiece a dorarse añadimos la pechuga y la sofreímos. Luego añadimos el sazonador. Poco a poco, vamos probando hasta que nos parezca.",
      "Lo tenemos unos minutos al fuego hasta que la carne esté hecha.",
      "Colocamos la mezcla en una fuente.",
      "Cortamos un poco de lechuga y ponemos en un bol, un tomate en troceado en otro platito o guacamole.",
      "Agujereamos un poco el plástico donde están los burritos y los metemos en el microondas un par de minutos siguiendo las instrucciones del envase.",
      "En cada burrito servimos un poco de la mezcla anterior, lechuga, tomate, guacamole… al gusto.",
      "Enrollamos bien y están listos para comer.",
      "Se puede cambiar el pollo por carne picada."
    ],
    "tiempoNota": "Tiempo total estimado: 35 min. Elaboración (preparación y cocción): 35 min. Verduras y pollo salteados, cortar lechuga y tomate en paralelo, calentar tortillas compradas y montar; guacamole ya preparado."
  },
  {
    "id": "kebab",
    "categoria": "otros",
    "titulo": "Kebab",
    "autor": "",
    "tiempo": "Por revisar",
    "dificultad": "Media",
    "imagen": "",
    "ingredientes": [
      "Una pechuga de pollo",
      "Ras al hanut",
      "Pan de pita",
      "Salsa de yogurt de mercadona"
    ],
    "pasos": [
      "Se unta la pechuga con un par de cucharaditas de ras al hanut y aceite previamente mezclados.",
      "Se deja macerando un par de horas",
      "Se precalienta el horno unos 20 minutos y se mete la pechuga unos 15 minutos a 250 grados arriba y abajo.",
      "Una vez pasado ese tiempo se apaga el horno y se deja dentro unas tres horas o toda la noche.",
      "E trincha en filetes muy finos y se trocea.",
      "Se pone en una sartén y se dora un poco. Añadimos el jugo que ha soltado el pollo en el horno.",
      "Se abre el pan de pita y se añade una base de salsa de yogur, lechuga, tomate, cebolla y el pollo. Se envuelve todo bien y a comer."
    ],
    "tiempoNota": "Tiempo pendiente de revisión: el original deja pollo en horno apagado 3 horas o toda la noche. No se publica como tiempo válido ni se avala ese procedimiento."
  },
  {
    "id": "quiche-de-jamon-y-queso",
    "categoria": "otros",
    "titulo": "Quiche de Jamón y Queso",
    "autor": "",
    "tiempo": "≈1 h",
    "dificultad": "Fácil",
    "imagen": "",
    "ingredientes": [
      "Pasta de hojaldre",
      "4 huevos",
      "Queso mozzarella 200 gramos",
      "Jamón York",
      "Leche ideal o nata"
    ],
    "pasos": [
      "Se precalienta el horno.",
      "Se cubre un molde redondo con el hojaldre y se cubre con una capa de queso, una de jamón york troceado y otra de queso.",
      "Se baten los huevos con medio bote de leche Ideal o nata y se vierte sobre la mezcla anterior.",
      "Se mete en el horno 200 grados arriba y abajo durante 40 minutos."
    ],
    "tiempoNota": "Tiempo total estimado: 1 h. Elaboración (preparación y cocción): 1 h. Hojaldre comprado, montar y batir, 40 minutos de horno expresos y precalentado en paralelo; breve templado incluido."
  },
  {
    "id": "bizcocho-de-clara",
    "categoria": "postres",
    "titulo": "Bizcocho",
    "autor": "de Clara",
    "tiempo": "≈1 h 30 min",
    "dificultad": "Fácil",
    "imagen": "",
    "ingredientes": [
      "3 huevos",
      "2 vasos de harina",
      "1 vaso de azúcar",
      "½ vaso de leche relleno con aceite",
      "Un sobre de levadura",
      "Raspadura de un limón"
    ],
    "pasos": [
      "Se pone el horno a precalentar a 250 grados.",
      "Se hace una mezcla con todos los ingredientes anteriores.",
      "Se unta  un molde con un poco de mantequilla y se vierte la mezcla anterior.",
      "Se mete en el horno y una vez que la mezcla ha subido se baja a 150 grados por arriba y por abajo unos 40 minutos controlando cada poco tiempo pinchando hasta comprobar que no está crudo.",
      "En último lugar se pone el grill un poco para que se dore un poquito."
    ],
    "tiempoNota": "Tiempo total estimado: 1 h 30 min. Elaboración (preparación y cocción): 1 h 10 min. Remojo, maceración, enfriado o reposo: 20 min. Mezclar, preparar molde, subida inicial de duración no indicada y 40 minutos a 150 °C con grill breve; enfriado orientativo antes de servir."
  },
  {
    "id": "flan-de-huevo",
    "categoria": "postres",
    "titulo": "Flan de Huevo",
    "autor": "",
    "tiempo": "≈4 h 45 min",
    "dificultad": "Media",
    "imagen": "",
    "ingredientes": [
      "1 yema de huevo",
      "½ litro de leche",
      "12 cucharadas de azúcar",
      "Cáscara de limón",
      "Un palo de canela"
    ],
    "pasos": [
      "Se hierve la leche con la canela y el limón.",
      "Se mezclan todos los ingredientes en un molde caramelizado.",
      "Se pone al baño maría en la olla express 12 minutos.",
      "Es preferible que el molde esté tapado",
      "*caramelizar el molde",
      "Se echa un poco de azúcar en el molde y se pone en el fuego o en el microondas, hasta que se vaya poniendo color caramelo."
    ],
    "tiempoNota": "Tiempo total estimado: 4 h 45 min. Elaboración (preparación y cocción): 45 min. Remojo, maceración, enfriado o reposo: 4 h. Provisional; ficha pendiente de aclarar. Caramelo, aromatizar leche, mezcla, 12 minutos de presión y despresurización; 4 horas orientativas de frío. Proporción de una sola yema pendiente de confirmar."
  }
];
