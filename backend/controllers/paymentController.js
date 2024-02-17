const { instance } = require("../razorpay");

const checkout = async (req, res) => {
    const { price } = req.body; // Assuming req.body is { price: 100 }
    const options = {
        amount: price * 100,  // amount in the smallest currency unit
        currency: "INR",
        // receipt: "order_rcptid_11"
    };

    try {
        const order = await instance.orders.create(options);
        console.log(order);
        res.status(200).json({
            success: true,
            order,
        });
    } catch (error) {
        console.error("Error creating order:", error);
        res.status(500).json({
            success: false,
            error: "Failed to create order",
        });
    }
};

module.exports = checkout;
