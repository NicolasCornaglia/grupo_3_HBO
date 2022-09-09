INSERT INTO deco_hogar.users(
      firstname,
      lastname,
      email,
      password,
      phone_number,
      city,
      gender,
      role,
      avatar,
      created_at,
      updated_at
   )
VALUES (
      "Gianfranco",
      "Bruno",
      "giani12345@gmail.com",
      "$2y$10$jZGT6Jav76bo8BiRgvSzYu6dPib.6DMFkshUA8pnrwN33n9fsJQHS",
      "3415555555",
      "Buenos Aires",
      "Hombre",
      "admin",
      "https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg",
      now(),
      now()
   ),
   (
      "Nicolas",
      "Cornaglia",
      "nicolascornaglia@hotmail.com",
      "$2y$10$jZGT6Jav76bo8BiRgvSzYu6dPib.6DMFkshUA8pnrwN33n9fsJQHS",
      "3492587649",
      "Rafaela",
      "Hombre",
      "admin",
      "https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg",
      now(),
      now()
   ),
   (
      "Santiago",
      "Gallo",
      "santi@gmail.com",
      "$2y$10$jZGT6Jav76bo8BiRgvSzYu6dPib.6DMFkshUA8pnrwN33n9fsJQHS",
      "3491231512",
      "Buenos Aires",
      "Hombre",
      "admin",
      "https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg",
      now(),
      now()
   );
   
INSERT INTO deco_hogar.categories(name, created_at, updated_at)
VALUES ("Mesa", now(), now()),
   ("Silla", now(), now()),
   ("Cama", now(), now()),
   ("Armario", now(), now()),
   ("Mesa de luz", now(), now()),
   ("Estanteria", now(), now()),
   ("Escritorio", now(), now()),
   ("Biblioteca", now(), now()),
   ("Accesorios", now(), now()),
   ("Placard", now(), now());

INSERT INTO deco_hogar.colors(name, created_at, updated_at)
VALUES ("Negro", now(), now()),
   ("Blanco", now(), now()),
   ("Ocre", now(), now()),
   ("Azul", now(), now()),
   ("Gris", now(), now()),
   ("Rojo", now(), now()),
   ("Caoba", now(), now());

INSERT INTO deco_hogar.materials(name, created_at, updated_at)
VALUES("Madera", now(), now()),
   ("Metal", now(), now()),
   ("Plastico", now(), now()),
   ("Vidrio", now(), now()),
   ("Marmol", now(), now()),
   ("Granito", now(), now());

INSERT INTO deco_hogar.products(
      name,
      description,
      price,
      image,
      dimensions,
      category_id,
      color_id,
      material_id,
      created_at,
      updated_at
   )
