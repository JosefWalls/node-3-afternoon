module.exports = {
    create: (req, res, next) => {
        const dbInstance = req.app.get("db");
        const {name, description, price, image_url} = req.body;

        dbInstance.create_product(name, description, price, image_url)
        .then(() => res.sendStatus(200))
        .catch(error => {
            console.log(error)
            res.status(500).send({errorMessage: "error"})
        });
    },
    getOne: (req, res, next) => {
        const dbInstance = req.app.get("db");
        const {id} = req.params;

        dbInstance.read_product( id )
        .then( (product) => res.status(200).json(product))
        .catch(error => {
            res.status(500).send({errorMessage: " Get one No work"})
            console.log(error)
        })
    },
    getAll: (req, res, next) => {
        const dbInstance = req.app.get("db");
        dbInstance.read_products()
        .then( (products) => res.sendStatus(200).json(products))
        .catch(error => {
            res.status(500).send({errorMessage: "Get all No work"})
            console.log(error)
        })
    },
    update: (req, res, next) => {
        const dbInstance = req.app.get("db");
        const {params, query} = req;

        dbInstance.update_product( params.id, query.desc)
        .then(() => res.sendStatus(200))
        .catch(error => {
            res.status(500).send({errorMessage: "update No work"})
            console.log(error)
        })
    },
    delete: (req, res, next) => {
        const dbInstance = req.app.get("db;");
        const {params} = req;

        dbInstance.delete_product( params.id )
        .then(() =>  res.sendStatus(200))
        .catch(error => {
            res.status(500).send({errorMessage: "delete No work"})
            console.log(error)
        })
    }
}