const db = require('../db');

// Get all records
exports.getAllRecords = async (req, res) => {
    try {
        const [results] = await db.query('SELECT * FROM tb_ovh_tm ORDER BY date DESC');
        console.log(results);
        res.json(results);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
};

// Get a record by ID
exports.getRecordById = async (req, res) => {
    try {
        const { cn } = req.params;
        const [results] = await db.query('SELECT * FROM tb_ovh_tm WHERE cn = ? ORDER BY date DESC', [cn]);
        if (results.length === 0) {
            return res.status(404).send('Record not found');
        }
        res.json(results);
    } catch (err) {
        res.status(500).send('Server error');
    }
};

// Create a new record
exports.createRecord = async (req, res) => {
    try {
        const { cn, date, hourmeter, pic, lastUpdate } = req.body;
        const sql = 'INSERT INTO tb_ovh_tm (cn, date, hourmeter, pic, lastUpdate) VALUES (?, ?, ?, ?, ?)';
        const [result] = await db.query(sql, [cn, date, hourmeter, pic, lastUpdate]);
        res.status(201).send('Record inserted');
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
};

// Update an existing record
exports.updateRecord = async (req, res) => {
    try {
        const { cn } = req.params;
        const { date, hourmeter, pic, lastUpdate } = req.body;
        const sql = 'UPDATE tb_ovh_tm SET date = ?, hourmeter = ?, pic = ?, lastUpdate = ? WHERE cn = ?';
        const [result] = await db.query(sql, [date, hourmeter, pic, lastUpdate, cn]);
        if (result.affectedRows === 0) {
            return res.status(404).send('Record not found');
        }
        res.send('Record updated');
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
};

// Delete a record
exports.deleteRecord = async (req, res) => {
    try {
        const { cn } = req.params;
        const sql = 'DELETE FROM tb_ovh_tm WHERE cn = ?';
        const [result] = await db.query(sql, [cn]);
        if (result.affectedRows === 0) {
            return res.status(404).send('Record not found');
        }
        res.send('Record deleted');
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
};