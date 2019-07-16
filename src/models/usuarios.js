const { Schema, model } = require('mongoose')
const { ObjectId } = Schema
const bcrypt = require('bcrypt')

const saltRounds = 10

const UsuarioSchema = new Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    nombre: { type: String, require: true},
    apellido: { type: String, require: true},
    creditos: { type: String, default: 2 },
    tipo: { type: String }, // "admin" o "usuario"
    tipo_suscripcion: {type: Boolean, default: false}, //true = premium , false = estandar
    timestamp: {type: String, default: Date.now}
})


UsuarioSchema.pre('save', function (next) {
    // Check if document is new or a new password has been set
    if (this.isNew || this.isModified('password')) {
        // Saving reference to this because of changing scopes
        const document = this;
        bcrypt.hash(document.password, saltRounds,
            function (err, hashedPassword) {
                if (err) {
                    next(err);
                }
                else {
                    document.password = hashedPassword;
                    next();
                }
            });
    } else {
        next();
    }
});

UsuarioSchema.methods.isCorrectPassword = function (password, callback) {
    bcrypt.compare(password, this.password, function (err, same) {
        if (err) {
            callback(err);
        } else {
            callback(err, same);
        }
    });
}

module.exports = model('Usuario', UsuarioSchema)