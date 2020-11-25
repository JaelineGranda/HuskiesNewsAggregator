import mongoose from 'mongoose';

// creates new mongoose schema with properties for todo items
const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true
        },
        email: {
            type: String
        },
        password: {
            type: String
        },
        roles: [
            {
              type: mongoose.Schema.Types.ObjectId,
              ref: "Role"
            }
        ]
    },
    {
        versionKey: false
    }
);

TodoSchema.virtual('id').get(function() {
    return this._id.toHexString();
});

// converts schema to JSON
TodoSchema.set('toJSON', { virtuals: true});

const User = mongoose.model('User', UserSchema);

export default User;