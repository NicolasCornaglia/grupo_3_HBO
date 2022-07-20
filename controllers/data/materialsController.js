let materialsData = JSON.parse(fs.readFileSync(path.join(__dirname, '../../DB/materials.json'), 'utf-8'));

const controller = {
    createMaterial: (req, res) => {
        /* TODO:  crear variable con id y valor de material y luego escribir el producto en materials.json con fs.writefilesync */
        materialsData.push(req.body);
        res.status(201).json(materials);

        res.send('Producto creado');
    },

}

module.exports = controller;
