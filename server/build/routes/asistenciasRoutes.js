"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const asistenciasController_1 = __importDefault(require("../controllers/asistenciasController"));
class AsistenciasRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', asistenciasController_1.default.list);
        this.router.get('/:id', asistenciasController_1.default.getOne);
        this.router.post('/', asistenciasController_1.default.create);
        this.router.put('/:id', asistenciasController_1.default.update);
        this.router.delete('/:id', asistenciasController_1.default.delete);
    }
}
const asistenciasRoutes = new AsistenciasRoutes();
exports.default = asistenciasRoutes.router;
