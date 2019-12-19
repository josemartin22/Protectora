const express = require("express");
const router = express.Router();

const db = require("../db");
const auth = require("../authMiddleware");

router.post("/new", (req, res) => {
  const { name, type, gender, race, size, age, picture, protectora } = req.body;

  if (
    !name ||
    !type ||
    !gender ||
    !race ||
    !size ||
    !age ||
    !picture ||
    !protectora
  )
    return res.status(400).json({
      msg:
        "Protectora, Name, type, gender, race, size, age and picture are required fields"
    });

  db.select("*")
    .from("protectoras")
    .where({ email: protectora })
    .then(rows => {
      if (rows.length) {
        const { id } = rows[0];

        db.insert({
          protectora_id: id,
          nombre: name,
          tipo: type,
          sexo: gender,
          raza: race,
          tamanio: size,
          edad: age,
          foto: picture
        })
          .into("animales_acogidos")
          .then(() => {
            return res.send("Success");
          })
          .catch(err => {
            console.log(err);
            return res
              .status(500)
              .json({ msg: "No se pudo publicar este animal" });
          });
      } else return res.status(500).json({ msg: "Protectora not found" });
    });
});

router.get("/all", (req, res) => {
  db.select(
    {
      nombre_animal: "animales_acogidos.nombre",
      id_animal: "animales_acogidos.id"
    },
    "*"
  )
    .from("animales_acogidos")
    .innerJoin(
      "protectoras",
      "animales_acogidos.protectora_id",
      "protectoras.id"
    )
    .whereNotExists(function() {
      this.select("*")
        .from("adopta")
        .whereRaw("id_animal = animales_acogidos.id");
    })
    .then(rows => res.json(rows));
});

router.get("/allProtectoras", (req, res) => {
  db.select("*")
    .from("protectoras")
    .then(rows => res.send.json(rows));
});

router.delete("/delete/:id", auth, (req, res) => {
  const { id } = req.params;

  const { email } = req.payload;

  if (!id || !email)
    return res.status(401).json({ msg: "Id param and JWT payload required" });

  db.select("*")
    .from("protectoras")
    .where({ email })
    .then(rows => {
      if (rows.length == 0) return res.status(500);

      const protectora_id = rows[0].id;

      db.delete()
        .from("animales_acogidos")
        .where({ protectora_id, id })
        .then(n => {
          if (n) return res.json({ msg: "Success" });
          else return res.status(500);
        });
    });
});

router.post("/adopta/:id", auth, (req, res) => {
  const { id } = req.params;

  const { email } = req.payload;

  if (!id || !email)
    return res.status(401).json({ msg: "Id param and JWT payload required" });

  db.select("*")
    .from("clientes")
    .where({ email })
    .then(rows => {
      if (rows.length == 0) return res.status(500);
      const { dni } = rows[0];

      db.insert({ dni, definitiva: false, id_animal: id })
        .into("adopta")
        .then(n => {
          if (n == 0) return res.status(500);
          else return res.json({ msg: "Success" });
        });
    });
});

router.post("/modify/:id", auth, (req, res) => {
  const { id } = req.params;

  const { email } = req.payload;

  const { nombre, raza, tamanio, edad, foto } = req.body;

  if (!id || !email)
    return res.status(401).json({ msg: "Id param and JWT payload required" });

  db.select("*")
    .from("protectoras")
    .where({ email })
    .then(rows => {
      if (rows.length == 0) return res.status(500);
      const { id: protectora_id } = rows[0];
      db.update({ nombre, raza, tamanio, edad, foto })
        .from("animales_acogidos")
        .where({ id, protectora_id })
        .then(n => {
          if (n == 0) return res.status(500);
          else return res.send({ msg: "Success" });
        });
    });
});

module.exports = router;
