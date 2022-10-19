const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { dbconexion } = require("./database/configdb");

const bodyParser = require("body-parser");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;
    this.paths = {
      usuarios: "/api/usuarios",
      auth: "/api/auth",
      categories: "/api/categories",
      principal: "/api/principal",
      inscripcionesweb: "/api/inscripcionesweb",
      identificacion: "/api/identificacion",
      plataforma: "/api/plataforma",
      politicassst: "/api/politicassst",
      practicas: "/api/practicas",
      programas: "/api/programas",
      proposito: "/api/proposito",
      resena: "/api/resena",
      agropecuaria: "/api/agropecuaria",
      asistente: "/api/asistente",
      administrativo: "/api/administrativo",
      contable: "/api/contable",
      sistemas: "/api/sistemas",
      cortes: "/api/cortes",
      electricista: "/api/electricista",
      farmacia: "/api/farmacia",
      mantenimiento: "/api/mantenimiento",
      mecanica: "/api/mecanica",
      mercaderistas: "/api/mercaderistas",
      peluquero: "/api/peluquero",
      preescolar: "/api/preescolar",
      refrigeracion: "/api/refrigeracion",
      secretaria: "/api/secretaria",
      seguridad: "/api/seguridad",
      inscripciones: "/api/inscripciones",
      subirnotas: "/api/subirnotas",
      inscritos: "/api/inscritos",
      notas: "/api/notas",
      administracion: "/api/administracion",
      inscritosweb: "/api/inscritosweb",
    };

    //conexion a la base de datos
    this.conectardb();

    //midelwares de mi aplicacion
    this.midelwares();

    //rutas de mi aplicacion
    this.routes();
  }

  async conectardb() {
    await dbconexion();
  }

  //midelware
  midelwares() {
    //middleware de cors
    this.app.use(cors());

    // parse application/x-www-form-urlencoded
    this.app.use(bodyParser.urlencoded({ extended: false }));
    // parse application/json
    this.app.use(bodyParser.json());

    // Motor de plantilla
    this.app.set("view engine", "ejs");
    this.app.set("views", __dirname + "/views");

    //directorio publico
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.paths.auth, require("./routes/auth.router"));
    this.app.use(this.paths.usuarios, require("./routes/user.routes"));
    this.app.use(this.paths.categories, require("./routes/categories.router"));
    this.app.use(this.paths.principal, require("./routes/principal.router"));
    this.app.use(
      this.paths.inscripcionesweb,
      require("./routes/inscripcionesweb.router")
    );
    this.app.use(
      this.paths.identificacion,
      require("./routes/identificacion.router")
    );
    this.app.use(this.paths.plataforma, require("./routes/plataforma.router"));
    this.app.use(
      this.paths.politicassst,
      require("./routes/politicassst.router")
    );
    this.app.use(this.paths.practicas, require("./routes/practicas.router"));
    this.app.use(this.paths.programas, require("./routes/programas.router"));
    this.app.use(this.paths.proposito, require("./routes/proposito.router"));
    this.app.use(this.paths.resena, require("./routes/resena.router"));
    this.app.use(
      this.paths.agropecuaria,
      require("./routes/agropecuaria.router")
    );
    this.app.use(this.paths.asistente, require("./routes/asistente.router"));
    this.app.use(
      this.paths.administrativo,
      require("./routes/administrativo.router")
    );
    this.app.use(this.paths.contable, require("./routes/contable.router"));
    this.app.use(this.paths.sistemas, require("./routes/sistemas.router"));
    this.app.use(this.paths.cortes, require("./routes/cortes.router"));
    this.app.use(
      this.paths.electricista,
      require("./routes/electricista.router")
    );
    this.app.use(this.paths.farmacia, require("./routes/farmacia.router"));
    this.app.use(
      this.paths.mantenimiento,
      require("./routes/mantenimiento.router")
    );
    this.app.use(this.paths.mecanica, require("./routes/mecanica.router"));
    this.app.use(
      this.paths.mercaderistas,
      require("./routes/mercaderistas.router")
    );
    this.app.use(this.paths.peluquero, require("./routes/peluquero.router"));
    this.app.use(this.paths.preescolar, require("./routes/preescolar.router"));
    this.app.use(
      this.paths.refrigeracion,
      require("./routes/refrigeracion.router")
    );
    this.app.use(this.paths.secretaria, require("./routes/secretaria.router"));
    this.app.use(this.paths.seguridad, require("./routes/seguridad.router"));
    this.app.use(
      this.paths.inscripciones,
      require("./routes/inscripciones.router")
    );
    this.app.use(this.paths.subirnotas, require("./routes/subirnotas.router"));
    this.app.use(this.paths.inscritos, require("./routes/inscritos.router"));
    this.app.use(this.paths.notas, require("./routes/notas.router"));
    this.app.use(
      this.paths.administracion,
      require("./routes/adminstracion.router")
    );
    this.app.use(
      this.paths.inscritosweb,
      require("./routes/inscritosweb.router")
    );
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("servidor escuchando en el puerto: ", this.port);
    });
  }
}
module.exports = Server;
