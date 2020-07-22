const router = require("express").Router();
const listRoutes = require("./listings");
const realtorRoutes = require("./realtor");


router.use("/listings", listRoutes);


router.use("/realtor", realtorRoutes);



//matching route from axios

//router.route("name/of/route").post(listingcontroller.findall)

module.exports = router;
