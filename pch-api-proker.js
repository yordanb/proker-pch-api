const express = require('express');
const app = express();
const port = 3030;

app.use(express.json());

// Import routes
const tbBleedPipeRoutes = require('./routes/tb_bleed_pipe');
const tbThermostatRoutes = require('./routes/tb_thermostat');
const tbReleaseBearingRoutes = require('./routes/tb_release_bearing');
const tbClutchRoutes = require('./routes/tb_clutch');
const tbFrontHubRoutes = require('./routes/tb_front_hub');
const tbRearHubRoutes = require('./routes/tb_rear_hub');
const tbOvhTMRoutes = require('./routes/tb_ovh_tm');
const tbOvhDF1Routes = require('./routes/tb_ovh_df1');
const tbOvhDF2Routes = require('./routes/tb_ovh_df2');
const tbOvhTimingGearRoutes = require('./routes/tb_ovh_timing_gear');
// Tambahkan route lainnya sesuai kebutuhan

// Use routes
app.use('/bleed-pipe', tbBleedPipeRoutes);
app.use('/thermostat', tbThermostatRoutes);
app.use('/release-bearing', tbReleaseBearingRoutes);
app.use('/clutch', tbClutchRoutes);
app.use('/front-hub', tbFrontHubRoutes);
app.use('/rear-hub', tbRearHubRoutes);
app.use('/ovh-tm', tbOvhTMRoutes);
app.use('/ovh-df1', tbOvhDF1Routes);
app.use('/ovh-df2', tbOvhDF2Routes);
app.use('/ovh-timing-gear', tbOvhTimingGearRoutes);

// Gunakan route lainnya sesuai kebutuhan

app.listen(port, () => {
    console.log(`Server PCH Proker running on port ${port}`);
});
