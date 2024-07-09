import mongoose from 'mongoose';

const schema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, 'Please fill up the field'],
      unique: true, // Ensure email is unique
    },
    username: {
      type: String,
      required: function () {
        return this.provider !== 'google'; // Make username required only if provider is not Google
      },
    },
    password: {
      type: String,
      required: function () {
        return this.provider !== 'google'; // Make password required only if provider is not Google
      },
    },
    provider: {
      type: String,
      default: 'credentials', // Default provider is 'credentials'
    },
  },
  { timestamps: true }
);

const User = mongoose.models.users || mongoose.model('users', schema);
export default User;
