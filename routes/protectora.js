const express = require("express");
const router = express.Router();

const db = require("../db");

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

module.exports = router;
