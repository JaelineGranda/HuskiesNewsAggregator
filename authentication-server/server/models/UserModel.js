import mongoose from 'mongoose';

// creates new mongoose schema with properties for user authentication
const TodoSchema = new mongoose.Schema(
    {
        username: { type: String, 
                    unique: true, 
                    required: true 
                },
        hash: { type: String, 
                required: true 
            },
        firstName: { type: String, 
                    required: true 
                },
        lastName: { type: String, 
                    required: true 
                  },
        createdDate: { type: Date, 
                       default: Date.now 
                     }
    });

// converts schema to JSON
schema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
        delete ret.hash;
    }
});

module.exports = mongoose.model('User', schema);