VALUES (
      "Mesa ratona",
      "Mesa ratona estilo moderno ideal para living",
      11000,
      "https://http2.mlstatic.com/D_NQ_NP_927106-MLA42726561076_072020-O.webp",
      "130 x 80 x 50",
      1,
      1,
      1,
      now(),
      now()
   ),
   (
      "Silla de patio",
      "Silla de plastico oscuro con una gran utilidad y comodidad en espacios tanto abiertos como cerrados, con una alta durabilidad",
      7000,
      "https://cordobamuebles.com/wp-content/uploads/2020/08/silla-valencia-negra-600x904.jpg",
      "82 x 41 x 41",
      2,
      2,
      3,
      now(),
      now()
   ),
   (
      "Placard Orlandi Bahía",
      "Placard Bahía 1.81 color caoba de madera con 6 puertas batientes",
      31499,
      "https://http2.mlstatic.com/D_NQ_NP_644896-MLA49830663306_052022-O.webp",
      "181 x 183.5 x 46",
      10,
      7,
      1,
      now(),
      now()
   ),
   (
      "Placard Mosconi Dakar",
      "Placard color blanco de madera con 4 puertas batientes",
      24385,
      "https://http2.mlstatic.com/D_NQ_NP_669667-MLA49421359508_032022-O.webp",
      "113 x 181 x 46",
      10,
      2,
      1,
      now(),
      now()
   ),
   (
      "Placard Moderno Vestidor",
      "Placard de madera color negro",
      28699,
      "https://http2.mlstatic.com/D_NQ_NP_713088-MLA44169136648_112020-O.webp",
      "100 x 180 x 47",
      10,
      1,
      1,
      now(),
      now()
   ),
   (
      "Armario Metalico",
      "Armario Metálico de Puertas Batientes, ideal para la guarda segura en hogares industrias y oficinas",
      90247,
      "https://http2.mlstatic.com/D_NQ_NP_876262-MLA49772428482_042022-O.webp",
      "185 x 90 x 45",
      4,
      5,
      2,
      now(),
      now()
   ),
   (
      "Armario Despensero",
      "Armario despensero de 4 estantes y 2 puertas color negro",
      15441,
      "https://http2.mlstatic.com/D_NQ_NP_639290-MLA44642894096_012021-O.webp",
      "180 x 60 x 30",
      4,
      1,
      1,
      now(),
      now()
   ),
   (
      "Cama Desmontable Pacifico Inmacol 201",
      "Cucheta desmontable pacifico color caoba",
      45999,
      "https://http2.mlstatic.com/D_NQ_NP_958698-MLA27557449715_062018-O.webp",
      "202 x 90 x 155",
      4,
      1,
      1,
      now(),
      now()
   ),
   (
      "Cama Base Box Sommier",
      "Base de cama sommier color negro",
      15576,
      "https://http2.mlstatic.com/D_NQ_NP_988242-MLA49904023168_052022-O.webp",
      "200 X 80 x 36",
      3,
      1,
      1,
      now(),
      now()
   ),
   (
      "Cama 2 plaza",
      "Cama De Hierro 2 Plaza Estilo Industrial C009",
      132000,
      "https://http2.mlstatic.com/D_NQ_NP_943648-MLA43757736889_102020-O.webp",
      "190 X 140 x 38",
      3,
      1,
      2,
      now(),
      now()
   ),
   (
      "Mesa de Luz Sajo",
      "Mesa de luz simple con cajón y puerta sin patas para tu habitación. Con un espacio especial para tus libros o cualquier cosa que desees",
      5263,
      "https://http2.mlstatic.com/D_NQ_NP_693173-MLA50329723355_062022-O.webp",
      "42 X 73 x 30",
      5,
      1,
      1,
      now(),
      now()
   ),
   (
      "Mesa De Luz Flotante",
      "Mesa De Luz Flotante decorada",
      11990,
      "https://http2.mlstatic.com/D_NQ_NP_611302-MLA48163648460_112021-O.webp",
      "43 X 23 x 29",
      5,
      2,
      1,
      now(),
      now()
   ),
   (
      "Mesa De Luz Mobilarg",
      "Mesa de Luz 1 Cajon 2 Estantes",
      9490,
      "https://http2.mlstatic.com/D_NQ_NP_905364-MLA49885989226_052022-O.webp",
      "45 X 70 x 36",
      5,
      7,
      1,
      now(),
      now()
   ),
   (
    "Mesa grande",
    "Mesa de superfice amplia y baja altura.",
    120000,
    "https://catalogus.planatoffice.nl/imager/main/23971/big-table-74-oak-master-pro-b-arcit18_64f6e35d19495ba333a10492f92f617a.jpg",
    "55x150x250",
    1,
    7,
    1,
    now(),
    now()
),
(
    "Estanteria",
    "Estanteria con estructura de metal y bases de madera. Cuatro pisos ideal para cualquier ambiente.",
    90000,
    "https://media.bahag.cloud/m/448530/12.jpg",
    "160x70x28",
    6,
    4,
    2,
    now(),
    now()
),
(
    "Escritorio",
    "Escritorio clasico ideal para computadora/estudio con multiples cajones.",
    450000,
    "https://target.scene7.com/is/image/Target/GUEST_b4c4b72c-e02b-4748-b54f-b4a6e9768890?wid=488&hei=488&fmt=pjpeg",
    "120x155x50",
    7,
    5,
    1,
    now(),
    now()
),
(
    "Biblioteca",
    "Bibliteca roja moderna para decorar y ordenar livings y dormitorios. Cuenta con cinco pisos.",
    220000,
    "https://www.soyhogar.com.uy/wp-content/uploads/sites/15/2020/01/ESMRO-1.jpg",
    "240x82x25",
    6,
    6,
    1,
    now(),
    now()
),
(
    "Fuente"
    "Fuente de marmol para decorar"
    2700000,
    "https://www.fongar.com/488-large_default/fuente-marmol-101.jpg"
    "133x35x35"
    9,
    3,
    5,
    now(),
    now()
),
(
   "Velador Moderno Artyluz",
   "Velador Moderno Acero para Dormitorio",
   8790,
   "https://http2.mlstatic.com/D_NQ_NP_801191-MLA47604508749_092021-O.webp",
   "18 X 40 x 18",
   9,
   1,
   2,
   now(),
   now()
);
