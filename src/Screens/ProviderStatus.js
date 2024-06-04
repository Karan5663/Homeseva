const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the ProviderStatus schema
const providerStatusSchema = new Schema({
    // Define your schema fields here
});

// Create the ProviderStatus model
const ProviderStatus = mongoose.model('ProviderStatus', providerStatusSchema);

module.exports = ProviderStatus