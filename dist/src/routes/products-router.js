"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsRouter = void 0;
const express_1 = __importDefault(require("express"));
const products_repository_1 = require("../repositories/products-repository");
const express_validator_1 = require("express-validator");
const input_validation_middleware_1 = require("../middlewares/input-validation-middleware");
exports.productsRouter = express_1.default.Router({});
const titleValidation = (0, express_validator_1.body)('title').trim().isLength({
    min: 4,
    max: 30
}).withMessage('title length should be from 3 to 10 symbols');
exports.productsRouter.get("/", (req, res) => {
    var _a;
    const foundProducts = products_repository_1.productsRepository.findProducts((_a = req.query.title) === null || _a === void 0 ? void 0 : _a.toString());
    res.status(200).send(foundProducts);
});
exports.productsRouter.get("/:id", (req, res) => {
    const foundProduct = products_repository_1.productsRepository.findProductById(+req.params.id);
    if (!foundProduct) {
        res.status(404);
    }
    else {
        res.send(foundProduct);
    }
});
exports.productsRouter.post("/", titleValidation, input_validation_middleware_1.inputValidationMiddleware, (req, res) => {
    const newProduct = products_repository_1.productsRepository.createProduct(req.body.title);
    return res.status(201).send(newProduct);
});
