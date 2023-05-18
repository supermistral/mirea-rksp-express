
class BaseService {
    constructor(model, idField = 'id') {
        this.model = model;
        this.idField = idField;
    }

    parseId(req) {
        if (this.model.tableAttributes[this.idField].type.constructor.key === "INTEGER") {
            return parseInt(req.params.id);
        }
        return req.params.id;
    }

    async getAll(req, res) {
        const result = await this.model.findAll();

        res.status(200).json(result);
    }

    async getById(req, res) {
        const id = this.parseId(req)
        const result = await this.model.findOne({ where: { [this.idField]: id } });

        if (result === null) {
            res.status(404).json({
                message: "Resource not found",
            });
            return;
        }

        res.status(200).json(result);
    }

    async create(req, res) {
        const body = req.body;
        const result = await this.model.create(body);

        res.status(201).json(result);
    }

    async updateById(req, res) {
        const id = this.parseId(req)
        const body = req.body;
        const result = await this.model.update(body, { where: { [this.idField]: id } });

        res.status(200).json(result);
    }

    async deleteById(req, res) {
        const id = this.parseId(req)
        const result = await this.model.destroy({ where: { [this.idField]: id } });

        res.status(200).json();
    }
}

export const wrapper = (service, method) => async (req, res) => await service[method](req, res);


export default BaseService;
