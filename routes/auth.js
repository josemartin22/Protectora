const router = require("express").Router();
const db = require("../db");
const jwt = require("jsonwebtoken");

/* Requires dni, name, email, address, password and phone number 
    in JSON body
*/
router.post("/register/user", (req, res) => {
  const { dni, name, email, address, password, phone } = req.body;

  if (!dni || !name || !email || !address || !password || !phone)
    return res.status(400).json({
      msg:
        "dni, name, email, address, password and phone are required as JSON fields"
    });

  db.insert({
    nombre: name.toLowerCase(),
    email: email.toLowerCase(),
    dni: dni.toLowerCase(),
    direccion: address.toLowerCase(),
    contrasenia: db.raw(`crypt('${password}', gen_salt('bf'))`),
    telefono: phone
  })
    .into("clientes")
    .then(() => res.json({ msg: "Success" }))
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: err });
    });
});

router.post("/login/user", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).json({ msg: "Email and password required" });

  db.select("*")
    .from("clientes")
    .where({
      email,
      contrasenia: db.raw(`crypt('${password}', contrasenia)`)
    })
    .then(rows => {
      if (rows.length) {
        const token = jwt.sign(
          { email: rows[0].email },
          process.env.JWT_SECRET,
          {
            expiresIn: "6h"
          }
        );
        res.json({ token });
      } else res.status(400).json({ msg: "Incorrect email or password" });
    })
    .catch(() => res.status(400).json({ msg: "Incorrect email or password" }));
});

/* Requires name, email, address, password and phone number 
    in JSON body
*/
router.post("/register/protectora", (req, res) => {
  const { name, email, address, password, phone } = req.body;

  if (!name || !email || !address || !password || !phone)
    return res.status(400).json({
      msg:
        "name, email, address, password and phone are required as JSON fields"
    });

  db.insert({
    nombre: name.toLowerCase(),
    email: email.toLowerCase(),
    direccion: address.toLowerCase(),
    contrasenia: db.raw(`crypt('${password}', gen_salt('bf'))`),
    telefono: phone
  })
    .into("protectoras")
    .then(() => res.json({ msg: "Success" }))
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: err });
    });
});

router.post("/login/protectora", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).json({ msg: "Email and password required" });

  db.select("*")
    .from("protectoras")
    .where({
      email,
      contrasenia: db.raw(`crypt('${password}', contrasenia)`)
    })
    .then(rows => {
      if (rows.length) {
        const token = jwt.sign(
          { email: rows[0].email },
          process.env.JWT_SECRET,
          {
            expiresIn: "6h"
          }
        );
        res.json({ token });
      } else res.status(400).json({ msg: "Incorrect email or password" });
    })
    .catch(() => res.status(400).json({ msg: "Incorrect email or password" }));
});

module.exports = router;
