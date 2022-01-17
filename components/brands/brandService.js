const { models } = require('../../models');

exports.listBrands = () => {
    return models.brands.findAll({
        attributes: ['brand_name', 'brand_id','address'],
        order: [
            ['brand_id', 'ASC']
        ],
        raw: true
    });
}
exports.getBrand = (id) => {
    if (isNaN(id)){
        return false;
    }

    else {
        return models.brands.findOne({
            where: {
                brand_id: id
            },
            raw: true
        });
    }
}

exports.createBrand =(brand) => {
    return models.brands.create(brand)
}