import Product from "../database/models/product.js";

// get all products
export const getAllProducts = async (req, res) => {
    try {
        const allProducts = await Product.findAll();
        res.status(200).json(allProducts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// get single product
export const getProduct = async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// create product
export const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json({ message: "Product created successfully", product });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// update product
export const updateProduct = async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        await product.update(req.body);
        res.status(200).json({ message: "Product updated successfully", product });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// delete product
export const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        await product.destroy();
        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

