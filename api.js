const { Router } = require("express");
const event = require("./route/event.api"); // роут событие города
const crime = require("./route/crime.api"); // роут преступления
const users = require("./route/users.api"); // роут пользователей
const service = require("./route/service.api"); // роут сервисов
const culture = require("./route/culture.api");
const directory_organizations = require("./route/directory_organizations.api"); // роут справочные организации
const law_enforcement = require("./route/law_enforcement.api");
const educational_institutions = require("./route/educational_institutions.api");
const transport = require("./route/transport.api");
const fire_stations = require("./route/fire_stations.api");
const healthcare_facilities = require("./route/healthcare_facilities.api");
const bank = require("./route/bank.api");
const busTransport = require("./route/busTransport.api");
const router = Router();
router.use("/bank", bank);
router.use("/event", event); // api событий города
router.use("/crime", crime); // api криминала
router.use("/users", users); // api пользователя
router.use("/busTransport", busTransport);
router.use("/culture", culture); // api культура кинотеатры и тд
router.use("/fire_stations", fire_stations); //api пожарных странций
router.use("/service", service); //api Услуги
router.use("/transport", transport); // api страспорт
router.use("/healthcare_facilities", healthcare_facilities);
router.use("/educational_institutions", educational_institutions);
router.use("/law_enforcement", law_enforcement); //Правоохранительные органы
router.use("/directory_organizations", directory_organizations); //api справочные организации
module.exports = router;
