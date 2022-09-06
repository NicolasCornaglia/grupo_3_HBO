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
   ("Accesorios", now(), now());

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
   );