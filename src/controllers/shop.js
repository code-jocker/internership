import Shop from "../database/models/shop.js";

// get all shops
export const getAllShops = async (req, res) => {
    try {
        const allShops = await Shop.findAll();
        res.status(200).json(allShops);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// get single shop
export const getShop = async (req, res) => {
    try {
        const shop = await Shop.findByPk(req.params.id);
        if (!shop) {
            return res.status(404).json({ message: "Shop not found" });
        }
        res.status(200).json(shop);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// create shop
export const createShop = async (req, res) => {
    try {
        const shop = await Shop.create(req.body);
        res.status(201).json({ message: "Shop created successfully", shop });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// update shop
export const updateShop = async (req, res) => {
    try {
        const shop = await Shop.findByPk(req.params.id);
        if (!shop) {
            return res.status(404).json({ message: "Shop not found" });
        }
        await shop.update(req.body);
        res.status(200).json({ message: "Shop updated successfully", shop });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// delete shop
export const deleteShop = async (req, res) => {
    try {
        const shop = await Shop.findByPk(req.params.id);
        if (!shop) {
            return res.status(404).json({ message: "Shop not found" });
        }
        await shop.destroy();
        res.status(200).json({ message: "Shop deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

