const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Porfavor añade un correo"],
  },
  password: {
    type: String,
    required: [true, "Porfavor añade un correo"],
  },
},
{
    timestamps: true
}
);

const Task = mongoose.model("Usuario", userSchema);

module.exports = User;
